import { LitElement, html } from 'lit';

export class AppCollapsible extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    open: { type: Boolean },
    label: { type: String },
  };

  constructor() {
    super();
    this.open = false;
    this.label = '';
    this._userNodes = null;
  }

  connectedCallback() {
    if (this._userNodes === null) {
      this._userNodes = [];
      while (this.firstChild) {
        this._userNodes.push(this.removeChild(this.firstChild));
      }
    }
    super.connectedCallback();
  }

  updated() {
    if (this._userNodes?.length) {
      const el = this.querySelector('[data-collapsible-content]');
      if (el) {
        this._userNodes.forEach(n => el.appendChild(n));
        this._userNodes = [];
      }
    }
  }

  _toggle() {
    this.open = !this.open;
    this.dispatchEvent(new CustomEvent('app-toggle', {
      detail: { open: this.open },
      bubbles: true, composed: true,
    }));
  }

  render() {
    const chevron = html`<app-icon name="chevron-down" class="w-4 h-4 transition-transform ${this.open ? 'rotate-180' : ''}"></app-icon>`;

    return html`
      <div class="rounded-lg" style="border: 1px solid var(--border)">
        <button
          @click="${this._toggle}"
          class="flex w-full items-center justify-between px-4 py-3 text-sm font-medium cursor-pointer transition-colors"
          style="color: var(--fg); background: transparent;"
          @mouseenter=${(e) => e.currentTarget.style.background = 'var(--bg-muted)'}
          @mouseleave=${(e) => e.currentTarget.style.background = 'transparent'}
        >
          <span>${this.label}</span>
          ${chevron}
        </button>
        ${this.open ? html`
          <div class="px-4 pb-4 text-sm" style="color: var(--fg-muted); border-top: 1px solid var(--border);">
            <div class="pt-3" data-collapsible-content></div>
          </div>
        ` : ''}
      </div>
    `;
  }
}

customElements.define('app-collapsible', AppCollapsible);

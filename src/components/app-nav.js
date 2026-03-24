import { LitElement, html } from 'lit';

export class AppNav extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    brand: { type: String },
    items: { type: Array },
    active: { type: String },
  };

  constructor() {
    super();
    this.brand = '';
    this.items = [];
    this.active = '';
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
      const el = this.querySelector('[data-nav-actions]');
      if (el) {
        this._userNodes.forEach(n => el.appendChild(n));
        this._userNodes = [];
      }
    }
  }

  _parseItems() {
    if (typeof this.items === 'string') {
      try { return JSON.parse(this.items); }
      catch { return []; }
    }
    return this.items || [];
  }

  _select(item) {
    this.active = item.id || item.label;
    this.dispatchEvent(new CustomEvent('app-change', {
      detail: { value: this.active, item },
      bubbles: true,
      composed: true,
    }));
  }

  _getLinkStyle(isActive) {
    if (isActive) {
      return 'color: var(--fg); font-weight: 500;';
    }
    return 'color: var(--fg-muted);';
  }

  render() {
    const items = this._parseItems();

    return html`
      <nav
        class="flex items-center h-14 px-6"
        style="border-bottom: 1px solid var(--border); background: var(--bg-card);"
      >
        ${this.brand ? html`
          <span class="text-sm font-bold mr-8" style="color: var(--fg)">
            ${this.brand}
          </span>
        ` : ''}

        <div class="flex items-center gap-6 flex-1">
          ${items.map(item => {
            const id = item.id || item.label;
            const isActive = id === this.active;
            return html`
              <button
                class="text-sm cursor-pointer transition-colors"
                style="${this._getLinkStyle(isActive)} background: none; border: none; padding: 0;"
                @mouseenter=${(e) => { if (!isActive) e.currentTarget.style.color = 'var(--fg)'; }}
                @mouseleave=${(e) => { if (!isActive) e.currentTarget.style.color = 'var(--fg-muted)'; }}
                @click=${() => this._select(item)}
              >
                ${item.label}
              </button>
            `;
          })}
        </div>

        <div class="flex items-center gap-2" data-nav-actions></div>
      </nav>
    `;
  }
}

customElements.define('app-nav', AppNav);

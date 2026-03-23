import { LitElement, html } from 'lit';

export class AppAlert extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    variant: { type: String },
    alertTitle: { type: String },
  };

  constructor() {
    super();
    this.variant = 'default';
    this.alertTitle = '';
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
      const el = this.querySelector('[data-alert-content]');
      if (el) {
        this._userNodes.forEach(n => el.appendChild(n));
        this._userNodes = [];
      }
    }
  }

  get _icon() {
    if (this.variant === 'destructive') {
      return html`<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
    }
    return html`<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`;
  }

  render() {
    const style = this.variant === 'destructive'
      ? 'border-color: rgb(220 38 38 / 0.5); color: var(--destructive);'
      : `border-color: var(--border); color: var(--fg);`;

    return html`
      <div class="relative w-full rounded-lg border p-4" style="${style}" role="alert">
        <div class="flex gap-3">
          ${this._icon}
          <div class="flex-1">
            ${this.alertTitle ? html`<h5 class="mb-1 font-medium leading-none tracking-tight">${this.alertTitle}</h5>` : ''}
            <div class="text-sm opacity-80" data-alert-content></div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('app-alert', AppAlert);

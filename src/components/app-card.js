import { LitElement, html } from 'lit';

export class AppCard extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    cardTitle: { type: String },
    description: { type: String },
    spacing: { type: String },
  };

  constructor() {
    super();
    this.cardTitle = '';
    this.description = '';
    this.spacing = '';
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
      const el = this.querySelector('[data-card-content]');
      if (el) {
        this._userNodes.forEach(n => el.appendChild(n));
        this._userNodes = [];
      }
    }
  }

  render() {
    return html`
      <div class="rounded-lg shadow-sm" style="border: 1px solid var(--border); background: var(--bg-card); color: var(--fg)">
        ${this.cardTitle || this.description ? html`
          <div class="flex flex-col space-y-1.5 p-6">
            ${this.cardTitle ? html`<h3 class="text-2xl font-semibold leading-none tracking-tight">${this.cardTitle}</h3>` : ''}
            ${this.description ? html`<p class="text-sm" style="color: var(--fg-muted)">${this.description}</p>` : ''}
          </div>
        ` : ''}
        <div class="${this.cardTitle || this.description ? 'p-6 pt-0' : 'p-6'}${this.spacing ? ' space-y-' + this.spacing : ''}" data-card-content></div>
      </div>
    `;
  }
}

customElements.define('app-card', AppCard);

import { LitElement, html } from 'lit';

export class AppPageContent extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    heading: { type: String },
    description: { type: String },
  };

  constructor() {
    super();
    this.heading = '';
    this.description = '';
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
      const el = this.querySelector('[data-page-body]');
      if (el) {
        this._userNodes.forEach(n => el.appendChild(n));
        this._userNodes = [];
      }
    }
  }

  render() {
    return html`
      <div style="padding: 2rem; height: 100%; overflow: auto; color: var(--fg);">
        ${this.heading ? html`
          <h1 class="text-2xl font-bold tracking-tight" style="color: var(--fg-heading); margin: 0 0 0.5rem;">${this.heading}</h1>
        ` : ''}
        ${this.description ? html`
          <p class="text-sm" style="color: var(--fg-muted); line-height: 1.6; margin: 0 0 1.5rem;">${this.description}</p>
        ` : ''}
        <div data-page-body></div>
      </div>
    `;
  }
}

customElements.define('app-page-content', AppPageContent);

import { LitElement, html } from 'lit';

export class AppCardContent extends LitElement {
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
      const el = this.querySelector('[data-card-body]');
      if (el) {
        this._userNodes.forEach(n => el.appendChild(n));
        this._userNodes = [];
      }
    }
  }

  render() {
    return html`
      <div style="display: flex; flex-direction: column; align-items: center; text-align: center; gap: 0.5rem;">
        ${this.heading ? html`
          <h2 class="text-lg font-semibold" style="color: var(--fg-heading); margin: 0;">${this.heading}</h2>
        ` : ''}
        ${this.description ? html`
          <p class="text-sm" style="color: var(--fg-muted); margin: 0; line-height: 1.5;">${this.description}</p>
        ` : ''}
        <div data-card-body style="margin-top: 0.5rem; width: 100;"></div>
      </div>
    `;
  }
}

customElements.define('app-card-content', AppCardContent);

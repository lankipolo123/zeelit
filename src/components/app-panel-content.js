import { LitElement, html } from 'lit';

export class AppPanelContent extends LitElement {
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
      const el = this.querySelector('[data-panel-body]');
      if (el) {
        this._userNodes.forEach(n => el.appendChild(n));
        this._userNodes = [];
      }
    }
  }

  render() {
    return html`
      <div style="display: flex; flex-direction: column; padding: 2rem; height: 100%;">
        ${this.heading ? html`
          <h2 class="text-lg font-semibold" style="color: var(--fg-heading); margin: 0 0 0.5rem;">${this.heading}</h2>
        ` : ''}
        ${this.description ? html`
          <p class="text-sm" style="color: var(--fg-muted); margin: 0 0 1rem; line-height: 1.5;">${this.description}</p>
        ` : ''}
        <div data-panel-body></div>
      </div>
    `;
  }
}

customElements.define('app-panel-content', AppPanelContent);

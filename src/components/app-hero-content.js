import { LitElement, html } from 'lit';

export class AppHeroContent extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    heading: { type: String },
    description: { type: String },
    action: { type: String },
  };

  constructor() {
    super();
    this.heading = '';
    this.description = '';
    this.action = '';
  }

  _handleClick() {
    this.dispatchEvent(new CustomEvent('app-action', {
      bubbles: true,
      composed: true,
    }));
  }

  render() {
    return html`
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 4rem 2rem; height: 100%;">
        ${this.heading ? html`
          <h1 class="text-4xl font-bold tracking-tight" style="color: var(--fg-heading); margin: 0 0 1rem;">${this.heading}</h1>
        ` : ''}
        ${this.description ? html`
          <p class="text-lg" style="color: var(--fg-muted); margin: 0 0 2rem; max-width: 36rem; line-height: 1.6;">${this.description}</p>
        ` : ''}
        ${this.action ? html`
          <button
            class="text-sm font-medium px-6 py-2.5 rounded-lg cursor-pointer"
            style="background: var(--primary); color: var(--primary-fg); border: none;"
            @mouseenter=${(e) => { e.currentTarget.style.opacity = '0.9'; }}
            @mouseleave=${(e) => { e.currentTarget.style.opacity = '1'; }}
            @click=${this._handleClick}
          >${this.action}</button>
        ` : ''}
      </div>
    `;
  }
}

customElements.define('app-hero-content', AppHeroContent);

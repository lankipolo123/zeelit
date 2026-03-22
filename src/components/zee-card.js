import { LitElement, html } from 'lit';

export class ZeeCard extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    cardTitle: { type: String },
    description: { type: String },
  };

  constructor() {
    super();
    this.cardTitle = '';
    this.description = '';
  }

  render() {
    return html`
      <div class="rounded-lg border border-zinc-800 bg-zinc-950 text-zinc-100 shadow-sm">
        ${this.cardTitle || this.description ? html`
          <div class="flex flex-col space-y-1.5 p-6">
            ${this.cardTitle ? html`<h3 class="text-2xl font-semibold leading-none tracking-tight">${this.cardTitle}</h3>` : ''}
            ${this.description ? html`<p class="text-sm text-zinc-400">${this.description}</p>` : ''}
          </div>
        ` : ''}
        <div class="p-6 pt-0">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

customElements.define('zee-card', ZeeCard);

import { LitElement, html } from 'lit';

export class AppSeparator extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    orientation: { type: String },
  };

  constructor() {
    super();
    this.orientation = 'horizontal';
  }

  render() {
    const classes = this.orientation === 'vertical'
      ? 'h-full w-px bg-zinc-800'
      : 'h-px w-full bg-zinc-800';
    return html`<div class="${classes}" role="separator"></div>`;
  }
}

customElements.define('app-separator', AppSeparator);

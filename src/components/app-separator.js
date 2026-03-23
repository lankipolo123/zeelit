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
      ? 'h-full w-px'
      : 'h-px w-full';
    return html`<div class="${classes}" style="background: var(--border)" role="separator"></div>`;
  }
}

customElements.define('app-separator', AppSeparator);

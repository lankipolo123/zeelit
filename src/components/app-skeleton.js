import { LitElement, html, css } from 'lit';

export class AppSkeleton extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    width: { type: String },
    height: { type: String },
    rounded: { type: String },
  };

  constructor() {
    super();
    this.width = '100%';
    this.height = '1rem';
    this.rounded = 'rounded-md';
  }

  render() {
    return html`
      <div
        class="animate-pulse ${this.rounded}"
        style="width: ${this.width}; height: ${this.height}; background: var(--skeleton);"
      ></div>
    `;
  }
}

customElements.define('app-skeleton', AppSkeleton);

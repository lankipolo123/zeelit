import { LitElement, html, css } from 'lit';

export class ZeeSkeleton extends LitElement {
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
        class="animate-pulse bg-zinc-800 ${this.rounded}"
        style="width: ${this.width}; height: ${this.height};"
      ></div>
    `;
  }
}

customElements.define('zee-skeleton', ZeeSkeleton);

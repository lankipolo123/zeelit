import { LitElement, html } from 'lit';

export class AppScrollArea extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    height: { type: String },
    orientation: { type: String },
  };

  constructor() {
    super();
    this.height = '200px';
    this.orientation = 'vertical';
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
      const el = this.querySelector('[data-scroll-content]');
      if (el) {
        this._userNodes.forEach(n => el.appendChild(n));
        this._userNodes = [];
      }
    }
  }

  render() {
    const isHorizontal = this.orientation === 'horizontal';
    const overflowStyle = isHorizontal
      ? 'overflow-x: auto; overflow-y: hidden; white-space: nowrap;'
      : 'overflow-y: auto; overflow-x: hidden;';

    return html`
      <div
        class="rounded-md scroll-area"
        style="height: ${this.height}; ${overflowStyle} border: 1px solid var(--border); scrollbar-width: thin; scrollbar-color: var(--fg-subtle) transparent;"
      >
        <div data-scroll-content class="${isHorizontal ? 'inline-flex gap-4 p-4' : 'p-4'}"></div>
      </div>
    `;
  }
}

customElements.define('app-scroll-area', AppScrollArea);

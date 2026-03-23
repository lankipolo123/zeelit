import { LitElement, html } from 'lit';

export class AppBadge extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    variant: { type: String },
  };

  constructor() {
    super();
    this.variant = 'default';
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
      const el = this.querySelector('[data-badge]');
      if (el) {
        this._userNodes.forEach(n => el.appendChild(n));
        this._userNodes = [];
      }
    }
  }

  get _style() {
    const variants = {
      default: `background: var(--primary); color: var(--primary-fg);`,
      secondary: `background: var(--secondary); color: var(--secondary-fg);`,
      destructive: `background: var(--destructive); color: var(--destructive-fg);`,
      outline: `background: transparent; color: var(--fg); border: 1px solid var(--input);`,
    };
    return variants[this.variant] || variants.default;
  }

  render() {
    return html`<div class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors" style="${this._style}" data-badge></div>`;
  }
}

customElements.define('app-badge', AppBadge);

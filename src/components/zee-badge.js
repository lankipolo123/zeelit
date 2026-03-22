import { LitElement, html } from 'lit';

export class ZeeBadge extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    variant: { type: String },
  };

  constructor() {
    super();
    this.variant = 'default';
  }

  get _classes() {
    const base = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors';
    const variants = {
      default: 'bg-white text-zinc-900',
      secondary: 'bg-zinc-800 text-zinc-100',
      destructive: 'bg-red-600 text-white',
      outline: 'border border-zinc-700 text-zinc-100',
    };
    return `${base} ${variants[this.variant] || variants.default}`;
  }

  render() {
    return html`<div class="${this._classes}"><slot></slot></div>`;
  }
}

customElements.define('zee-badge', ZeeBadge);

import { LitElement, html } from 'lit';

export class ZeeButton extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    variant: { type: String },
    size: { type: String },
    disabled: { type: Boolean },
  };

  constructor() {
    super();
    this.variant = 'default';
    this.size = 'default';
    this.disabled = false;
  }

  get _classes() {
    const base = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-950 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

    const variants = {
      default: 'bg-white text-zinc-900 hover:bg-zinc-200',
      destructive: 'bg-red-600 text-white hover:bg-red-700',
      outline: 'border border-zinc-700 text-zinc-100 hover:bg-zinc-800 hover:text-zinc-100',
      secondary: 'bg-zinc-800 text-zinc-100 hover:bg-zinc-700',
      ghost: 'text-zinc-100 hover:bg-zinc-800 hover:text-zinc-100',
      link: 'text-zinc-100 underline-offset-4 hover:underline',
    };

    const sizes = {
      default: 'h-10 px-4 py-2 text-sm',
      sm: 'h-9 px-3 text-xs',
      lg: 'h-11 px-8 text-base',
      icon: 'h-10 w-10',
    };

    return `${base} ${variants[this.variant] || variants.default} ${sizes[this.size] || sizes.default}`;
  }

  render() {
    return html`
      <button class="${this._classes}" ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `;
  }
}

customElements.define('zee-button', ZeeButton);

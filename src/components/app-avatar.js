import { LitElement, html } from 'lit';

export class AppAvatar extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    src: { type: String },
    alt: { type: String },
    fallback: { type: String },
    size: { type: String },
  };

  constructor() {
    super();
    this.src = '';
    this.alt = '';
    this.fallback = '';
    this.size = 'default';
  }

  get _sizeClasses() {
    const sizes = {
      sm: 'h-8 w-8 text-xs',
      default: 'h-10 w-10 text-sm',
      lg: 'h-14 w-14 text-lg',
    };
    return sizes[this.size] || sizes.default;
  }

  render() {
    const base = `relative inline-flex items-center justify-center rounded-full overflow-hidden bg-zinc-800 text-zinc-400 ${this._sizeClasses}`;

    if (this.src) {
      return html`
        <span class="${base}">
          <img
            class="h-full w-full object-cover"
            src="${this.src}"
            alt="${this.alt}"
          />
        </span>
      `;
    }

    return html`
      <span class="${base}">
        <span class="font-medium">${this.fallback}</span>
      </span>
    `;
  }
}

customElements.define('app-avatar', AppAvatar);

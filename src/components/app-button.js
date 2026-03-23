import { LitElement, html } from 'lit';

export class AppButton extends LitElement {
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
    this._userNodes = null;
  }

  connectedCallback() {
    // Capture children BEFORE Lit renders over them
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
      const btn = this.querySelector('button');
      if (btn) {
        this._userNodes.forEach(n => btn.appendChild(n));
        this._userNodes = [];
      }
    }
  }

  get _variantStyle() {
    const variants = {
      default: 'background: var(--primary); color: var(--primary-fg);',
      destructive: 'background: var(--destructive); color: var(--destructive-fg);',
      outline: 'background: transparent; color: var(--fg); border: 1px solid var(--input);',
      secondary: 'background: var(--secondary); color: var(--secondary-fg);',
      ghost: 'background: transparent; color: var(--fg);',
      link: 'background: transparent; color: var(--fg);',
    };
    return variants[this.variant] || variants.default;
  }

  get _classes() {
    const base = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

    const variants = {
      default: '',
      destructive: '',
      outline: '',
      secondary: '',
      ghost: '',
      link: 'underline-offset-4 hover:underline',
    };

    const sizes = {
      default: 'h-10 px-4 py-2 text-sm',
      sm: 'h-9 px-3 text-xs',
      lg: 'h-11 px-8 text-base',
      icon: 'h-10 w-10',
    };

    return `${base} ${variants[this.variant] || ''} ${sizes[this.size] || sizes.default}`;
  }

  render() {
    return html`
      <button class="${this._classes}" style="${this._variantStyle} --tw-ring-color: var(--ring); --tw-ring-offset-color: var(--ring-offset);" ?disabled=${this.disabled}></button>
    `;
  }
}

customElements.define('app-button', AppButton);

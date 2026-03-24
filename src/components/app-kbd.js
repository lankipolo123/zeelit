import { LitElement, html } from 'lit';

export class AppKbd extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    keys: { type: String },
    size: { type: String },
  };

  constructor() {
    super();
    this.keys = '';
    this.size = 'default';
  }

  get _sizeClasses() {
    const sizes = {
      sm: 'text-[10px] px-1 py-0.5 min-w-[18px]',
      default: 'text-xs px-1.5 py-0.5 min-w-[22px]',
      lg: 'text-sm px-2 py-1 min-w-[28px]',
    };
    return sizes[this.size] || sizes.default;
  }

  render() {
    const parts = this.keys.split('+').map(k => k.trim());
    return html`
      <span class="inline-flex items-center gap-1">
        ${parts.map((key, i) => html`
          ${i > 0 ? html`<span class="text-xs" style="color: var(--fg-subtle)">+</span>` : ''}
          <kbd class="inline-flex items-center justify-center rounded font-mono font-medium ${this._sizeClasses}"
            style="background: var(--bg-muted); color: var(--fg-muted); border: 1px solid var(--border); box-shadow: 0 1px 0 var(--border);"
          >${key}</kbd>
        `)}
      </span>
    `;
  }
}

customElements.define('app-kbd', AppKbd);

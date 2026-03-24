import { LitElement, html } from 'lit';

export class AppRating extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    value: { type: Number },
    max: { type: Number },
    readonly: { type: Boolean },
    size: { type: String },
    label: { type: String },
    _hovered: { state: true },
  };

  constructor() {
    super();
    this.value = 0;
    this.max = 5;
    this.readonly = false;
    this.size = 'default';
    this.label = '';
    this._hovered = 0;
  }

  _select(star) {
    if (this.readonly) return;
    this.value = star;
    this.dispatchEvent(new CustomEvent('app-change', {
      detail: { value: this.value },
      bubbles: true, composed: true,
    }));
  }

  get _sizeClass() {
    const sizes = { sm: 'w-4 h-4', default: 'w-5 h-5', lg: 'w-7 h-7' };
    return sizes[this.size] || sizes.default;
  }

  _star(i) {
    const active = i <= (this._hovered || this.value);
    return html`
      <button
        class="transition-colors ${this.readonly ? '' : 'cursor-pointer'}"
        style="color: ${active ? '#f59e0b' : 'var(--fg-subtle)'}; background: none; border: none; padding: 1px;"
        @click="${() => this._select(i)}"
        @mouseenter="${() => { if (!this.readonly) this._hovered = i; }}"
        @mouseleave="${() => { this._hovered = 0; }}"
        aria-label="${i} star${i > 1 ? 's' : ''}"
      >
        <svg class="${this._sizeClass}" fill="${active ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/>
        </svg>
      </button>
    `;
  }

  render() {
    const stars = Array.from({ length: this.max }, (_, i) => i + 1);
    return html`
      <div class="inline-flex flex-col gap-1">
        ${this.label ? html`<span class="text-sm font-medium" style="color: var(--fg)">${this.label}</span>` : ''}
        <div class="inline-flex items-center gap-0.5" role="radiogroup" aria-label="${this.label || 'Rating'}">
          ${stars.map(i => this._star(i))}
          ${this.value ? html`<span class="ml-2 text-sm" style="color: var(--fg-muted)">${this.value}/${this.max}</span>` : ''}
        </div>
      </div>
    `;
  }
}

customElements.define('app-rating', AppRating);

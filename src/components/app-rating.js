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
        <app-icon name="star" class="${this._sizeClass}" fill="${active ? 'currentColor' : 'none'}"></app-icon>
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

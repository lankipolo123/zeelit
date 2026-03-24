import { LitElement, html } from 'lit';

export class AppCarousel extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    slides: { type: Array },
    current: { type: Number },
    autoplay: { type: Number },
  };

  constructor() {
    super();
    this.slides = [];
    this.current = 0;
    this.autoplay = 0;
    this._interval = null;
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.autoplay > 0) this._startAutoplay();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._stopAutoplay();
  }

  _startAutoplay() {
    this._stopAutoplay();
    this._interval = setInterval(() => this._next(), this.autoplay);
  }

  _stopAutoplay() {
    if (this._interval) clearInterval(this._interval);
  }

  _next() {
    this.current = (this.current + 1) % this.slides.length;
  }

  _prev() {
    this.current = (this.current - 1 + this.slides.length) % this.slides.length;
  }

  _goTo(i) {
    this.current = i;
    if (this.autoplay > 0) this._startAutoplay();
  }

  render() {
    if (!this.slides.length) return html``;

    const slide = this.slides[this.current];
    const arrowBtn = (dir, onClick) => html`
      <button
        @click="${onClick}"
        class="absolute top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-colors"
        style="${dir === 'left' ? 'left: 12px;' : 'right: 12px;'} background: var(--bg-card); border: 1px solid var(--border); color: var(--fg-muted);"
        @mouseenter=${(e) => e.currentTarget.style.background = 'var(--bg-muted)'}
        @mouseleave=${(e) => e.currentTarget.style.background = 'var(--bg-card)'}
      >
        <app-icon name="${dir === 'left' ? 'chevron-left' : 'chevron-right'}" class="w-4 h-4"></app-icon>
      </button>
    `;

    return html`
      <div class="relative rounded-lg overflow-hidden" style="border: 1px solid var(--border)">
        <div class="relative" style="aspect-ratio: 16/9; background: var(--bg-muted);">
          <div class="absolute inset-0 flex items-center justify-center p-6">
            ${typeof slide === 'string'
              ? html`<img src="${slide}" class="max-h-full max-w-full object-contain rounded" alt="Slide ${this.current + 1}" />`
              : html`<div class="text-center">
                  ${slide.icon ? html`<div class="text-4xl mb-3">${slide.icon}</div>` : ''}
                  <h3 class="text-lg font-semibold" style="color: var(--fg-heading)">${slide.title || ''}</h3>
                  ${slide.description ? html`<p class="mt-1 text-sm" style="color: var(--fg-muted)">${slide.description}</p>` : ''}
                </div>`
            }
          </div>
          ${arrowBtn('left', () => this._prev())}
          ${arrowBtn('right', () => this._next())}
        </div>
        <!-- Dots -->
        <div class="flex items-center justify-center gap-1.5 py-3" style="background: var(--bg-card);">
          ${this.slides.map((_, i) => html`
            <button
              @click="${() => this._goTo(i)}"
              class="w-2 h-2 rounded-full cursor-pointer transition-colors"
              style="background: ${i === this.current ? 'var(--primary)' : 'var(--fg-subtle)'}; opacity: ${i === this.current ? '1' : '0.4'};"
            ></button>
          `)}
        </div>
      </div>
    `;
  }
}

customElements.define('app-carousel', AppCarousel);

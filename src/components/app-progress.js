import { LitElement, html } from 'lit';

export class AppProgress extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    value: { type: Number },
    max: { type: Number },
    variant: { type: String },
  };

  constructor() {
    super();
    this.value = 0;
    this.max = 100;
    this.variant = 'default';
  }

  get _percent() {
    return Math.min(100, Math.max(0, (this.value / this.max) * 100));
  }

  get _barColor() {
    const colors = {
      default: 'var(--primary)',
      success: '#10b981',
      warning: '#f59e0b',
      destructive: '#ef4444',
    };
    return colors[this.variant] || colors.default;
  }

  render() {
    return html`
      <div class="rounded-full h-2 w-full overflow-hidden" style="background: var(--bg-muted)">
        <div
          class="transition-all rounded-full h-full"
          style="width: ${this._percent}%; background: ${this._barColor};"
        ></div>
      </div>
    `;
  }
}

customElements.define('app-progress', AppProgress);

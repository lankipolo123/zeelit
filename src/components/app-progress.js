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
      default: 'bg-white',
      success: 'bg-emerald-500',
      warning: 'bg-amber-500',
      destructive: 'bg-red-500',
    };
    return colors[this.variant] || colors.default;
  }

  render() {
    return html`
      <div class="bg-zinc-800 rounded-full h-2 w-full overflow-hidden">
        <div
          class="transition-all rounded-full h-full ${this._barColor}"
          style="width: ${this._percent}%;"
        ></div>
      </div>
    `;
  }
}

customElements.define('app-progress', AppProgress);

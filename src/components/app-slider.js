import { LitElement, html } from 'lit';

export class AppSlider extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    value: { type: Number },
    min: { type: Number },
    max: { type: Number },
    step: { type: Number },
    label: { type: String },
    disabled: { type: Boolean },
  };

  constructor() {
    super();
    this.value = 50;
    this.min = 0;
    this.max = 100;
    this.step = 1;
    this.label = '';
    this.disabled = false;
  }

  get _percent() {
    return ((this.value - this.min) / (this.max - this.min)) * 100;
  }

  _onInput(e) {
    this.value = Number(e.target.value);
    this.dispatchEvent(new CustomEvent('app-change', {
      detail: { value: this.value },
      bubbles: true, composed: true,
    }));
  }

  render() {
    return html`
      <div class="grid w-full gap-2 ${this.disabled ? 'opacity-50' : ''}">
        ${this.label ? html`
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium" style="color: var(--fg)">${this.label}</label>
            <span class="text-sm tabular-nums" style="color: var(--fg-muted)">${this.value}</span>
          </div>
        ` : ''}
        <div class="relative flex items-center w-full h-5">
          <div class="absolute w-full h-2 rounded-full" style="background: var(--bg-muted)"></div>
          <div class="absolute h-2 rounded-full" style="background: var(--primary); width: ${this._percent}%"></div>
          <input
            type="range"
            min="${this.min}"
            max="${this.max}"
            step="${this.step}"
            .value="${String(this.value)}"
            ?disabled="${this.disabled}"
            @input="${this._onInput}"
            class="absolute w-full h-2 appearance-none bg-transparent cursor-pointer disabled:cursor-not-allowed [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer"
            style="--tw-ring-color: var(--ring); accent-color: var(--primary);"
          />
        </div>
      </div>
    `;
  }
}

customElements.define('app-slider', AppSlider);

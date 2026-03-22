import { LitElement, html } from 'lit';

export class AppRadio extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    options: { type: Array },
    value: { type: String },
    name: { type: String },
    disabled: { type: Boolean },
  };

  constructor() {
    super();
    this.options = [];
    this.value = '';
    this.name = 'radio';
    this.disabled = false;
  }

  _select(val) {
    if (this.disabled) return;
    this.value = val;
    this.dispatchEvent(new CustomEvent('app-change', {
      detail: { value: val },
      bubbles: true, composed: true,
    }));
  }

  render() {
    return html`
      <div class="flex flex-col gap-3 ${this.disabled ? 'opacity-50' : ''}">
        ${(this.options || []).map(opt => {
          const selected = this.value === opt.value;
          const isDisabled = this.disabled || opt.disabled;
          return html`
            <label class="flex items-center gap-3 ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}" @click="${() => !isDisabled && this._select(opt.value)}">
              <div class="flex items-center justify-center h-5 w-5 shrink-0 rounded-full border-2 transition-colors ${selected ? 'border-white' : 'border-zinc-600'}">
                ${selected ? html`<div class="h-2.5 w-2.5 rounded-full bg-white"></div>` : ''}
              </div>
              <span class="text-sm text-zinc-300">${opt.label}</span>
            </label>
          `;
        })}
      </div>
    `;
  }
}

customElements.define('app-radio', AppRadio);

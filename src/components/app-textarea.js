import { LitElement, html } from 'lit';

export class AppTextarea extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    label: { type: String },
    placeholder: { type: String },
    value: { type: String },
    rows: { type: Number },
    disabled: { type: Boolean },
  };

  constructor() {
    super();
    this.label = '';
    this.placeholder = '';
    this.value = '';
    this.rows = 3;
    this.disabled = false;
  }

  _onInput(e) {
    this.value = e.target.value;
    this.dispatchEvent(new CustomEvent('app-input', {
      detail: { value: this.value },
      bubbles: true, composed: true,
    }));
  }

  render() {
    return html`
      <div class="grid w-full gap-1.5">
        ${this.label ? html`<label class="text-sm font-medium text-zinc-400">${this.label}</label>` : ''}
        <textarea
          placeholder="${this.placeholder}"
          .value="${this.value}"
          rows="${this.rows}"
          ?disabled="${this.disabled}"
          @input="${this._onInput}"
          class="flex w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-950 disabled:cursor-not-allowed disabled:opacity-50"
        ></textarea>
      </div>
    `;
  }
}

customElements.define('app-textarea', AppTextarea);

import { LitElement, html } from 'lit';

export class AppInput extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    type: { type: String },
    placeholder: { type: String },
    value: { type: String },
    label: { type: String },
    disabled: { type: Boolean },
  };

  constructor() {
    super();
    this.type = 'text';
    this.placeholder = '';
    this.value = '';
    this.label = '';
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
        ${this.label ? html`<label class="text-sm font-medium" style="color: var(--fg)">${this.label}</label>` : ''}
        <input
          type="${this.type}"
          placeholder="${this.placeholder}"
          .value="${this.value}"
          ?disabled="${this.disabled}"
          @input="${this._onInput}"
          class="flex h-10 w-full rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          style="border: 1px solid var(--input); background: var(--input-bg); color: var(--fg); --tw-ring-color: var(--ring); --tw-ring-offset-color: var(--ring-offset);"
        />
      </div>
    `;
  }
}

customElements.define('app-input', AppInput);

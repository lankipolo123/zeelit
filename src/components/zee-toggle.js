import { LitElement, html } from 'lit';

export class ZeeToggle extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    checked: { type: Boolean },
    disabled: { type: Boolean },
    label: { type: String },
  };

  constructor() {
    super();
    this.checked = false;
    this.disabled = false;
    this.label = '';
  }

  _toggle() {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.dispatchEvent(new CustomEvent('zee-change', {
      detail: { checked: this.checked },
      bubbles: true, composed: true,
    }));
  }

  render() {
    return html`
      <label class="flex items-center gap-3 ${this.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}">
        <button
          role="switch"
          aria-checked="${this.checked}"
          ?disabled="${this.disabled}"
          @click="${this._toggle}"
          class="relative inline-flex h-6 w-11 shrink-0 rounded-full border-2 border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-950 cursor-pointer ${this.checked ? 'bg-white' : 'bg-zinc-700'}"
        >
          <span class="pointer-events-none block h-5 w-5 rounded-full shadow-lg ring-0 transition-transform ${this.checked ? 'translate-x-5 bg-zinc-900' : 'translate-x-0 bg-zinc-400'}"></span>
        </button>
        ${this.label ? html`<span class="text-sm text-zinc-200">${this.label}</span>` : ''}
      </label>
    `;
  }
}

customElements.define('zee-toggle', ZeeToggle);

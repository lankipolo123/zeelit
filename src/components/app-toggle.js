import { LitElement, html } from 'lit';

export class AppToggle extends LitElement {
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
    this.dispatchEvent(new CustomEvent('app-change', {
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
          class="relative inline-flex h-6 w-11 shrink-0 rounded-full border-2 border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer"
          style="background: ${this.checked ? 'var(--primary)' : 'var(--toggle-off)'}; --tw-ring-color: var(--ring); --tw-ring-offset-color: var(--ring-offset);"
        >
          <span class="pointer-events-none block h-5 w-5 rounded-full shadow-lg ring-0 transition-transform ${this.checked ? 'translate-x-5' : 'translate-x-0'}" style="background: ${this.checked ? 'var(--primary-fg)' : 'var(--toggle-thumb)'}"></span>
        </button>
        ${this.label ? html`<span class="text-sm" style="color: var(--fg)">${this.label}</span>` : ''}
      </label>
    `;
  }
}

customElements.define('app-toggle', AppToggle);

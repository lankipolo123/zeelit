import { LitElement, html } from 'lit';

export class AppCheckbox extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    label: { type: String },
    checked: { type: Boolean },
    disabled: { type: Boolean },
  };

  constructor() {
    super();
    this.label = '';
    this.checked = false;
    this.disabled = false;
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
      <label class="flex items-center gap-3 ${this.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}" @click="${this._toggle}">
        <div class="flex items-center justify-center h-5 w-5 shrink-0 rounded transition-colors focus:outline-none"
          style="background: ${this.checked ? 'var(--primary)' : 'transparent'}; border: 1px solid ${this.checked ? 'var(--primary)' : 'var(--input)'};">
          ${this.checked ? html`
            <app-icon name="check" class="h-3.5 w-3.5" style="color: var(--primary-fg)" stroke-width="3"></app-icon>
          ` : ''}
        </div>
        ${this.label ? html`<span class="text-sm" style="color: var(--fg)">${this.label}</span>` : ''}
      </label>
    `;
  }
}

customElements.define('app-checkbox', AppCheckbox);

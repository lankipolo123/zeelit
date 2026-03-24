import { LitElement, html } from 'lit';

export class AppSelect extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    label: { type: String },
    options: { type: Array },
    value: { type: String },
    placeholder: { type: String },
    disabled: { type: Boolean },
    _open: { state: true },
  };

  constructor() {
    super();
    this.label = '';
    this.options = [];
    this.value = '';
    this.placeholder = 'Select an option';
    this.disabled = false;
    this._open = false;
    this._onDocClick = this._onDocClick.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('click', this._onDocClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this._onDocClick);
  }

  _onDocClick(e) {
    if (this._open && !this.contains(e.target)) this._open = false;
  }

  _toggle() {
    if (!this.disabled) this._open = !this._open;
  }

  _select(opt) {
    this.value = opt.value;
    this._open = false;
    this.dispatchEvent(new CustomEvent('app-change', {
      detail: { value: opt.value },
      bubbles: true, composed: true,
    }));
  }

  get _selectedLabel() {
    const found = (this.options || []).find(o => o.value === this.value);
    return found ? found.label : this.placeholder;
  }

  render() {
    return html`
      <div class="grid w-full gap-1.5">
        ${this.label ? html`<label class="text-sm font-medium" style="color: var(--fg)">${this.label}</label>` : ''}
        <div class="relative">
          <button
            @click="${this._toggle}"
            ?disabled="${this.disabled}"
            class="flex h-10 w-full items-center justify-between rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
            style="border: 1px solid var(--input); background: var(--input-bg); color: ${this.value ? 'var(--fg)' : 'var(--fg-muted)'}; --tw-ring-color: var(--ring); --tw-ring-offset-color: var(--ring-offset);"
          >
            <span>${this._selectedLabel}</span>
            <app-icon name="chevron-down" class="h-4 w-4" style="color: var(--fg-subtle)"></app-icon>
          </button>
          ${this._open ? html`
            <div class="absolute left-0 right-0 mt-1 z-50 rounded-md p-1 shadow-md max-h-60 overflow-auto" style="border: 1px solid var(--border); background: var(--bg-card);">
              ${(this.options || []).map(opt => html`
                <button
                  @click="${() => this._select(opt)}"
                  class="flex w-full items-center rounded-sm px-2 py-1.5 text-sm cursor-pointer"
                  style="color: var(--fg); background: ${this.value === opt.value ? 'var(--accent)' : 'transparent'};"
                  @mouseenter=${(e) => e.target.style.background = 'var(--accent)'}
                  @mouseleave=${(e) => { if (this.value !== opt.value) e.target.style.background = 'transparent'; }}
                >
                  ${opt.label}
                </button>
              `)}
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }
}

customElements.define('app-select', AppSelect);

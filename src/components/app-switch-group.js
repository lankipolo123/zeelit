import { LitElement, html } from 'lit';

export class AppSwitchGroup extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    label: { type: String },
    description: { type: String },
    options: { type: Array },
    value: { type: Array },
  };

  constructor() {
    super();
    this.label = '';
    this.description = '';
    this.options = [];
    this.value = [];
  }

  _toggle(optionValue) {
    const set = new Set(this.value);
    if (set.has(optionValue)) {
      set.delete(optionValue);
    } else {
      set.add(optionValue);
    }
    this.value = [...set];
    this.dispatchEvent(new CustomEvent('app-change', {
      detail: { value: this.value },
      bubbles: true, composed: true,
    }));
  }

  render() {
    return html`
      <fieldset class="space-y-3" role="group" aria-label="${this.label}">
        ${this.label ? html`<legend class="text-sm font-medium" style="color: var(--fg)">${this.label}</legend>` : ''}
        ${this.description ? html`<p class="text-xs" style="color: var(--fg-muted)">${this.description}</p>` : ''}
        ${this.options.map(opt => {
          const checked = this.value.includes(opt.value);
          return html`
            <label class="flex items-center justify-between gap-3 py-2 cursor-pointer">
              <div>
                <p class="text-sm font-medium" style="color: var(--fg)">${opt.label}</p>
                ${opt.description ? html`<p class="text-xs" style="color: var(--fg-muted)">${opt.description}</p>` : ''}
              </div>
              <button
                role="switch"
                aria-checked="${checked}"
                @click="${() => this._toggle(opt.value)}"
                class="relative inline-flex h-6 w-11 shrink-0 rounded-full border-2 border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer"
                style="background: ${checked ? 'var(--primary)' : 'var(--toggle-off)'}; --tw-ring-color: var(--ring); --tw-ring-offset-color: var(--ring-offset);"
              >
                <span class="pointer-events-none block h-5 w-5 rounded-full shadow-lg transition-transform ${checked ? 'translate-x-5' : 'translate-x-0'}" style="background: ${checked ? 'var(--primary-fg)' : 'var(--toggle-thumb)'}"></span>
              </button>
            </label>
          `;
        })}
      </fieldset>
    `;
  }
}

customElements.define('app-switch-group', AppSwitchGroup);

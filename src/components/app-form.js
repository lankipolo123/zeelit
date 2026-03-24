import { LitElement, html } from 'lit';

/* ── Form container ─────────────────────────────────── */

export class AppForm extends LitElement {
  createRenderRoot() {
    return this;
  }

  static properties = {
    layout: { type: String },
  };

  constructor() {
    super();
    this.layout = 'vertical';
  }

  _handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    this.dispatchEvent(new CustomEvent('app-submit', {
      detail: data,
      bubbles: true,
      composed: true,
    }));
  }

  render() {
    return html`
      <form @submit=${this._handleSubmit} novalidate>
        <slot></slot>
      </form>
    `;
  }
}

/* ── Form field ──────────────────────────────────────── */

export class AppFormField extends LitElement {
  createRenderRoot() {
    return this;
  }

  static properties = {
    label: { type: String },
    name: { type: String },
    type: { type: String },
    placeholder: { type: String },
    required: { type: Boolean },
    error: { type: String },
    hint: { type: String },
    value: { type: String },
    options: { type: Array },
    layout: { type: String },
  };

  constructor() {
    super();
    this.label = '';
    this.name = '';
    this.type = 'text';
    this.placeholder = '';
    this.required = false;
    this.error = '';
    this.hint = '';
    this.value = '';
    this.options = [];
    this.layout = 'vertical';
  }

  _parseOptions() {
    if (typeof this.options === 'string') {
      try {
        return JSON.parse(this.options);
      } catch {
        return [];
      }
    }
    return this.options || [];
  }

  _onChange(e) {
    this.value = e.target.value;
    this.dispatchEvent(new CustomEvent('app-change', {
      detail: { name: this.name, value: this.value },
      bubbles: true,
      composed: true,
    }));
  }

  get _inputStyle() {
    const base = [
      'width: 100%',
      'padding: 0.5rem 0.75rem',
      'font-size: 0.875rem',
      'border-radius: 0.5rem',
      'outline: none',
      'transition: border-color 0.15s',
      'background: var(--bg)',
      'color: var(--fg)',
    ].join('; ');

    const border = this.error
      ? 'border: 1px solid #ef4444'
      : 'border: 1px solid var(--border)';

    return `${base}; ${border};`;
  }

  _renderTextarea() {
    return html`
      <textarea
        name=${this.name}
        placeholder=${this.placeholder}
        .value=${this.value}
        @input=${this._onChange}
        ?required=${this.required}
        rows="3"
        class="resize-y"
        style="${this._inputStyle}"
      ></textarea>
    `;
  }

  _renderSelect() {
    const opts = this._parseOptions();
    return html`
      <select
        name=${this.name}
        .value=${this.value}
        @change=${this._onChange}
        ?required=${this.required}
        style="${this._inputStyle} cursor: pointer;"
      >
        ${this.placeholder ? html`
          <option value="" disabled ?selected=${!this.value}>
            ${this.placeholder}
          </option>
        ` : ''}
        ${opts.map(o => {
          const val = typeof o === 'string' ? o : o.value;
          const label = typeof o === 'string' ? o : o.label;
          return html`
            <option value=${val} ?selected=${this.value === val}>
              ${label}
            </option>
          `;
        })}
      </select>
    `;
  }

  _renderCheckbox() {
    return html`
      <label class="inline-flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          name=${this.name}
          ?checked=${this.value === 'true'}
          @change=${(e) => {
            this.value = e.target.checked ? 'true' : 'false';
            this._onChange(e);
          }}
          class="w-4 h-4 rounded"
          style="accent-color: var(--primary);"
        />
        ${this.placeholder ? html`
          <span class="text-sm" style="color: var(--fg)">
            ${this.placeholder}
          </span>
        ` : ''}
      </label>
    `;
  }

  _renderDefaultInput() {
    return html`
      <input
        type=${this.type}
        name=${this.name}
        placeholder=${this.placeholder}
        .value=${this.value}
        @input=${this._onChange}
        ?required=${this.required}
        style="${this._inputStyle}"
      />
    `;
  }

  _renderInput() {
    switch (this.type) {
      case 'textarea': return this._renderTextarea();
      case 'select': return this._renderSelect();
      case 'checkbox': return this._renderCheckbox();
      default: return this._renderDefaultInput();
    }
  }

  render() {
    const horizontal = this.layout === 'horizontal';
    const wrapperClass = horizontal
      ? 'flex items-start gap-4'
      : 'flex flex-col gap-1.5';
    const labelClass = horizontal
      ? 'w-32 shrink-0 pt-2 text-sm font-medium'
      : 'text-sm font-medium';

    return html`
      <div class="${wrapperClass} mb-4">
        ${this.label ? html`
          <label class="${labelClass}" style="color: var(--fg)">
            ${this.label}
            ${this.required ? html`<span style="color: #ef4444"> *</span>` : ''}
          </label>
        ` : ''}

        <div class="flex-1 flex flex-col gap-1">
          ${this._renderInput()}

          ${this.hint && !this.error ? html`
            <p class="text-xs" style="color: var(--fg-muted)">
              ${this.hint}
            </p>
          ` : ''}

          ${this.error ? html`
            <p class="text-xs" style="color: #ef4444">
              ${this.error}
            </p>
          ` : ''}
        </div>
      </div>
    `;
  }
}

/* ── Form section ────────────────────────────────────── */

export class AppFormSection extends LitElement {
  createRenderRoot() {
    return this;
  }

  static properties = {
    title: { type: String },
    description: { type: String },
  };

  constructor() {
    super();
    this.title = '';
    this.description = '';
  }

  render() {
    return html`
      <fieldset
        class="mb-6 pb-6"
        style="border: none; border-bottom: 1px solid var(--border); padding: 0;"
      >
        ${this.title ? html`
          <div class="mb-4">
            <h3 class="text-base font-semibold" style="color: var(--fg-heading)">
              ${this.title}
            </h3>
            ${this.description ? html`
              <p class="text-sm mt-0.5" style="color: var(--fg-muted)">
                ${this.description}
              </p>
            ` : ''}
          </div>
        ` : ''}
        <slot></slot>
      </fieldset>
    `;
  }
}

customElements.define('app-form', AppForm);
customElements.define('app-form-field', AppFormField);
customElements.define('app-form-section', AppFormSection);

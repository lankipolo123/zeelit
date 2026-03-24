import { LitElement, html } from 'lit';

export class AppTagInput extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    label: { type: String },
    placeholder: { type: String },
    tags: { type: Array },
    max: { type: Number },
    disabled: { type: Boolean },
    _inputValue: { state: true },
  };

  constructor() {
    super();
    this.label = '';
    this.placeholder = 'Add a tag...';
    this.tags = [];
    this.max = 0;
    this.disabled = false;
    this._inputValue = '';
  }

  _addTag(value) {
    const tag = value.trim();
    if (!tag) return;
    if (this.tags.includes(tag)) return;
    if (this.max > 0 && this.tags.length >= this.max) return;
    this.tags = [...this.tags, tag];
    this._inputValue = '';
    this.dispatchEvent(new CustomEvent('app-change', {
      detail: { tags: this.tags },
      bubbles: true, composed: true,
    }));
  }

  _removeTag(tag) {
    if (this.disabled) return;
    this.tags = this.tags.filter(t => t !== tag);
    this.dispatchEvent(new CustomEvent('app-change', {
      detail: { tags: this.tags },
      bubbles: true, composed: true,
    }));
  }

  _onKeydown(e) {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      this._addTag(this._inputValue);
    }
    if (e.key === 'Backspace' && !this._inputValue && this.tags.length) {
      this._removeTag(this.tags[this.tags.length - 1]);
    }
  }

  _onInput(e) {
    this._inputValue = e.target.value;
  }

  render() {
    const atMax = this.max > 0 && this.tags.length >= this.max;
    return html`
      <div class="space-y-1.5">
        ${this.label ? html`<label class="text-sm font-medium" style="color: var(--fg)">${this.label}</label>` : ''}
        <div
          class="flex flex-wrap items-center gap-1.5 rounded-md px-3 py-2 text-sm transition-colors ${this.disabled ? 'opacity-50 cursor-not-allowed' : ''}"
          style="border: 1px solid var(--input); background: var(--bg-input); min-height: 40px;"
          @click="${(e) => { if (!this.disabled) e.currentTarget.querySelector('input')?.focus(); }}"
        >
          ${this.tags.map(tag => html`
            <span class="inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-medium" style="background: var(--secondary); color: var(--secondary-fg);">
              ${tag}
              ${!this.disabled ? html`
                <button
                  @click="${(e) => { e.stopPropagation(); this._removeTag(tag); }}"
                  class="rounded-full hover:opacity-70 transition-opacity cursor-pointer"
                  style="color: var(--secondary-fg);"
                  aria-label="Remove ${tag}"
                >
                  <app-icon name="x" class="w-3 h-3"></app-icon>
                </button>
              ` : ''}
            </span>
          `)}
          ${!atMax && !this.disabled ? html`
            <input
              type="text"
              .value="${this._inputValue}"
              placeholder="${this.tags.length ? '' : this.placeholder}"
              @input="${this._onInput}"
              @keydown="${this._onKeydown}"
              class="flex-1 min-w-[80px] bg-transparent outline-none text-sm"
              style="color: var(--fg); border: none;"
            />
          ` : ''}
        </div>
        ${this.max ? html`<p class="text-xs" style="color: var(--fg-subtle)">${this.tags.length}/${this.max} tags</p>` : ''}
      </div>
    `;
  }
}

customElements.define('app-tag-input', AppTagInput);

import { LitElement, html } from 'lit';

export class AppSearchbar extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    placeholder: { type: String },
    value: { type: String },
    items: { type: Array },
    open: { type: Boolean },
    _filteredItems: { state: true },
    _activeIndex: { state: true },
  };

  constructor() {
    super();
    this.placeholder = 'Search...';
    this.value = '';
    this.items = [];
    this.open = false;
    this._filteredItems = [];
    this._activeIndex = -1;
    this._handleOutsideClick = this._handleOutsideClick.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('click', this._handleOutsideClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this._handleOutsideClick);
  }

  _handleOutsideClick(e) {
    if (!this.contains(e.target)) {
      this.open = false;
    }
  }

  _parseItems() {
    if (typeof this.items === 'string') {
      try { return JSON.parse(this.items); }
      catch { return []; }
    }
    return this.items || [];
  }

  _onInput(e) {
    this.value = e.target.value;
    this._filter();
    this.open = this._filteredItems.length > 0 && this.value.length > 0;
    this._activeIndex = -1;
    this.dispatchEvent(new CustomEvent('app-input', {
      detail: { value: this.value },
      bubbles: true, composed: true,
    }));
  }

  _onFocus() {
    if (this.value && this._filteredItems.length > 0) {
      this.open = true;
    }
  }

  _filter() {
    const items = this._parseItems();
    const q = this.value.toLowerCase().trim();
    if (!q) {
      this._filteredItems = [];
      return;
    }
    this._filteredItems = items.filter(item => {
      const label = (item.label || item.id || '').toLowerCase();
      const category = (item.category || '').toLowerCase();
      return label.includes(q) || category.includes(q);
    });
  }

  _onKeydown(e) {
    if (!this.open) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      this._activeIndex = Math.min(this._activeIndex + 1, this._filteredItems.length - 1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      this._activeIndex = Math.max(this._activeIndex - 1, 0);
    } else if (e.key === 'Enter' && this._activeIndex >= 0) {
      e.preventDefault();
      this._select(this._filteredItems[this._activeIndex]);
    } else if (e.key === 'Escape') {
      this.open = false;
      this._activeIndex = -1;
    }
  }

  _select(item) {
    this.value = item.label || item.id || '';
    this.open = false;
    this._activeIndex = -1;
    this.dispatchEvent(new CustomEvent('app-select', {
      detail: { value: item.id || item.label, item },
      bubbles: true, composed: true,
    }));
  }

  _clear() {
    this.value = '';
    this._filteredItems = [];
    this.open = false;
    this._activeIndex = -1;
    this.dispatchEvent(new CustomEvent('app-input', {
      detail: { value: '' },
      bubbles: true, composed: true,
    }));
    const input = this.querySelector('input');
    if (input) input.focus();
  }

  render() {
    return html`
      <div style="position: relative; width: 100%;">
        <!-- Search input -->
        <div class="flex items-center rounded-md"
          style="border: 1px solid var(--input); background: var(--input-bg); position: relative;">
          <app-icon name="search" class="w-4 h-4 shrink-0 ml-3" style="color: var(--fg-muted)"></app-icon>
          <input
            type="text"
            placeholder="${this.placeholder}"
            .value="${this.value}"
            @input="${this._onInput}"
            @focus="${this._onFocus}"
            @keydown="${this._onKeydown}"
            class="flex-1 h-9 px-2 py-1.5 text-sm bg-transparent focus:outline-none"
            style="border: none; color: var(--fg);"
          />
          ${this.value ? html`
            <button
              @click="${this._clear}"
              class="mr-2 p-0.5 rounded cursor-pointer shrink-0"
              style="background: transparent; border: none; color: var(--fg-subtle);"
              @mouseenter=${(e) => { e.currentTarget.style.color = 'var(--fg)'; }}
              @mouseleave=${(e) => { e.currentTarget.style.color = 'var(--fg-subtle)'; }}
            >
              <app-icon name="x" class="w-3.5 h-3.5"></app-icon>
            </button>
          ` : ''}
        </div>

        <!-- Dropdown results -->
        ${this.open && this._filteredItems.length > 0 ? html`
          <div class="rounded-md py-1 mt-1"
            style="position: absolute; top: 100%; left: 0; right: 0; z-index: 50;
              background: var(--bg-card); border: 1px solid var(--border);
              box-shadow: 0 4px 16px rgba(0,0,0,0.12); max-height: 260px; overflow-y: auto;">
            ${this._filteredItems.map((item, i) => html`
              <button
                class="flex items-center gap-2.5 w-full text-left px-3 py-2 text-sm cursor-pointer transition-colors"
                style="border: none;
                  background: ${i === this._activeIndex ? 'var(--bg-muted)' : 'transparent'};
                  color: ${i === this._activeIndex ? 'var(--fg)' : 'var(--fg-muted)'};"
                @mouseenter=${(e) => { this._activeIndex = i; e.currentTarget.style.background = 'var(--bg-muted)'; e.currentTarget.style.color = 'var(--fg)'; }}
                @mouseleave=${(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--fg-muted)'; }}
                @click="${() => this._select(item)}"
              >
                <span class="truncate flex-1">${item.label || item.id}</span>
                ${item.category ? html`
                  <span class="text-xs shrink-0 px-1.5 py-0.5 rounded"
                    style="background: color-mix(in srgb, var(--primary) 12%, transparent); color: var(--primary);">
                    ${item.category}
                  </span>
                ` : ''}
              </button>
            `)}
          </div>
        ` : ''}
      </div>
    `;
  }
}

customElements.define('app-searchbar', AppSearchbar);

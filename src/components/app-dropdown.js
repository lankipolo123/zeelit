import { LitElement, html } from 'lit';

export class AppDropdown extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    items: { type: Array },
    open: { type: Boolean, state: true },
  };

  constructor() {
    super();
    this.items = [];
    this.open = false;
    this._userNodes = null;
    this._onDocumentClick = this._onDocumentClick.bind(this);
  }

  connectedCallback() {
    if (this._userNodes === null) {
      this._userNodes = [];
      while (this.firstChild) {
        this._userNodes.push(this.removeChild(this.firstChild));
      }
    }
    super.connectedCallback();
    document.addEventListener('click', this._onDocumentClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this._onDocumentClick);
  }

  updated() {
    if (this._userNodes?.length) {
      const trigger = this.querySelector('[data-dropdown-trigger]');
      if (trigger) {
        this._userNodes.forEach(n => trigger.appendChild(n));
        this._userNodes = [];
      }
    }
  }

  _onDocumentClick(e) {
    if (this.open && !this.contains(e.target)) {
      this.open = false;
    }
  }

  _toggle() {
    this.open = !this.open;
  }

  _selectItem(item) {
    if (item.disabled) return;
    this.open = false;
    this.dispatchEvent(new CustomEvent('dropdown-select', {
      detail: { label: item.label, value: item.value },
      bubbles: true,
      composed: true,
    }));
  }

  render() {
    return html`
      <div class="relative inline-block">
        <div data-dropdown-trigger @click=${() => this._toggle()} class="cursor-pointer">
        </div>
        ${this.open ? html`
          <div class="absolute left-0 mt-1 z-50 min-w-[8rem] rounded-md p-1 shadow-md" style="border: 1px solid var(--border); background: var(--bg-card); color: var(--fg)">
            ${this.items.map(item => html`
              <button
                @click=${() => this._selectItem(item)}
                class="flex w-full items-center rounded-sm px-2 py-1.5 text-sm ${item.disabled
                  ? 'opacity-50 cursor-not-allowed'
                  : 'cursor-pointer'}"
                style="color: var(--fg); background: transparent;"
                @mouseenter=${(e) => { if (!item.disabled) e.target.style.background = 'var(--accent)'; }}
                @mouseleave=${(e) => { e.target.style.background = 'transparent'; }}
                ?disabled=${item.disabled}
              >
                ${item.label}
              </button>
            `)}
          </div>
        ` : ''}
      </div>
    `;
  }
}

customElements.define('app-dropdown', AppDropdown);

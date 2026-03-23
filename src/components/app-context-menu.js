import { LitElement, html } from 'lit';

export class AppContextMenu extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    items: { type: Array },
    _open: { state: true },
    _x: { state: true },
    _y: { state: true },
  };

  constructor() {
    super();
    this.items = [];
    this._open = false;
    this._x = 0;
    this._y = 0;
    this._userNodes = null;
    this._closeHandler = () => { this._open = false; };
  }

  connectedCallback() {
    if (this._userNodes === null) {
      this._userNodes = [];
      while (this.firstChild) {
        this._userNodes.push(this.removeChild(this.firstChild));
      }
    }
    super.connectedCallback();
    document.addEventListener('click', this._closeHandler);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this._closeHandler);
  }

  updated() {
    if (this._userNodes?.length) {
      const el = this.querySelector('[data-ctx-trigger]');
      if (el) {
        this._userNodes.forEach(n => el.appendChild(n));
        this._userNodes = [];
      }
    }
  }

  _onContext(e) {
    e.preventDefault();
    const rect = this.getBoundingClientRect();
    this._x = e.clientX - rect.left;
    this._y = e.clientY - rect.top;
    this._open = true;
  }

  _select(item) {
    this._open = false;
    this.dispatchEvent(new CustomEvent('app-select', {
      detail: { item },
      bubbles: true, composed: true,
    }));
  }

  render() {
    return html`
      <div class="relative" @contextmenu="${this._onContext}">
        <div data-ctx-trigger></div>
        ${this._open ? html`
          <div class="absolute z-50 min-w-[160px] rounded-md py-1 shadow-md"
            style="left: ${this._x}px; top: ${this._y}px; background: var(--bg-card); border: 1px solid var(--border);">
            ${this.items.map((item, i) =>
              item === '-'
                ? html`<div class="my-1 h-px" style="background: var(--border)"></div>`
                : html`
                  <button
                    @click="${() => this._select(item)}"
                    class="flex w-full items-center px-3 py-1.5 text-sm cursor-pointer transition-colors"
                    style="color: var(--fg)"
                    @mouseenter=${(e) => e.currentTarget.style.background = 'var(--bg-muted)'}
                    @mouseleave=${(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    ${typeof item === 'object' ? item.label : item}
                    ${typeof item === 'object' && item.shortcut ? html`<span class="ml-auto text-xs" style="color: var(--fg-subtle)">${item.shortcut}</span>` : ''}
                  </button>
                `
            )}
          </div>
        ` : ''}
      </div>
    `;
  }
}

customElements.define('app-context-menu', AppContextMenu);

import { LitElement, html } from 'lit';

export class AppPopover extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    _open: { state: true },
    position: { type: String },
  };

  constructor() {
    super();
    this._open = false;
    this.position = 'bottom';
    this._userNodes = null;
    this._onDocClick = this._onDocClick.bind(this);
  }

  connectedCallback() {
    if (this._userNodes === null) {
      this._userNodes = [];
      while (this.firstChild) {
        this._userNodes.push(this.removeChild(this.firstChild));
      }
    }
    super.connectedCallback();
    document.addEventListener('click', this._onDocClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this._onDocClick);
  }

  updated() {
    if (this._userNodes?.length) {
      const el = this.querySelector('[data-popover-content]');
      if (el) {
        this._userNodes.forEach(n => el.appendChild(n));
        this._userNodes = [];
      }
    }
  }

  _onDocClick(e) {
    if (this._open && !this.contains(e.target)) this._open = false;
  }

  _toggle() {
    this._open = !this._open;
  }

  get _posClasses() {
    const positions = {
      top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
      bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
      left: 'right-full top-1/2 -translate-y-1/2 mr-2',
      right: 'left-full top-1/2 -translate-y-1/2 ml-2',
    };
    return positions[this.position] || positions.bottom;
  }

  render() {
    return html`
      <div class="relative inline-block">
        <button @click="${this._toggle}" class="cursor-pointer" style="color: var(--fg)">
          <slot name="trigger">
            <span class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium" style="border: 1px solid var(--input); background: var(--input-bg); color: var(--fg);">Open</span>
          </slot>
        </button>
        ${this._open ? html`
          <div class="absolute ${this._posClasses} z-50 w-72 rounded-md p-4 shadow-md" style="border: 1px solid var(--border); background: var(--bg-card); color: var(--fg);" data-popover-content>
          </div>
        ` : html`<div class="hidden" data-popover-content></div>`}
      </div>
    `;
  }
}

customElements.define('app-popover', AppPopover);

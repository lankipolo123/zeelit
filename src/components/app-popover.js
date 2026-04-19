import { LitElement, html } from 'lit';

export class AppPopover extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    _open: { state: true },
    position: { type: String },
    _pos: { state: true },
  };

  constructor() {
    super();
    this._open = false;
    this.position = 'bottom';
    this._userNodes = null;
    this._pos = '';
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

  _calcPos(r) {
    const g = 8;
    switch (this.position) {
      case 'top':   return `bottom:${window.innerHeight - r.top + g}px;left:${r.left + r.width / 2}px;transform:translateX(-50%)`;
      case 'left':  return `top:${r.top + r.height / 2}px;right:${window.innerWidth - r.left + g}px;transform:translateY(-50%)`;
      case 'right': return `top:${r.top + r.height / 2}px;left:${r.right + g}px;transform:translateY(-50%)`;
      default:      return `top:${r.bottom + g}px;left:${r.left + r.width / 2}px;transform:translateX(-50%)`;
    }
  }

  _toggle() {
    if (!this._open) {
      this._pos = this._calcPos(this.getBoundingClientRect());
    }
    this._open = !this._open;
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
          <div class="fixed z-[9999] w-72 rounded-md p-4 shadow-md" style="${this._pos}; border: 1px solid var(--border); background: var(--bg-card); color: var(--fg);" data-popover-content>
          </div>
        ` : html`<div class="hidden" data-popover-content></div>`}
      </div>
    `;
  }
}

customElements.define('app-popover', AppPopover);

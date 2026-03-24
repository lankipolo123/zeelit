import { LitElement, html } from 'lit';

export class AppSheet extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    open: { type: Boolean },
    side: { type: String },
    sheetTitle: { type: String },
    description: { type: String },
  };

  constructor() {
    super();
    this.open = false;
    this.side = 'right';
    this.sheetTitle = '';
    this.description = '';
    this._userNodes = null;
  }

  connectedCallback() {
    if (this._userNodes === null) {
      this._userNodes = [];
      while (this.firstChild) {
        this._userNodes.push(this.removeChild(this.firstChild));
      }
    }
    super.connectedCallback();
  }

  updated() {
    if (this._userNodes?.length) {
      const el = this.querySelector('[data-sheet-content]');
      if (el) {
        this._userNodes.forEach(n => el.appendChild(n));
        this._userNodes = [];
      }
    }
  }

  show() { this.open = true; }
  close() {
    this.open = false;
    this.dispatchEvent(new CustomEvent('app-close', { bubbles: true, composed: true }));
  }

  _onBackdropClick(e) {
    if (e.target === e.currentTarget) this.close();
  }

  get _panelClasses() {
    const sides = {
      right: 'inset-y-0 right-0 w-full max-w-sm',
      left: 'inset-y-0 left-0 w-full max-w-sm',
      top: 'inset-x-0 top-0 h-auto max-h-[50vh]',
      bottom: 'inset-x-0 bottom-0 h-auto max-h-[50vh]',
    };
    return sides[this.side] || sides.right;
  }

  render() {
    if (!this.open) return html`<div class="hidden" data-sheet-content></div>`;

    return html`
      <div class="fixed inset-0 z-50" @click="${this._onBackdropClick}">
        <div class="fixed inset-0" style="background: var(--overlay)"></div>
        <div class="fixed ${this._panelClasses} z-50 flex flex-col gap-4 p-6 shadow-lg" style="background: var(--bg-card); border: 1px solid var(--border); color: var(--fg);">
          <div class="flex flex-col space-y-2">
            ${this.sheetTitle ? html`<h2 class="text-lg font-semibold" style="color: var(--fg-heading)">${this.sheetTitle}</h2>` : ''}
            ${this.description ? html`<p class="text-sm" style="color: var(--fg-muted)">${this.description}</p>` : ''}
          </div>
          <div class="flex-1 overflow-auto" data-sheet-content></div>
          <button
            @click="${this.close}"
            class="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
            style="color: var(--fg-muted)"
          >
            <app-icon name="x" class="h-4 w-4"></app-icon>
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define('app-sheet', AppSheet);

import { LitElement, html } from 'lit';

export class AppDialog extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    open: { type: Boolean },
    dialogTitle: { type: String },
    description: { type: String },
  };

  constructor() {
    super();
    this.open = false;
    this.dialogTitle = '';
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
      const el = this.querySelector('[data-dialog-content]');
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

  render() {
    if (!this.open) return html`<div class="hidden" data-dialog-content></div>`;

    return html`
      <div class="fixed inset-0 z-50 flex items-center justify-center" @click="${this._onBackdropClick}">
        <div class="fixed inset-0" style="background: var(--overlay)"></div>
        <div class="relative z-50 w-full max-w-lg rounded-lg p-6 shadow-lg" style="border: 1px solid var(--border); background: var(--bg-card); color: var(--fg)">
          <div class="flex flex-col space-y-2 text-center sm:text-left">
            ${this.dialogTitle ? html`<h2 class="text-lg font-semibold" style="color: var(--fg-heading)">${this.dialogTitle}</h2>` : ''}
            ${this.description ? html`<p class="text-sm" style="color: var(--fg-muted)">${this.description}</p>` : ''}
          </div>
          <div class="mt-4" data-dialog-content></div>
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

customElements.define('app-dialog', AppDialog);

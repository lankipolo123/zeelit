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
    if (!this.open) return html``;

    return html`
      <div class="fixed inset-0 z-50 flex items-center justify-center" @click="${this._onBackdropClick}">
        <div class="fixed inset-0 bg-black/80"></div>
        <div class="relative z-50 w-full max-w-lg rounded-lg border border-zinc-800 bg-zinc-950 p-6 shadow-lg">
          <div class="flex flex-col space-y-2 text-center sm:text-left">
            ${this.dialogTitle ? html`<h2 class="text-lg font-semibold text-zinc-100">${this.dialogTitle}</h2>` : ''}
            ${this.description ? html`<p class="text-sm text-zinc-400">${this.description}</p>` : ''}
          </div>
          <div class="mt-4"><slot></slot></div>
          <button
            @click="${this.close}"
            class="absolute right-4 top-4 rounded-sm text-zinc-400 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
          >
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define('app-dialog', AppDialog);

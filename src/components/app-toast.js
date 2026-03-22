import { LitElement, html } from 'lit';

class AppToast extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    _toasts: { state: true },
  };

  constructor() {
    super();
    this._toasts = [];
    this._id = 0;
  }

  show(message, { variant = 'default', duration = 3000 } = {}) {
    const id = ++this._id;
    this._toasts = [...this._toasts, { id, message, variant }];
    setTimeout(() => this.dismiss(id), duration);
  }

  dismiss(id) {
    this._toasts = this._toasts.filter(t => t.id !== id);
  }

  render() {
    return html`
      <div class="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 pointer-events-none">
        ${this._toasts.map(t => {
          const colors = t.variant === 'destructive'
            ? 'border-red-600/50 bg-red-950 text-red-200'
            : t.variant === 'success'
              ? 'border-emerald-600/50 bg-emerald-950 text-emerald-200'
              : 'border-zinc-700 bg-zinc-900 text-zinc-100';
          return html`
            <div class="pointer-events-auto flex items-center gap-3 rounded-lg border px-4 py-3 shadow-lg text-sm animate-[slideIn_0.2s_ease-out] ${colors}">
              ${t.variant === 'success' ? html`
                <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              ` : ''}
              <span>${t.message}</span>
              <button @click="${() => this.dismiss(t.id)}" class="ml-2 text-zinc-400 hover:text-zinc-200 cursor-pointer shrink-0">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>
          `;
        })}
      </div>
    `;
  }
}

customElements.define('app-toast', AppToast);

// Global toast helper
export function toast(message, options) {
  let el = document.querySelector('app-toast');
  if (!el) {
    el = document.createElement('app-toast');
    document.body.appendChild(el);
  }
  el.show(message, options);
}

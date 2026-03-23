import { LitElement, html } from 'lit';

const POSITIONS = [
  { cls: 'top-4 left-1/2 -translate-x-1/2', anim: 'slideInTR' },
];

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
    const pos = POSITIONS[Math.floor(Math.random() * POSITIONS.length)];
    this._toasts = [...this._toasts, { id, message, variant, pos }];
    setTimeout(() => this.dismiss(id), duration);
  }

  dismiss(id) {
    this._toasts = this._toasts.filter(t => t.id !== id);
  }

  _getColors(variant) {
    if (variant === 'destructive') {
      return 'border-color: rgb(220 38 38 / 0.5); background: #7f1d1d; color: #fecaca;';
    }
    if (variant === 'success') {
      return 'border-color: rgb(5 150 105 / 0.5); background: #064e3b; color: #a7f3d0;';
    }
    return `border-color: var(--border); background: var(--bg-card); color: var(--fg);`;
  }

  render() {
    // Group toasts by position
    const groups = {};
    for (const t of this._toasts) {
      const key = t.pos.cls;
      if (!groups[key]) groups[key] = { pos: t.pos, toasts: [] };
      groups[key].toasts.push(t);
    }

    return html`
      ${Object.values(groups).map(g => html`
        <div class="fixed ${g.pos.cls} z-[100] flex flex-col gap-2 pointer-events-none">
          ${g.toasts.map(t => html`
            <div class="pointer-events-auto flex items-center gap-3 rounded-lg border px-4 py-3 shadow-lg text-sm" style="${this._getColors(t.variant)} animation: ${t.pos.anim} 0.2s ease-out;">
              ${t.variant === 'success' ? html`
                <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              ` : ''}
              <span>${t.message}</span>
              <button @click="${() => this.dismiss(t.id)}" class="ml-2 cursor-pointer shrink-0 opacity-70 hover:opacity-100" style="color: inherit;">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>
          `)}
        </div>
      `)}
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

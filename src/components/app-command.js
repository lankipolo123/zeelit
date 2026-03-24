import { LitElement, html } from 'lit';

export class AppCommand extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    open: { type: Boolean },
    placeholder: { type: String },
    items: { type: Array },
    _query: { state: true },
  };

  constructor() {
    super();
    this.open = false;
    this.placeholder = 'Type a command or search...';
    this.items = [];
    this._query = '';
  }

  _parseItems() {
    if (typeof this.items === 'string') {
      try { return JSON.parse(this.items); } catch { return []; }
    }
    return this.items || [];
  }

  _filtered() {
    const items = this._parseItems();
    if (!this._query) return items;
    const q = this._query.toLowerCase();
    return items.filter(item => {
      if (item.heading) {
        const children = (item.items || []).filter(c => c.label.toLowerCase().includes(q));
        return children.length > 0;
      }
      return item.label.toLowerCase().includes(q);
    }).map(item => {
      if (item.heading) {
        return { ...item, items: (item.items || []).filter(c => c.label.toLowerCase().includes(q)) };
      }
      return item;
    });
  }

  _select(item) {
    this.dispatchEvent(new CustomEvent('app-change', {
      detail: { value: item.value || item.label },
      bubbles: true, composed: true,
    }));
    this.open = false;
    this._query = '';
  }

  _close() {
    this.open = false;
    this._query = '';
  }

  _handleKeydown(e) {
    if (e.key === 'Escape') this._close();
  }

  render() {
    if (!this.open) return html``;
    const filtered = this._filtered();

    return html`
      <div class="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]" @click=${this._close} @keydown=${this._handleKeydown}>
        <div class="fixed inset-0" style="background: var(--overlay, rgba(0,0,0,0.5))"></div>
        <div class="relative w-full max-w-lg rounded-xl shadow-2xl overflow-hidden" style="background: var(--bg-card); border: 1px solid var(--border);" @click=${(e) => e.stopPropagation()}>
          <div class="flex items-center gap-2 px-4" style="border-bottom: 1px solid var(--border)">
            <svg class="w-4 h-4 shrink-0" style="color: var(--fg-muted)" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <input
              class="flex-1 h-12 text-sm bg-transparent outline-none"
              style="color: var(--fg); border: none;"
              placeholder=${this.placeholder}
              .value=${this._query}
              @input=${(e) => { this._query = e.target.value; }}
              autofocus
            />
          </div>
          <div class="max-h-72 overflow-y-auto p-2">
            ${filtered.length === 0
              ? html`<p class="py-6 text-center text-sm" style="color: var(--fg-muted)">No results found.</p>`
              : filtered.map(item => item.heading
                ? html`
                  <div class="px-2 pt-3 pb-1">
                    <p class="text-xs font-medium" style="color: var(--fg-muted)">${item.heading}</p>
                  </div>
                  ${(item.items || []).map(child => this._renderItem(child))}
                `
                : this._renderItem(item)
              )}
          </div>
        </div>
      </div>
    `;
  }

  _renderItem(item) {
    return html`
      <button
        class="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm cursor-pointer transition-colors text-left"
        style="color: var(--fg); background: transparent;"
        @mouseenter=${(e) => e.currentTarget.style.background = 'var(--bg-muted)'}
        @mouseleave=${(e) => e.currentTarget.style.background = 'transparent'}
        @click=${() => this._select(item)}
      >
        ${item.icon ? html`<span style="color: var(--fg-muted)">${item.icon}</span>` : ''}
        <span class="flex-1">${item.label}</span>
        ${item.shortcut ? html`<span class="text-xs" style="color: var(--fg-subtle)">${item.shortcut}</span>` : ''}
      </button>
    `;
  }
}

customElements.define('app-command', AppCommand);

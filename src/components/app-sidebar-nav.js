import { LitElement, html } from 'lit';

export class AppSidebarNav extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    items: { type: Array },
    active: { type: String },
    collapsed: { type: Boolean },
    header: { type: String },
    variant: { type: String },
  };

  constructor() {
    super();
    this.items = [];
    this.active = '';
    this.collapsed = false;
    this.header = '';
    this.variant = 'default';
  }

  _parseItems() {
    if (typeof this.items === 'string') {
      try { return JSON.parse(this.items); } catch { return []; }
    }
    return this.items || [];
  }

  _select(item) {
    this.active = item.id || item.label;
    this.dispatchEvent(new CustomEvent('app-change', {
      detail: { value: this.active, item },
      bubbles: true, composed: true,
    }));
  }

  _toggleCollapse() {
    this.collapsed = !this.collapsed;
    this.dispatchEvent(new CustomEvent('app-collapse', {
      detail: { collapsed: this.collapsed },
      bubbles: true, composed: true,
    }));
  }

  get _bgStyle() {
    if (this.variant === 'inset') return 'background: var(--bg-muted); border: none; border-radius: 0.75rem;';
    return 'background: var(--bg-card); border-right: 1px solid var(--border);';
  }

  render() {
    const items = this._parseItems();
    const w = this.collapsed ? 'w-16' : 'w-60';

    return html`
      <div class="flex flex-col h-full transition-all duration-200 ${w}" style="${this._bgStyle}">
        <!-- Header -->
        <div class="h-14 flex items-center gap-2 px-3 shrink-0" style="border-bottom: 1px solid var(--border);">
          <button
            class="w-8 h-8 rounded-md inline-flex items-center justify-center cursor-pointer shrink-0"
            style="background: transparent; border: none; color: var(--fg-muted);"
            @mouseenter=${(e) => e.currentTarget.style.background = 'var(--bg-muted)'}
            @mouseleave=${(e) => e.currentTarget.style.background = 'transparent'}
            @click=${this._toggleCollapse}
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              ${this.collapsed
                ? html`<path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7"/>`
                : html`<path stroke-linecap="round" stroke-linejoin="round" d="M11 19l-7-7 7-7M19 19l-7-7 7-7"/>`}
            </svg>
          </button>
          ${!this.collapsed && this.header ? html`
            <span class="text-sm font-semibold truncate" style="color: var(--fg)">${this.header}</span>
          ` : ''}
        </div>

        <!-- Nav items -->
        <nav class="flex-1 overflow-y-auto p-2 space-y-0.5">
          ${items.map(item => {
            if (item.separator) {
              return html`<div class="my-2 mx-2" style="border-top: 1px solid var(--border);"></div>`;
            }
            if (item.heading) {
              return this.collapsed ? '' : html`
                <p class="px-3 pt-4 pb-1 text-xs font-semibold uppercase tracking-wider" style="color: var(--fg-subtle)">${item.heading}</p>
              `;
            }
            const id = item.id || item.label;
            const isActive = id === this.active;
            return html`
              <button
                class="w-full flex items-center gap-3 rounded-lg cursor-pointer transition-colors ${this.collapsed ? 'justify-center px-0 py-2.5' : 'px-3 py-2'}"
                style="${isActive
                  ? 'background: var(--primary); color: var(--primary-fg); border: none; font-weight: 500;'
                  : 'background: transparent; color: var(--fg-muted); border: none;'}"
                @mouseenter=${(e) => { if (!isActive) e.currentTarget.style.background = 'var(--bg-muted)'; e.currentTarget.style.color = isActive ? 'var(--primary-fg)' : 'var(--fg)'; }}
                @mouseleave=${(e) => { if (!isActive) e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = isActive ? 'var(--primary-fg)' : 'var(--fg-muted)'; }}
                @click=${() => this._select(item)}
                title=${this.collapsed ? item.label : ''}
              >
                ${item.icon ? html`<span class="text-base shrink-0">${item.icon}</span>` : ''}
                ${!this.collapsed ? html`<span class="text-sm truncate">${item.label}</span>` : ''}
                ${!this.collapsed && item.badge ? html`
                  <span class="ml-auto text-xs rounded-full px-1.5 py-0.5" style="background: color-mix(in srgb, var(--primary) 15%, transparent); color: var(--primary);">${item.badge}</span>
                ` : ''}
              </button>
            `;
          })}
        </nav>

        <!-- Footer slot -->
        <div class="p-2 shrink-0" style="border-top: 1px solid var(--border);">
          <slot name="footer"></slot>
        </div>
      </div>
    `;
  }
}

customElements.define('app-sidebar-nav', AppSidebarNav);

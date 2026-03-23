import { LitElement, html } from 'lit';

export class AppPagination extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    total: { type: Number },
    current: { type: Number },
    siblings: { type: Number },
  };

  constructor() {
    super();
    this.total = 10;
    this.current = 1;
    this.siblings = 1;
  }

  _go(page) {
    if (page < 1 || page > this.total || page === this.current) return;
    this.current = page;
    this.dispatchEvent(new CustomEvent('app-change', {
      detail: { page: this.current },
      bubbles: true, composed: true,
    }));
  }

  get _pages() {
    const { total, current, siblings } = this;
    const range = [];
    const left = Math.max(2, current - siblings);
    const right = Math.min(total - 1, current + siblings);

    range.push(1);
    if (left > 2) range.push('...');
    for (let i = left; i <= right; i++) range.push(i);
    if (right < total - 1) range.push('...');
    if (total > 1) range.push(total);
    return range;
  }

  _btn(content, page, disabled = false, active = false) {
    const base = 'inline-flex items-center justify-center h-9 min-w-[36px] px-3 rounded-md text-sm font-medium transition-colors cursor-pointer select-none';
    const style = active
      ? 'background: var(--primary); color: var(--primary-fg);'
      : disabled
        ? 'color: var(--fg-subtle); opacity: 0.5; cursor: not-allowed;'
        : 'color: var(--fg-muted); background: transparent;';
    return html`
      <button
        class="${base}"
        style="${style} border: 1px solid ${active ? 'transparent' : 'var(--border)'};"
        ?disabled="${disabled}"
        @click="${() => !disabled && this._go(page)}"
        @mouseenter=${(e) => { if (!active && !disabled) e.currentTarget.style.background = 'var(--bg-muted)'; }}
        @mouseleave=${(e) => { if (!active && !disabled) e.currentTarget.style.background = 'transparent'; }}
      >${content}</button>
    `;
  }

  render() {
    const chevronLeft = html`<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>`;
    const chevronRight = html`<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>`;

    return html`
      <nav class="flex items-center gap-1" aria-label="Pagination">
        ${this._btn(chevronLeft, this.current - 1, this.current === 1)}
        ${this._pages.map(p =>
          p === '...'
            ? html`<span class="h-9 min-w-[36px] inline-flex items-center justify-center text-sm" style="color: var(--fg-subtle)">...</span>`
            : this._btn(p, p, false, p === this.current)
        )}
        ${this._btn(chevronRight, this.current + 1, this.current === this.total)}
      </nav>
    `;
  }
}

customElements.define('app-pagination', AppPagination);

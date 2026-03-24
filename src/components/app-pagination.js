import { LitElement, html } from 'lit';

export class AppPagination extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    total: { type: Number },
    current: { type: Number },
    siblings: { type: Number },
    disabled: { type: Boolean },
    mode: { type: Number },
    _searchValue: { state: true },
  };

  constructor() {
    super();
    this.total = 10;
    this.current = 1;
    this.siblings = 1;
    this.disabled = false;
    this.mode = 1;
    this._searchValue = '';
  }

  _go(page) {
    if (this.disabled || page < 1 || page > this.total || page === this.current) return;
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

  _btn(content, page, isDisabled = false, active = false) {
    const dis = this.disabled || isDisabled;
    const base = 'inline-flex items-center justify-center h-9 min-w-[36px] px-3 rounded-md text-sm font-medium transition-colors select-none';
    const style = active
      ? 'background: var(--primary); color: var(--primary-fg);'
      : dis
        ? 'color: var(--fg-subtle); opacity: 0.5; cursor: not-allowed;'
        : 'color: var(--fg-muted); background: transparent; cursor: pointer;';
    return html`
      <button
        class="${base}"
        style="${style} border: 1px solid ${active ? 'transparent' : 'var(--border)'};"
        ?disabled="${dis}"
        @click="${() => !dis && this._go(page)}"
        @mouseenter=${(e) => { if (!active && !dis) e.currentTarget.style.background = 'var(--bg-muted)'; }}
        @mouseleave=${(e) => { if (!active && !dis) e.currentTarget.style.background = active ? 'var(--primary)' : 'transparent'; }}
      >${content}</button>
    `;
  }

  _handleSearchSubmit() {
    const page = Number(this._searchValue);
    if (!Number.isNaN(page) && page >= 1 && page <= this.total) {
      this._go(page);
      this._searchValue = '';
    }
  }

  render() {
    if (this.total <= 1) return html``;

    const chevronLeft = html`<app-icon name="chevron-left" class="w-4 h-4"></app-icon>`;
    const chevronRight = html`<app-icon name="chevron-right" class="w-4 h-4"></app-icon>`;

    const prevContent = this.mode === 2 ? 'Previous' : chevronLeft;
    const nextContent = this.mode === 2 ? 'Next' : chevronRight;

    return html`
      <nav class="flex items-center gap-1" aria-label="Pagination">
        ${this._btn(prevContent, this.current - 1, this.current === 1)}
        ${this._pages.map(p =>
          p === '...'
            ? html`<span class="h-9 min-w-[36px] inline-flex items-center justify-center text-sm" style="color: var(--fg-subtle)">...</span>`
            : this._btn(p, p, false, p === this.current)
        )}
        ${this._btn(nextContent, this.current + 1, this.current === this.total)}
        ${this.mode === 1 ? html`
          <div class="inline-flex items-center gap-1 ml-2">
            <input
              class="h-9 w-16 rounded-md text-sm text-center"
              style="border: 1px solid var(--border); background: var(--bg); color: var(--fg); outline: none;"
              type="number"
              min="1"
              max=${this.total}
              placeholder="Go"
              .value=${this._searchValue}
              ?disabled=${this.disabled}
              @input=${(e) => { this._searchValue = e.target.value; }}
              @keydown=${(e) => { if (e.key === 'Enter') this._handleSearchSubmit(); }}
            />
            <button
              class="inline-flex items-center justify-center h-9 w-9 rounded-md transition-colors cursor-pointer"
              style="border: 1px solid var(--border); background: transparent; color: var(--fg-muted);"
              title="Go to page"
              ?disabled=${this.disabled}
              @click=${() => this._handleSearchSubmit()}
              @mouseenter=${(e) => e.currentTarget.style.background = 'var(--bg-muted)'}
              @mouseleave=${(e) => e.currentTarget.style.background = 'transparent'}
            >
              <app-icon name="search" class="w-4 h-4"></app-icon>
            </button>
          </div>
        ` : ''}
      </nav>
    `;
  }
}

customElements.define('app-pagination', AppPagination);

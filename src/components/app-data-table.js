import { LitElement, html } from 'lit';

export class AppDataTable extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    config: { type: Object },
    _sortKey: { state: true },
    _sortDir: { state: true },
    _search: { state: true },
    _page: { state: true },
    _selected: { state: true },
  };

  constructor() {
    super();
    this.config = { columns: [], data: [], pageSize: 10, searchable: true, selectable: false, striped: false };
    this._sortKey = '';
    this._sortDir = 'asc';
    this._search = '';
    this._page = 0;
    this._selected = new Set();
  }

  get _columns() { return this.config?.columns || []; }
  get _pageSize() { return this.config?.pageSize || 10; }
  get _searchable() { return this.config?.searchable !== false; }
  get _selectable() { return this.config?.selectable === true; }
  get _striped() { return this.config?.striped === true; }

  get _filteredData() {
    let data = [...(this.config?.data || [])];
    if (this._search) {
      const q = this._search.toLowerCase();
      data = data.filter(row =>
        this._columns.some(col => String(row[col.key] ?? '').toLowerCase().includes(q))
      );
    }
    if (this._sortKey) {
      data.sort((a, b) => {
        const av = a[this._sortKey] ?? '';
        const bv = b[this._sortKey] ?? '';
        const cmp = typeof av === 'number' ? av - bv : String(av).localeCompare(String(bv));
        return this._sortDir === 'asc' ? cmp : -cmp;
      });
    }
    return data;
  }

  get _pagedData() {
    const start = this._page * this._pageSize;
    return this._filteredData.slice(start, start + this._pageSize);
  }

  get _totalPages() {
    return Math.max(1, Math.ceil(this._filteredData.length / this._pageSize));
  }

  _sort(key) {
    if (!key) return;
    if (this._sortKey === key) {
      this._sortDir = this._sortDir === 'asc' ? 'desc' : 'asc';
    } else {
      this._sortKey = key;
      this._sortDir = 'asc';
    }
  }

  _onSearch(e) {
    this._search = e.target.value;
    this._page = 0;
  }

  _toggleSelect(id) {
    const next = new Set(this._selected);
    next.has(id) ? next.delete(id) : next.add(id);
    this._selected = next;
    this.dispatchEvent(new CustomEvent('selection-change', { detail: { selected: [...this._selected] }, bubbles: true, composed: true }));
  }

  _toggleAll() {
    if (this._selected.size === this._pagedData.length) {
      this._selected = new Set();
    } else {
      this._selected = new Set(this._pagedData.map((_, i) => this._page * this._pageSize + i));
    }
  }

  _renderSortIcon(key) {
    if (this._sortKey !== key) {
      return html`<app-icon name="arrow-up-down" class="w-3 h-3 opacity-30"></app-icon>`;
    }
    return this._sortDir === 'asc'
      ? html`<app-icon name="chevron-up" class="w-3 h-3"></app-icon>`
      : html`<app-icon name="chevron-down" class="w-3 h-3"></app-icon>`;
  }

  render() {
    const allSelected = this._pagedData.length > 0 && this._selected.size === this._pagedData.length;

    return html`
      <div class="w-full rounded-lg overflow-hidden" style="border: 1px solid var(--border); background: var(--bg-card)">
        <!-- Toolbar -->
        ${this._searchable ? html`
          <div class="flex items-center justify-between px-4 py-3" style="border-bottom: 1px solid var(--border)">
            <div class="relative w-64">
              <app-icon name="search" class="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4" style="color: var(--fg-subtle)"></app-icon>
              <input
                type="text"
                placeholder="Search..."
                .value="${this._search}"
                @input="${this._onSearch}"
                class="w-full h-9 pl-8 pr-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
                style="border: 1px solid var(--input); background: var(--input-bg); color: var(--fg); --tw-ring-color: var(--ring); --tw-ring-offset-color: var(--ring-offset);"
              />
            </div>
            <span class="text-xs" style="color: var(--fg-subtle)">${this._filteredData.length} row${this._filteredData.length !== 1 ? 's' : ''}</span>
          </div>
        ` : ''}

        <!-- Table -->
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr style="border-bottom: 1px solid var(--border)">
                ${this._selectable ? html`
                  <th class="w-10 px-4 py-3 text-left">
                    <div class="flex items-center justify-center h-4 w-4 shrink-0 rounded cursor-pointer" style="border: 1px solid ${allSelected ? 'var(--primary)' : 'var(--input)'}; background: ${allSelected ? 'var(--primary)' : 'transparent'}" @click="${this._toggleAll}">
                      ${allSelected ? html`<app-icon name="check" class="h-3 w-3" style="color: var(--primary-fg)" stroke-width="3"></app-icon>` : ''}
                    </div>
                  </th>
                ` : ''}
                ${this._columns.map(col => html`
                  <th
                    class="px-4 py-3 text-left font-medium ${col.sortable !== false ? 'cursor-pointer select-none' : ''}"
                    style="color: var(--fg-muted)"
                    @click="${() => col.sortable !== false && this._sort(col.key)}"
                  >
                    <div class="flex items-center gap-1.5">
                      <span>${col.label}</span>
                      ${col.sortable !== false ? this._renderSortIcon(col.key) : ''}
                    </div>
                  </th>
                `)}
              </tr>
            </thead>
            <tbody>
              ${this._pagedData.length === 0
                ? html`<tr><td colspan="${this._columns.length + (this._selectable ? 1 : 0)}" class="px-4 py-8 text-center text-sm" style="color: var(--fg-subtle)">No results found.</td></tr>`
                : this._pagedData.map((row, i) => {
                    const globalIdx = this._page * this._pageSize + i;
                    const isSelected = this._selected.has(globalIdx);
                    return html`
                      <tr
                        style="border-bottom: 1px solid var(--border); ${this._striped && i % 2 === 1 ? 'background: var(--bg-muted)' : ''} ${isSelected ? 'background: var(--accent)' : ''}"
                        class="transition-colors"
                      >
                        ${this._selectable ? html`
                          <td class="w-10 px-4 py-3">
                            <div class="flex items-center justify-center h-4 w-4 shrink-0 rounded cursor-pointer" style="border: 1px solid ${isSelected ? 'var(--primary)' : 'var(--input)'}; background: ${isSelected ? 'var(--primary)' : 'transparent'}" @click="${() => this._toggleSelect(globalIdx)}">
                              ${isSelected ? html`<app-icon name="check" class="h-3 w-3" style="color: var(--primary-fg)" stroke-width="3"></app-icon>` : ''}
                            </div>
                          </td>
                        ` : ''}
                        ${this._columns.map(col => html`
                          <td class="px-4 py-3" style="color: var(--fg)">
                            ${col.render ? col.render(row[col.key], row) : row[col.key] ?? ''}
                          </td>
                        `)}
                      </tr>
                    `;
                  })
              }
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        ${this._totalPages > 1 ? html`
          <div class="flex items-center justify-between px-4 py-3" style="border-top: 1px solid var(--border)">
            <span class="text-xs" style="color: var(--fg-subtle)">Page ${this._page + 1} of ${this._totalPages}</span>
            <div class="flex gap-1">
              <button
                ?disabled="${this._page === 0}"
                @click="${() => this._page--}"
                class="px-3 py-1.5 text-xs rounded-md transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                style="border: 1px solid var(--input); color: var(--fg); background: transparent;"
              >Previous</button>
              <button
                ?disabled="${this._page >= this._totalPages - 1}"
                @click="${() => this._page++}"
                class="px-3 py-1.5 text-xs rounded-md transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                style="border: 1px solid var(--input); color: var(--fg); background: transparent;"
              >Next</button>
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }
}

customElements.define('app-data-table', AppDataTable);

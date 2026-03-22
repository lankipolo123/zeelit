import { LitElement, html } from 'lit';

export class AppAccordion extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    items: { type: Array },
    multiple: { type: Boolean },
    _openItems: { state: true },
  };

  constructor() {
    super();
    this.items = [];
    this.multiple = false;
    this._openItems = new Set();
  }

  _toggle(index) {
    const next = new Set(this._openItems);
    if (next.has(index)) {
      next.delete(index);
    } else {
      if (!this.multiple) next.clear();
      next.add(index);
    }
    this._openItems = next;
  }

  render() {
    return html`
      <div class="rounded-lg overflow-hidden" style="border: 1px solid var(--border)">
        ${(this.items || []).map((item, i) => {
          const open = this._openItems.has(i);
          return html`
            <div style="${i > 0 ? 'border-top: 1px solid var(--border)' : ''}">
              <button
                @click="${() => this._toggle(i)}"
                class="flex items-center justify-between w-full px-4 py-3 text-left text-sm font-medium cursor-pointer transition-colors"
                style="color: var(--fg); background: transparent"
              >
                <span>${item.title}</span>
                <svg class="w-4 h-4 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}" style="color: var(--fg-subtle)" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              ${open ? html`
                <div class="px-4 pb-3 text-sm" style="color: var(--fg-muted)">
                  ${item.content}
                </div>
              ` : ''}
            </div>
          `;
        })}
      </div>
    `;
  }
}

customElements.define('app-accordion', AppAccordion);

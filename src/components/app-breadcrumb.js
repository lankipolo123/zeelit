import { LitElement, html } from 'lit';

export class AppBreadcrumb extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    items: { type: Array },
  };

  constructor() {
    super();
    this.items = [];
  }

  _onClick(item, e) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent('breadcrumb-click', {
      detail: { label: item.label, href: item.href },
      bubbles: true, composed: true,
    }));
  }

  render() {
    return html`
      <nav aria-label="Breadcrumb">
        <ol class="flex items-center gap-1.5 text-sm">
          ${(this.items || []).map((item, i) => html`
            ${i > 0 ? html`<li class="flex items-center"><app-icon name="chevron-right" class="h-3.5 w-3.5" style="color: var(--fg-subtle)"></app-icon></li>` : ''}
            <li>
              ${i === this.items.length - 1
                ? html`<span class="font-medium" style="color: var(--fg)">${item.label}</span>`
                : html`<a href="${item.href || '#'}" @click="${(e) => this._onClick(item, e)}" class="transition-colors hover:underline" style="color: var(--fg-muted)">${item.label}</a>`
              }
            </li>
          `)}
        </ol>
      </nav>
    `;
  }
}

customElements.define('app-breadcrumb', AppBreadcrumb);

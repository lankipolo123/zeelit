import { LitElement, html } from 'lit';

export class ZeeTabs extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    tabs: { type: Array },
    activeTab: { type: String },
  };

  constructor() {
    super();
    this.tabs = [];
    this.activeTab = '';
  }

  firstUpdated() {
    if (this.tabs.length && !this.activeTab) {
      this.activeTab = this.tabs[0].id;
    }
  }

  _selectTab(id) {
    this.activeTab = id;
    this.dispatchEvent(new CustomEvent('zee-tab-change', {
      detail: { tab: id },
      bubbles: true, composed: true,
    }));
  }

  render() {
    return html`
      <div>
        <div class="inline-flex h-10 items-center justify-center rounded-md bg-zinc-900 p-1 text-zinc-400">
          ${this.tabs.map(tab => html`
            <button
              @click="${() => this._selectTab(tab.id)}"
              class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all cursor-pointer ${this.activeTab === tab.id ? 'bg-zinc-950 text-zinc-100 shadow-sm' : 'hover:text-zinc-100'}"
            >
              ${tab.label}
            </button>
          `)}
        </div>
        <div class="mt-4">
          <slot name="${this.activeTab}"></slot>
        </div>
      </div>
    `;
  }
}

customElements.define('zee-tabs', ZeeTabs);

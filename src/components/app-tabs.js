import { LitElement, html } from 'lit';

export class AppTabs extends LitElement {
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
    this.dispatchEvent(new CustomEvent('app-tab-change', {
      detail: { tab: id },
      bubbles: true, composed: true,
    }));
    this.requestUpdate();
  }

  render() {
    return html`
      <div>
        <div class="inline-flex h-10 items-center justify-center rounded-md p-1" style="background: var(--tab-bg); color: var(--fg-muted)">
          ${this.tabs.map(tab => html`
            <button
              @click="${() => this._selectTab(tab.id)}"
              class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all cursor-pointer"
              style="${this.activeTab === tab.id ? `background: var(--tab-active-bg); color: var(--fg); box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);` : `color: var(--fg-muted);`}"
            >
              ${tab.label}
            </button>
          `)}
        </div>
        <div class="mt-4">
          ${this.tabs.map(tab => html`
            <div class="${this.activeTab === tab.id ? '' : 'hidden'}">
              ${tab.content || ''}
            </div>
          `)}
        </div>
      </div>
    `;
  }
}

customElements.define('app-tabs', AppTabs);

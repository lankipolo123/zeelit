import { LitElement, html } from 'lit';

export class AppLayout extends LitElement {
    static properties = { sidebarCollapsed: { type: Boolean } };

    constructor() {
        super();
        this.sidebarCollapsed = false;
    }

    toggleSidebar() {
        this.sidebarCollapsed = !this.sidebarCollapsed;
        this.dispatchEvent(new CustomEvent('sidebar-toggle', {
            detail: { collapsed: this.sidebarCollapsed },
            bubbles: true,
            composed: true
        }));
    }

    render() {
        return html`
      <div class="grid grid-rows-[auto_1fr] grid-cols-[var(--sidebar-width)_1fr] h-screen w-screen">
        <slot name="sidebar"></slot>
        <slot name="header"></slot>
        <slot name="content" class="overflow-auto"></slot>
        <button 
          @click=${this.toggleSidebar} 
          class="absolute top-20 left-[var(--sidebar-width)] transform -translate-x-1/2 bg-white border rounded-full p-2 shadow hover:bg-gray-100 transition"
        >
          <img src="/assets/collapsible.svg" class="${this.sidebarCollapsed ? 'rotate-180' : ''}" />
        </button>
      </div>
    `;
    }
}

customElements.define('app-layout', AppLayout);
import { LitElement, html } from 'lit';

export class AppLayout extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    sidebarCollapsed: { type: Boolean },
  };

  constructor() {
    super();
    this.sidebarCollapsed = false;
  }

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
    this.dispatchEvent(new CustomEvent('sidebar-toggle', {
      detail: { collapsed: this.sidebarCollapsed },
      bubbles: true,
      composed: true,
    }));
  }

  render() {
    const sidebarWidth = this.sidebarCollapsed ? '4rem' : '16rem';
    return html`
      <div class="flex h-screen w-screen bg-zinc-950" style="--sidebar-width: ${sidebarWidth}">
        <div class="shrink-0" style="width: var(--sidebar-width); transition: width 0.3s;">
          <div id="sidebar"></div>
        </div>
        <div class="flex flex-col flex-1 min-w-0">
          <div id="header"></div>
          <div id="content" class="flex-1 overflow-auto"></div>
        </div>
        <button
          @click=${this.toggleSidebar}
          class="absolute top-4 cursor-pointer transition-all bg-zinc-800 border border-zinc-700 rounded-full p-1.5 shadow hover:bg-zinc-700 text-zinc-400 hover:text-zinc-200"
          style="left: calc(var(--sidebar-width) - 12px);"
        >
          <svg class="w-3.5 h-3.5 transition-transform ${this.sidebarCollapsed ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
        </button>
      </div>
    `;
  }
}

customElements.define('app-layout', AppLayout);

import { LitElement, html } from 'lit';

export class AppSidebarLayout extends LitElement {
  createRenderRoot() {
    return this;
  }

  static properties = {
    sidebarWidth: { type: String },
  };

  constructor() {
    super();
    this.sidebarWidth = '16rem';
  }

  render() {
    return html`
      <div
        class="flex h-full w-full"
        style="background: var(--bg);"
      >
        <!-- Sidebar -->
        <aside
          class="shrink-0 flex flex-col h-full"
          style="
            width: ${this.sidebarWidth};
            border-right: 1px solid var(--border);
            background: var(--bg-card);
          "
        >
          <slot name="sidebar"></slot>
        </aside>

        <!-- Content -->
        <div class="flex-1 flex flex-col min-w-0 h-full">
          <slot name="content"></slot>
        </div>
      </div>
    `;
  }
}

customElements.define('app-sidebar-layout', AppSidebarLayout);

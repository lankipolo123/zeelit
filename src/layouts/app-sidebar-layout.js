import { LitElement, html, css } from 'lit';

export class AppSidebarLayout extends LitElement {
  static styles = css`
    :host {
      display: block;
      height: 100%;
    }
  `;
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
        style="
          display: flex;
          height: 100%;
          width: 100%;
          background: var(--bg);
        "
      >
        <!-- Sidebar -->
        <div
          style="
            width: ${this.sidebarWidth};
            flex-shrink: 0;
            display: flex;
            flex-direction: column;
            height: 100%;
            border-right: 1px solid var(--border);
            background: var(--bg-card);
          "
        >
          <slot name="sidebar"></slot>
        </div>

        <!-- Content -->
        <div
          style="
            flex: 1;
            display: flex;
            flex-direction: column;
            min-width: 0;
            height: 100%;
          "
        >
          <slot name="content"></slot>
        </div>
      </div>
    `;
  }
}

customElements.define('app-sidebar-layout', AppSidebarLayout);

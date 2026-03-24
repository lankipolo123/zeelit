import { LitElement, html, css } from 'lit';

export class AppSidebarLayout extends LitElement {
  static properties = {
    sidebarWidth: { type: String },
  };

  static styles = css`
    :host {
      display: contents;
    }
    .sidebar-layout {
      display: flex;
      height: 100%;
      width: 100%;
    }
    .sidebar {
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      height: 100%;
      border: 1px solid var(--border);
      border-radius: 0.75rem;
      background: var(--bg-card);
    }
    .sidebar ::slotted(*) {
      flex: 1;
      min-height: 0;
    }
    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      min-width: 0;
      height: 100%;
      border: 1px solid var(--border);
      border-radius: 0.75rem;
      background: var(--bg-card);
    }
    .content ::slotted(*) {
      flex: 1;
      min-height: 0;
    }
  `;

  constructor() {
    super();
    this.sidebarWidth = '16rem';
  }

  render() {
    return html`
      <div class="sidebar-layout">
        <div class="sidebar" style="width: ${this.sidebarWidth}">
          <slot name="sidebar">Sidebar Content</slot>
        </div>
        <div class="content">
          <slot name="content">Page Content</slot>
        </div>
      </div>
    `;
  }
}

customElements.define('app-sidebar-layout', AppSidebarLayout);

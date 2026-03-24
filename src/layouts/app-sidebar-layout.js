import { LitElement, html, css } from 'lit';

export class AppSidebarLayout extends LitElement {
  static properties = {
    sidebarWidth: { type: String },
  };

  static styles = css`
    :host {
      display: flex;
      height: 100%;
      width: 100%;
    }
    .sidebar {
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      border: 1px solid var(--border);
      border-radius: 0.75rem;
      background: var(--bg-card);
      color: var(--fg-muted);
      font-size: 0.875rem;
    }
    .sidebar ::slotted(*) {
      flex: 1;
      min-height: 0;
      width: 100%;
    }
    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-width: 0;
      height: 100%;
      border: 1px solid var(--border);
      border-radius: 0.75rem;
      background: var(--bg-card);
      color: var(--fg-muted);
      font-size: 0.875rem;
    }
    .content ::slotted(*) {
      flex: 1;
      min-height: 0;
      width: 100%;
    }
  `;

  constructor() {
    super();
    this.sidebarWidth = '16rem';
  }

  render() {
    return html`
      <div class="sidebar" style="width: ${this.sidebarWidth}">
        <slot name="sidebar">Sidebar Content</slot>
      </div>
      <div class="content">
        <slot name="content">Page Content</slot>
      </div>
    `;
  }
}

customElements.define('app-sidebar-layout', AppSidebarLayout);

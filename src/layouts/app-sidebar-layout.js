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
      background: var(--bg);
    }
    .sidebar {
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      height: 100%;
      border-right: 1px solid var(--border);
      background: var(--bg-card);
    }
    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      min-width: 0;
      height: 100%;
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
          <slot name="sidebar"></slot>
        </div>
        <div class="content">
          <slot name="content"></slot>
        </div>
      </div>
    `;
  }
}

customElements.define('app-sidebar-layout', AppSidebarLayout);

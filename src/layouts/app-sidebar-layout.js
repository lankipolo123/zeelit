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
      background: var(--bg);
    }
    ::slotted(:first-child) {
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      height: 100%;
      border-right: 1px solid var(--border);
      background: var(--bg-card);
    }
    ::slotted(:nth-child(2)) {
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

  updated() {
    const first = this.firstElementChild;
    if (first) first.style.width = this.sidebarWidth;
  }

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('app-sidebar-layout', AppSidebarLayout);

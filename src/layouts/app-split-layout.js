import { LitElement, html, css } from 'lit';

export class AppSplitLayout extends LitElement {
  static styles = css`
    :host {
      display: flex;
      height: 100%;
      width: 100%;
    }
    .wrapper {
      flex: 1;
      display: flex;
      height: 100%;
      border: 1px solid var(--border);
      background: var(--bg-card);
    }
    .left {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      border-right: 1px solid var(--border);
      color: var(--fg-muted);
      font-size: 0.875rem;
    }
    .right {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: var(--fg-muted);
      font-size: 0.875rem;
    }
  `;

  render() {
    return html`
      <div class="wrapper">
        <div class="left">
          <slot name="left">Left Content</slot>
        </div>
        <div class="right">
          <slot name="right">Right Content</slot>
        </div>
      </div>
    `;
  }
}

customElements.define('app-split-layout', AppSplitLayout);

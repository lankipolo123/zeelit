import { LitElement, html, css } from 'lit';

export class AppDualCardLayout extends LitElement {
  static styles = css`
    :host {
      display: flex;
      height: 100%;
      width: 100%;
    }
    .outer {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      border: 1px solid var(--border);
      background: var(--bg-card);
    }
    .inner {
      display: flex;
      width: 60%;
      height: 60%;
      border: 1px solid var(--border);
      background: var(--bg-card);
    }
    .left {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: 1px solid var(--border);
      color: var(--fg-muted);
      font-size: 0.875rem;
    }
    .right {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--fg-muted);
      font-size: 0.875rem;
    }
  `;

  render() {
    return html`
      <div class="outer">
        <div class="inner">
          <div class="left">
            <slot name="left">Left Section</slot>
          </div>
          <div class="right">
            <slot name="right">Right Section</slot>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('app-dual-card-layout', AppDualCardLayout);

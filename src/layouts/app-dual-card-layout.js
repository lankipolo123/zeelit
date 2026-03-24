import { LitElement, html, css } from 'lit';

export class AppDualCardLayout extends LitElement {
  static styles = css`
    :host {
      display: flex;
      height: 100%;
      width: 100%;
    }
    .card {
      flex: 1;
      display: flex;
      height: 100%;
      border: 1px solid var(--border);
      border-radius: 0.75rem;
      background: var(--bg-card);
      overflow: hidden;
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
      <div class="card">
        <div class="left">
          <slot name="left">Left Section</slot>
        </div>
        <div class="right">
          <slot name="right">Right Section</slot>
        </div>
      </div>
    `;
  }
}

customElements.define('app-dual-card-layout', AppDualCardLayout);

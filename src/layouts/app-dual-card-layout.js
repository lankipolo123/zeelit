import { LitElement, html, css } from 'lit';

export class AppDualCardLayout extends LitElement {
  static styles = css`
    :host {
      display: flex;
      height: 100%;
      width: 100%;
    }
    .container {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      height: 100%;
      border: 1px solid var(--border);
      background: var(--bg);
      padding: 2rem;
    }
    .card {
      width: 14rem;
      max-height: 14rem;
      aspect-ratio: 1;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid var(--border);
      border-radius: 0.75rem;
      background: var(--bg-card);
      color: var(--fg-muted);
      font-size: 0.875rem;
    }
  `;

  render() {
    return html`
      <div class="container">
        <div class="card">
          <slot name="left">Card 1</slot>
        </div>
        <div class="card">
          <slot name="right">Card 2</slot>
        </div>
      </div>
    `;
  }
}

customElements.define('app-dual-card-layout', AppDualCardLayout);

import { LitElement, html, css } from 'lit';

export class AppCenterCardLayout extends LitElement {
  static properties = {
    cardPosition: { type: String, attribute: 'card-position' },
  };

  static styles = css`
    :host {
      display: flex;
      height: 100%;
      width: 100%;
      position: relative;
    }
    .left {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      border: 1px solid var(--border);
      background: var(--bg-card);
      color: var(--fg-muted);
      font-size: 0.875rem;
    }
    .right {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      border: 1px solid var(--border);
      background: var(--bg-card);
      color: var(--fg-muted);
      font-size: 0.875rem;
    }
    .card {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 14rem;
      aspect-ratio: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      border: 1px solid var(--border);
      border-radius: 0.75rem;
      background: var(--bg-card);
      color: var(--fg);
      text-align: center;
    }
    .card.center {
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .card.left {
      left: 2rem;
    }
    .card.right {
      right: 2rem;
    }
  `;

  constructor() {
    super();
    this.cardPosition = 'center';
  }

  render() {
    return html`
      <div class="left">Left Section</div>
      <div class="right">Right Section</div>
      <div class="card ${this.cardPosition}">
        <slot>Card Content</slot>
      </div>
    `;
  }
}

customElements.define('app-center-card-layout', AppCenterCardLayout);

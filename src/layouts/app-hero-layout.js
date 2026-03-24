import { LitElement, html, css } from 'lit';

export class AppHeroLayout extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
    }
    .nav {
      flex-shrink: 0;
    }
    .nav ::slotted(*) {
      width: 100%;
    }
    .hero {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      padding: 2rem;
      background: var(--bg-card);
      color: var(--fg-muted);
      font-size: 0.875rem;
    }
    .hero ::slotted(*) {
      width: 100%;
    }
  `;

  render() {
    return html`
      <div class="nav">
        <slot name="nav">Nav</slot>
      </div>
      <div class="hero">
        <slot name="hero">Jumbotron Content</slot>
      </div>
    `;
  }
}

customElements.define('app-hero-layout', AppHeroLayout);

import { LitElement, html } from 'lit';

export class AppHoverCard extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    _open: { state: true },
  };

  constructor() {
    super();
    this._open = false;
    this._timer = null;
    this._userNodes = null;
  }

  connectedCallback() {
    if (this._userNodes === null) {
      this._userNodes = { trigger: null, content: null };
      const triggerEl = this.querySelector('[slot="trigger"]');
      const contentEl = this.querySelector('[slot="content"]');
      if (triggerEl) {
        this._userNodes.trigger = triggerEl;
        triggerEl.remove();
      }
      if (contentEl) {
        this._userNodes.content = contentEl;
        contentEl.remove();
      }
    }
    super.connectedCallback();
  }

  updated() {
    if (this._userNodes?.trigger) {
      const slot = this.querySelector('[data-trigger]');
      if (slot && !slot.firstChild) slot.appendChild(this._userNodes.trigger);
    }
    if (this._userNodes?.content) {
      const slot = this.querySelector('[data-content]');
      if (slot && !slot.firstChild) slot.appendChild(this._userNodes.content);
    }
  }

  _show() {
    clearTimeout(this._timer);
    this._timer = setTimeout(() => { this._open = true; }, 200);
  }

  _hide() {
    clearTimeout(this._timer);
    this._timer = setTimeout(() => { this._open = false; }, 300);
  }

  render() {
    return html`
      <div class="relative inline-block"
        @mouseenter="${this._show}"
        @mouseleave="${this._hide}"
      >
        <span data-trigger class="cursor-pointer"></span>
        ${this._open ? html`
          <div class="absolute left-1/2 -translate-x-1/2 mt-2 z-50 w-72 rounded-lg p-4 shadow-lg animate-in"
            style="background: var(--bg-card); border: 1px solid var(--border);"
            @mouseenter="${this._show}"
            @mouseleave="${this._hide}"
          >
            <div data-content></div>
          </div>
        ` : ''}
      </div>
    `;
  }
}

customElements.define('app-hover-card', AppHoverCard);

import { LitElement, html } from 'lit';

export class AppTooltip extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    text: { type: String },
    position: { type: String },
    _visible: { state: true },
    _pos: { state: true },
  };

  constructor() {
    super();
    this.text = '';
    this.position = 'top';
    this._visible = false;
    this._pos = '';
    this._userNodes = null;
  }

  connectedCallback() {
    if (this._userNodes === null) {
      this._userNodes = [];
      while (this.firstChild) {
        this._userNodes.push(this.removeChild(this.firstChild));
      }
    }
    super.connectedCallback();
  }

  updated() {
    if (this._userNodes?.length) {
      const target = this.querySelector('[data-tooltip-trigger]');
      if (target) {
        this._userNodes.forEach(n => target.appendChild(n));
        this._userNodes = [];
      }
    }
  }

  _calcPos(r) {
    const g = 8;
    switch (this.position) {
      case 'bottom': return `top:${r.bottom + g}px;left:${r.left + r.width / 2}px;transform:translateX(-50%)`;
      case 'left':   return `top:${r.top + r.height / 2}px;right:${window.innerWidth - r.left + g}px;transform:translateY(-50%)`;
      case 'right':  return `top:${r.top + r.height / 2}px;left:${r.right + g}px;transform:translateY(-50%)`;
      default:       return `bottom:${window.innerHeight - r.top + g}px;left:${r.left + r.width / 2}px;transform:translateX(-50%)`;
    }
  }

  _show() {
    this._pos = this._calcPos(this.getBoundingClientRect());
    this._visible = true;
  }

  _hide() { this._visible = false; }

  render() {
    return html`
      <div class="relative inline-block"
        @mouseenter="${this._show}"
        @mouseleave="${this._hide}">
        <div data-tooltip-trigger></div>
        ${this._visible ? html`
          <div class="fixed z-[9999] px-2.5 py-1.5 text-xs rounded-md shadow-lg whitespace-nowrap pointer-events-none"
            style="${this._pos}; background: var(--primary); color: var(--primary-fg); border: 1px solid var(--border);"
            role="tooltip">${this.text}</div>
        ` : ''}
      </div>
    `;
  }
}

customElements.define('app-tooltip', AppTooltip);

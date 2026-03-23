import { LitElement, html } from 'lit';

export class AppTooltip extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    text: { type: String },
    position: { type: String },
    _visible: { state: true },
  };

  constructor() {
    super();
    this.text = '';
    this.position = 'top';
    this._visible = false;
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

  _show() { this._visible = true; }
  _hide() { this._visible = false; }

  get _tooltipClasses() {
    const base = 'absolute z-50 px-2.5 py-1.5 text-xs rounded-md shadow-lg whitespace-nowrap pointer-events-none transition-opacity duration-150';
    const visibility = this._visible ? 'opacity-100' : 'opacity-0 invisible';
    const positions = {
      top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
      bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
      left: 'right-full top-1/2 -translate-y-1/2 mr-2',
      right: 'left-full top-1/2 -translate-y-1/2 ml-2',
    };
    return `${base} ${visibility} ${positions[this.position] || positions.top}`;
  }

  render() {
    return html`
      <div class="relative inline-block"
        @mouseenter="${this._show}"
        @mouseleave="${this._hide}">
        <div data-tooltip-trigger></div>
        <div class="${this._tooltipClasses}" style="background: var(--primary); color: var(--primary-fg); border: 1px solid var(--border);" role="tooltip">${this.text}</div>
      </div>
    `;
  }
}

customElements.define('app-tooltip', AppTooltip);

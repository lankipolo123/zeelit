import { LitElement, html } from 'lit';

export class AppChip extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    label: { type: String },
    variant: { type: String },
    size: { type: String },
    dismissible: { type: Boolean },
    selected: { type: Boolean },
  };

  constructor() {
    super();
    this.label = '';
    this.variant = 'default';
    this.size = 'default';
    this.dismissible = false;
    this.selected = false;
  }

  _dismiss() {
    this.dispatchEvent(new CustomEvent('app-dismiss', {
      detail: { label: this.label },
      bubbles: true, composed: true,
    }));
  }

  _toggle() {
    this.selected = !this.selected;
    this.dispatchEvent(new CustomEvent('app-change', {
      detail: { label: this.label, selected: this.selected },
      bubbles: true, composed: true,
    }));
  }

  get _sizeClasses() {
    if (this.size === 'sm') return 'text-xs px-2 py-0.5 gap-1';
    if (this.size === 'lg') return 'text-sm px-4 py-2 gap-2';
    return 'text-xs px-3 py-1.5 gap-1.5';
  }

  get _style() {
    const v = this.variant;
    if (this.selected) return 'background: var(--primary); color: var(--primary-fg); border: 1px solid transparent;';
    if (v === 'primary') return 'background: color-mix(in srgb, var(--primary) 15%, transparent); color: var(--primary); border: 1px solid transparent;';
    if (v === 'success') return 'background: #dcfce7; color: #16a34a; border: 1px solid transparent;';
    if (v === 'warning') return 'background: #fef9c3; color: #ca8a04; border: 1px solid transparent;';
    if (v === 'danger') return 'background: #fee2e2; color: #dc2626; border: 1px solid transparent;';
    return 'background: var(--bg-muted); color: var(--fg-muted); border: 1px solid var(--border);';
  }

  render() {
    return html`
      <span
        class="inline-flex items-center rounded-full font-medium ${this._sizeClasses} ${this.selected !== undefined && !this.dismissible ? 'cursor-pointer select-none' : ''}"
        style="${this._style}"
        @click=${!this.dismissible ? () => this._toggle() : undefined}
      >
        ${this.label}
        ${this.dismissible ? html`
          <button
            class="inline-flex items-center justify-center rounded-full cursor-pointer transition-opacity opacity-60 hover:opacity-100"
            style="background: transparent; border: none; color: inherit;"
            @click=${(e) => { e.stopPropagation(); this._dismiss(); }}
          >
            <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        ` : ''}
      </span>
    `;
  }
}

customElements.define('app-chip', AppChip);

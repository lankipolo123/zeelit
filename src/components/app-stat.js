import { LitElement, html } from 'lit';

export class AppStat extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    label: { type: String },
    value: { type: String },
    description: { type: String },
    trend: { type: String },
    trendValue: { type: String },
  };

  constructor() {
    super();
    this.label = '';
    this.value = '';
    this.description = '';
    this.trend = '';
    this.trendValue = '';
  }

  get _trendStyle() {
    if (this.trend === 'up') return 'color: #22c55e;';
    if (this.trend === 'down') return 'color: #ef4444;';
    return 'color: var(--fg-muted);';
  }

  get _trendIcon() {
    if (this.trend === 'up') {
      return html`<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7 17l4.586-4.586a2 2 0 012.828 0L19 17M17 7h2a2 2 0 012 2v2"/></svg>`;
    }
    if (this.trend === 'down') {
      return html`<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 7l-4.586 4.586a2 2 0 01-2.828 0L5 7M7 17H5a2 2 0 01-2-2v-2"/></svg>`;
    }
    return '';
  }

  render() {
    return html`
      <div class="rounded-lg p-5 space-y-2" style="border: 1px solid var(--border); background: var(--bg-card);">
        ${this.label ? html`<p class="text-xs font-medium uppercase tracking-wider" style="color: var(--fg-muted)">${this.label}</p>` : ''}
        <p class="text-2xl font-bold" style="color: var(--fg-heading)">${this.value}</p>
        ${this.trendValue || this.description ? html`
          <div class="flex items-center gap-1.5">
            ${this.trendValue ? html`
              <span class="inline-flex items-center gap-0.5 text-xs font-medium" style="${this._trendStyle}">
                ${this._trendIcon}
                ${this.trendValue}
              </span>
            ` : ''}
            ${this.description ? html`<span class="text-xs" style="color: var(--fg-muted)">${this.description}</span>` : ''}
          </div>
        ` : ''}
      </div>
    `;
  }
}

customElements.define('app-stat', AppStat);

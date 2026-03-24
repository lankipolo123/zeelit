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
      return html`<app-icon name="trending-up" class="w-3.5 h-3.5"></app-icon>`;
    }
    if (this.trend === 'down') {
      return html`<app-icon name="trending-down" class="w-3.5 h-3.5"></app-icon>`;
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

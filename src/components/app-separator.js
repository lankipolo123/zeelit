import { LitElement, html } from 'lit';

export class AppSeparator extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    orientation: { type: String },
    label:       { type: String },
  };

  constructor() {
    super();
    this.orientation = 'horizontal';
    this.label = '';
  }

  render() {
    if (this.label) {
      return html`
        <div class="flex items-center gap-3" style="width:100%;">
          <div class="h-px flex-1" style="background:var(--border)" role="separator"></div>
          <span class="text-xs" style="color:var(--fg-muted);white-space:nowrap;">${this.label}</span>
          <div class="h-px flex-1" style="background:var(--border)" role="separator"></div>
        </div>
      `;
    }
    const classes = this.orientation === 'vertical' ? 'h-full w-px' : 'h-px w-full';
    return html`<div class="${classes}" style="background: var(--border)" role="separator"></div>`;
  }
}

customElements.define('app-separator', AppSeparator);

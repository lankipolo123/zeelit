import { LitElement, html } from 'lit';

export class AppTimeline extends LitElement {
  createRenderRoot() {
    return this;
  }

  static properties = {
    items: { type: Array },
  };

  constructor() {
    super();
    this.items = [];
  }

  _parseItems() {
    if (typeof this.items === 'string') {
      try {
        return JSON.parse(this.items);
      } catch {
        return [];
      }
    }
    return this.items || [];
  }

  render() {
    const items = this._parseItems();
    if (!items.length) return html``;

    return html`
      <div class="flex flex-col">
        ${items.map((item, i) => {
          const isLast = i === items.length - 1;
          const color = item.color || 'var(--primary)';

          return html`
            <div class="flex gap-4">
              <!-- Dot + line -->
              <div class="flex flex-col items-center">
                <div
                  class="w-3 h-3 rounded-full shrink-0 mt-1"
                  style="
                    background: ${color};
                    box-shadow: 0 0 0 3px color-mix(in srgb, ${color} 20%, transparent);
                  "
                ></div>
                ${!isLast ? html`
                  <div
                    class="w-0.5 flex-1 min-h-[16px]"
                    style="background: var(--border)"
                  ></div>
                ` : ''}
              </div>

              <!-- Content -->
              <div class="${isLast ? '' : 'pb-6'}">
                ${item.time ? html`
                  <p class="text-xs mb-0.5" style="color: var(--fg-muted)">
                    ${item.time}
                  </p>
                ` : ''}
                <p class="text-sm font-medium" style="color: var(--fg)">
                  ${item.title}
                </p>
                ${item.description ? html`
                  <p class="text-xs mt-0.5" style="color: var(--fg-muted)">
                    ${item.description}
                  </p>
                ` : ''}
              </div>
            </div>
          `;
        })}
      </div>
    `;
  }
}

customElements.define('app-timeline', AppTimeline);

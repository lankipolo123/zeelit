import { LitElement, html } from 'lit';

const checkIcon = html`
  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
  </svg>
`;

export class AppStepper extends LitElement {
  createRenderRoot() {
    return this;
  }

  static properties = {
    steps: { type: Array },
    current: { type: Number },
    orientation: { type: String },
  };

  constructor() {
    super();
    this.steps = [];
    this.current = 0;
    this.orientation = 'horizontal';
  }

  _parseSteps() {
    if (typeof this.steps === 'string') {
      try {
        return JSON.parse(this.steps);
      } catch {
        return [];
      }
    }
    return this.steps || [];
  }

  _getStatus(index) {
    if (index < this.current) return 'completed';
    if (index === this.current) return 'active';
    return 'upcoming';
  }

  _getCircleStyle(status) {
    if (status === 'completed') {
      return 'background: var(--primary); color: var(--primary-fg);';
    }
    if (status === 'active') {
      return 'border: 2px solid var(--primary); color: var(--primary); background: transparent;';
    }
    return 'border: 2px solid var(--border); color: var(--fg-subtle); background: transparent;';
  }

  _getLineStyle(index) {
    return index < this.current
      ? 'background: var(--primary)'
      : 'background: var(--border)';
  }

  _renderVertical(steps) {
    return html`
      <div class="flex flex-col">
        ${steps.map((step, i) => {
          const status = this._getStatus(i);
          const label = typeof step === 'string' ? step : step.label;
          const desc = typeof step === 'string' ? '' : step.description || '';
          const isLast = i === steps.length - 1;

          return html`
            <div class="flex gap-3">
              <div class="flex flex-col items-center">
                <div
                  class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                  style="${this._getCircleStyle(status)}"
                >
                  ${status === 'completed' ? checkIcon : i + 1}
                </div>
                ${!isLast ? html`
                  <div
                    class="w-0.5 flex-1 min-h-[24px] my-1"
                    style="${this._getLineStyle(i)}"
                  ></div>
                ` : ''}
              </div>
              <div class="pb-6">
                <p
                  class="text-sm font-medium"
                  style="color: ${status === 'upcoming' ? 'var(--fg-subtle)' : 'var(--fg)'}"
                >
                  ${label}
                </p>
                ${desc ? html`
                  <p class="text-xs mt-0.5" style="color: var(--fg-muted)">
                    ${desc}
                  </p>
                ` : ''}
              </div>
            </div>
          `;
        })}
      </div>
    `;
  }

  _renderHorizontal(steps) {
    return html`
      <div class="flex items-center w-full">
        ${steps.map((step, i) => {
          const status = this._getStatus(i);
          const label = typeof step === 'string' ? step : step.label;
          const isLast = i === steps.length - 1;

          return html`
            <div class="flex items-center ${isLast ? '' : 'flex-1'}">
              <div class="flex flex-col items-center gap-1.5">
                <div
                  class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                  style="${this._getCircleStyle(status)}"
                >
                  ${status === 'completed' ? checkIcon : i + 1}
                </div>
                <span
                  class="text-xs font-medium"
                  style="color: ${status === 'upcoming' ? 'var(--fg-subtle)' : 'var(--fg)'}"
                >
                  ${label}
                </span>
              </div>
              ${!isLast ? html`
                <div
                  class="flex-1 h-0.5 mx-3"
                  style="${this._getLineStyle(i)}"
                ></div>
              ` : ''}
            </div>
          `;
        })}
      </div>
    `;
  }

  render() {
    const steps = this._parseSteps();
    if (!steps.length) return html``;

    return this.orientation === 'vertical'
      ? this._renderVertical(steps)
      : this._renderHorizontal(steps);
  }
}

customElements.define('app-stepper', AppStepper);

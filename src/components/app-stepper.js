import { LitElement, html } from 'lit';

export class AppStepper extends LitElement {
  createRenderRoot() { return this; }

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
      try { return JSON.parse(this.steps); } catch { return []; }
    }
    return this.steps || [];
  }

  render() {
    const steps = this._parseSteps();
    if (!steps.length) return html``;
    const vertical = this.orientation === 'vertical';

    if (vertical) {
      return html`
        <div class="flex flex-col">
          ${steps.map((step, i) => {
            const status = i < this.current ? 'completed' : i === this.current ? 'active' : 'upcoming';
            const label = typeof step === 'string' ? step : step.label;
            const desc = typeof step === 'string' ? '' : step.description || '';
            const isLast = i === steps.length - 1;
            return html`
              <div class="flex gap-3">
                <div class="flex flex-col items-center">
                  <div class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                    style="${status === 'completed'
                      ? 'background: var(--primary); color: var(--primary-fg);'
                      : status === 'active'
                        ? 'border: 2px solid var(--primary); color: var(--primary); background: transparent;'
                        : 'border: 2px solid var(--border); color: var(--fg-subtle); background: transparent;'}"
                  >${status === 'completed'
                    ? html`<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>`
                    : i + 1}</div>
                  ${!isLast ? html`<div class="w-0.5 flex-1 min-h-[24px] my-1" style="background: ${i < this.current ? 'var(--primary)' : 'var(--border)'}"></div>` : ''}
                </div>
                <div class="pb-6">
                  <p class="text-sm font-medium" style="color: ${status === 'upcoming' ? 'var(--fg-subtle)' : 'var(--fg)'}">${label}</p>
                  ${desc ? html`<p class="text-xs mt-0.5" style="color: var(--fg-muted)">${desc}</p>` : ''}
                </div>
              </div>
            `;
          })}
        </div>
      `;
    }

    return html`
      <div class="flex items-center w-full">
        ${steps.map((step, i) => {
          const status = i < this.current ? 'completed' : i === this.current ? 'active' : 'upcoming';
          const label = typeof step === 'string' ? step : step.label;
          const isLast = i === steps.length - 1;
          return html`
            <div class="flex items-center ${isLast ? '' : 'flex-1'}">
              <div class="flex flex-col items-center gap-1.5">
                <div class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                  style="${status === 'completed'
                    ? 'background: var(--primary); color: var(--primary-fg);'
                    : status === 'active'
                      ? 'border: 2px solid var(--primary); color: var(--primary); background: transparent;'
                      : 'border: 2px solid var(--border); color: var(--fg-subtle); background: transparent;'}"
                >${status === 'completed'
                  ? html`<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>`
                  : i + 1}</div>
                <span class="text-xs font-medium" style="color: ${status === 'upcoming' ? 'var(--fg-subtle)' : 'var(--fg)'}">${label}</span>
              </div>
              ${!isLast ? html`<div class="flex-1 h-0.5 mx-3" style="background: ${i < this.current ? 'var(--primary)' : 'var(--border)'}"></div>` : ''}
            </div>
          `;
        })}
      </div>
    `;
  }
}

customElements.define('app-stepper', AppStepper);

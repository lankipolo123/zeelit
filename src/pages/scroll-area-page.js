import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-scroll-area.js?raw';
import pageSource from './scroll-area-page.js?raw';

export function scrollAreaPage(ctx) {
  return ctx.componentPage('Scroll Area', 'A styled scrollable container — set height, orientation, and put any content inside. Use it for lists, logs, code panels, or any overflowing content.', [
    {
      title: 'Tag List',
      description: 'Set a fixed height and put your items inside.',
      code: `<app-scroll-area height="200px">
  <p>Typography</p>
  <p>Layout</p>
  <p>Forms</p>
  <p>Navigation</p>
  <p>Feedback</p>
  <!-- add as many as you need -->
</app-scroll-area>`,
      preview: html`
        <app-scroll-area height="200px">
          <div class="space-y-2">
            ${['Typography', 'Layout', 'Forms', 'Navigation', 'Data Display', 'Feedback', 'Overlay', 'Actions', 'Utilities', 'Animation', 'Charts', 'Icons', 'Colors', 'Spacing', 'Borders'].map(t => html`<div class="px-3 py-2 text-sm rounded" style="border: 1px solid var(--border); color: var(--fg)">${t}</div>`)}
          </div>
        </app-scroll-area>
      `,
    },
    {
      title: 'Horizontal Scroll',
      description: 'Set orientation="horizontal" for horizontal content.',
      code: `<app-scroll-area height="80px" orientation="horizontal">
  <span>Tag 1</span>
  <span>Tag 2</span>
  <span>Tag 3</span>
  <!-- overflows horizontally -->
</app-scroll-area>`,
      preview: html`
        <app-scroll-area height="80px" orientation="horizontal">
          ${['Design', 'Frontend', 'Backend', 'DevOps', 'Mobile', 'AI', 'Security', 'Testing'].map(t => html`<div class="inline-flex items-center px-4 py-2 text-sm rounded-full shrink-0" style="border: 1px solid var(--border); color: var(--fg)">${t}</div>`)}
        </app-scroll-area>
      `,
    },
  ], meta('scroll-area', source, pageSource));
}

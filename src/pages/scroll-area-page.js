import { html } from 'lit';
import source from '../components/app-scroll-area.js?raw';

const TAG = 'app-scroll-area';
const IMPORT = '@/components/app-scroll-area.js';
const FILE = 'app-scroll-area.js';

export function scrollAreaPage(ctx) {
  const tags = ['Typography', 'Layout', 'Forms', 'Navigation', 'Data Display', 'Feedback', 'Overlay', 'Actions', 'Utilities', 'Animation', 'Charts', 'Icons', 'Colors', 'Spacing', 'Borders'];

  return ctx.componentPage('Scroll Area', 'A scrollable container with styled scrollbars.', [
    {
      title: 'Vertical Scroll',
      description: 'A fixed-height container with vertical scrolling.',
      code: `<app-scroll-area height="200px">
  <div class="space-y-2">
    ${tags.map(t => `<div class="px-3 py-2 text-sm rounded" style="border: 1px solid var(--border); color: var(--fg)">${t}</div>`).join('\n    ')}
  </div>
</app-scroll-area>`,
      preview: html`
        <app-scroll-area height="200px">
          <div class="space-y-2">
            ${tags.map(t => html`<div class="px-3 py-2 text-sm rounded" style="border: 1px solid var(--border); color: var(--fg)">${t}</div>`)}
          </div>
        </app-scroll-area>
      `,
    },
    {
      title: 'Horizontal Scroll',
      code: `<app-scroll-area height="80px" orientation="horizontal">
  ${tags.slice(0, 8).map(t => `<div class="inline-flex items-center px-4 py-2 text-sm rounded-full shrink-0" style="border: 1px solid var(--border); color: var(--fg)">${t}</div>`).join('\n  ')}
</app-scroll-area>`,
      preview: html`
        <app-scroll-area height="80px" orientation="horizontal">
          ${tags.slice(0, 8).map(t => html`<div class="inline-flex items-center px-4 py-2 text-sm rounded-full shrink-0" style="border: 1px solid var(--border); color: var(--fg)">${t}</div>`)}
        </app-scroll-area>
      `,
    },
  ], { source, fileName: FILE, importPath: IMPORT, tagName: TAG });
}

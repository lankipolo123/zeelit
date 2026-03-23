import { html } from 'lit';
import source from '../components/app-tooltip.js?raw';
import pageSource from './tooltip-page.js?raw';

const TAG = 'app-tooltip';
const IMPORT = '@/components/app-tooltip.js';
const FILE = 'app-tooltip.js';

export function tooltipPage(ctx) {
  return ctx.componentPage('Tooltip', 'A popup that displays information related to an element when the element receives hover focus.', [
    {
      title: 'Default',
      code: `<app-tooltip text="This is a tooltip">
  <button class="px-4 py-2 rounded-md border border-zinc-700 bg-zinc-900 text-zinc-100 text-sm">Hover me</button>
</app-tooltip>`,
      preview: html`
        <div class="flex justify-center">
          <app-tooltip text="This is a tooltip">
            <button class="px-4 py-2 rounded-md border border-zinc-700 bg-zinc-900 text-zinc-100 text-sm">Hover me</button>
          </app-tooltip>
        </div>
      `,
    },
    {
      title: 'Positions',
      code: `<app-tooltip text="Bottom tooltip" position="bottom">
  <button class="px-4 py-2 rounded-md border border-zinc-700 bg-zinc-900 text-zinc-100 text-sm">Bottom</button>
</app-tooltip>
<app-tooltip text="Left tooltip" position="left">
  <button class="px-4 py-2 rounded-md border border-zinc-700 bg-zinc-900 text-zinc-100 text-sm">Left</button>
</app-tooltip>
<app-tooltip text="Right tooltip" position="right">
  <button class="px-4 py-2 rounded-md border border-zinc-700 bg-zinc-900 text-zinc-100 text-sm">Right</button>
</app-tooltip>`,
      preview: html`
        <div class="flex gap-4 justify-center py-8">
          <app-tooltip text="Bottom tooltip" position="bottom">
            <button class="px-4 py-2 rounded-md border border-zinc-700 bg-zinc-900 text-zinc-100 text-sm">Bottom</button>
          </app-tooltip>
          <app-tooltip text="Left tooltip" position="left">
            <button class="px-4 py-2 rounded-md border border-zinc-700 bg-zinc-900 text-zinc-100 text-sm">Left</button>
          </app-tooltip>
          <app-tooltip text="Right tooltip" position="right">
            <button class="px-4 py-2 rounded-md border border-zinc-700 bg-zinc-900 text-zinc-100 text-sm">Right</button>
          </app-tooltip>
        </div>
      `,
    },
  ], { source, fileName: FILE, importPath: IMPORT, tagName: TAG, pageSource, pageFileName: 'tooltip-page.js' });
}

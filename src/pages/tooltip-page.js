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
  <app-button>Hover me</app-button>
</app-tooltip>`,
      preview: html`
        <div class="flex justify-center">
          <app-tooltip text="This is a tooltip">
            <app-button variant="outline">Hover me</app-button>
          </app-tooltip>
        </div>
      `,
    },
    {
      title: 'Positions',
      code: `<app-tooltip text="Bottom tooltip" position="bottom">
  <app-button>Bottom</app-button>
</app-tooltip>

<app-tooltip text="Left tooltip" position="left">
  <app-button>Left</app-button>
</app-tooltip>

<app-tooltip text="Right tooltip" position="right">
  <app-button>Right</app-button>
</app-tooltip>`,
      preview: html`
        <div class="flex gap-4 justify-center py-8">
          <app-tooltip text="Bottom tooltip" position="bottom">
            <app-button variant="outline">Bottom</app-button>
          </app-tooltip>
          <app-tooltip text="Left tooltip" position="left">
            <app-button variant="outline">Left</app-button>
          </app-tooltip>
          <app-tooltip text="Right tooltip" position="right">
            <app-button variant="outline">Right</app-button>
          </app-tooltip>
        </div>
      `,
    },
  ], { source, fileName: FILE, importPath: IMPORT, tagName: TAG, pageSource, pageFileName: 'tooltip-page.js' });
}

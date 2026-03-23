import { meta } from '../showcase/component-data.js';
import source from '../components/app-tooltip.js?raw';
import pageSource from './tooltip-page.js?raw';

export function tooltipPage(ctx) {
  return ctx.componentPage('Tooltip', 'A hover hint — wrap any element and set the text and position. Use it on buttons, icons, links, or anything.', [
    {
      title: 'Save Button Hint',
      code: `<app-tooltip text="Save your changes">
  <app-button variant="outline">Save</app-button>
</app-tooltip>`,
    },
    {
      title: 'Different Positions',
      description: 'Set position to top, bottom, left, or right.',
      layout: 'flex gap-4 justify-center py-8',
      code: `<app-tooltip text="Goes below" position="bottom">
  <app-button variant="outline">Bottom</app-button>
</app-tooltip>
<app-tooltip text="Goes left" position="left">
  <app-button variant="outline">Left</app-button>
</app-tooltip>
<app-tooltip text="Goes right" position="right">
  <app-button variant="outline">Right</app-button>
</app-tooltip>`,
    },
  ], meta('tooltip', source, pageSource));
}

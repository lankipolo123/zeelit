import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-tooltip.js?raw';

export function tooltipPage(ctx) {
  return ctx.componentPage('Tooltip', 'A popup that displays information related to an element when the element receives hover focus.', [
    {
      title: 'Default',
      code: `<app-tooltip text="This is a tooltip">
  <app-button variant="outline">Hover me</app-button>
</app-tooltip>`,
    },
    {
      title: 'Positions',
      layout: 'flex gap-4 justify-center py-8',
      code: `<app-tooltip text="Bottom tooltip" position="bottom">
  <app-button variant="outline">Bottom</app-button>
</app-tooltip>
<app-tooltip text="Left tooltip" position="left">
  <app-button variant="outline">Left</app-button>
</app-tooltip>
<app-tooltip text="Right tooltip" position="right">
  <app-button variant="outline">Right</app-button>
</app-tooltip>`,
    },
  ], meta('tooltip', source));
}

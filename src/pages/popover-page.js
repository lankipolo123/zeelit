import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-popover.js?raw';

export function popoverPage(ctx) {
  return ctx.componentPage('Popover', 'A floating panel — put any content inside. Use it for settings forms, extra info, quick actions, or anything that needs a popup.', [
    {
      title: 'Dimension Settings',
      description: 'A form inside a popover.',
      code: `<app-popover>
  <h4>Dimensions</h4>
  <p>Set the dimensions for the layer.</p>
  <app-input label="Width" value="100%"></app-input>
  <app-input label="Height" value="25px"></app-input>
</app-popover>`,
      preview: html`
        <app-popover>
          <div class="grid gap-4">
            <div class="space-y-2">
              <h4 class="font-medium leading-none" style="color: var(--fg)">Dimensions</h4>
              <p class="text-sm" style="color: var(--fg-muted)">Set the dimensions for the layer.</p>
            </div>
            <div class="grid gap-2">
              <app-input label="Width" value="100%"></app-input>
              <app-input label="Height" value="25px"></app-input>
            </div>
          </div>
        </app-popover>
      `,
    },
  ], meta('popover', source));
}

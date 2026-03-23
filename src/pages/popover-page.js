import { html } from 'lit';
import source from '../components/app-popover.js?raw';
import pageSource from './popover-page.js?raw';

const TAG = 'app-popover';
const IMPORT = '@/components/app-popover.js';
const FILE = 'app-popover.js';

export function popoverPage(ctx) {
  return ctx.componentPage('Popover', 'Displays rich content in a portal, triggered by a button.', [
    {
      title: 'Default',
      code: `<app-popover>
  <div class="grid gap-4">
    <div class="space-y-2">
      <h4 class="font-medium leading-none">Dimensions</h4>
      <p class="text-sm" style="color: var(--fg-muted)">Set the dimensions for the layer.</p>
    </div>
    <div class="grid gap-2">
      <app-input label="Width" value="100%"></app-input>
      <app-input label="Height" value="25px"></app-input>
    </div>
  </div>
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
  ], { source, fileName: FILE, importPath: IMPORT, tagName: TAG, pageSource, pageFileName: 'popover-page.js' });
}

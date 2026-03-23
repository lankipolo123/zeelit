import { html } from 'lit';
import source from '../components/app-slider.js?raw';

const TAG = 'app-slider';
const IMPORT = '@/components/app-slider.js';
const FILE = 'app-slider.js';

export function sliderPage(ctx) {
  return ctx.componentPage('Slider', 'An input where the user selects a value from within a given range.', [
    {
      title: 'Default',
      code: `<app-slider label="Volume" value="50"></app-slider>`,
      preview: html`
        <div class="w-80">
          <app-slider label="Volume" value="50"></app-slider>
        </div>
      `,
    },
    {
      title: 'Custom Range',
      code: `<app-slider label="Temperature" value="36" min="0" max="100" step="1"></app-slider>`,
      preview: html`
        <div class="w-80">
          <app-slider label="Temperature" value="36" min="0" max="100" step="1"></app-slider>
        </div>
      `,
    },
    {
      title: 'Disabled',
      code: `<app-slider label="Brightness" value="75" disabled></app-slider>`,
      preview: html`
        <div class="w-80">
          <app-slider label="Brightness" value="75" disabled></app-slider>
        </div>
      `,
    },
  ], { source, fileName: FILE, importPath: IMPORT, tagName: TAG });
}

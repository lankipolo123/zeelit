import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-progress.js?raw';
import pageSource from './progress-page.js?raw';

export function progressPage(ctx) {
  return ctx.componentPage('Progress', 'Displays a horizontal progress bar indicating completion status.', [
    {
      title: 'Default',
      code: `<app-progress value="60"></app-progress>`,
      preview: html`<div class="w-full max-w-md"><app-progress value="60"></app-progress></div>`,
    },
    {
      title: 'Variants',
      code: `<app-progress value="75" variant="success"></app-progress>
<app-progress value="50" variant="warning"></app-progress>
<app-progress value="30" variant="destructive"></app-progress>`,
      preview: html`
        <div class="w-full max-w-md space-y-3">
          <app-progress value="75" variant="success"></app-progress>
          <app-progress value="50" variant="warning"></app-progress>
          <app-progress value="30" variant="destructive"></app-progress>
        </div>
      `,
    },
    {
      title: 'Sizes',
      description: 'Control width by placing the component in any container.',
      code: `<app-progress value="40"></app-progress>
<app-progress value="60"></app-progress>
<app-progress value="80"></app-progress>`,
      preview: html`
        <div class="space-y-3">
          <div class="w-48"><app-progress value="40"></app-progress></div>
          <div class="w-72"><app-progress value="60"></app-progress></div>
          <div class="w-full max-w-md"><app-progress value="80"></app-progress></div>
        </div>
      `,
    },
  ], meta('progress', source, pageSource));
}

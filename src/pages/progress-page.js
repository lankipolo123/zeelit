import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-progress.js?raw';
import pageSource from './progress-page.js?raw';

export function progressPage(ctx) {
  return ctx.componentPage('Progress', 'A progress bar — set value (0–100) and variant. Use it for uploads, onboarding steps, quotas, or any measurable progress.', [
    {
      title: 'File Upload',
      code: `<app-progress value="60"></app-progress>`,
      preview: html`<div class="w-full max-w-md"><app-progress value="60"></app-progress></div>`,
    },
    {
      title: 'Status Indicators',
      description: 'Use variants to signal meaning — success, warning, destructive.',
      code: `<app-progress value="90" variant="success"></app-progress>
<app-progress value="50" variant="warning"></app-progress>
<app-progress value="20" variant="destructive"></app-progress>`,
      preview: html`
        <div class="w-full max-w-md space-y-3">
          <app-progress value="90" variant="success"></app-progress>
          <app-progress value="50" variant="warning"></app-progress>
          <app-progress value="20" variant="destructive"></app-progress>
        </div>
      `,
    },
  ], { ...meta('progress', source), pageSource, pageFileName: 'progress-page.js' });
}

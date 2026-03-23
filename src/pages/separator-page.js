import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-separator.js?raw';
import pageSource from './separator-page.js?raw';

export function separatorPage(ctx) {
  return ctx.componentPage('Separator', 'A visual divider — use horizontal between sections, vertical between inline items. Set orientation to switch.', [
    {
      title: 'Between Sections',
      code: `<p>Account settings</p>
<app-separator></app-separator>
<p>Notification preferences</p>`,
      preview: html`
        <div class="w-full max-w-sm space-y-4">
          <p class="text-sm">Account settings</p>
          <app-separator></app-separator>
          <p class="text-sm">Notification preferences</p>
        </div>
      `,
    },
    {
      title: 'Between Inline Items',
      description: 'Set orientation="vertical" for inline dividers.',
      code: `<span>Docs</span>
<app-separator orientation="vertical"></app-separator>
<span>Source</span>
<app-separator orientation="vertical"></app-separator>
<span>Blog</span>`,
      preview: html`
        <div class="flex h-5 items-center gap-4 text-sm">
          <span>Docs</span>
          <app-separator orientation="vertical"></app-separator>
          <span>Source</span>
          <app-separator orientation="vertical"></app-separator>
          <span>Blog</span>
        </div>
      `,
    },
  ], meta('separator', source, pageSource));
}

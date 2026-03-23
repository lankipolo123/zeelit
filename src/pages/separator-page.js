import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-separator.js?raw';
import pageSource from './separator-page.js?raw';

export function separatorPage(ctx) {
  return ctx.componentPage('Separator', 'Visually or semantically separates content.', [
    {
      title: 'Horizontal',
      code: `<app-separator></app-separator>`,
      preview: html`
        <div class="w-full max-w-sm space-y-4">
          <p class="text-sm">Content above</p>
          <app-separator></app-separator>
          <p class="text-sm">Content below</p>
        </div>
      `,
    },
    {
      title: 'Vertical',
      code: `<app-separator orientation="vertical"></app-separator>`,
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

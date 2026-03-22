import { html } from 'lit';
import source from '../components/app-separator.js?raw';

const TAG = 'app-separator';
const IMPORT = '@/components/app-separator.js';
const FILE = 'app-separator.js';

export function separatorPage(ctx) {
  return ctx.componentPage('Separator', 'Visually or semantically separates content.', [
    {
      title: 'Default',
      code: `<app-separator></app-separator>`,
      preview: html`
        <div class="w-full max-w-sm space-y-4">
          <div>
            <h4 class="text-sm font-medium">ZeeLit Components</h4>
            <p class="text-sm">An open-source component library.</p>
          </div>
          <app-separator></app-separator>
          <div class="flex h-5 items-center gap-4 text-sm">
            <span>Docs</span>
            <app-separator orientation="vertical"></app-separator>
            <span>Source</span>
            <app-separator orientation="vertical"></app-separator>
            <span>Blog</span>
          </div>
        </div>
      `,
    },
  ], { source, fileName: FILE, importPath: IMPORT, tagName: TAG });
}

import { html } from 'lit';
import source from '../components/app-badge.js?raw';

const TAG = 'app-badge';
const IMPORT = '@/components/app-badge.js';
const FILE = 'app-badge.js';

export function badgePage(ctx) {
  return ctx.componentPage('Badge', 'Displays a badge or a component that looks like a badge.', [
    {
      title: 'Variants',
      code: `<app-badge>Default</app-badge>
<app-badge variant="secondary">Secondary</app-badge>
<app-badge variant="destructive">Destructive</app-badge>
<app-badge variant="outline">Outline</app-badge>`,
      preview: html`
        <div class="flex gap-3">
          <app-badge>Default</app-badge>
          <app-badge variant="secondary">Secondary</app-badge>
          <app-badge variant="destructive">Destructive</app-badge>
          <app-badge variant="outline">Outline</app-badge>
        </div>
      `,
    },
  ], { source, fileName: FILE, importPath: IMPORT, tagName: TAG });
}

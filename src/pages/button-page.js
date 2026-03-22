import { html } from 'lit';
import source from '../components/app-button.js?raw';

const TAG = 'app-button';
const IMPORT = '@/components/app-button.js';
const FILE = 'app-button.js';

export function buttonPage(ctx) {
  return ctx.componentPage('Button', 'Displays a button or a component that looks like a button.', [
    {
      title: 'Default',
      code: `<app-button variant="default">Default</app-button>`,
      preview: html`<app-button variant="default">Default</app-button>`,
    },
    {
      title: 'Variants',
      description: 'Use the variant prop to change the visual style.',
      code: `<app-button variant="default">Default</app-button>
<app-button variant="secondary">Secondary</app-button>
<app-button variant="destructive">Destructive</app-button>
<app-button variant="outline">Outline</app-button>
<app-button variant="ghost">Ghost</app-button>
<app-button variant="link">Link</app-button>`,
      preview: html`
        <div class="flex flex-wrap gap-3">
          <app-button variant="default">Default</app-button>
          <app-button variant="secondary">Secondary</app-button>
          <app-button variant="destructive">Destructive</app-button>
          <app-button variant="outline">Outline</app-button>
          <app-button variant="ghost">Ghost</app-button>
          <app-button variant="link">Link</app-button>
        </div>
      `,
    },
    {
      title: 'Sizes',
      code: `<app-button size="sm">Small</app-button>
<app-button size="default">Default</app-button>
<app-button size="lg">Large</app-button>`,
      preview: html`
        <div class="flex items-center gap-3">
          <app-button size="sm">Small</app-button>
          <app-button size="default">Default</app-button>
          <app-button size="lg">Large</app-button>
        </div>
      `,
    },
    {
      title: 'Disabled',
      code: `<app-button disabled>Can't click me</app-button>`,
      preview: html`<app-button disabled>Can't click me</app-button>`,
    },
  ], { source, fileName: FILE, importPath: IMPORT, tagName: TAG });
}

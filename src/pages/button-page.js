import { meta } from '../showcase/component-data.js';
import source from '../components/app-button.js?raw';

export function buttonPage(ctx) {
  return ctx.componentPage('Button', 'Displays a button or a component that looks like a button.', [
    {
      title: 'Default',
      code: `<app-button>Default</app-button>`,
    },
    {
      title: 'Variants',
      description: 'Use the variant prop to change the visual style.',
      layout: 'flex flex-wrap gap-3',
      code: `<app-button variant="default">Default</app-button>
<app-button variant="secondary">Secondary</app-button>
<app-button variant="destructive">Destructive</app-button>
<app-button variant="outline">Outline</app-button>
<app-button variant="ghost">Ghost</app-button>
<app-button variant="link">Link</app-button>`,
    },
    {
      title: 'Sizes',
      layout: 'flex items-center gap-3',
      code: `<app-button size="sm">Small</app-button>
<app-button size="default">Default</app-button>
<app-button size="lg">Large</app-button>`,
    },
    {
      title: 'Disabled',
      code: `<app-button disabled>Can't click me</app-button>`,
    },
  ], meta('button', source));
}

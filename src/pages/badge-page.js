import { meta } from '../showcase/component-data.js';
import source from '../components/app-badge.js?raw';

export function badgePage(ctx) {
  return ctx.componentPage('Badge', 'Displays a badge or a component that looks like a badge.', [
    {
      title: 'Variants',
      layout: 'flex gap-3',
      code: `<app-badge>Default</app-badge>
<app-badge variant="secondary">Secondary</app-badge>
<app-badge variant="destructive">Destructive</app-badge>
<app-badge variant="outline">Outline</app-badge>`,
    },
  ], meta('badge', source));
}

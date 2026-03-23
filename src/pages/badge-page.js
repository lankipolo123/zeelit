import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-badge.js?raw';

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
  ], meta('badge', source));
}

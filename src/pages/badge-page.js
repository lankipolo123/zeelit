import { meta } from '../showcase/component-data.js';
import source from '../components/app-badge.js?raw';
import pageSource from './badge-page.js?raw';

export function badgePage(ctx) {
  return ctx.componentPage('Badge', 'A small label — use it for status, categories, counts, or tags. Change variant and text for any context.', [
    {
      title: 'Status Labels',
      description: 'Show different statuses with variants.',
      layout: 'flex gap-3',
      code: `<app-badge>Active</app-badge>
<app-badge variant="secondary">Pending</app-badge>
<app-badge variant="destructive">Overdue</app-badge>
<app-badge variant="outline">Archived</app-badge>`,
    },
    {
      title: 'Category Tags',
      description: 'Same component for content tags.',
      layout: 'flex gap-2',
      code: `<app-badge variant="secondary">Design</app-badge>
<app-badge variant="secondary">Frontend</app-badge>
<app-badge variant="secondary">Open Source</app-badge>`,
    },
  ], { ...meta('badge', source), pageSource, pageFileName: 'badge-page.js' });
}

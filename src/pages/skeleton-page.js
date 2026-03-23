import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-skeleton.js?raw';
import pageSource from './skeleton-page.js?raw';

export function skeletonPage(ctx) {
  return ctx.componentPage('Skeleton', 'Used to show a placeholder while content is loading.', [
    {
      title: 'User Profile',
      description: 'Simulates a loading user profile with avatar and text lines.',
      code: `<app-skeleton width="48px" height="48px" rounded="rounded-full"></app-skeleton>
<app-skeleton width="250px" height="1rem"></app-skeleton>
<app-skeleton width="200px" height="0.75rem"></app-skeleton>`,
      preview: html`
        <div class="flex items-center gap-4">
          <app-skeleton width="48px" height="48px" rounded="rounded-full"></app-skeleton>
          <div class="space-y-2">
            <app-skeleton width="250px" height="1rem"></app-skeleton>
            <app-skeleton width="200px" height="0.75rem"></app-skeleton>
          </div>
        </div>
      `,
    },
    {
      title: 'Card Placeholder',
      description: 'Simulates a loading card layout.',
      code: `<app-skeleton width="100%" height="150px" rounded="rounded-lg"></app-skeleton>
<app-skeleton width="60%" height="1.25rem"></app-skeleton>
<app-skeleton width="100%" height="0.75rem"></app-skeleton>
<app-skeleton width="80%" height="0.75rem"></app-skeleton>`,
      preview: html`
        <div class="w-72 space-y-3">
          <app-skeleton width="100%" height="150px" rounded="rounded-lg"></app-skeleton>
          <app-skeleton width="60%" height="1.25rem"></app-skeleton>
          <app-skeleton width="100%" height="0.75rem"></app-skeleton>
          <app-skeleton width="80%" height="0.75rem"></app-skeleton>
        </div>
      `,
    },
  ], meta('skeleton', source, pageSource));
}

import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-rating.js?raw';

export function ratingPage(ctx) {
  return ctx.componentPage('Rating', 'Star rating — set value, max stars, and size. Use it for reviews, feedback forms, or product ratings.', [
    {
      title: 'Interactive Rating',
      description: 'Click a star to set the rating.',
      code: `<app-rating value="3" max="5"></app-rating>`,
    },
    {
      title: 'With Label',
      description: 'Add a label above the stars.',
      code: `<app-rating label="How was your experience?" value="4" max="5"></app-rating>`,
    },
    {
      title: 'Read-only',
      description: 'Display a rating without interaction.',
      code: `<app-rating value="4" max="5" readonly></app-rating>`,
    },
    {
      title: 'Sizes',
      description: 'Small, default, and large.',
      code: `<app-rating value="3" size="sm"></app-rating>
<app-rating value="3" size="default"></app-rating>
<app-rating value="3" size="lg"></app-rating>`,
      preview: html`
        <div class="space-y-4">
          <app-rating value="3" size="sm"></app-rating>
          <app-rating value="3" size="default"></app-rating>
          <app-rating value="3" size="lg"></app-rating>
        </div>
      `,
    },
  ], meta('rating', source));
}

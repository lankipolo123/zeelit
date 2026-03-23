import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-card.js?raw';

export function cardPage(ctx) {
  return ctx.componentPage('Card', 'A flexible container — use it for forms, info panels, pricing, stats, or anything. Just pass your own title, description, and content.', [
    {
      title: 'Project Form',
      description: 'Wrap a form inside a card.',
      code: `<app-card cardTitle="Create project" description="Deploy your new project in one-click.">
  <app-input label="Project name" placeholder="my-awesome-app"></app-input>
  <app-button>Create</app-button>
</app-card>`,
      preview: html`
        <div class="w-96">
          <app-card cardTitle="Create project" description="Deploy your new project in one-click.">
            <app-input label="Project name" placeholder="my-awesome-app"></app-input>
            <div class="mt-4 flex gap-2">
              <app-button>Create</app-button>
              <app-button variant="outline">Cancel</app-button>
            </div>
          </app-card>
        </div>
      `,
    },
    {
      title: 'Notification Card',
      description: 'Same component — just different content.',
      code: `<app-card cardTitle="Notifications" description="You have 3 unread messages.">
  <p>Check your inbox for the latest updates.</p>
</app-card>`,
      preview: html`
        <div class="w-96">
          <app-card cardTitle="Notifications" description="You have 3 unread messages.">
            <p class="text-sm">Check your inbox for the latest updates.</p>
          </app-card>
        </div>
      `,
    },
    {
      title: 'Pricing Card',
      description: 'Use it for pricing — no new component needed.',
      code: `<app-card cardTitle="Pro Plan" description="$29/month — everything you need.">
  <p>Unlimited projects, priority support, and custom domains.</p>
  <app-button>Subscribe</app-button>
</app-card>`,
      preview: html`
        <div class="w-96">
          <app-card cardTitle="Pro Plan" description="$29/month — everything you need.">
            <p class="text-sm" style="color: var(--fg-muted)">Unlimited projects, priority support, and custom domains.</p>
            <div class="mt-4">
              <app-button>Subscribe</app-button>
            </div>
          </app-card>
        </div>
      `,
    },
  ], meta('card', source));
}

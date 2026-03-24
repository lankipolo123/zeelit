import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-card.js?raw';

export function cardPage(ctx) {
  return ctx.componentPage('Card', 'A flexible container — use it for forms, info panels, pricing, stats, or anything. Pass cardTitle, description, and spacing props.', [
    {
      title: 'Project Form',
      description: 'Wrap a form inside a card with spacing.',
      code: `<app-card cardTitle="Create project" description="Deploy your new project in one-click." spacing="4">
  <app-input label="Project name" placeholder="my-awesome-app"></app-input>
  <app-button>Create</app-button>
  <app-button variant="outline">Cancel</app-button>
</app-card>`,
      preview: html`
        <div class="w-96">
          <app-card cardTitle="Create project" description="Deploy your new project in one-click." spacing="4">
            <app-input label="Project name" placeholder="my-awesome-app"></app-input>
            <app-button>Create</app-button>
            <app-button variant="outline">Cancel</app-button>
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
      description: 'Use spacing to auto-space children.',
      code: `<app-card cardTitle="Pro Plan" description="$29/month — everything you need." spacing="4">
  <p>Unlimited projects, priority support, and custom domains.</p>
  <app-button>Subscribe</app-button>
</app-card>`,
      preview: html`
        <div class="w-96">
          <app-card cardTitle="Pro Plan" description="$29/month — everything you need." spacing="4">
            <p class="text-sm" style="color: var(--fg-muted)">Unlimited projects, priority support, and custom domains.</p>
            <app-button>Subscribe</app-button>
          </app-card>
        </div>
      `,
    },
  ], meta('card', source));
}

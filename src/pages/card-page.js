import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-card.js?raw';

export function cardPage(ctx) {
  return ctx.componentPage('Card', 'Displays a card with header, content, and footer.', [
    {
      title: 'With Form',
      code: `<app-card cardTitle="Create project" description="Deploy your new project in one-click.">
  <app-input label="Project name" placeholder="my-awesome-app"></app-input>
  <app-button variant="default">Create</app-button>
  <app-button variant="outline">Cancel</app-button>
</app-card>`,
      preview: html`
        <div class="w-96">
          <app-card cardTitle="Create project" description="Deploy your new project in one-click.">
            <app-input label="Project name" placeholder="my-awesome-app"></app-input>
            <div class="mt-4 flex gap-2">
              <app-button variant="default">Create</app-button>
              <app-button variant="outline">Cancel</app-button>
            </div>
          </app-card>
        </div>
      `,
    },
    {
      title: 'Simple',
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
  ], meta('card', source));
}

import { html } from 'lit';

export function alertPage(ctx) {
  return ctx.componentPage('Alert', 'Displays a callout for important information.', [
    {
      title: 'Default',
      code: `<app-alert alertTitle="Heads up!">
  You can add components to your app using the CLI.
</app-alert>`,
      preview: html`
        <div class="w-full max-w-lg">
          <app-alert alertTitle="Heads up!">You can add components to your app using the CLI.</app-alert>
        </div>
      `,
    },
    {
      title: 'Destructive',
      code: `<app-alert variant="destructive" alertTitle="Error">
  Your session has expired. Please log in again.
</app-alert>`,
      preview: html`
        <div class="w-full max-w-lg">
          <app-alert variant="destructive" alertTitle="Error">Your session has expired. Please log in again.</app-alert>
        </div>
      `,
    },
    {
      title: 'Info',
      code: `<app-alert alertTitle="New update available">
  Version 2.0 is now available with new components.
</app-alert>`,
      preview: html`
        <div class="w-full max-w-lg">
          <app-alert alertTitle="New update available">Version 2.0 is now available with new components.</app-alert>
        </div>
      `,
    },
  ]);
}

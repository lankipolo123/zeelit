import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-sheet.js?raw';
import pageSource from './sheet-page.js?raw';

export function sheetPage(ctx) {
  return ctx.componentPage('Sheet', 'A panel that slides in from any side. Use it for navigation, settings, editing — just change the props.', [
    {
      title: 'Edit Profile',
      description: 'Slide-in form for editing user data.',
      code: `<app-sheet side="right" sheetTitle="Edit Profile" description="Update your info.">
  <app-input label="Name" value="John Doe"></app-input>
  <app-input label="Email" value="john@example.com"></app-input>
  <app-button>Save changes</app-button>
</app-sheet>`,
      preview: html`
        <app-button variant="outline" @click="${(e) => { const s = e.target.closest('div').querySelector('app-sheet'); if (s) s.show(); }}">Edit Profile</app-button>
        <app-sheet side="right" sheetTitle="Edit Profile" description="Update your info.">
          <div class="grid gap-4 py-4">
            <app-input label="Name" value="John Doe"></app-input>
            <app-input label="Email" value="john@example.com"></app-input>
          </div>
          <app-button>Save changes</app-button>
        </app-sheet>
      `,
    },
    {
      title: 'Navigation Menu',
      description: 'Same component from the left — use it as a sidebar nav.',
      code: `<app-sheet side="left" sheetTitle="Menu" description="Browse pages.">
  <app-button variant="ghost">Home</app-button>
  <app-button variant="ghost">Dashboard</app-button>
  <app-button variant="ghost">Settings</app-button>
</app-sheet>`,
      preview: html`
        <app-button variant="outline" @click="${(e) => { const s = e.target.closest('div').querySelector('app-sheet'); if (s) s.show(); }}">Open Menu</app-button>
        <app-sheet side="left" sheetTitle="Menu" description="Browse pages.">
          <div class="grid gap-2 py-4">
            <app-button variant="ghost">Home</app-button>
            <app-button variant="ghost">Dashboard</app-button>
            <app-button variant="ghost">Settings</app-button>
          </div>
        </app-sheet>
      `,
    },
    {
      title: 'Notifications Panel',
      description: 'Use it as a notifications drawer.',
      code: `<app-sheet side="right" sheetTitle="Notifications" description="You have 3 unread.">
  <app-alert alertTitle="New comment">Someone replied to your post.</app-alert>
  <app-alert alertTitle="Deployment done">Your app is live.</app-alert>
</app-sheet>`,
      preview: html`
        <app-button variant="secondary" @click="${(e) => { const s = e.target.closest('div').querySelector('app-sheet'); if (s) s.show(); }}">Notifications</app-button>
        <app-sheet side="right" sheetTitle="Notifications" description="You have 3 unread.">
          <div class="grid gap-3 py-4">
            <app-alert alertTitle="New comment">Someone replied to your post.</app-alert>
            <app-alert alertTitle="Deployment done">Your app is live.</app-alert>
          </div>
        </app-sheet>
      `,
    },
  ], { ...meta('sheet', source), pageSource, pageFileName: 'sheet-page.js' });
}

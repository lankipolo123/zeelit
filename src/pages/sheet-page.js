import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-sheet.js?raw';

export function sheetPage(ctx) {
  return ctx.componentPage('Sheet', 'Extends the Dialog component to display content that complements the main content of the screen.', [
    {
      title: 'Right Side',
      description: 'A sheet that slides in from the right.',
      code: `<app-button variant="outline" @click="\${() => sheet.show()}">Open Sheet</app-button>

<app-sheet id="sheet" side="right" sheetTitle="Edit Profile" description="Make changes here.">
  <app-input label="Name" value="John Doe"></app-input>
  <app-input label="Username" value="@johndoe"></app-input>
  <app-button>Save changes</app-button>
</app-sheet>`,
      preview: html`
        <app-button variant="outline" @click="${(e) => { const s = e.target.closest('div').querySelector('app-sheet'); if (s) s.show(); }}">Open Sheet</app-button>
        <app-sheet side="right" sheetTitle="Edit Profile" description="Make changes to your profile here.">
          <div class="grid gap-4 py-4">
            <app-input label="Name" value="John Doe"></app-input>
            <app-input label="Username" value="@johndoe"></app-input>
          </div>
          <app-button>Save changes</app-button>
        </app-sheet>
      `,
    },
    {
      title: 'Left Side',
      description: 'A sheet that slides in from the left.',
      code: `<app-button variant="outline" @click="\${() => sheet.show()}">Open Left Sheet</app-button>

<app-sheet id="sheet" side="left" sheetTitle="Navigation" description="Browse the menu.">
  <p>Menu items go here.</p>
</app-sheet>`,
      preview: html`
        <app-button variant="outline" @click="${(e) => { const s = e.target.closest('div').querySelector('app-sheet'); if (s) s.show(); }}">Open Left Sheet</app-button>
        <app-sheet side="left" sheetTitle="Navigation" description="Browse the menu.">
          <p class="text-sm" style="color: var(--fg-muted)">Menu items would go here.</p>
        </app-sheet>
      `,
    },
  ], meta('sheet', source));
}

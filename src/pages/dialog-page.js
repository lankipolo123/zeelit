import { html } from 'lit';
import source from '../components/app-dialog.js?raw';

const TAG = 'app-dialog';
const IMPORT = '@/components/app-dialog.js';
const FILE = 'app-dialog.js';

export function dialogPage(ctx) {
  return ctx.componentPage('Dialog', 'A modal dialog that interrupts the user with important content.', [
    {
      title: 'Default',
      code: `<app-button @click=\${() => dialog.show()}>Open Dialog</app-button>

<app-dialog id="dialog"
  dialogTitle="Are you sure?"
  description="This action cannot be undone.">
  <div class="flex justify-end gap-3 mt-4">
    <app-button variant="outline" @click=\${() => dialog.close()}>Cancel</app-button>
    <app-button variant="destructive">Continue</app-button>
  </div>
</app-dialog>`,
      preview: html`
        <div>
          <app-button @click=${(e) => e.target.closest('div').querySelector('app-dialog').show()}>Open Dialog</app-button>
          <app-dialog dialogTitle="Are you sure?" description="This action cannot be undone. This will permanently delete your account and remove your data from our servers.">
            <div class="flex justify-end gap-3 mt-4">
              <app-button variant="outline" @click=${(e) => e.target.closest('app-dialog').close()}>Cancel</app-button>
              <app-button variant="destructive" @click=${(e) => e.target.closest('app-dialog').close()}>Continue</app-button>
            </div>
          </app-dialog>
        </div>
      `,
    },
  ], { source, fileName: FILE, importPath: IMPORT, tagName: TAG });
}

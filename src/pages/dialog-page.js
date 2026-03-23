import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-dialog.js?raw';
import pageSource from './dialog-page.js?raw';

export function dialogPage(ctx) {
  return ctx.componentPage('Dialog', 'A modal dialog that interrupts the user with important content. Reuse it for any purpose — confirmations, forms, info panels — just change the props.', [
    {
      title: 'Delete Confirmation',
      description: 'Ask before a destructive action.',
      code: `<app-dialog dialogTitle="Delete item?" description="This will permanently remove the file from your project.">
  <app-button variant="outline">Cancel</app-button>
  <app-button variant="destructive">Delete</app-button>
</app-dialog>`,
      preview: html`
        <div>
          <app-button variant="destructive" @click=${(e) => e.target.closest('div').querySelector('app-dialog').show()}>Delete File</app-button>
          <app-dialog dialogTitle="Delete item?" description="This will permanently remove the file from your project.">
            <div class="flex justify-end gap-3 mt-4">
              <app-button variant="outline" @click=${(e) => e.target.closest('app-dialog').close()}>Cancel</app-button>
              <app-button variant="destructive" @click=${(e) => e.target.closest('app-dialog').close()}>Delete</app-button>
            </div>
          </app-dialog>
        </div>
      `,
    },
    {
      title: 'Logout Prompt',
      description: 'Same component, different context — confirm a logout.',
      code: `<app-dialog dialogTitle="Log out?" description="You'll need to sign in again to access your account.">
  <app-button variant="outline">Stay</app-button>
  <app-button>Log out</app-button>
</app-dialog>`,
      preview: html`
        <div>
          <app-button variant="outline" @click=${(e) => e.target.closest('div').querySelector('app-dialog').show()}>Log Out</app-button>
          <app-dialog dialogTitle="Log out?" description="You'll need to sign in again to access your account.">
            <div class="flex justify-end gap-3 mt-4">
              <app-button variant="outline" @click=${(e) => e.target.closest('app-dialog').close()}>Stay</app-button>
              <app-button @click=${(e) => e.target.closest('app-dialog').close()}>Log out</app-button>
            </div>
          </app-dialog>
        </div>
      `,
    },
    {
      title: 'Feedback Form',
      description: 'Use it as a form container — no new component needed.',
      code: `<app-dialog dialogTitle="Send Feedback" description="Let us know how we can improve.">
  <app-textarea placeholder="Your feedback..."></app-textarea>
  <app-button>Submit</app-button>
</app-dialog>`,
      preview: html`
        <div>
          <app-button variant="secondary" @click=${(e) => e.target.closest('div').querySelector('app-dialog').show()}>Send Feedback</app-button>
          <app-dialog dialogTitle="Send Feedback" description="Let us know how we can improve.">
            <div class="grid gap-4 mt-4">
              <app-textarea placeholder="Your feedback..."></app-textarea>
              <app-button @click=${(e) => e.target.closest('app-dialog').close()}>Submit</app-button>
            </div>
          </app-dialog>
        </div>
      `,
    },
  ], { ...meta('dialog', source), pageSource, pageFileName: 'dialog-page.js' });
}

import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-toast.js?raw';
import pageSource from './toast-page.js?raw';
import { toast } from '../components/app-toast.js';

export function toastPage(ctx) {
  return ctx.componentPage('Toast', 'A temporary notification — use it for any event. Just call toast() with your message and options.', [
    {
      title: 'Item Created',
      code: `toast('Event has been created');`,
      preview: html`<app-button variant="outline" @click="${() => toast('Event has been created')}">Create Event</app-button>`,
    },
    {
      title: 'Settings Saved',
      description: 'Success variant for confirmations.',
      code: `toast('Settings saved successfully', { variant: 'success' });`,
      preview: html`<app-button variant="outline" @click="${() => toast('Settings saved successfully', { variant: 'success' })}">Save Settings</app-button>`,
    },
    {
      title: 'Upload Failed',
      description: 'Destructive variant for errors.',
      code: `toast('Upload failed — file too large', { variant: 'destructive' });`,
      preview: html`<app-button variant="destructive" @click="${() => toast('Upload failed — file too large', { variant: 'destructive' })}">Upload File</app-button>`,
    },
    {
      title: 'Custom Duration',
      description: 'Control how long it stays visible.',
      code: `toast('Auto-saving in 5 seconds...', { duration: 5000 });`,
      preview: html`<app-button variant="secondary" @click="${() => toast('Auto-saving in 5 seconds...', { duration: 5000 })}">Auto-save</app-button>`,
    },
  ], { ...meta('toast', source), pageSource, pageFileName: 'toast-page.js' });
}

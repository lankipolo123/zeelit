import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-toast.js?raw';
import { toast } from '../components/app-toast.js';
import pageSource from './toast-page.js?raw';

export function toastPage(ctx) {
  return ctx.componentPage('Toast', 'A succinct message that is displayed temporarily. Inspired by Sonner.', [
    {
      title: 'Default',
      code: `import { toast } from '@/components/app-toast.js';

toast('Event has been created');`,
      preview: html`<app-button variant="outline" @click="${() => toast('Event has been created')}">Show Toast</app-button>`,
    },
    {
      title: 'Success',
      code: `toast('Changes saved successfully', { variant: 'success' });`,
      preview: html`<app-button variant="outline" @click="${() => toast('Changes saved successfully', { variant: 'success' })}">Show Success</app-button>`,
    },
    {
      title: 'Destructive',
      code: `toast('Something went wrong', { variant: 'destructive' });`,
      preview: html`<app-button variant="destructive" @click="${() => toast('Something went wrong', { variant: 'destructive' })}">Show Error</app-button>`,
    },
    {
      title: 'Custom Duration',
      code: `toast('This stays for 5 seconds', { duration: 5000 });`,
      preview: html`<app-button variant="secondary" @click="${() => toast('This stays for 5 seconds', { duration: 5000 })}">5s Toast</app-button>`,
    },
  ], meta('toast', source, pageSource));
}

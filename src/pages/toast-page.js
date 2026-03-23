import { html } from 'lit';
import source from '../components/app-toast.js?raw';
import pageSource from './toast-page.js?raw';
import { toast } from '../components/app-toast.js';

const TAG = 'app-toast';
const IMPORT = '@/components/app-toast.js';
const FILE = 'app-toast.js';

export function toastPage(ctx) {
  return ctx.componentPage('Toast', 'A succinct message that is displayed temporarily. Inspired by Sonner.', [
    {
      title: 'Default',
      description: 'A simple default toast notification.',
      code: `import { toast } from '${IMPORT}';

toast('Event has been created');`,
      preview: html`
        <app-button variant="outline" @click="${() => toast('Event has been created')}">Show Toast</app-button>
      `,
    },
    {
      title: 'Success',
      description: 'A success toast with a check icon.',
      code: `import { toast } from '${IMPORT}';

toast('Changes saved successfully', { variant: 'success' });`,
      preview: html`
        <app-button variant="outline" @click="${() => toast('Changes saved successfully', { variant: 'success' })}">Show Success</app-button>
      `,
    },
    {
      title: 'Destructive',
      description: 'A destructive toast for error states.',
      code: `import { toast } from '${IMPORT}';

toast('Something went wrong', { variant: 'destructive' });`,
      preview: html`
        <app-button variant="destructive" @click="${() => toast('Something went wrong', { variant: 'destructive' })}">Show Error</app-button>
      `,
    },
    {
      title: 'Custom Duration',
      description: 'Toast with a custom auto-dismiss duration.',
      code: `import { toast } from '${IMPORT}';

toast('This stays for 5 seconds', { duration: 5000 });`,
      preview: html`
        <app-button variant="secondary" @click="${() => toast('This stays for 5 seconds', { duration: 5000 })}">5s Toast</app-button>
      `,
    },
  ], { source, fileName: FILE, importPath: IMPORT, tagName: TAG, pageSource, pageFileName: 'toast-page.js' });
}

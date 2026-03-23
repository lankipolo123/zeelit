import { meta } from '../showcase/component-data.js';
import source from '../components/app-button.js?raw';
import pageSource from './button-page.js?raw';

export function buttonPage(ctx) {
  return ctx.componentPage('Button', 'A clickable element — configure variant, size, and disabled state to fit any context.', [
    {
      title: 'Variants',
      description: 'Change the look with the variant prop. Use default for primary actions, outline for secondary, destructive for danger, ghost for subtle.',
      layout: 'flex flex-wrap gap-3',
      code: `<app-button variant="default">Save Changes</app-button>
<app-button variant="secondary">Draft</app-button>
<app-button variant="destructive">Delete Account</app-button>
<app-button variant="outline">Cancel</app-button>
<app-button variant="ghost">Skip</app-button>
<app-button variant="link">Learn more</app-button>`,
    },
    {
      title: 'Sizes',
      description: 'Set size to fit the context — compact UI, standard forms, or hero sections.',
      layout: 'flex items-center gap-3',
      code: `<app-button size="sm">Dismiss</app-button>
<app-button size="default">Submit Order</app-button>
<app-button size="lg">Get Started Free</app-button>`,
    },
    {
      title: 'Disabled State',
      description: 'Disable until conditions are met — like form validation.',
      code: `<app-button disabled>Waiting for input...</app-button>`,
    },
  ], { ...meta('button', source), pageSource, pageFileName: 'button-page.js' });
}

import { meta } from '../showcase/component-data.js';
import source from '../components/app-collapsible.js?raw';

export function collapsiblePage(ctx) {
  return ctx.componentPage('Collapsible', 'A show/hide panel — use it for FAQs, settings groups, sidebar sections, or any expandable content.', [
    {
      title: 'FAQ Item',
      code: `<app-collapsible label="What is ZeeLit?">
  A component library built with Lit and styled with Tailwind CSS.
</app-collapsible>`,
    },
    {
      title: 'Settings Group',
      description: 'Same component for organizing settings.',
      code: `<app-collapsible label="Advanced Settings" open>
  Configure caching, rate limits, and debug mode here.
</app-collapsible>`,
    },
    {
      title: 'Sidebar Sections',
      description: 'Stack them for collapsible navigation.',
      layout: 'space-y-2',
      code: `<app-collapsible label="Getting Started">Intro, installation, first component.</app-collapsible>
<app-collapsible label="Components">Button, Input, Card, Dialog, and more.</app-collapsible>
<app-collapsible label="Theming">Colors, typography, dark mode.</app-collapsible>`,
    },
  ], meta('collapsible', source));
}

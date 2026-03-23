import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-collapsible.js?raw';

export function collapsiblePage(ctx) {
  return ctx.componentPage('Collapsible', 'A panel that can be expanded or collapsed to show or hide content.', [
    {
      title: 'Default (Closed)',
      code: `<app-collapsible label="What is ZeeLit?">
  A component library built with Lit and styled with Tailwind CSS.
</app-collapsible>`,
      preview: html`<app-collapsible label="What is ZeeLit?">A component library built with Lit and styled with Tailwind CSS.</app-collapsible>`,
    },
    {
      title: 'Open by Default',
      code: `<app-collapsible label="Features" open>
  Lightweight, accessible, and themeable web components.
</app-collapsible>`,
      preview: html`<app-collapsible label="Features" open>Lightweight, accessible, and themeable web components.</app-collapsible>`,
    },
    {
      title: 'Multiple',
      code: `<app-collapsible label="Section A">Content A</app-collapsible>
<app-collapsible label="Section B">Content B</app-collapsible>
<app-collapsible label="Section C">Content C</app-collapsible>`,
      preview: html`
        <div class="space-y-2">
          <app-collapsible label="Section A">Content for section A.</app-collapsible>
          <app-collapsible label="Section B">Content for section B.</app-collapsible>
          <app-collapsible label="Section C">Content for section C.</app-collapsible>
        </div>
      `,
    },
  ], meta('collapsible', source));
}

import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-accordion.js?raw';

export function accordionPage(ctx) {
  const items = [
    { title: 'Is it accessible?', content: 'Yes. It follows the WAI-ARIA design pattern for accordions.' },
    { title: 'Is it styled?', content: 'Yes. It comes with default styles that match the ZeeLit design system.' },
    { title: 'Is it animated?', content: 'Yes. It uses CSS transitions for smooth open/close animations.' },
  ];

  return ctx.componentPage('Accordion', 'A vertically stacked set of interactive headings that each reveal a section of content.', [
    {
      title: 'Default',
      description: 'Only one item can be open at a time.',
      code: `<app-accordion .items="\${items}"></app-accordion>`,
      preview: html`<div class="w-full max-w-md"><app-accordion .items="${items}"></app-accordion></div>`,
    },
    {
      title: 'Multiple',
      description: 'Allow multiple items to be open simultaneously.',
      code: `<app-accordion multiple .items="\${items}"></app-accordion>`,
      preview: html`<div class="w-full max-w-md"><app-accordion multiple .items="${items}"></app-accordion></div>`,
    },
  ], meta('accordion', source));
}

import { html } from 'lit';
import source from '../components/app-accordion.js?raw';

const TAG = 'app-accordion';
const IMPORT = '@/components/app-accordion.js';
const FILE = 'app-accordion.js';

export function accordionPage(ctx) {
  const faqItems = [
    { title: 'Is it accessible?', content: 'Yes. It follows the WAI-ARIA design pattern for accordions.' },
    { title: 'Is it styled?', content: 'Yes. It comes with default styles that match the ZeeLit design system.' },
    { title: 'Is it animated?', content: 'Yes. It uses CSS transitions for smooth open/close animations.' },
  ];

  return ctx.componentPage('Accordion', 'A vertically stacked set of interactive headings that each reveal a section of content.', [
    {
      title: 'Default',
      description: 'Only one item can be open at a time.',
      code: `<app-accordion
  .items="\${[
    { title: 'Is it accessible?', content: 'Yes. It follows the WAI-ARIA design pattern.' },
    { title: 'Is it styled?', content: 'Yes. It comes with default styles.' },
    { title: 'Is it animated?', content: 'Yes. It uses CSS transitions.' },
  ]}"
></app-accordion>`,
      preview: html`<div class="w-full max-w-md"><app-accordion .items="${faqItems}"></app-accordion></div>`,
    },
    {
      title: 'Multiple',
      description: 'Allow multiple items to be open simultaneously.',
      code: `<app-accordion multiple
  .items="\${[
    { title: 'Is it accessible?', content: 'Yes. It follows the WAI-ARIA design pattern.' },
    { title: 'Is it styled?', content: 'Yes. It comes with default styles.' },
    { title: 'Is it animated?', content: 'Yes. It uses CSS transitions.' },
  ]}"
></app-accordion>`,
      preview: html`<div class="w-full max-w-md"><app-accordion multiple .items="${faqItems}"></app-accordion></div>`,
    },
  ], { source, fileName: FILE, importPath: IMPORT, tagName: TAG });
}

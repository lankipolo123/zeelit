import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-accordion.js?raw';

export function accordionPage(ctx) {
  return ctx.componentPage('Accordion', 'Expandable sections — pass your own items array with any titles and content. Use it for FAQs, docs, settings, or any grouped info.', [
    {
      title: 'FAQ',
      description: 'Pass items with title and content. One open at a time by default.',
      code: `<app-accordion .items="\${[
  { title: 'How do I install it?', content: 'Run npm install zeelit and import the components.' },
  { title: 'Can I customize the theme?', content: 'Yes — override the CSS custom properties.' },
  { title: 'Is it accessible?', content: 'Yes — follows WAI-ARIA accordion pattern.' },
]}"></app-accordion>`,
      preview: html`<div class="w-full max-w-md"><app-accordion .items="${[
        { title: 'How do I install it?', content: 'Run npm install zeelit and import the components.' },
        { title: 'Can I customize the theme?', content: 'Yes — override the CSS custom properties.' },
        { title: 'Is it accessible?', content: 'Yes — follows WAI-ARIA accordion pattern.' },
      ]}"></app-accordion></div>`,
    },
    {
      title: 'Multiple Open',
      description: 'Add the multiple attribute to allow several sections open at once.',
      code: `<app-accordion multiple .items="\${[
  { title: 'Account', content: 'Manage your profile and email.' },
  { title: 'Security', content: 'Password, 2FA, and sessions.' },
  { title: 'Billing', content: 'Plans, invoices, and payment methods.' },
]}"></app-accordion>`,
      preview: html`<div class="w-full max-w-md"><app-accordion multiple .items="${[
        { title: 'Account', content: 'Manage your profile and email.' },
        { title: 'Security', content: 'Password, 2FA, and sessions.' },
        { title: 'Billing', content: 'Plans, invoices, and payment methods.' },
      ]}"></app-accordion></div>`,
    },
  ], meta('accordion', source));
}

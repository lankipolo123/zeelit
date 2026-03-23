import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-textarea.js?raw';
import pageSource from './textarea-page.js?raw';

export function textareaPage(ctx) {
  return ctx.componentPage('Textarea', 'Displays a form textarea field.', [
    {
      title: 'Default',
      code: `<app-textarea placeholder="Type your message here"></app-textarea>`,
      preview: html`<div class="w-80"><app-textarea placeholder="Type your message here"></app-textarea></div>`,
    },
    {
      title: 'With Label',
      code: `<app-textarea label="Message" placeholder="Enter your message"></app-textarea>`,
      preview: html`<div class="w-80"><app-textarea label="Message" placeholder="Enter your message"></app-textarea></div>`,
    },
    {
      title: 'Disabled',
      code: `<app-textarea label="Bio" value="This textarea is disabled." disabled></app-textarea>`,
      preview: html`<div class="w-80"><app-textarea label="Bio" value="This textarea is disabled." disabled></app-textarea></div>`,
    },
  ], meta('textarea', source, pageSource));
}

import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-textarea.js?raw';

export function textareaPage(ctx) {
  return ctx.componentPage('Textarea', 'A multi-line text field — use it for comments, bios, feedback, or any long-form input.', [
    {
      title: 'Feedback Form',
      code: `<app-textarea label="Feedback" placeholder="Tell us what you think..."></app-textarea>`,
      preview: html`<div class="w-80"><app-textarea label="Feedback" placeholder="Tell us what you think..."></app-textarea></div>`,
    },
    {
      title: 'Bio Field',
      description: 'Same component for a profile bio.',
      code: `<app-textarea label="Bio" placeholder="Write a short bio..."></app-textarea>`,
      preview: html`<div class="w-80"><app-textarea label="Bio" placeholder="Write a short bio..."></app-textarea></div>`,
    },
    {
      title: 'Disabled',
      description: 'Lock when content is read-only.',
      code: `<app-textarea label="Terms" value="You agree to our terms of service..." disabled></app-textarea>`,
      preview: html`<div class="w-80"><app-textarea label="Terms" value="You agree to our terms of service..." disabled></app-textarea></div>`,
    },
  ], meta('textarea', source));
}

import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-tag-input.js?raw';

export function tagInputPage(ctx) {
  return ctx.componentPage('Tag Input', 'An input that creates tags — type and press Enter or comma. Use it for categories, skills, email recipients, or any multi-value input.', [
    {
      title: 'Basic Tags',
      description: 'Type and press Enter to add tags.',
      code: `<app-tag-input label="Skills" placeholder="Add a skill..." .tags=\${['JavaScript', 'Lit', 'CSS']}></app-tag-input>`,
      preview: html`
        <div style="max-width: 400px;">
          <app-tag-input label="Skills" placeholder="Add a skill..." .tags=${['JavaScript', 'Lit', 'CSS']}></app-tag-input>
        </div>
      `,
    },
    {
      title: 'With Max Limit',
      description: 'Limit the number of tags.',
      code: `<app-tag-input label="Categories" placeholder="Add category..." .tags=\${['Design', 'Frontend']} max="5"></app-tag-input>`,
      preview: html`
        <div style="max-width: 400px;">
          <app-tag-input label="Categories" placeholder="Add category..." .tags=${['Design', 'Frontend']} max="5"></app-tag-input>
        </div>
      `,
    },
    {
      title: 'Disabled',
      description: 'Read-only tag display.',
      code: `<app-tag-input label="Technologies" .tags=\${['React', 'Vue', 'Lit']} disabled></app-tag-input>`,
      preview: html`
        <div style="max-width: 400px;">
          <app-tag-input label="Technologies" .tags=${['React', 'Vue', 'Lit']} disabled></app-tag-input>
        </div>
      `,
    },
  ], meta('tag-input', source));
}

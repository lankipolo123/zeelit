import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-chip.js?raw';

export function chipPage(ctx) {
  return ctx.componentPage('Chip', 'Inline chip/pill elements — use for tags, filters, or selections. Supports variants, sizes, dismissible, and selectable states.', [
    {
      title: 'Variants',
      description: 'Default, primary, success, warning, and danger.',
      code: `<app-chip label="Default"></app-chip>
<app-chip label="Primary" variant="primary"></app-chip>
<app-chip label="Success" variant="success"></app-chip>
<app-chip label="Warning" variant="warning"></app-chip>
<app-chip label="Danger" variant="danger"></app-chip>`,
      preview: html`
        <div class="flex flex-wrap gap-2">
          <app-chip label="Default"></app-chip>
          <app-chip label="Primary" variant="primary"></app-chip>
          <app-chip label="Success" variant="success"></app-chip>
          <app-chip label="Warning" variant="warning"></app-chip>
          <app-chip label="Danger" variant="danger"></app-chip>
        </div>
      `,
    },
    {
      title: 'Sizes',
      description: 'Small, default, and large.',
      code: `<app-chip label="Small" size="sm"></app-chip>
<app-chip label="Default"></app-chip>
<app-chip label="Large" size="lg"></app-chip>`,
      preview: html`
        <div class="flex flex-wrap items-center gap-2">
          <app-chip label="Small" size="sm"></app-chip>
          <app-chip label="Default"></app-chip>
          <app-chip label="Large" size="lg"></app-chip>
        </div>
      `,
    },
    {
      title: 'Dismissible',
      description: 'Click the X to dismiss.',
      code: `<app-chip label="React" dismissible></app-chip>
<app-chip label="Vue" dismissible></app-chip>
<app-chip label="Svelte" dismissible></app-chip>`,
      preview: html`
        <div class="flex flex-wrap gap-2">
          <app-chip label="React" dismissible></app-chip>
          <app-chip label="Vue" dismissible></app-chip>
          <app-chip label="Svelte" dismissible></app-chip>
        </div>
      `,
    },
    {
      title: 'Selectable',
      description: 'Click to toggle selection state.',
      code: `<app-chip label="Design"></app-chip>
<app-chip label="Engineering"></app-chip>
<app-chip label="Marketing"></app-chip>`,
      preview: html`
        <div class="flex flex-wrap gap-2">
          <app-chip label="Design"></app-chip>
          <app-chip label="Engineering"></app-chip>
          <app-chip label="Marketing"></app-chip>
        </div>
      `,
    },
  ], meta('chip', source));
}

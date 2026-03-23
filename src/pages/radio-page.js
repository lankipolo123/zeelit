import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-radio.js?raw';

export function radioPage(ctx) {
  const options = [
    { label: 'Default', value: 'default' },
    { label: 'Comfortable', value: 'comfortable' },
    { label: 'Compact', value: 'compact' },
  ];

  return ctx.componentPage('Radio Group', 'A set of radio buttons for selecting a single option from a list.', [
    {
      title: 'Default',
      code: `<app-radio .options="\${options}"></app-radio>`,
      preview: html`<app-radio .options="${options}"></app-radio>`,
    },
    {
      title: 'With Preselected Value',
      code: `<app-radio value="comfortable" .options="\${options}"></app-radio>`,
      preview: html`<app-radio value="comfortable" .options="${options}"></app-radio>`,
    },
    {
      title: 'Disabled',
      code: `<app-radio disabled value="default" .options="\${options}"></app-radio>`,
      preview: html`<app-radio disabled value="default" .options="${[{ label: 'Default', value: 'default' }, { label: 'Comfortable', value: 'comfortable' }]}"></app-radio>`,
    },
  ], meta('radio', source));
}

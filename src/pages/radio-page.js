import { html } from 'lit';
import source from '../components/app-radio.js?raw';
import pageSource from './radio-page.js?raw';

const TAG = 'app-radio';
const IMPORT = '@/components/app-radio.js';
const FILE = 'app-radio.js';

export function radioPage(ctx) {
  const defaultOpts = [
    { label: 'Default', value: 'default' },
    { label: 'Comfortable', value: 'comfortable' },
    { label: 'Compact', value: 'compact' },
  ];

  return ctx.componentPage('Radio Group', 'A set of radio buttons for selecting a single option from a list.', [
    {
      title: 'Default',
      description: 'A basic radio group.',
      code: `<app-radio
  .options="\${[
    { label: 'Default', value: 'default' },
    { label: 'Comfortable', value: 'comfortable' },
    { label: 'Compact', value: 'compact' },
  ]}"
></app-radio>`,
      preview: html`<app-radio .options="${defaultOpts}"></app-radio>`,
    },
    {
      title: 'With Preselected Value',
      description: 'A radio group with a pre-selected option.',
      code: `<app-radio
  value="comfortable"
  .options="\${[
    { label: 'Default', value: 'default' },
    { label: 'Comfortable', value: 'comfortable' },
    { label: 'Compact', value: 'compact' },
  ]}"
></app-radio>`,
      preview: html`<app-radio value="comfortable" .options="${defaultOpts}"></app-radio>`,
    },
    {
      title: 'Disabled',
      description: 'A disabled radio group.',
      code: `<app-radio disabled value="default"
  .options="\${[
    { label: 'Default', value: 'default' },
    { label: 'Comfortable', value: 'comfortable' },
  ]}"
></app-radio>`,
      preview: html`<app-radio disabled value="default" .options="${[
        { label: 'Default', value: 'default' },
        { label: 'Comfortable', value: 'comfortable' },
      ]}"></app-radio>`,
    },
  ], { source, fileName: FILE, importPath: IMPORT, tagName: TAG, pageSource, pageFileName: 'radio-page.js' });
}

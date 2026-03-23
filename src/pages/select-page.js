import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-select.js?raw';
import pageSource from './select-page.js?raw';

export function selectPage(ctx) {
  return ctx.componentPage('Select', 'A dropdown picker — pass your own options array and set label/placeholder. Use it for any single-choice selection.', [
    {
      title: 'Framework Picker',
      description: 'Pass options with label and value.',
      code: `<app-select label="Framework" placeholder="Choose one" .options=\${[
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Lit', value: 'lit' },
  { label: 'Svelte', value: 'svelte' },
]}></app-select>`,
      preview: html`<div class="w-64"><app-select label="Framework" placeholder="Choose one" .options=${[
        { label: 'React', value: 'react' },
        { label: 'Vue', value: 'vue' },
        { label: 'Lit', value: 'lit' },
        { label: 'Svelte', value: 'svelte' },
      ]}></app-select></div>`,
    },
    {
      title: 'Country Selector',
      description: 'Same component for a different list.',
      code: `<app-select label="Country" placeholder="Select country" .options=\${[
  { label: 'United States', value: 'us' },
  { label: 'United Kingdom', value: 'uk' },
  { label: 'Japan', value: 'jp' },
]}></app-select>`,
      preview: html`<div class="w-64"><app-select label="Country" placeholder="Select country" .options=${[
        { label: 'United States', value: 'us' },
        { label: 'United Kingdom', value: 'uk' },
        { label: 'Japan', value: 'jp' },
      ]}></app-select></div>`,
    },
    {
      title: 'Disabled',
      description: 'Lock it when selection is not allowed.',
      code: `<app-select label="Plan" placeholder="Enterprise" disabled></app-select>`,
      preview: html`<div class="w-64"><app-select label="Plan" placeholder="Enterprise" disabled></app-select></div>`,
    },
  ], { ...meta('select', source), pageSource, pageFileName: 'select-page.js' });
}

import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-select.js?raw';
import pageSource from './select-page.js?raw';

export function selectPage(ctx) {
  const frameworks = [
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Angular', value: 'angular' },
    { label: 'Svelte', value: 'svelte' },
    { label: 'Lit', value: 'lit' },
  ];

  return ctx.componentPage('Select', 'Displays a dropdown list of options for the user to pick from.', [
    {
      title: 'Default',
      code: `<app-select label="Framework" placeholder="Select a framework" .options=\${frameworks}></app-select>`,
      preview: html`<div class="w-64"><app-select label="Framework" placeholder="Select a framework" .options=${frameworks}></app-select></div>`,
    },
    {
      title: 'Disabled',
      code: `<app-select label="Theme" placeholder="Pick a theme" disabled></app-select>`,
      preview: html`<div class="w-64"><app-select label="Theme" placeholder="Pick a theme" disabled></app-select></div>`,
    },
  ], meta('select', source, pageSource));
}

import { html } from 'lit';
import source from '../components/app-select.js?raw';
import pageSource from './select-page.js?raw';

const TAG = 'app-select';
const IMPORT = '@/components/app-select.js';
const FILE = 'app-select.js';

export function selectPage(ctx) {
  return ctx.componentPage('Select', 'Displays a dropdown list of options for the user to pick from.', [
    {
      title: 'Default',
      code: `<app-select
  label="Framework"
  placeholder="Select a framework"
  .options='\${JSON.stringify([
    { label: "React", value: "react" },
    { label: "Vue", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
    { label: "Lit", value: "lit" }
  ])}'
></app-select>`,
      preview: html`
        <div class="w-64">
          <app-select
            label="Framework"
            placeholder="Select a framework"
            .options=${[
              { label: 'React', value: 'react' },
              { label: 'Vue', value: 'vue' },
              { label: 'Angular', value: 'angular' },
              { label: 'Svelte', value: 'svelte' },
              { label: 'Lit', value: 'lit' },
            ]}
          ></app-select>
        </div>
      `,
    },
    {
      title: 'Disabled',
      code: `<app-select label="Theme" placeholder="Pick a theme" disabled></app-select>`,
      preview: html`
        <div class="w-64">
          <app-select label="Theme" placeholder="Pick a theme" disabled></app-select>
        </div>
      `,
    },
  ], { source, fileName: FILE, importPath: IMPORT, tagName: TAG, pageSource, pageFileName: 'select-page.js' });
}

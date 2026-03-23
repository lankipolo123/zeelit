import { html } from 'lit';
import source from '../components/app-checkbox.js?raw';
import pageSource from './checkbox-page.js?raw';

const TAG = 'app-checkbox';
const IMPORT = '@/components/app-checkbox.js';
const FILE = 'app-checkbox.js';

export function checkboxPage(ctx) {
  return ctx.componentPage('Checkbox', 'A control that allows the user to toggle between checked and not checked.', [
    {
      title: 'Default',
      code: `<app-checkbox label="Accept terms and conditions"></app-checkbox>`,
      preview: html`<app-checkbox label="Accept terms and conditions"></app-checkbox>`,
    },
    {
      title: 'Checked',
      code: `<app-checkbox label="Enable notifications" checked></app-checkbox>`,
      preview: html`<app-checkbox label="Enable notifications" checked></app-checkbox>`,
    },
    {
      title: 'Disabled',
      code: `<app-checkbox label="Read only option" disabled></app-checkbox>`,
      preview: html`<app-checkbox label="Read only option" disabled></app-checkbox>`,
    },
  ], { source, fileName: FILE, importPath: IMPORT, tagName: TAG, pageSource, pageFileName: 'checkbox-page.js' });
}

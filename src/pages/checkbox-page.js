import { meta } from '../showcase/component-data.js';
import source from '../components/app-checkbox.js?raw';
import pageSource from './checkbox-page.js?raw';

export function checkboxPage(ctx) {
  return ctx.componentPage('Checkbox', 'A check/uncheck control — use it for terms acceptance, feature toggles, multi-select lists, or any boolean choice.', [
    {
      title: 'Terms Agreement',
      code: `<app-checkbox label="I accept the terms and conditions"></app-checkbox>`,
    },
    {
      title: 'Feature Opt-in',
      description: 'Same component for settings.',
      code: `<app-checkbox label="Enable email notifications" checked></app-checkbox>`,
    },
    {
      title: 'Multi-select List',
      description: 'Stack them for multi-choice.',
      layout: 'space-y-3',
      code: `<app-checkbox label="Design" checked></app-checkbox>
<app-checkbox label="Development"></app-checkbox>
<app-checkbox label="Marketing" checked></app-checkbox>`,
    },
    {
      title: 'Disabled',
      description: 'Lock when the option can\'t be changed.',
      code: `<app-checkbox label="Required consent" disabled checked></app-checkbox>`,
    },
  ], { ...meta('checkbox', source), pageSource, pageFileName: 'checkbox-page.js' });
}

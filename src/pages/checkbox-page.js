import { meta } from '../showcase/component-data.js';
import source from '../components/app-checkbox.js?raw';

export function checkboxPage(ctx) {
  return ctx.componentPage('Checkbox', 'A control that allows the user to toggle between checked and not checked.', [
    {
      title: 'Default',
      code: `<app-checkbox label="Accept terms and conditions"></app-checkbox>`,
    },
    {
      title: 'Checked',
      code: `<app-checkbox label="Enable notifications" checked></app-checkbox>`,
    },
    {
      title: 'Disabled',
      code: `<app-checkbox label="Read only option" disabled></app-checkbox>`,
    },
  ], meta('checkbox', source));
}

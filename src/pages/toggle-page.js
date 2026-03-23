import { meta } from '../showcase/component-data.js';
import source from '../components/app-toggle.js?raw';

export function togglePage(ctx) {
  return ctx.componentPage('Toggle', 'A switch control for toggling between two states.', [
    {
      title: 'Default (Off)',
      code: `<app-toggle label="Airplane Mode"></app-toggle>`,
    },
    {
      title: 'Checked (On)',
      code: `<app-toggle label="Wi-Fi" checked></app-toggle>`,
    },
    {
      title: 'Disabled',
      code: `<app-toggle label="Bluetooth" disabled></app-toggle>`,
    },
  ], meta('toggle', source));
}

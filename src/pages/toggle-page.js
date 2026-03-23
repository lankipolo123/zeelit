import { meta } from '../showcase/component-data.js';
import source from '../components/app-toggle.js?raw';
import pageSource from './toggle-page.js?raw';

export function togglePage(ctx) {
  return ctx.componentPage('Toggle', 'An on/off switch — use it for any boolean setting. Set label, checked, and disabled.', [
    {
      title: 'Airplane Mode',
      code: `<app-toggle label="Airplane Mode"></app-toggle>`,
    },
    {
      title: 'Dark Mode',
      description: 'Same component for a theme toggle.',
      code: `<app-toggle label="Dark Mode" checked></app-toggle>`,
    },
    {
      title: 'Email Notifications',
      description: 'Use it for notification preferences.',
      code: `<app-toggle label="Email Notifications" checked></app-toggle>`,
    },
    {
      title: 'Disabled',
      description: 'Lock it when the user can\'t change the setting.',
      code: `<app-toggle label="Two-Factor Auth" disabled checked></app-toggle>`,
    },
  ], meta('toggle', source, pageSource));
}

import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-switch-group.js?raw';

export function switchGroupPage(ctx) {
  return ctx.componentPage('Switch Group', 'A group of labeled switches — pass options with descriptions and get back the selected values. Use it for notification settings, feature flags, or privacy controls.', [
    {
      title: 'Notification Settings',
      description: 'Toggle multiple options at once.',
      code: `<app-switch-group
  label="Notifications"
  description="Choose what you want to be notified about."
  .options=\${[
    { value: 'email', label: 'Email', description: 'Get notified by email' },
    { value: 'push', label: 'Push', description: 'Mobile push notifications' },
    { value: 'sms', label: 'SMS', description: 'Text message alerts' },
  ]}
  .value=\${['email', 'push']}
></app-switch-group>`,
      preview: html`
        <app-switch-group
          label="Notifications"
          description="Choose what you want to be notified about."
          .options=${[
            { value: 'email', label: 'Email', description: 'Get notified by email' },
            { value: 'push', label: 'Push', description: 'Mobile push notifications' },
            { value: 'sms', label: 'SMS', description: 'Text message alerts' },
          ]}
          .value=${['email', 'push']}
        ></app-switch-group>
      `,
    },
    {
      title: 'Privacy Controls',
      description: 'Simple labels without descriptions.',
      code: `<app-switch-group
  label="Privacy"
  .options=\${[
    { value: 'analytics', label: 'Usage analytics' },
    { value: 'cookies', label: 'Marketing cookies' },
    { value: 'sharing', label: 'Data sharing' },
  ]}
  .value=\${['analytics']}
></app-switch-group>`,
      preview: html`
        <app-switch-group
          label="Privacy"
          .options=${[
            { value: 'analytics', label: 'Usage analytics' },
            { value: 'cookies', label: 'Marketing cookies' },
            { value: 'sharing', label: 'Data sharing' },
          ]}
          .value=${['analytics']}
        ></app-switch-group>
      `,
    },
  ], meta('switch-group', source));
}

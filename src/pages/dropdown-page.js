import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-dropdown.js?raw';

export function dropdownPage(ctx) {
  return ctx.componentPage('Dropdown', 'A click menu — pass your own items and trigger button. Use it for user menus, action lists, or any contextual options.', [
    {
      title: 'User Menu',
      description: 'Pass items with label and value.',
      code: `<app-dropdown .items=\${[
  { label: 'Profile', value: 'profile' },
  { label: 'Settings', value: 'settings' },
  { label: 'Logout', value: 'logout' },
]}>
  <app-button variant="outline">My Account</app-button>
</app-dropdown>`,
      preview: html`
        <app-dropdown .items=${[{ label: 'Profile', value: 'profile' }, { label: 'Settings', value: 'settings' }, { label: 'Logout', value: 'logout' }]}>
          <app-button variant="outline">My Account</app-button>
        </app-dropdown>
      `,
    },
    {
      title: 'Row Actions',
      description: 'Same component for table row actions. Disable items that aren\'t allowed.',
      code: `<app-dropdown .items=\${[
  { label: 'Edit', value: 'edit' },
  { label: 'Duplicate', value: 'duplicate' },
  { label: 'Delete', value: 'delete', disabled: true },
]}>
  <app-button variant="outline">Actions</app-button>
</app-dropdown>`,
      preview: html`
        <app-dropdown .items=${[{ label: 'Edit', value: 'edit' }, { label: 'Duplicate', value: 'duplicate' }, { label: 'Delete', value: 'delete', disabled: true }]}>
          <app-button variant="outline">Actions</app-button>
        </app-dropdown>
      `,
    },
  ], meta('dropdown', source));
}

import { html } from 'lit';
import source from '../components/app-dropdown.js?raw';

const TAG = 'app-dropdown';
const IMPORT = '@/components/app-dropdown.js';
const FILE = 'app-dropdown.js';

export function dropdownPage(ctx) {
  return ctx.componentPage('Dropdown', 'A menu that opens on click, displaying a list of actions or options.', [
    {
      title: 'Default',
      code: `<app-dropdown .items=\${[
  { label: 'Profile', value: 'profile' },
  { label: 'Settings', value: 'settings' },
  { label: 'Logout', value: 'logout' },
]}>
  <app-button variant="outline">Open Menu</app-button>
</app-dropdown>`,
      preview: html`
        <app-dropdown .items=${[
          { label: 'Profile', value: 'profile' },
          { label: 'Settings', value: 'settings' },
          { label: 'Logout', value: 'logout' },
        ]}>
          <app-button variant="outline">Open Menu</app-button>
        </app-dropdown>
      `,
    },
    {
      title: 'With Disabled Item',
      code: `<app-dropdown .items=\${[
  { label: 'Edit', value: 'edit' },
  { label: 'Duplicate', value: 'duplicate' },
  { label: 'Delete', value: 'delete', disabled: true },
]}>
  <app-button variant="outline">Actions</app-button>
</app-dropdown>`,
      preview: html`
        <app-dropdown .items=${[
          { label: 'Edit', value: 'edit' },
          { label: 'Duplicate', value: 'duplicate' },
          { label: 'Delete', value: 'delete', disabled: true },
        ]}>
          <app-button variant="outline">Actions</app-button>
        </app-dropdown>
      `,
    },
  ], { source, fileName: FILE, importPath: IMPORT, tagName: TAG });
}

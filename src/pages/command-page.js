import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-command.js?raw';

export function commandPage(ctx) {
  return ctx.componentPage('Command', 'A command palette / quick search overlay. Press a button to open, search to filter, click to select.', [
    {
      title: 'Command Palette',
      description: 'Click the button to open. Search filters results in real time.',
      code: `<app-button label="Open Command Palette" @click="\${() => this.querySelector('app-command').open = true}"></app-button>
<app-command items='[{"heading":"Suggestions","items":[{"label":"Calendar","shortcut":"⌘K"},{"label":"Search","shortcut":"⌘F"},{"label":"Settings","shortcut":"⌘,"}]},{"heading":"Recent","items":[{"label":"Dashboard"},{"label":"Profile"},{"label":"Billing"}]}]'></app-command>`,
      preview: html`
        <div>
          <app-button label="Open Command Palette" @click=${function() { this.closest('div').querySelector('app-command').open = true; }}></app-button>
          <app-command .items=${[
            { heading: 'Suggestions', items: [{ label: 'Calendar', shortcut: '⌘K' }, { label: 'Search', shortcut: '⌘F' }, { label: 'Settings', shortcut: '⌘,' }] },
            { heading: 'Recent', items: [{ label: 'Dashboard' }, { label: 'Profile' }, { label: 'Billing' }] },
          ]}></app-command>
        </div>
      `,
    },
    {
      title: 'Flat List',
      description: 'No groups — just a flat list of actions.',
      code: `<app-button label="Search Actions" @click="\${() => this.querySelector('app-command').open = true}"></app-button>
<app-command placeholder="Search actions..." items='[{"label":"New File","shortcut":"⌘N"},{"label":"Open File","shortcut":"⌘O"},{"label":"Save","shortcut":"⌘S"},{"label":"Undo","shortcut":"⌘Z"},{"label":"Redo","shortcut":"⌘⇧Z"}]'></app-command>`,
      preview: html`
        <div>
          <app-button label="Search Actions" @click=${function() { this.closest('div').querySelector('app-command').open = true; }}></app-button>
          <app-command placeholder="Search actions..." .items=${[
            { label: 'New File', shortcut: '⌘N' }, { label: 'Open File', shortcut: '⌘O' },
            { label: 'Save', shortcut: '⌘S' }, { label: 'Undo', shortcut: '⌘Z' }, { label: 'Redo', shortcut: '⌘⇧Z' },
          ]}></app-command>
        </div>
      `,
    },
  ], meta('command', source));
}

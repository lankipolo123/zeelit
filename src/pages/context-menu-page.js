import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-context-menu.js?raw';
import pageSource from './context-menu-page.js?raw';

export function contextMenuPage(ctx) {
  return ctx.componentPage('Context Menu', 'A right-click menu — pass your own items and wrap any area. Use it for file managers, editors, dashboards, or any right-click interaction.', [
    {
      title: 'File Actions',
      description: 'Right-click the area to see the menu. Pass items as strings.',
      code: `<app-context-menu .items=\${['Open', 'Rename', 'Move to Trash', '-', 'Properties']}>
  <div>Right-click this area</div>
</app-context-menu>`,
      preview: html`
        <app-context-menu .items=${['Open', 'Rename', 'Move to Trash', '-', 'Properties']}>
          <div style="padding: 3rem; text-align: center; border: 2px dashed var(--border); border-radius: 0.5rem; color: var(--fg-muted);">Right-click this area</div>
        </app-context-menu>
      `,
    },
    {
      title: 'Editor Shortcuts',
      description: 'Pass objects with label and shortcut for keyboard hints.',
      code: `<app-context-menu .items=\${[
  { label: 'Cut', shortcut: '⌘X' },
  { label: 'Copy', shortcut: '⌘C' },
  { label: 'Paste', shortcut: '⌘V' },
  '-',
  { label: 'Select All', shortcut: '⌘A' },
]}>
  <div>Right-click for editor actions</div>
</app-context-menu>`,
      preview: html`
        <app-context-menu .items=${[{ label: 'Cut', shortcut: '⌘X' }, { label: 'Copy', shortcut: '⌘C' }, { label: 'Paste', shortcut: '⌘V' }, '-', { label: 'Select All', shortcut: '⌘A' }]}>
          <div style="padding: 3rem; text-align: center; border: 2px dashed var(--border); border-radius: 0.5rem; color: var(--fg-muted);">Right-click for editor actions</div>
        </app-context-menu>
      `,
    },
  ], { ...meta('context-menu', source), pageSource, pageFileName: 'context-menu-page.js' });
}

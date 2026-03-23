import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-context-menu.js?raw';

export function contextMenuPage(ctx) {
  return ctx.componentPage('Context Menu', 'A right-click menu that appears at the cursor position.', [
    {
      title: 'Basic',
      description: 'Right-click the area below to open the context menu.',
      code: `<app-context-menu .items=\${['Cut', 'Copy', 'Paste', '-', 'Select All']}>
  <p>Right-click here</p>
</app-context-menu>`,
      preview: html`
        <app-context-menu .items=${['Cut', 'Copy', 'Paste', '-', 'Select All']}>
          <div style="padding: 3rem; text-align: center; border: 2px dashed var(--border); border-radius: 0.5rem; color: var(--fg-muted);">Right-click here</div>
        </app-context-menu>
      `,
    },
    {
      title: 'With Shortcuts',
      description: 'Items can include keyboard shortcut labels.',
      code: `<app-context-menu .items=\${[
  { label: 'Cut', shortcut: '⌘X' },
  { label: 'Copy', shortcut: '⌘C' },
  { label: 'Paste', shortcut: '⌘V' },
  '-',
  { label: 'Delete', shortcut: '⌫' },
]}>
  <p>Right-click for shortcuts</p>
</app-context-menu>`,
      preview: html`
        <app-context-menu .items=${[{ label: 'Cut', shortcut: '⌘X' }, { label: 'Copy', shortcut: '⌘C' }, { label: 'Paste', shortcut: '⌘V' }, '-', { label: 'Select All', shortcut: '⌘A' }, '-', { label: 'Delete', shortcut: '⌫' }]}>
          <div style="padding: 3rem; text-align: center; border: 2px dashed var(--border); border-radius: 0.5rem; color: var(--fg-muted);">Right-click for shortcuts</div>
        </app-context-menu>
      `,
    },
  ], meta('context-menu', source));
}

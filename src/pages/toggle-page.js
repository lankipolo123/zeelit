import { html } from 'lit';
import source from '../components/app-toggle.js?raw';

const TAG = 'app-toggle';
const IMPORT = './components/app-toggle.js';
const FILE = 'app-toggle.js';

export function togglePage(ctx) {
  return ctx.componentPage('Toggle', 'A switch control for toggling between two states.', [
    {
      title: 'Default (Off)',
      code: `<app-toggle label="Airplane Mode"></app-toggle>`,
      preview: html`<app-toggle label="Airplane Mode"></app-toggle>`,
    },
    {
      title: 'Checked (On)',
      code: `<app-toggle label="Wi-Fi" checked></app-toggle>`,
      preview: html`<app-toggle label="Wi-Fi" checked></app-toggle>`,
    },
    {
      title: 'Disabled',
      code: `<app-toggle label="Bluetooth" disabled></app-toggle>`,
      preview: html`<app-toggle label="Bluetooth" disabled></app-toggle>`,
    },
  ], { source, fileName: FILE, importPath: IMPORT, tagName: TAG });
}

import { html } from 'lit';
import source from '../components/app-tabs.js?raw';

const TAG = 'app-tabs';
const IMPORT = '@/components/app-tabs.js';
const FILE = 'app-tabs.js';

export function tabsPage(ctx) {
  return ctx.componentPage('Tabs', 'A set of layered sections of content, shown one at a time.', [
    {
      title: 'Default',
      code: `<app-tabs .tabs=\${[
  { id: 'account', label: 'Account', content: html\`Make changes to your account.\` },
  { id: 'password', label: 'Password', content: html\`Change your password here.\` },
]}></app-tabs>`,
      preview: html`
        <app-tabs .tabs=${[
          { id: 'account', label: 'Account', content: html`<p class="text-sm">Make changes to your account here.</p>` },
          { id: 'password', label: 'Password', content: html`<p class="text-sm">Change your password here.</p>` },
        ]}></app-tabs>
      `,
    },
  ], { source, fileName: FILE, importPath: IMPORT, tagName: TAG });
}

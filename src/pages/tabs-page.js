import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-tabs.js?raw';
import pageSource from './tabs-page.js?raw';

export function tabsPage(ctx) {
  return ctx.componentPage('Tabs', 'Tabbed content — pass your own tabs array with id, label, and content. Use it for settings pages, docs, dashboards, or any multi-view layout.', [
    {
      title: 'Account Settings',
      description: 'Pass tabs with id, label, and content.',
      code: `<app-tabs .tabs=\${[
  { id: 'profile', label: 'Profile', content: html\`Edit your name, avatar, and bio.\` },
  { id: 'security', label: 'Security', content: html\`Change password and enable 2FA.\` },
  { id: 'billing', label: 'Billing', content: html\`Manage your plan and payment method.\` },
]}></app-tabs>`,
      preview: html`
        <app-tabs .tabs=${[
          { id: 'profile', label: 'Profile', content: html`<p class="text-sm">Edit your name, avatar, and bio.</p>` },
          { id: 'security', label: 'Security', content: html`<p class="text-sm">Change password and enable 2FA.</p>` },
          { id: 'billing', label: 'Billing', content: html`<p class="text-sm">Manage your plan and payment method.</p>` },
        ]}></app-tabs>
      `,
    },
  ], meta('tabs', source, pageSource));
}

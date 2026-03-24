import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-sidebar-nav.js?raw';

const pageContent = {
  dashboard: { title: 'Dashboard', body: 'Overview of your project metrics, recent activity, and key performance indicators.' },
  analytics: { title: 'Analytics', body: 'Detailed charts and reports on user engagement, traffic sources, and conversion rates.' },
  projects: { title: 'Projects', body: 'Manage your projects, track progress, and collaborate with your team.' },
  general: { title: 'General Settings', body: 'Configure your account preferences, language, timezone, and notification settings.' },
  billing: { title: 'Billing', body: 'Manage your subscription plan, payment methods, and view invoices.' },
  team: { title: 'Team', body: 'Invite members, assign roles, and manage team permissions.' },
};

const defaultItems = [
  { heading: 'Main' },
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'analytics', label: 'Analytics', badge: 'New' },
  { id: 'projects', label: 'Projects' },
  { separator: true },
  { heading: 'Settings' },
  { id: 'general', label: 'General' },
  { id: 'billing', label: 'Billing' },
  { id: 'team', label: 'Team' },
];

const defaultItemsJson = JSON.stringify([
  { heading: 'Main' },
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'analytics', label: 'Analytics', badge: 'New' },
  { id: 'projects', label: 'Projects' },
  { separator: true },
  { heading: 'Settings' },
  { id: 'general', label: 'General' },
  { id: 'billing', label: 'Billing' },
  { id: 'team', label: 'Team' },
]);

export function sidebarNavPage(ctx) {
  return ctx.componentPage('Sidebar Nav', 'A theme-aware sidebar navigation with collapsible layout, grouped sections, badges, and active state. Use for app shells, dashboards, and admin panels.', [
    {
      title: 'With Page Content',
      description: 'Click a sidebar item to see the corresponding page content.',
      code: `<div style="display:flex; height:520px; border:1px solid var(--border); border-radius:0.75rem; overflow:hidden;">
  <app-sidebar-nav header="Acme Inc" active="dashboard" items='${defaultItemsJson}'></app-sidebar-nav>
  <div style="flex:1; padding:2rem; background:var(--bg);">
    <h2 style="margin:0 0 0.5rem; font-size:1.25rem; font-weight:600; color:var(--fg);">Dashboard</h2>
    <p style="color:var(--fg-muted); line-height:1.6;">Overview of your project metrics, recent activity, and key performance indicators.</p>
  </div>
</div>`,
      preview: html`
        <div style="display: flex; height: 520px; border: 1px solid var(--border); border-radius: 0.75rem; overflow: hidden;" id="sidebar-demo">
          <app-sidebar-nav header="Acme Inc" active="dashboard" .items=${defaultItems} @app-change=${(e) => {
            const content = pageContent[e.detail.value];
            if (!content) return;
            const container = e.target.closest('#sidebar-demo');
            const titleEl = container?.querySelector('[data-page-title]');
            const bodyEl = container?.querySelector('[data-page-body]');
            if (titleEl) titleEl.textContent = content.title;
            if (bodyEl) bodyEl.textContent = content.body;
          }}></app-sidebar-nav>
          <div style="flex: 1; padding: 2rem; background: var(--bg); border-left: 1px solid var(--border);">
            <h2 data-page-title style="margin: 0 0 0.5rem; font-size: 1.25rem; font-weight: 600; color: var(--fg);">Dashboard</h2>
            <p data-page-body style="color: var(--fg-muted); line-height: 1.6;">Overview of your project metrics, recent activity, and key performance indicators.</p>
          </div>
        </div>
      `,
    },
    {
      title: 'Collapsed',
      description: 'Collapsed sidebar showing only icons. Click the toggle button to expand.',
      code: `<app-sidebar-nav header="App" collapsed active="inbox" items='[{"id":"inbox","label":"Inbox"},{"id":"sent","label":"Sent"},{"id":"drafts","label":"Drafts"},{"id":"trash","label":"Trash"}]'></app-sidebar-nav>`,
      preview: html`
        <div style="height: 420px;">
          <app-sidebar-nav header="App" collapsed active="inbox" .items=${[
            { id: 'inbox', label: 'Inbox' },
            { id: 'sent', label: 'Sent' },
            { id: 'drafts', label: 'Drafts' },
            { id: 'trash', label: 'Trash' },
          ]}></app-sidebar-nav>
        </div>
      `,
    },
    {
      title: 'Inset Variant',
      description: 'Rounded, inset background style — great for embedded panels.',
      code: `<app-sidebar-nav variant="inset" header="Docs" active="intro" items='[{"id":"intro","label":"Introduction"},{"id":"getting-started","label":"Getting Started"},{"id":"components","label":"Components"},{"id":"api","label":"API Reference"}]'></app-sidebar-nav>`,
      preview: html`
        <div style="height: 420px; padding: 8px;">
          <app-sidebar-nav variant="inset" header="Docs" active="intro" .items=${[
            { id: 'intro', label: 'Introduction' },
            { id: 'getting-started', label: 'Getting Started' },
            { id: 'components', label: 'Components' },
            { id: 'api', label: 'API Reference' },
          ]}></app-sidebar-nav>
        </div>
      `,
    },
  ], meta('sidebar-nav', source));
}

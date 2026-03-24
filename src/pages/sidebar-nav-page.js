import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-sidebar-nav.js?raw';

export function sidebarNavPage(ctx) {
  return ctx.componentPage('Sidebar Nav', 'A theme-aware sidebar navigation with collapsible layout, grouped sections, badges, and active state. Use for app shells, dashboards, and admin panels.', [
    {
      title: 'Default',
      description: 'A sidebar with grouped sections and badges.',
      code: `<app-sidebar-nav header="Acme Inc" active="dashboard" items='[{"heading":"Main"},{"id":"dashboard","label":"Dashboard","icon":"📊"},{"id":"analytics","label":"Analytics","icon":"📈","badge":"New"},{"id":"projects","label":"Projects","icon":"📁"},{"separator":true},{"heading":"Settings"},{"id":"general","label":"General","icon":"⚙️"},{"id":"billing","label":"Billing","icon":"💳"},{"id":"team","label":"Team","icon":"👥"}]'></app-sidebar-nav>`,
      preview: html`
        <div style="height: 380px;">
          <app-sidebar-nav header="Acme Inc" active="dashboard" .items=${[
            { heading: 'Main' },
            { id: 'dashboard', label: 'Dashboard', icon: '📊' },
            { id: 'analytics', label: 'Analytics', icon: '📈', badge: 'New' },
            { id: 'projects', label: 'Projects', icon: '📁' },
            { separator: true },
            { heading: 'Settings' },
            { id: 'general', label: 'General', icon: '⚙️' },
            { id: 'billing', label: 'Billing', icon: '💳' },
            { id: 'team', label: 'Team', icon: '👥' },
          ]}></app-sidebar-nav>
        </div>
      `,
    },
    {
      title: 'Collapsed',
      description: 'Collapsed sidebar showing only icons. Click the toggle button to expand.',
      code: `<app-sidebar-nav header="App" collapsed active="inbox" items='[{"id":"inbox","label":"Inbox","icon":"📬"},{"id":"sent","label":"Sent","icon":"📤"},{"id":"drafts","label":"Drafts","icon":"📝"},{"id":"trash","label":"Trash","icon":"🗑️"}]'></app-sidebar-nav>`,
      preview: html`
        <div style="height: 320px;">
          <app-sidebar-nav header="App" collapsed active="inbox" .items=${[
            { id: 'inbox', label: 'Inbox', icon: '📬' },
            { id: 'sent', label: 'Sent', icon: '📤' },
            { id: 'drafts', label: 'Drafts', icon: '📝' },
            { id: 'trash', label: 'Trash', icon: '🗑️' },
          ]}></app-sidebar-nav>
        </div>
      `,
    },
    {
      title: 'Inset Variant',
      description: 'Rounded, inset background style — great for embedded panels.',
      code: `<app-sidebar-nav variant="inset" header="Docs" active="intro" items='[{"id":"intro","label":"Introduction","icon":"📖"},{"id":"getting-started","label":"Getting Started","icon":"🚀"},{"id":"components","label":"Components","icon":"🧩"},{"id":"api","label":"API Reference","icon":"📡"}]'></app-sidebar-nav>`,
      preview: html`
        <div style="height: 320px; padding: 8px;">
          <app-sidebar-nav variant="inset" header="Docs" active="intro" .items=${[
            { id: 'intro', label: 'Introduction', icon: '📖' },
            { id: 'getting-started', label: 'Getting Started', icon: '🚀' },
            { id: 'components', label: 'Components', icon: '🧩' },
            { id: 'api', label: 'API Reference', icon: '📡' },
          ]}></app-sidebar-nav>
        </div>
      `,
    },
  ], meta('sidebar-nav', source));
}

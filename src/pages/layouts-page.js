import { html } from 'lit';
import layoutSource from '../layouts/app-sidebar-layout.js?raw';

/* ─── Source Code ─── */

const sidebarLayoutCode = `<app-sidebar-layout style="height: 100vh;">
  <app-sidebar-nav slot="sidebar" header="My App" active="home"
    items='[{"id":"home","label":"Home"},{"id":"settings","label":"Settings"}]'>
  </app-sidebar-nav>
  <section slot="content" style="padding: 2rem;">
    <h1>Home</h1>
    <p>Your page content goes here.</p>
  </section>
</app-sidebar-layout>`;

/* ─── Page ─── */

export function layoutsPage(ctx) {
  const bt = '`';
  const pageExample = `import { LitElement, html, css } from 'lit';
import '@/layouts/app-sidebar-layout.js';
import '@/components/app-sidebar-nav.js';

class DashboardPage extends LitElement {
  static styles = css${bt}
    :host {
      display: block;
      height: 100vh;
    }
  ${bt};

  render() {
    return html${bt}
      <app-sidebar-layout>
        <app-sidebar-nav
          slot="sidebar"
          header="Acme Inc"
          active="dashboard"
          .items=\\\${[
            { heading: 'Main' },
            { id: 'dashboard', label: 'Dashboard' },
            { id: 'analytics', label: 'Analytics', badge: 'New' },
            { id: 'projects', label: 'Projects' },
            { separator: true },
            { heading: 'Settings' },
            { id: 'general', label: 'General' },
            { id: 'billing', label: 'Billing' },
          ]}
        ></app-sidebar-nav>
        <div slot="content" style="padding: 2rem;">
          <h1>Dashboard</h1>
          <p>Your page content goes here.</p>
        </div>
      </app-sidebar-layout>
    ${bt};
  }
}
customElements.define('dashboard-page', DashboardPage);`;

  const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sidebar Layout — ZeeLit</title>
  <link rel="stylesheet" href="./styles.css">
  <script type="module" src="./layouts/app-sidebar-layout.js"><\/script>
</head>
<body>

  ${sidebarLayoutCode}

</body>
</html>`;

  const files = [
    { name: 'app-sidebar-layout.js', path: 'layouts/app-sidebar-layout.js', code: layoutSource },
    { name: 'index.html', path: 'index.html', code: indexHtml },
    { name: 'dashboard-page.js', path: 'pages/dashboard-page.js', code: pageExample },
  ];

  return html`
    <div class="space-y-16">
      <div>
        <h1 class="text-3xl font-bold tracking-tight"
            style="color: var(--fg-heading)">
          Layouts
        </h1>
        <p class="mt-2" style="color: var(--fg-muted)">
          Pre-built layout shells you can copy and adapt.
        </p>
      </div>

      <div class="h-px" style="background: var(--border)"></div>

      <!-- Sidebar Layout -->
      <div class="space-y-4">
        <div>
          <h3 class="text-xl font-semibold"
              style="color: var(--fg-heading)">
            Sidebar Layout
          </h3>
          <p class="text-sm mt-1" style="color: var(--fg-muted)">
            Sidebar + content area. Good starting point for any app.
          </p>
        </div>
        ${ctx.renderDemo(
          'layout-sidebar',
          html`
            <app-sidebar-layout style="height: 400px; border: 1px solid var(--border); border-radius: 0.75rem; overflow: hidden;">
              <app-sidebar-nav slot="sidebar" header="My App" active="home"
                .items=${[
                  { id: 'home', label: 'Home' },
                  { id: 'settings', label: 'Settings' },
                ]}></app-sidebar-nav>
              <section slot="content" style="padding: 2rem;">
                <h2 style="margin: 0 0 0.5rem; font-size: 1.25rem; font-weight: 600; color: var(--fg);">Home</h2>
                <p style="color: var(--fg-muted); line-height: 1.6;">Your page content goes here.</p>
              </section>
            </app-sidebar-layout>
          `,
          sidebarLayoutCode,
          {
            importPath: '@/layouts/app-sidebar-layout.js',
            files,
            title: 'Sidebar Layout',
          },
        )}
      </div>
    </div>
  `;
}

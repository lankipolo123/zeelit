import { html } from 'lit';
import layoutSource from '../layouts/app-sidebar-layout.js?raw';

/* ─── Source Code ─── */

const sidebarLayoutCode = `<app-sidebar-layout style="height: 100vh;">
  <div slot="sidebar" style="padding: 1.5rem;">
    Sidebar Content
  </div>
  <div slot="content" style="padding: 1.5rem;">
    Page Content
  </div>
</app-sidebar-layout>`;

/* ─── Page ─── */

export function layoutsPage(ctx) {
  const files = [
    {
      name: 'app-sidebar-layout.js',
      path: 'layouts/app-sidebar-layout.js',
      code: layoutSource,
    },
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
              <div slot="sidebar"
                   style="flex: 1; display: flex; align-items: center; justify-content: center;">
                <span style="color: var(--fg-muted); font-size: 0.875rem;">
                  Sidebar Content
                </span>
              </div>
              <div slot="content"
                   style="flex: 1; display: flex; align-items: center; justify-content: center;">
                <span style="color: var(--fg-muted); font-size: 0.875rem;">
                  Page Content
                </span>
              </div>
            </app-sidebar-layout>
          `,
          sidebarLayoutCode,
          { files, title: 'Sidebar Layout' },
        )}
      </div>
    </div>
  `;
}

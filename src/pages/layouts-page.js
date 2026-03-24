import { html } from 'lit';

/* ─── Source Code ─── */

const sidebarLayoutSource = `<!-- sidebar-layout.html -->
<div style="display: flex; height: 100vh; background: var(--bg);">

  <!-- Sidebar -->
  <aside style="width: 16rem; border-right: 1px solid var(--border); background: var(--bg-card); padding: 1.5rem;">
    <!-- <app-sidebar-nav> can replace this -->
    Sidebar Content
  </aside>

  <!-- Page Content -->
  <main style="flex: 1; padding: 1.5rem; background: var(--bg);">
    Page Content
  </main>
</div>`;

/* ─── Page ─── */

export function layoutsPage(ctx) {
  const files = [
    { name: 'sidebar-layout.html', path: 'layouts/sidebar-layout.html', code: sidebarLayoutSource },
  ];

  return html`
    <div class="space-y-16">
      <div>
        <h1 class="text-3xl font-bold tracking-tight" style="color: var(--fg-heading)">Layouts</h1>
        <p class="mt-2" style="color: var(--fg-muted)">Pre-built layout shells you can copy and adapt.</p>
      </div>

      <div class="h-px" style="background: var(--border)"></div>

      <!-- Sidebar Layout -->
      <div class="space-y-4">
        <div>
          <h3 class="text-xl font-semibold" style="color: var(--fg-heading)">Sidebar Layout</h3>
          <p class="text-sm mt-1" style="color: var(--fg-muted)">Sidebar + content area. Good starting point for any app.</p>
        </div>
        ${ctx.renderDemo('layout-sidebar', html`
          <div style="display: flex; height: 400px; border: 1px solid var(--border); border-radius: 0.75rem; overflow: hidden;">
            <div style="width: 15rem; border-right: 1px solid var(--border); background: var(--bg-card); display: flex; align-items: center; justify-content: center;">
              <span style="color: var(--fg-muted); font-size: 0.875rem;">Sidebar Content</span>
            </div>
            <div style="flex: 1; background: var(--bg); display: flex; align-items: center; justify-content: center;">
              <span style="color: var(--fg-muted); font-size: 0.875rem;">Page Content</span>
            </div>
          </div>
        `, sidebarLayoutSource, { files, title: 'Sidebar Layout' })}
      </div>
    </div>
  `;
}

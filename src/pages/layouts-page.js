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

const dashboardLayoutSource = `<!-- dashboard-layout.html -->
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

const webLayoutSource = `<!-- web-layout.html -->
<div style="display: flex; height: 100vh; background: var(--bg);">

  <!-- Sidebar -->
  <aside style="width: 15rem; border-right: 1px solid var(--border); background: var(--bg-card); padding: 1.5rem;">
    <!-- <app-sidebar-nav> can replace this -->
    Sidebar Content
  </aside>

  <!-- Page Content -->
  <main style="flex: 1; padding: 1.5rem; background: var(--bg);">
    Page Content
  </main>
</div>`;

/* ─── Simple Preview ─── */

function sidebarPreview() {
  return html`
    <div style="display: flex; height: 400px; border: 1px solid var(--border); border-radius: 0.75rem; overflow: hidden;">
      <div style="width: 15rem; border-right: 1px solid var(--border); background: var(--bg-card); display: flex; align-items: center; justify-content: center;">
        <span style="color: var(--fg-muted); font-size: 0.875rem;">Sidebar Content</span>
      </div>
      <div style="flex: 1; background: var(--bg); display: flex; align-items: center; justify-content: center;">
        <span style="color: var(--fg-muted); font-size: 0.875rem;">Page Content</span>
      </div>
    </div>
  `;
}

/* ─── Page ─── */

export function layoutsPage(ctx) {
  const sidebarFiles = [
    { name: 'sidebar-layout.html', path: 'layouts/sidebar-layout.html', code: sidebarLayoutSource },
    { name: 'dashboard-layout.html', path: 'layouts/dashboard-layout.html', code: dashboardLayoutSource },
    { name: 'web-layout.html', path: 'layouts/web-layout.html', code: webLayoutSource },
  ];

  return html`
    <div class="space-y-16">
      <div>
        <h1 class="text-3xl font-bold tracking-tight" style="color: var(--fg-heading)">Layouts</h1>
        <p class="mt-2" style="color: var(--fg-muted)">Pre-built layout shells you can copy and adapt. Each layout uses a sidebar with content area pattern.</p>
      </div>

      <div class="h-px" style="background: var(--border)"></div>

      <!-- Sidebar Layout -->
      <div class="space-y-4">
        <div>
          <h3 class="text-xl font-semibold" style="color: var(--fg-heading)">Sidebar Layout</h3>
          <p class="text-sm mt-1" style="color: var(--fg-muted)">Basic sidebar + content area. Good starting point for any app.</p>
        </div>
        ${ctx.renderDemo('layout-sidebar', sidebarPreview(), sidebarLayoutSource, { files: sidebarFiles, title: 'Sidebar Layout' })}
      </div>

      <div class="h-px" style="background: var(--border)"></div>

      <!-- Dashboard Layout -->
      <div class="space-y-4">
        <div>
          <h3 class="text-xl font-semibold" style="color: var(--fg-heading)">Dashboard Layout</h3>
          <p class="text-sm mt-1" style="color: var(--fg-muted)">Grouped nav sections with separators and headings. Built for admin panels.</p>
        </div>
        ${ctx.renderDemo('layout-dashboard', sidebarPreview(), dashboardLayoutSource, { files: sidebarFiles, title: 'Dashboard Layout' })}
      </div>

      <div class="h-px" style="background: var(--border)"></div>

      <!-- Web Layout -->
      <div class="space-y-4">
        <div>
          <h3 class="text-xl font-semibold" style="color: var(--fg-heading)">Web Layout</h3>
          <p class="text-sm mt-1" style="color: var(--fg-muted)">CMS-style sidebar for content management and website admin panels.</p>
        </div>
        ${ctx.renderDemo('layout-web', sidebarPreview(), webLayoutSource, { files: sidebarFiles, title: 'Web Layout' })}
      </div>
    </div>
  `;
}

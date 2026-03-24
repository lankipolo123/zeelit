import { html } from 'lit';

/* ─── Sidebar Layout Source Code ─── */

const sidebarLayoutSource = `<!-- sidebar-layout.html -->
<div style="display: flex; height: 100vh; background: var(--bg);">

  <!-- Sidebar -->
  <aside style="width: 16rem; display: flex; flex-direction: column; border-right: 1px solid var(--border); background: var(--bg-card);">

    <!-- Sidebar Header -->
    <div style="height: 3.5rem; display: flex; align-items: center; gap: 0.5rem; padding: 0 1rem; border-bottom: 1px solid var(--border);">
      <div style="width: 1.75rem; height: 1.75rem; border-radius: 0.375rem; display: flex; align-items: center; justify-content: center; background: var(--primary); color: var(--primary-fg); font-weight: 700; font-size: 0.75rem;">A</div>
      <span style="font-weight: 600; font-size: 0.875rem; color: var(--fg);">Acme Inc</span>
    </div>

    <!-- Nav Items -->
    <nav style="flex: 1; overflow-y: auto; padding: 0.5rem;">
      <!-- <app-sidebar-nav> can replace this static nav -->
      <a href="#" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem; background: var(--primary); color: var(--primary-fg); text-decoration: none;">📊 Dashboard</a>
      <a href="#" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem; color: var(--fg-muted); text-decoration: none;">📈 Analytics</a>
      <a href="#" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem; color: var(--fg-muted); text-decoration: none;">📁 Projects</a>
      <a href="#" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem; color: var(--fg-muted); text-decoration: none;">⚙️ Settings</a>
      <a href="#" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem; color: var(--fg-muted); text-decoration: none;">👥 Team</a>
    </nav>

    <!-- Sidebar Footer -->
    <div style="padding: 0.75rem; border-top: 1px solid var(--border);">
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <div style="width: 2rem; height: 2rem; border-radius: 9999px; background: var(--bg-muted); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 600; color: var(--fg-muted);">JD</div>
        <div style="flex: 1; min-width: 0;">
          <p style="font-size: 0.875rem; font-weight: 500; color: var(--fg); margin: 0;">John Doe</p>
          <p style="font-size: 0.75rem; color: var(--fg-muted); margin: 0;">john@acme.com</p>
        </div>
      </div>
    </div>
  </aside>

  <!-- Main Content -->
  <div style="flex: 1; display: flex; flex-direction: column; min-width: 0;">

    <!-- Header -->
    <header style="height: 3.5rem; display: flex; align-items: center; justify-content: space-between; padding: 0 1.5rem; border-bottom: 1px solid var(--border); background: var(--bg);">
      <h1 style="font-size: 1rem; font-weight: 600; color: var(--fg); margin: 0;">Dashboard</h1>
      <div style="display: flex; align-items: center; gap: 0.75rem;">
        <span style="font-size: 0.875rem; color: var(--fg-muted);">Search...</span>
      </div>
    </header>

    <!-- Page Content -->
    <main style="flex: 1; overflow-y: auto; padding: 1.5rem;">
      <!-- Your page content goes here -->
    </main>
  </div>
</div>`;

const dashboardLayoutSource = `<!-- dashboard-layout.html -->
<div style="display: flex; height: 100vh; background: var(--bg);">

  <!-- Sidebar -->
  <aside style="width: 16rem; display: flex; flex-direction: column; border-right: 1px solid var(--border); background: var(--bg-card);">

    <!-- Sidebar Header -->
    <div style="height: 3.5rem; display: flex; align-items: center; gap: 0.5rem; padding: 0 1rem; border-bottom: 1px solid var(--border);">
      <div style="width: 1.75rem; height: 1.75rem; border-radius: 0.375rem; display: flex; align-items: center; justify-content: center; background: var(--primary); color: var(--primary-fg); font-weight: 700; font-size: 0.75rem;">D</div>
      <span style="font-weight: 600; font-size: 0.875rem; color: var(--fg);">Dashboard</span>
    </div>

    <!-- Nav -->
    <nav style="flex: 1; overflow-y: auto; padding: 0.5rem;">
      <!-- <app-sidebar-nav> can replace this static nav -->
      <p style="padding: 0.75rem 0.75rem 0.25rem; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--fg-subtle); margin: 0;">Overview</p>
      <a href="#" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem; background: var(--primary); color: var(--primary-fg); text-decoration: none;">📊 Dashboard</a>
      <a href="#" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem; color: var(--fg-muted); text-decoration: none;">📈 Analytics</a>
      <a href="#" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem; color: var(--fg-muted); text-decoration: none;">📋 Reports</a>
      <div style="margin: 0.5rem; border-top: 1px solid var(--border);"></div>
      <p style="padding: 0.75rem 0.75rem 0.25rem; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--fg-subtle); margin: 0;">Management</p>
      <a href="#" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem; color: var(--fg-muted); text-decoration: none;">👥 Users</a>
      <a href="#" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem; color: var(--fg-muted); text-decoration: none;">📁 Projects</a>
      <a href="#" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem; color: var(--fg-muted); text-decoration: none;">⚙️ Settings</a>
    </nav>

    <!-- Footer -->
    <div style="padding: 0.75rem; border-top: 1px solid var(--border);">
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <div style="width: 2rem; height: 2rem; border-radius: 9999px; background: var(--bg-muted); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 600; color: var(--fg-muted);">AD</div>
        <div style="flex: 1; min-width: 0;">
          <p style="font-size: 0.875rem; font-weight: 500; color: var(--fg); margin: 0;">Admin</p>
          <p style="font-size: 0.75rem; color: var(--fg-muted); margin: 0;">admin@dashboard.io</p>
        </div>
      </div>
    </div>
  </aside>

  <!-- Main -->
  <div style="flex: 1; display: flex; flex-direction: column; min-width: 0;">
    <header style="height: 3.5rem; display: flex; align-items: center; justify-content: space-between; padding: 0 1.5rem; border-bottom: 1px solid var(--border);">
      <h1 style="font-size: 1rem; font-weight: 600; color: var(--fg); margin: 0;">Dashboard</h1>
    </header>
    <main style="flex: 1; overflow-y: auto; padding: 1.5rem;">
      <!-- Dashboard cards, charts, tables go here -->
    </main>
  </div>
</div>`;

const webLayoutSource = `<!-- web-layout.html -->
<div style="display: flex; height: 100vh; background: var(--bg);">

  <!-- Sidebar -->
  <aside style="width: 15rem; display: flex; flex-direction: column; border-right: 1px solid var(--border); background: var(--bg-card);">

    <!-- Header -->
    <div style="height: 3.5rem; display: flex; align-items: center; gap: 0.5rem; padding: 0 1rem; border-bottom: 1px solid var(--border);">
      <div style="width: 1.75rem; height: 1.75rem; border-radius: 0.375rem; display: flex; align-items: center; justify-content: center; background: var(--primary); color: var(--primary-fg); font-weight: 700; font-size: 0.75rem;">W</div>
      <span style="font-weight: 600; font-size: 0.875rem; color: var(--fg);">WebApp</span>
    </div>

    <!-- Nav -->
    <nav style="flex: 1; overflow-y: auto; padding: 0.5rem;">
      <!-- <app-sidebar-nav> can replace this static nav -->
      <a href="#" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem; background: var(--primary); color: var(--primary-fg); text-decoration: none;">🏠 Home</a>
      <a href="#" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem; color: var(--fg-muted); text-decoration: none;">📄 Pages</a>
      <a href="#" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem; color: var(--fg-muted); text-decoration: none;">🖼️ Media</a>
      <a href="#" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem; color: var(--fg-muted); text-decoration: none;">💬 Comments</a>
      <a href="#" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem; color: var(--fg-muted); text-decoration: none;">🎨 Appearance</a>
      <a href="#" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem; color: var(--fg-muted); text-decoration: none;">🔌 Plugins</a>
    </nav>

    <!-- Footer -->
    <div style="padding: 0.75rem; border-top: 1px solid var(--border);">
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <div style="width: 2rem; height: 2rem; border-radius: 9999px; background: var(--bg-muted); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 600; color: var(--fg-muted);">WP</div>
        <div style="flex: 1; min-width: 0;">
          <p style="font-size: 0.875rem; font-weight: 500; color: var(--fg); margin: 0;">Web Admin</p>
          <p style="font-size: 0.75rem; color: var(--fg-muted); margin: 0;">admin@webapp.com</p>
        </div>
      </div>
    </div>
  </aside>

  <!-- Main -->
  <div style="flex: 1; display: flex; flex-direction: column; min-width: 0;">
    <header style="height: 3.5rem; display: flex; align-items: center; justify-content: space-between; padding: 0 1.5rem; border-bottom: 1px solid var(--border);">
      <h1 style="font-size: 1rem; font-weight: 600; color: var(--fg); margin: 0;">Home</h1>
    </header>
    <main style="flex: 1; overflow-y: auto; padding: 1.5rem;">
      <!-- Web content goes here -->
    </main>
  </div>
</div>`;

/* ─── Layout Preview ─── */

function sidebarPreview(logoLetter, logoColor, appName, navItems, activeIndex, user) {
  return html`
    <div style="display: flex; height: 480px; border: 1px solid var(--border); border-radius: 0.75rem; overflow: hidden;">
      <!-- Sidebar -->
      <aside style="width: 15rem; display: flex; flex-direction: column; background: var(--bg-card); border-right: 1px solid var(--border);">
        <!-- Header -->
        <div style="height: 3.5rem; display: flex; align-items: center; gap: 0.5rem; padding: 0 1rem; border-bottom: 1px solid var(--border);">
          <div style="width: 1.75rem; height: 1.75rem; border-radius: 0.375rem; display: flex; align-items: center; justify-content: center; background: ${logoColor}; color: var(--primary-fg); font-weight: 700; font-size: 0.75rem;">${logoLetter}</div>
          <span style="font-weight: 600; font-size: 0.875rem; color: var(--fg);">${appName}</span>
        </div>
        <!-- Nav -->
        <nav style="flex: 1; overflow-y: auto; padding: 0.5rem;">
          ${navItems.map((item, i) => {
            if (item.heading) return html`<p style="padding: 0.75rem 0.75rem 0.25rem; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--fg-subtle); margin: 0;">${item.heading}</p>`;
            if (item.separator) return html`<div style="margin: 0.5rem; border-top: 1px solid var(--border);"></div>`;
            const isActive = i === activeIndex;
            return html`<a style="display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem; cursor: pointer; text-decoration: none; ${isActive ? 'background: var(--primary); color: var(--primary-fg);' : 'color: var(--fg-muted);'}">${item.icon} ${item.label}</a>`;
          })}
        </nav>
        <!-- Footer -->
        <div style="padding: 0.75rem; border-top: 1px solid var(--border);">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <div style="width: 2rem; height: 2rem; border-radius: 9999px; background: var(--bg-muted); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 600; color: var(--fg-muted);">${user.initials}</div>
            <div style="flex: 1; min-width: 0;">
              <p style="font-size: 0.875rem; font-weight: 500; color: var(--fg); margin: 0;">${user.name}</p>
              <p style="font-size: 0.75rem; color: var(--fg-muted); margin: 0;">${user.email}</p>
            </div>
          </div>
        </div>
      </aside>
      <!-- Content -->
      <div style="flex: 1; display: flex; flex-direction: column; min-width: 0;">
        <header style="height: 3.5rem; display: flex; align-items: center; justify-content: space-between; padding: 0 1.5rem; border-bottom: 1px solid var(--border); background: var(--bg);">
          <h1 style="font-size: 1rem; font-weight: 600; color: var(--fg); margin: 0;">${navItems[activeIndex]?.label || 'Page'}</h1>
          <span style="font-size: 0.875rem; color: var(--fg-subtle);">Search...</span>
        </header>
        <main style="flex: 1; overflow-y: auto; padding: 1.5rem; background: var(--bg);">
          <div style="max-width: 48rem;">
            <h2 style="font-size: 1.25rem; font-weight: 600; color: var(--fg-heading); margin: 0 0 0.5rem;">${navItems[activeIndex]?.label || 'Page'}</h2>
            <p style="color: var(--fg-muted); line-height: 1.6; margin: 0 0 1.5rem;">${navItems[activeIndex]?.content || 'Page content goes here.'}</p>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
              ${[1,2,3].map(() => html`
                <div style="border-radius: 0.5rem; padding: 1.25rem; border: 1px solid var(--border); background: var(--bg-card);">
                  <div style="height: 0.75rem; width: 60%; border-radius: 0.25rem; background: var(--bg-muted); margin-bottom: 0.5rem;"></div>
                  <div style="height: 0.5rem; width: 80%; border-radius: 0.25rem; background: var(--bg-muted);"></div>
                </div>
              `)}
            </div>
          </div>
        </main>
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
          <p class="text-sm mt-1" style="color: var(--fg-muted)">Basic sidebar + header + content area. Good starting point for any app.</p>
        </div>
        ${ctx.renderDemo('layout-sidebar', sidebarPreview(
          'A', 'var(--primary)',
          'Acme Inc',
          [
            { icon: '📊', label: 'Dashboard', content: 'Overview of your project metrics, recent activity, and key performance indicators.' },
            { icon: '📈', label: 'Analytics', content: 'Detailed charts and reports on user engagement, traffic sources, and conversion rates.' },
            { icon: '📁', label: 'Projects', content: 'Manage your projects, track progress, and collaborate with your team.' },
            { icon: '⚙️', label: 'Settings', content: 'Configure your account preferences, language, timezone, and notification settings.' },
            { icon: '👥', label: 'Team', content: 'Invite members, assign roles, and manage team permissions.' },
          ], 0,
          { initials: 'JD', name: 'John Doe', email: 'john@acme.com' },
        ), sidebarLayoutSource, { files: sidebarFiles, title: 'Sidebar Layout' })}
      </div>

      <div class="h-px" style="background: var(--border)"></div>

      <!-- Dashboard Layout -->
      <div class="space-y-4">
        <div>
          <h3 class="text-xl font-semibold" style="color: var(--fg-heading)">Dashboard Layout</h3>
          <p class="text-sm mt-1" style="color: var(--fg-muted)">Grouped nav sections with separators and headings. Built for admin panels.</p>
        </div>
        ${ctx.renderDemo('layout-dashboard', sidebarPreview(
          'D', 'var(--primary)',
          'Dashboard',
          [
            { heading: 'Overview' },
            { icon: '📊', label: 'Dashboard', content: 'Key metrics, charts, and summaries for your business at a glance.' },
            { icon: '📈', label: 'Analytics', content: 'Deep-dive into user behavior, funnels, and cohort analysis.' },
            { icon: '📋', label: 'Reports', content: 'Generate and export custom reports for stakeholders.' },
            { separator: true },
            { heading: 'Management' },
            { icon: '👥', label: 'Users', content: 'View, invite, and manage user accounts and permissions.' },
            { icon: '📁', label: 'Projects', content: 'Create and organize projects with team assignments.' },
            { icon: '⚙️', label: 'Settings', content: 'System configuration, integrations, and preferences.' },
          ], 2,
          { initials: 'AD', name: 'Admin', email: 'admin@dashboard.io' },
        ), dashboardLayoutSource, { files: sidebarFiles, title: 'Dashboard Layout' })}
      </div>

      <div class="h-px" style="background: var(--border)"></div>

      <!-- Web Layout -->
      <div class="space-y-4">
        <div>
          <h3 class="text-xl font-semibold" style="color: var(--fg-heading)">Web Layout</h3>
          <p class="text-sm mt-1" style="color: var(--fg-muted)">CMS-style sidebar for content management and website admin panels.</p>
        </div>
        ${ctx.renderDemo('layout-web', sidebarPreview(
          'W', 'var(--primary)',
          'WebApp',
          [
            { icon: '🏠', label: 'Home', content: 'Welcome to your web admin. Manage your site content and settings from here.' },
            { icon: '📄', label: 'Pages', content: 'Create, edit, and organize your website pages and landing pages.' },
            { icon: '🖼️', label: 'Media', content: 'Upload and manage images, videos, and documents in your media library.' },
            { icon: '💬', label: 'Comments', content: 'Review, approve, and moderate user comments across your site.' },
            { icon: '🎨', label: 'Appearance', content: 'Customize your site theme, colors, fonts, and layout options.' },
            { icon: '🔌', label: 'Plugins', content: 'Browse, install, and configure plugins to extend functionality.' },
          ], 0,
          { initials: 'WP', name: 'Web Admin', email: 'admin@webapp.com' },
        ), webLayoutSource, { files: sidebarFiles, title: 'Web Layout' })}
      </div>
    </div>
  `;
}

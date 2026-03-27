import { html } from 'lit';
import centerCardSource from '../layouts/app-center-card-layout.js?raw';
import sidebarLayoutSource from '../layouts/app-sidebar-layout.js?raw';

/* ─── Page ─── */

export function templatesPage(ctx) {

  /* ─── Coming Soon Config ───
   * Add or remove template IDs here to toggle their visibility.
   * The source code is always preserved — only the UI changes.
   * ─────────────────────────── */
  const COMING_SOON = new Set([
    // 'template-login',
    // 'template-dashboard',
  ]);

  /* ─── Coming Soon Renderer ─── */
  function renderSection(id, title, description, demoNode, codeStr, opts) {
    if (COMING_SOON.has(id)) {
      return html`
        <div class="space-y-4">
          <div>
            <h3 class="text-xl font-semibold" style="color: var(--fg-heading)">${title}</h3>
            <p class="text-sm mt-1" style="color: var(--fg-muted)">${description}</p>
          </div>
          <div style="
            position: relative;
            height: 400px;
            border-radius: 12px;
            overflow: hidden;
            background: var(--surface);
            border: 1px solid var(--border);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 8px;
          ">
            <span style="
              padding: 6px 20px;
              border-radius: 999px;
              font-size: 13px;
              font-weight: 500;
              letter-spacing: 0.02em;
              background: color-mix(in srgb, var(--fg-heading) 10%, transparent);
              color: var(--fg-heading);
              border: 1px solid color-mix(in srgb, var(--fg-heading) 20%, transparent);
            ">Coming soon</span>
            <p style="font-size: 12px; color: var(--fg-muted); margin: 0;">
              This template is not yet available.
            </p>
          </div>
        </div>
      `;
    }

    return html`
      <div class="space-y-4">
        <div>
          <h3 class="text-xl font-semibold" style="color: var(--fg-heading)">${title}</h3>
          <p class="text-sm mt-1" style="color: var(--fg-muted)">${description}</p>
        </div>
        ${ctx.renderDemo(id, demoNode, codeStr, opts)}
      </div>
    `;
  }

  /* ══════════════════════════════════════════════════
     Template 1: Login — Right Card Layout
     ══════════════════════════════════════════════════ */

  const loginCode = `<!-- Login page: two-panel split with form card on the right -->
<div style="display: flex; height: 100vh; background: var(--bg);">
  <!-- Left branding panel -->
  <div style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 3rem; background: var(--bg-card); border-right: 1px solid var(--border);">
    <div style="max-width: 360px; text-align: center;">
      <div style="display: inline-flex; align-items: center; justify-content: center; width: 3.5rem; height: 3.5rem; border-radius: 0.75rem; background: var(--logo-bg); margin-bottom: 1.5rem;">
        <span style="font-weight: 800; font-size: 1.25rem; color: var(--logo-fg);">Z</span>
      </div>
      <h1 style="font-size: 1.75rem; font-weight: 800; color: var(--fg-heading); line-height: 1.2;">ZeeLit</h1>
      <p style="font-size: 0.9rem; color: var(--fg-muted); margin-top: 0.75rem; line-height: 1.5;">
        Build beautiful interfaces with our modern component library. Fast, accessible, and themeable.
      </p>
    </div>
  </div>

  <!-- Right login form panel -->
  <div style="flex: 1; display: flex; align-items: center; justify-content: center; padding: 3rem;">
    <div style="width: 100%; max-width: 380px;">
      <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--fg-heading);">Welcome back</h2>
      <p style="font-size: 0.875rem; color: var(--fg-muted); margin-top: 0.25rem;">Sign in to your account</p>

      <div style="margin-top: 1.5rem;">
        <app-input label="Email" placeholder="you@example.com"></app-input>
      </div>
      <div style="margin-top: 1rem;">
        <app-input label="Password" type="password" placeholder="Enter your password"></app-input>
      </div>

      <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 1rem;">
        <app-checkbox label="Remember me"></app-checkbox>
        <a style="font-size: 0.8rem; color: var(--primary); cursor: pointer; text-decoration: none;">Forgot password?</a>
      </div>

      <div style="margin-top: 1.5rem;">
        <app-button variant="default" style="width: 100%; display: block;">Sign In</app-button>
      </div>

      <div style="display: flex; align-items: center; gap: 1rem; margin: 1.5rem 0;">
        <div style="flex: 1; height: 1px; background: var(--border);"></div>
        <span style="font-size: 0.75rem; color: var(--fg-muted); text-transform: uppercase; letter-spacing: 0.05em;">or</span>
        <div style="flex: 1; height: 1px; background: var(--border);"></div>
      </div>

      <app-button variant="outline" style="width: 100%; display: block;">Continue with Google</app-button>

      <p style="font-size: 0.8rem; color: var(--fg-muted); text-align: center; margin-top: 1.5rem;">
        Don't have an account? <a style="color: var(--primary); cursor: pointer; font-weight: 600;">Sign up</a>
      </p>
    </div>
  </div>
</div>`;

  const loginFiles = [
    {
      name: 'index.html', path: 'index.html', code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login — ZeeLit</title>
  <link rel="stylesheet" href="./styles.css">
  <script type="module" src="./components/app-input.js"><\/script>
  <script type="module" src="./components/app-button.js"><\/script>
  <script type="module" src="./components/app-checkbox.js"><\/script>
</head>
<body>

${loginCode}

</body>
</html>` },
  ];

  /* ══════════════════════════════════════════════════
     Template 2: Dashboard — Sidebar with Pages + Logout Dialog
     ══════════════════════════════════════════════════ */

  const dashboardCode = `<!-- Dashboard: sidebar nav + content area with logout dialog -->
<div style="display: flex; height: 100vh; background: var(--bg); color: var(--fg);">

  <!-- Sidebar -->
  <aside style="width: 260px; flex-shrink: 0; display: flex; flex-direction: column; border-right: 1px solid var(--border); background: var(--bg-card);">

    <!-- Brand -->
    <div style="display: flex; align-items: center; gap: 0.625rem; padding: 1.25rem 1.25rem; border-bottom: 1px solid var(--border);">
      <div style="width: 2rem; height: 2rem; border-radius: 0.5rem; background: var(--logo-bg); display: flex; align-items: center; justify-content: center;">
        <span style="font-weight: 700; font-size: 0.75rem; color: var(--logo-fg);">Z</span>
      </div>
      <span style="font-weight: 700; font-size: 1rem; color: var(--fg);">My App</span>
    </div>

    <!-- Nav links -->
    <app-sidebar-nav
      items='[
        { "type": "heading", "label": "Main" },
        { "value": "dashboard", "label": "Dashboard", "icon": "layout-dashboard", "badge": "3" },
        { "value": "analytics", "label": "Analytics", "icon": "bar-chart-2" },
        { "value": "customers", "label": "Customers", "icon": "users" },
        { "type": "heading", "label": "Content" },
        { "value": "pages", "label": "Pages", "icon": "file-text" },
        { "value": "posts", "label": "Blog Posts", "icon": "pen-line" },
        { "value": "media", "label": "Media Library", "icon": "image" },
        { "type": "separator" },
        { "type": "heading", "label": "System" },
        { "value": "settings", "label": "Settings", "icon": "settings" },
        { "value": "billing", "label": "Billing", "icon": "credit-card" }
      ]'
      active="dashboard"
      style="flex: 1; overflow-y: auto;"
    ></app-sidebar-nav>

    <!-- User footer -->
    <div style="padding: 0.875rem 1.25rem; border-top: 1px solid var(--border);">
      <div style="display: flex; align-items: center; gap: 0.625rem;">
        <app-avatar fallback="JD" size="sm"></app-avatar>
        <div style="flex: 1; min-width: 0;">
          <div style="font-size: 0.8rem; font-weight: 600; color: var(--fg);">John Doe</div>
          <div style="font-size: 0.7rem; color: var(--fg-muted);">john@example.com</div>
        </div>
        <app-button variant="ghost" size="icon"
          onclick="document.getElementById('logout-dialog').show()">
          <app-icon name="log-out" style="width:1rem;height:1rem;"></app-icon>
        </app-button>
      </div>
    </div>
  </aside>

  <!-- Main content area -->
  <main style="flex: 1; display: flex; flex-direction: column; min-width: 0;">

    <!-- Top bar -->
    <header style="padding: 1rem 1.5rem; border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; flex-shrink: 0;">
      <div>
        <h1 style="font-size: 1.25rem; font-weight: 700; color: var(--fg-heading); margin: 0;">Dashboard</h1>
        <p style="font-size: 0.8rem; color: var(--fg-muted); margin: 0.125rem 0 0;">Welcome back, John</p>
      </div>
      <app-searchbar placeholder="Search..." style="width: 220px;"></app-searchbar>
    </header>

    <!-- Scrollable page body -->
    <div style="flex: 1; padding: 1.5rem; overflow-y: auto;">
      <!-- Stat cards -->
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
        <app-stat label="Total Revenue" value="$45,231" trend="up" trend-value="12%"></app-stat>
        <app-stat label="Subscriptions" value="2,350" trend="up" trend-value="8%"></app-stat>
        <app-stat label="Active Users" value="1,247" trend="down" trend-value="3%"></app-stat>
        <app-stat label="Bounce Rate" value="24.5%" trend="down" trend-value="5%"></app-stat>
      </div>

      <!-- Activity card -->
      <app-card card-title="Recent Activity">
        <app-timeline items='[
          { "time": "2 min ago", "title": "New user signed up", "description": "jane@example.com created an account", "color": "var(--primary)" },
          { "time": "1 hour ago", "title": "Payment received", "description": "$99.00 from Pro plan subscription" },
          { "time": "3 hours ago", "title": "Blog post published", "description": "Getting Started with ZeeLit" },
          { "time": "Yesterday", "title": "Server update", "description": "Deployed v2.4.1 to production" }
        ]'></app-timeline>
      </app-card>
    </div>
  </main>

  <!-- Logout dialog (outside layout so it overlays properly) -->
  <app-dialog id="logout-dialog"
    dialog-title="Log out"
    description="Are you sure you want to log out? You will need to sign in again.">
    <div style="display: flex; justify-content: flex-end; gap: 0.5rem; margin-top: 1rem;">
      <app-button variant="outline"
        onclick="document.getElementById('logout-dialog').close()">Cancel</app-button>
      <app-button variant="destructive">Log Out</app-button>
    </div>
  </app-dialog>
</div>`;

  const dashboardFiles = [
    {
      name: 'index.html', path: 'index.html', code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard — ZeeLit</title>
  <link rel="stylesheet" href="./styles.css">
  <script type="module" src="./components/app-sidebar-nav.js"><\/script>
  <script type="module" src="./components/app-avatar.js"><\/script>
  <script type="module" src="./components/app-button.js"><\/script>
  <script type="module" src="./components/app-icon.js"><\/script>
  <script type="module" src="./components/app-searchbar.js"><\/script>
  <script type="module" src="./components/app-stat.js"><\/script>
  <script type="module" src="./components/app-card.js"><\/script>
  <script type="module" src="./components/app-timeline.js"><\/script>
  <script type="module" src="./components/app-dialog.js"><\/script>
</head>
<body>

${dashboardCode}

</body>
</html>` },
  ];

  /* ══════════════════════════════════════════════════
     Render
     ══════════════════════════════════════════════════ */

  return html`
    <div class="space-y-16">
      <div>
        <h1 class="text-3xl font-bold tracking-tight"
            style="color: var(--fg-heading)">
          Templates
        </h1>
        <p class="mt-2" style="color: var(--fg-muted)">
          Ready-to-use page templates built with ZeeLit components. Copy and adapt for your project.
        </p>
      </div>

      <div class="h-px" style="background: var(--border)"></div>

      <!-- Template 1: Login -->
      ${renderSection(
    'template-login',
    'Login Page',
    'Two-panel split with branding on the left and a login form on the right.',
    html`
          <div style="display: flex; height: 500px; background: var(--bg); border-radius: 0.5rem; overflow: hidden; border: 1px solid var(--border);">
            <!-- Left branding panel -->
            <div style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 2rem; background: var(--bg-card); border-right: 1px solid var(--border);">
              <div style="max-width: 300px; text-align: center;">
                <div style="display: inline-flex; align-items: center; justify-content: center; width: 3.5rem; height: 3.5rem; border-radius: 0.75rem; background: var(--logo-bg); margin-bottom: 1.25rem;">
                  <span style="font-weight: 800; font-size: 1.25rem; color: var(--logo-fg);">Z</span>
                </div>
                <h1 style="font-size: 1.5rem; font-weight: 800; color: var(--fg-heading); line-height: 1.2; margin: 0;">ZeeLit</h1>
                <p style="font-size: 0.85rem; color: var(--fg-muted); margin-top: 0.5rem; line-height: 1.5;">
                  Build beautiful interfaces with our modern component library.
                </p>
              </div>
            </div>

            <!-- Right login form -->
            <div style="flex: 1; display: flex; align-items: center; justify-content: center; padding: 2rem;">
              <div style="width: 100%; max-width: 340px;">
                <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--fg-heading); margin: 0;">Welcome back</h2>
                <p style="font-size: 0.8rem; color: var(--fg-muted); margin: 0.25rem 0 0;">Sign in to your account</p>

                <div style="margin-top: 1.25rem;">
                  <app-input label="Email" placeholder="you@example.com"></app-input>
                </div>
                <div style="margin-top: 0.75rem;">
                  <app-input label="Password" type="password" placeholder="Enter your password"></app-input>
                </div>

                <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 0.75rem;">
                  <app-checkbox label="Remember me"></app-checkbox>
                  <a style="font-size: 0.75rem; color: var(--primary); cursor: pointer;">Forgot password?</a>
                </div>

                <div style="margin-top: 1.25rem;">
                  <app-button variant="default" style="width: 100%; display: block;">Sign In</app-button>
                </div>

                <div style="display: flex; align-items: center; gap: 0.75rem; margin: 1rem 0;">
                  <div style="flex: 1; height: 1px; background: var(--border);"></div>
                  <span style="font-size: 0.7rem; color: var(--fg-muted); text-transform: uppercase; letter-spacing: 0.05em;">or</span>
                  <div style="flex: 1; height: 1px; background: var(--border);"></div>
                </div>

                <app-button variant="outline" style="width: 100%; display: block;">Continue with Google</app-button>

                <p style="font-size: 0.75rem; color: var(--fg-muted); text-align: center; margin-top: 1rem;">
                  Don't have an account? <a style="color: var(--primary); cursor: pointer; font-weight: 600;">Sign up</a>
                </p>
              </div>
            </div>
          </div>
        `,
    loginCode,
    {
      files: loginFiles,
      title: 'Login Template',
    },
  )}

      <div class="h-px" style="background: var(--border)"></div>

      <!-- Template 2: Dashboard with Sidebar -->
      ${renderSection(
    'template-dashboard',
    'Dashboard with Sidebar',
    'Sidebar navigation with grouped pages, user profile, stat cards, activity timeline, and logout dialog.',
    html`
          <div style="display: flex; height: 550px; background: var(--bg); color: var(--fg); border-radius: 0.5rem; overflow: hidden; border: 1px solid var(--border); position: relative;">

            <!-- Sidebar -->
            <aside style="width: 240px; flex-shrink: 0; display: flex; flex-direction: column; border-right: 1px solid var(--border); background: var(--bg-card);">
              <!-- Brand -->
              <div style="display: flex; align-items: center; gap: 0.625rem; padding: 1rem 1rem; border-bottom: 1px solid var(--border);">
                <div style="width: 2rem; height: 2rem; border-radius: 0.5rem; background: var(--logo-bg); display: flex; align-items: center; justify-content: center;">
                  <span style="font-weight: 700; font-size: 0.75rem; color: var(--logo-fg);">Z</span>
                </div>
                <span style="font-weight: 700; color: var(--fg);">My App</span>
              </div>

              <!-- Nav -->
              <app-sidebar-nav
                .items="${[
        { type: 'heading', label: 'Main' },
        { value: 'dashboard', label: 'Dashboard', icon: 'layout-dashboard', badge: '3' },
        { value: 'analytics', label: 'Analytics', icon: 'bar-chart-2' },
        { value: 'customers', label: 'Customers', icon: 'users' },
        { type: 'heading', label: 'Content' },
        { value: 'pages', label: 'Pages', icon: 'file-text' },
        { value: 'posts', label: 'Blog Posts', icon: 'pen-line' },
        { value: 'media', label: 'Media Library', icon: 'image' },
        { type: 'separator' },
        { type: 'heading', label: 'System' },
        { value: 'settings', label: 'Settings', icon: 'settings' },
        { value: 'billing', label: 'Billing', icon: 'credit-card' },
      ]}"
                active="dashboard"
                style="flex: 1; overflow-y: auto;"
              ></app-sidebar-nav>

              <!-- User footer -->
              <div style="padding: 0.75rem 1rem; border-top: 1px solid var(--border);">
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                  <app-avatar fallback="JD" size="sm"></app-avatar>
                  <div style="flex: 1; min-width: 0;">
                    <div style="font-size: 0.8rem; font-weight: 600; color: var(--fg);">John Doe</div>
                    <div style="font-size: 0.7rem; color: var(--fg-muted);">john@example.com</div>
                  </div>
                  <app-button variant="ghost" size="icon" @click="${(e) => {
        const dlg = e.target.closest('[style*="display: flex"]').querySelector('#tpl-logout-dialog');
        if (dlg) dlg.show();
      }}">
                    <app-icon name="log-out" class="w-4 h-4"></app-icon>
                  </app-button>
                </div>
              </div>
            </aside>

            <!-- Main content -->
            <main style="flex: 1; display: flex; flex-direction: column; min-width: 0;">
              <!-- Top bar -->
              <header style="padding: 1rem 1.5rem; border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; flex-shrink: 0;">
                <div>
                  <h1 style="font-size: 1.125rem; font-weight: 700; color: var(--fg-heading); margin: 0;">Dashboard</h1>
                  <p style="font-size: 0.75rem; color: var(--fg-muted); margin: 0.125rem 0 0;">Welcome back, John</p>
                </div>
                <app-searchbar placeholder="Search..." style="width: 200px;"></app-searchbar>
              </header>

              <!-- Scrollable body -->
              <div style="flex: 1; padding: 1.25rem; overflow-y: auto;">
                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.75rem; margin-bottom: 1.25rem;">
                  <app-stat label="Total Revenue" value="$45,231" trend="up" trend-value="12%"></app-stat>
                  <app-stat label="Subscriptions" value="2,350" trend="up" trend-value="8%"></app-stat>
                  <app-stat label="Active Users" value="1,247" trend="down" trend-value="3%"></app-stat>
                  <app-stat label="Bounce Rate" value="24.5%" trend="down" trend-value="5%"></app-stat>
                </div>

                <app-card card-title="Recent Activity">
                  <app-timeline .items="${[
        { time: '2 min ago', title: 'New user signed up', description: 'jane@example.com created an account', color: 'var(--primary)' },
        { time: '1 hour ago', title: 'Payment received', description: '$99.00 from Pro plan subscription' },
        { time: '3 hours ago', title: 'Blog post published', description: 'Getting Started with ZeeLit' },
        { time: 'Yesterday', title: 'Server update', description: 'Deployed v2.4.1 to production' },
      ]}"></app-timeline>
                </app-card>
              </div>
            </main>

            <!-- Logout dialog -->
            <app-dialog id="tpl-logout-dialog"
              dialog-title="Log out"
              description="Are you sure you want to log out? You will need to sign in again.">
              <div style="display: flex; justify-content: flex-end; gap: 0.5rem; margin-top: 1rem;">
                <app-button variant="outline" @click="${(e) => e.target.closest('app-dialog').close()}">Cancel</app-button>
                <app-button variant="destructive">Log Out</app-button>
              </div>
            </app-dialog>
          </div>
        `,
    dashboardCode,
    {
      files: dashboardFiles,
      title: 'Dashboard Template',
    },
  )}
    </div>
  `;
}
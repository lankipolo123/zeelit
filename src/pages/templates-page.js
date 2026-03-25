import { html } from 'lit';
import centerCardSource from '../layouts/app-center-card-layout.js?raw';
import sidebarLayoutSource from '../layouts/app-sidebar-layout.js?raw';

/* ─── Helpers ─── */

function makeHtml(title, scripts, body) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} — ZeeLit</title>
  <link rel="stylesheet" href="./styles.css">
${scripts.map(s => `  <script type="module" src="${s}"><\/script>`).join('\n')}
</head>
<body>

${body}

</body>
</html>`;
}

function makePage(bt, imports, body) {
  return `import { LitElement, html, css } from 'lit';
${imports.map(i => `import '${i}';`).join('\n')}

class MyPage extends LitElement {
  static styles = css${bt}
    :host {
      display: block;
      height: 100vh;
    }
  ${bt};

  render() {
    return html${bt}
${body}
    ${bt};
  }
}
customElements.define('my-page', MyPage);`;
}

/* ─── Page ─── */

export function templatesPage(ctx) {
  const bt = '`';

  /* ══════════════════════════════════════════════════
     Template 1: Login — Right Card Layout
     ══════════════════════════════════════════════════ */

  const loginCode = `<app-center-card-layout card-position="right" style="height: 100vh;">
  <div style="width: 100%; max-width: 340px;">
    <div style="text-align: center; margin-bottom: 1.5rem;">
      <div style="display: inline-flex; align-items: center; justify-content: center; width: 2.5rem; height: 2.5rem; border-radius: 0.5rem; background: var(--logo-bg); margin-bottom: 0.75rem;">
        <span style="font-weight: 700; color: var(--logo-fg);">Z</span>
      </div>
      <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--fg-heading);">Welcome back</h2>
      <p style="font-size: 0.875rem; color: var(--fg-muted); margin-top: 0.25rem;">Sign in to your account</p>
    </div>

    <app-form layout="vertical">
      <app-form-field label="Email" name="email" type="text" placeholder="you@example.com" required></app-form-field>
      <app-form-field label="Password" name="password" type="text" placeholder="••••••••" required></app-form-field>
    </app-form>

    <div style="display: flex; align-items: center; justify-content: space-between; margin: 0.75rem 0;">
      <app-checkbox label="Remember me"></app-checkbox>
      <a style="font-size: 0.8rem; color: var(--primary); cursor: pointer;">Forgot password?</a>
    </div>

    <app-button variant="default" style="width: 100%; display: block;">Sign In</app-button>

    <app-separator style="margin: 1.25rem 0;"></app-separator>

    <app-button variant="outline" style="width: 100%; display: block;">Continue with Google</app-button>

    <p style="font-size: 0.8rem; color: var(--fg-muted); text-align: center; margin-top: 1.25rem;">
      Don't have an account? <a style="color: var(--primary); cursor: pointer; font-weight: 500;">Sign up</a>
    </p>
  </div>
</app-center-card-layout>`;

  const loginHtmlBody = `  ${loginCode}`;

  const loginPageBody = `      ${loginCode.split('\n').map(l => '      ' + l).join('\n').trim()}`;

  const loginFiles = [
    { name: 'app-center-card-layout.js', path: 'layouts/app-center-card-layout.js', code: centerCardSource },
    { name: 'index.html', path: 'index.html', code: makeHtml('Login',
      ['./layouts/app-center-card-layout.js', './components/app-form.js', './components/app-button.js', './components/app-checkbox.js', './components/app-separator.js', './components/app-input.js'],
      loginHtmlBody) },
    { name: 'my-page.js', path: 'pages/my-page.js', code: makePage(bt,
      ['@/layouts/app-center-card-layout.js', '@/components/app-form.js', '@/components/app-button.js', '@/components/app-checkbox.js', '@/components/app-separator.js', '@/components/app-input.js'],
      loginPageBody) },
  ];

  /* ══════════════════════════════════════════════════
     Template 2: Dashboard — Sidebar with Pages + Logout Dialog
     ══════════════════════════════════════════════════ */

  const dashboardCode = `<app-sidebar-layout style="height: 100vh;">
  <div slot="sidebar" style="display: flex; flex-direction: column; height: 100%;">
    <!-- Brand -->
    <div style="padding: 1.25rem 1rem; border-bottom: 1px solid var(--border);">
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <div style="width: 2rem; height: 2rem; border-radius: 0.5rem; background: var(--logo-bg); display: flex; align-items: center; justify-content: center;">
          <span style="font-weight: 700; font-size: 0.75rem; color: var(--logo-fg);">Z</span>
        </div>
        <span style="font-weight: 600; color: var(--fg);">My App</span>
      </div>
    </div>

    <!-- Navigation -->
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

    <!-- User footer with logout -->
    <div style="padding: 0.75rem 1rem; border-top: 1px solid var(--border);">
      <div style="display: flex; align-items: center; gap: 0.625rem;">
        <app-avatar fallback="JD" size="sm"></app-avatar>
        <div style="flex: 1; min-width: 0;">
          <div style="font-size: 0.8rem; font-weight: 500; color: var(--fg); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">John Doe</div>
          <div style="font-size: 0.7rem; color: var(--fg-muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">john@example.com</div>
        </div>
        <app-button variant="ghost" size="icon" onclick="this.closest('app-sidebar-layout').querySelector('#logout-dialog').show()">
          <app-icon name="log-out" class="w-4 h-4"></app-icon>
        </app-button>
      </div>
    </div>
  </div>

  <div slot="content" style="display: flex; flex-direction: column; height: 100%;">
    <!-- Top bar -->
    <div style="padding: 1rem 1.5rem; border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between;">
      <div>
        <h1 style="font-size: 1.25rem; font-weight: 700; color: var(--fg-heading);">Dashboard</h1>
        <p style="font-size: 0.8rem; color: var(--fg-muted);">Welcome back, John</p>
      </div>
      <app-searchbar placeholder="Search..." style="width: 220px;"></app-searchbar>
    </div>

    <!-- Page content -->
    <div style="flex: 1; padding: 1.5rem; overflow-y: auto;">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
        <app-stat label="Total Revenue" value="$45,231" trend="up" trend-value="12%"></app-stat>
        <app-stat label="Subscriptions" value="2,350" trend="up" trend-value="8%"></app-stat>
        <app-stat label="Active Users" value="1,247" trend="down" trend-value="3%"></app-stat>
        <app-stat label="Bounce Rate" value="24.5%" trend="down" trend-value="5%"></app-stat>
      </div>

      <app-card card-title="Recent Activity">
        <app-timeline items='[
          { "time": "2 min ago", "title": "New user signed up", "description": "jane@example.com created an account", "color": "var(--primary)" },
          { "time": "1 hour ago", "title": "Payment received", "description": "$99.00 from Pro plan subscription" },
          { "time": "3 hours ago", "title": "Blog post published", "description": "Getting Started with ZeeLit" },
          { "time": "Yesterday", "title": "Server update", "description": "Deployed v2.4.1 to production" }
        ]'></app-timeline>
      </app-card>
    </div>

    <!-- Logout dialog -->
    <app-dialog id="logout-dialog" dialog-title="Log out" description="Are you sure you want to log out? You will need to sign in again to access your account.">
      <div style="display: flex; justify-content: flex-end; gap: 0.5rem; margin-top: 1rem;">
        <app-button variant="outline" onclick="this.closest('app-dialog').close()">Cancel</app-button>
        <app-button variant="destructive">Log Out</app-button>
      </div>
    </app-dialog>
  </div>
</app-sidebar-layout>`;

  const dashboardHtmlBody = `  ${dashboardCode}`;

  const dashboardPageBody = `      ${dashboardCode.split('\n').map(l => '      ' + l).join('\n').trim()}`;

  const dashboardFiles = [
    { name: 'app-sidebar-layout.js', path: 'layouts/app-sidebar-layout.js', code: sidebarLayoutSource },
    { name: 'index.html', path: 'index.html', code: makeHtml('Dashboard',
      ['./layouts/app-sidebar-layout.js', './components/app-sidebar-nav.js', './components/app-avatar.js', './components/app-button.js', './components/app-icon.js', './components/app-searchbar.js', './components/app-stat.js', './components/app-card.js', './components/app-timeline.js', './components/app-dialog.js'],
      dashboardHtmlBody) },
    { name: 'my-page.js', path: 'pages/my-page.js', code: makePage(bt,
      ['@/layouts/app-sidebar-layout.js', '@/components/app-sidebar-nav.js', '@/components/app-avatar.js', '@/components/app-button.js', '@/components/app-icon.js', '@/components/app-searchbar.js', '@/components/app-stat.js', '@/components/app-card.js', '@/components/app-timeline.js', '@/components/app-dialog.js'],
      dashboardPageBody) },
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
          Ready-to-use page templates built with ZeeLit components and layouts. Copy and adapt for your project.
        </p>
      </div>

      <div class="h-px" style="background: var(--border)"></div>

      <!-- Template 1: Login -->
      <div class="space-y-4">
        <div>
          <h3 class="text-xl font-semibold"
              style="color: var(--fg-heading)">
            Login Page
          </h3>
          <p class="text-sm mt-1" style="color: var(--fg-muted)">
            Right-card login with email/password form, remember-me, social sign-in, and sign-up link.
          </p>
        </div>
        ${ctx.renderDemo(
          'template-login',
          html`
            <app-center-card-layout card-position="right" style="height: 500px;">
              <div style="width: 100%; max-width: 340px;">
                <div style="text-align: center; margin-bottom: 1.5rem;">
                  <div style="display: inline-flex; align-items: center; justify-content: center; width: 2.5rem; height: 2.5rem; border-radius: 0.5rem; background: var(--logo-bg); margin-bottom: 0.75rem;">
                    <span style="font-weight: 700; color: var(--logo-fg);">Z</span>
                  </div>
                  <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--fg-heading);">Welcome back</h2>
                  <p style="font-size: 0.875rem; color: var(--fg-muted); margin-top: 0.25rem;">Sign in to your account</p>
                </div>

                <app-form layout="vertical">
                  <app-form-field label="Email" name="email" type="text" placeholder="you@example.com" required></app-form-field>
                  <app-form-field label="Password" name="password" type="text" placeholder="••••••••" required></app-form-field>
                </app-form>

                <div style="display: flex; align-items: center; justify-content: space-between; margin: 0.75rem 0;">
                  <app-checkbox label="Remember me"></app-checkbox>
                  <a style="font-size: 0.8rem; color: var(--primary); cursor: pointer;">Forgot password?</a>
                </div>

                <app-button variant="default" style="width: 100%; display: block;">Sign In</app-button>

                <app-separator style="margin: 1.25rem 0;"></app-separator>

                <app-button variant="outline" style="width: 100%; display: block;">Continue with Google</app-button>

                <p style="font-size: 0.8rem; color: var(--fg-muted); text-align: center; margin-top: 1.25rem;">
                  Don't have an account? <a style="color: var(--primary); cursor: pointer; font-weight: 500;">Sign up</a>
                </p>
              </div>
            </app-center-card-layout>
          `,
          loginCode,
          {
            importPath: '@/layouts/app-center-card-layout.js',
            files: loginFiles,
            title: 'Login Template',
          },
        )}
      </div>

      <div class="h-px" style="background: var(--border)"></div>

      <!-- Template 2: Dashboard with Sidebar -->
      <div class="space-y-4">
        <div>
          <h3 class="text-xl font-semibold"
              style="color: var(--fg-heading)">
            Dashboard with Sidebar
          </h3>
          <p class="text-sm mt-1" style="color: var(--fg-muted)">
            Full sidebar navigation with grouped pages, user profile footer, stat cards, activity timeline, and a logout confirmation dialog.
          </p>
        </div>
        ${ctx.renderDemo(
          'template-dashboard',
          html`
            <app-sidebar-layout style="height: 550px;">
              <div slot="sidebar" style="display: flex; flex-direction: column; height: 100%;">
                <!-- Brand -->
                <div style="padding: 1.25rem 1rem; border-bottom: 1px solid var(--border);">
                  <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <div style="width: 2rem; height: 2rem; border-radius: 0.5rem; background: var(--logo-bg); display: flex; align-items: center; justify-content: center;">
                      <span style="font-weight: 700; font-size: 0.75rem; color: var(--logo-fg);">Z</span>
                    </div>
                    <span style="font-weight: 600; color: var(--fg);">My App</span>
                  </div>
                </div>

                <!-- Navigation -->
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

                <!-- User footer with logout -->
                <div style="padding: 0.75rem 1rem; border-top: 1px solid var(--border);">
                  <div style="display: flex; align-items: center; gap: 0.625rem;">
                    <app-avatar fallback="JD" size="sm"></app-avatar>
                    <div style="flex: 1; min-width: 0;">
                      <div style="font-size: 0.8rem; font-weight: 500; color: var(--fg); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">John Doe</div>
                      <div style="font-size: 0.7rem; color: var(--fg-muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">john@example.com</div>
                    </div>
                    <app-button variant="ghost" size="icon" @click="${(e) => { const dlg = e.target.closest('app-sidebar-layout').querySelector('#logout-dialog-demo'); if (dlg) dlg.show(); }}">
                      <app-icon name="log-out" class="w-4 h-4"></app-icon>
                    </app-button>
                  </div>
                </div>
              </div>

              <div slot="content" style="display: flex; flex-direction: column; height: 100%;">
                <!-- Top bar -->
                <div style="padding: 1rem 1.5rem; border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between;">
                  <div>
                    <h1 style="font-size: 1.25rem; font-weight: 700; color: var(--fg-heading);">Dashboard</h1>
                    <p style="font-size: 0.8rem; color: var(--fg-muted);">Welcome back, John</p>
                  </div>
                  <app-searchbar placeholder="Search..." style="width: 220px;"></app-searchbar>
                </div>

                <!-- Page content -->
                <div style="flex: 1; padding: 1.5rem; overflow-y: auto;">
                  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
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

                <!-- Logout dialog -->
                <app-dialog id="logout-dialog-demo" dialog-title="Log out" description="Are you sure you want to log out? You will need to sign in again to access your account.">
                  <div style="display: flex; justify-content: flex-end; gap: 0.5rem; margin-top: 1rem;">
                    <app-button variant="outline" @click="${(e) => e.target.closest('app-dialog').close()}">Cancel</app-button>
                    <app-button variant="destructive">Log Out</app-button>
                  </div>
                </app-dialog>
              </div>
            </app-sidebar-layout>
          `,
          dashboardCode,
          {
            importPath: '@/layouts/app-sidebar-layout.js',
            files: dashboardFiles,
            title: 'Dashboard Template',
          },
        )}
      </div>
    </div>
  `;
}

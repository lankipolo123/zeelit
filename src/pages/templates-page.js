import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { highlightCode } from '../showcase/code-highlight.js';
import sidebarLayoutSource from '../layouts/app-sidebar-layout.js?raw';
import splitLayoutSource from '../layouts/app-split-layout.js?raw';

/* ─── Page ─── */

export function templatesPage(ctx) {

  /* ─── Custom template demo renderer ───
     3 tabs: Preview / Code (full LitElement file) / Source (file tree)
     + fullscreen expand on Preview
  ─── */
  function renderTemplate(id, title, description, previewFn, pageCode, files) {
    const fsKey  = `${id}-fs`;
    const isFs   = !!ctx._codeVisible[fsKey];
    const view   = ctx._getView(id); // 'preview' | 'code' | 'source'

    const tabBtn = (v, label) => html`
      <button
        @click="${() => ctx._setView(id, v)}"
        class="px-4 py-2.5 text-sm font-medium transition-colors cursor-pointer"
        style="color: ${view === v ? 'var(--fg)' : 'var(--fg-subtle)'}; ${view === v ? 'border-bottom: 2px solid var(--fg)' : ''}"
      >${label}</button>
    `;

    return html`
      <div class="space-y-4">
        <!-- Header row -->
        <div class="flex items-start justify-between gap-4">
          <div>
            <h3 class="text-xl font-semibold" style="color: var(--fg-heading)">${title}</h3>
            <p class="text-sm mt-1" style="color: var(--fg-muted)">${description}</p>
          </div>
          <button
            @click="${() => ctx._setView(fsKey, isFs ? '' : 'open')}"
            class="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium cursor-pointer transition-colors shrink-0 mt-1"
            style="border: 1px solid var(--border); color: var(--fg-muted); background: var(--bg-card);"
            @mouseenter=${(e) => e.currentTarget.style.background = 'var(--bg-muted)'}
            @mouseleave=${(e) => e.currentTarget.style.background = 'var(--bg-card)'}
          >
            <app-icon name="${isFs ? 'minimize-2' : 'maximize-2'}" class="w-3.5 h-3.5"></app-icon>
            ${isFs ? 'Exit' : 'Full Preview'}
          </button>
        </div>

        <!-- Tab block -->
        <div class="rounded-lg overflow-hidden" style="border: 1px solid var(--border)">
          <div class="flex items-center justify-between px-4" style="border-bottom: 1px solid var(--border); background: var(--bg-card)">
            <div class="flex">
              ${tabBtn('preview', 'Preview')}
              ${tabBtn('code', 'Code')}
              ${tabBtn('source', 'Source')}
            </div>
            ${view === 'code' ? ctx._copyButton(pageCode, `${id}-code`) : ''}
          </div>

          ${view === 'preview' ? html`
            <div class="p-6" style="background: var(--bg-preview)">
              ${previewFn(false)}
            </div>
          ` : view === 'code' ? html`
            <div class="code-block max-h-[560px] overflow-auto rounded-none border-0">
              ${unsafeHTML(highlightCode(pageCode))}
            </div>
          ` : ctx.renderFileExplorer(`${id}-source`, files, { inline: true })}
        </div>
      </div>

      <!-- Fullscreen overlay -->
      ${isFs ? html`
        <div class="fixed inset-0 z-[9999] flex flex-col" style="background: var(--bg)">
          <div class="flex items-center justify-between px-5 py-3 shrink-0" style="border-bottom: 1px solid var(--border); background: var(--bg-card)">
            <div class="flex items-center gap-2">
              <app-icon name="layout-template" class="w-4 h-4" style="color: var(--fg-subtle)"></app-icon>
              <span class="text-sm font-semibold" style="color: var(--fg-heading)">${title}</span>
              <span class="text-xs px-2 py-0.5 rounded-full" style="background: var(--bg-muted); color: var(--fg-muted)">Full Preview</span>
            </div>
            <button
              @click="${() => ctx._setView(fsKey, '')}"
              class="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm cursor-pointer transition-colors"
              style="color: var(--fg-muted)"
              @mouseenter=${(e) => e.currentTarget.style.background = 'var(--bg-muted)'}
              @mouseleave=${(e) => e.currentTarget.style.background = 'transparent'}
            >
              <app-icon name="x" class="w-4 h-4"></app-icon>
              Close
            </button>
          </div>
          <div class="flex-1 min-h-0">${previewFn(true)}</div>
        </div>
      ` : ''}
    `;
  }

  /* ══════════════════════════════════════════════════
     Template 1: Login Page
     ══════════════════════════════════════════════════ */

  const loginPageCode = `import { LitElement, html, css } from 'lit';
import '@/lib/icons.js';
import '@/layouts/app-split-layout.js';
import '@/components/app-input.js';
import '@/components/app-button.js';
import '@/components/app-checkbox.js';

class LoginPage extends LitElement {
  static styles = css\`
    :host { display: block; height: 100vh; }
  \`;

  render() {
    return html\`
      <app-split-layout>

        <!-- Left: Branding -->
        <div slot="left" style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 3rem; height: 100%; width: 100%;">
          <div style="max-width: 360px; text-align: center;">
            <div style="display: inline-flex; align-items: center; justify-content: center; width: 3.5rem; height: 3.5rem; border-radius: 0.75rem; background: var(--logo-bg); margin-bottom: 1.5rem;">
              <span style="font-weight: 800; font-size: 1.25rem; color: var(--logo-fg);">Z</span>
            </div>
            <h1 style="font-size: 1.75rem; font-weight: 800; color: var(--fg-heading); line-height: 1.2; margin: 0;">My App</h1>
            <p style="font-size: 0.9rem; color: var(--fg-muted); margin-top: 0.75rem; line-height: 1.5;">
              Build beautiful interfaces with our modern component library.
            </p>
          </div>
        </div>

        <!-- Right: Login form -->
        <div slot="right" style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 3rem; height: 100%; width: 100%;">
          <div style="width: 100%; max-width: 380px;">
            <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--fg-heading); margin: 0;">Welcome back</h2>
            <p style="font-size: 0.875rem; color: var(--fg-muted); margin-top: 0.25rem;">Sign in to your account</p>

            <div style="margin-top: 1.5rem;">
              <app-input label="Email" placeholder="you@example.com"></app-input>
            </div>
            <div style="margin-top: 1rem;">
              <app-input label="Password" type="password" placeholder="Enter your password"></app-input>
            </div>

            <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 1rem;">
              <app-checkbox label="Remember me"></app-checkbox>
              <a style="font-size: 0.8rem; color: var(--primary); cursor: pointer;">Forgot password?</a>
            </div>

            <div style="margin-top: 1.5rem;">
              <app-button style="width: 100%; display: block;">Sign In</app-button>
            </div>

            <div style="display: flex; align-items: center; gap: 1rem; margin: 1.5rem 0;">
              <div style="flex: 1; height: 1px; background: var(--border);"></div>
              <span style="font-size: 0.75rem; color: var(--fg-muted); text-transform: uppercase; letter-spacing: 0.05em;">or</span>
              <div style="flex: 1; height: 1px; background: var(--border);"></div>
            </div>

            <app-button variant="outline" style="width: 100%; display: block;">Continue with Google</app-button>

            <p style="font-size: 0.8rem; color: var(--fg-muted); text-align: center; margin-top: 1.5rem;">
              Don't have an account?
              <a style="color: var(--primary); cursor: pointer; font-weight: 600;">Sign up</a>
            </p>
          </div>
        </div>

      </app-split-layout>
    \`;
  }
}

customElements.define('login-page', LoginPage);`;

  const loginIndexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
  <link rel="stylesheet" href="./style.css">
  <script type="module" src="./pages/login-page.js"><\/script>
</head>
<body>
  <login-page></login-page>
</body>
</html>`;

  const loginFiles = [
    { name: 'login-page.js',         path: 'pages/login-page.js',           code: loginPageCode },
    { name: 'app-split-layout.js',   path: 'layouts/app-split-layout.js',   code: splitLayoutSource },
    { name: 'index.html',            path: 'index.html',                     code: loginIndexHtml },
  ];

  const loginPreviewFn = (fullscreen) => html`
    <app-split-layout style="height: ${fullscreen ? '100%' : '500px'}; ${!fullscreen ? 'border-radius: 0.5rem; overflow: hidden;' : ''}">
      <div slot="left" style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 2rem; height: 100%; width: 100%;">
        <div style="max-width: 300px; text-align: center;">
          <div style="display: inline-flex; align-items: center; justify-content: center; width: 3.5rem; height: 3.5rem; border-radius: 0.75rem; background: var(--logo-bg); margin-bottom: 1.25rem;">
            <span style="font-weight: 800; font-size: 1.25rem; color: var(--logo-fg);">Z</span>
          </div>
          <h1 style="font-size: 1.5rem; font-weight: 800; color: var(--fg-heading); line-height: 1.2; margin: 0;">My App</h1>
          <p style="font-size: 0.85rem; color: var(--fg-muted); margin-top: 0.5rem; line-height: 1.5;">Build beautiful interfaces with our modern component library.</p>
        </div>
      </div>
      <div slot="right" style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 2rem; height: 100%; width: 100%;">
        <div style="width: 100%; max-width: 340px;">
          <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--fg-heading); margin: 0;">Welcome back</h2>
          <p style="font-size: 0.8rem; color: var(--fg-muted); margin: 0.25rem 0 0;">Sign in to your account</p>
          <div style="margin-top: 1.25rem;"><app-input label="Email" placeholder="you@example.com"></app-input></div>
          <div style="margin-top: 0.75rem;"><app-input label="Password" type="password" placeholder="Enter your password"></app-input></div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 0.75rem;">
            <app-checkbox label="Remember me"></app-checkbox>
            <a style="font-size: 0.75rem; color: var(--primary); cursor: pointer;">Forgot password?</a>
          </div>
          <div style="margin-top: 1.25rem;"><app-button style="width: 100%; display: block;">Sign In</app-button></div>
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
    </app-split-layout>
  `;

  /* ══════════════════════════════════════════════════
     Template 2: Dashboard Page
     ══════════════════════════════════════════════════ */

  const dashboardPageCode = `import { LitElement, html, css } from 'lit';
import '@/lib/icons.js';
import '@/layouts/app-sidebar-layout.js';
import '@/components/app-sidebar-nav.js';
import '@/components/app-avatar.js';
import '@/components/app-button.js';
import '@/components/app-searchbar.js';
import '@/components/app-stat.js';
import '@/components/app-card.js';
import '@/components/app-timeline.js';
import '@/components/app-dialog.js';

class DashboardPage extends LitElement {
  static styles = css\`
    :host { display: block; height: 100vh; }
  \`;

  _showLogout() {
    this.renderRoot.querySelector('#logout-dialog').show();
  }

  render() {
    return html\`
      <app-sidebar-layout sidebar-width="260px">

        <!-- Sidebar -->
        <div slot="sidebar" style="display: flex; flex-direction: column; height: 100%;">

          <div style="display: flex; align-items: center; gap: 0.625rem; padding: 1.25rem; border-bottom: 1px solid var(--border); flex-shrink: 0;">
            <div style="width: 2rem; height: 2rem; border-radius: 0.5rem; background: var(--logo-bg); display: flex; align-items: center; justify-content: center;">
              <span style="font-weight: 700; font-size: 0.75rem; color: var(--logo-fg);">Z</span>
            </div>
            <span style="font-weight: 700; font-size: 1rem; color: var(--fg);">My App</span>
          </div>

          <app-sidebar-nav
            .items=\${[
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
            ]}
            active="dashboard"
            style="flex: 1; min-height: 0; overflow-y: auto;"
          ></app-sidebar-nav>

          <div style="padding: 0.875rem 1.25rem; border-top: 1px solid var(--border); flex-shrink: 0;">
            <div style="display: flex; align-items: center; gap: 0.625rem;">
              <app-avatar fallback="JD" size="sm"></app-avatar>
              <div style="flex: 1; min-width: 0;">
                <div style="font-size: 0.8rem; font-weight: 600; color: var(--fg);">John Doe</div>
                <div style="font-size: 0.7rem; color: var(--fg-muted);">john@example.com</div>
              </div>
              <app-button variant="ghost" size="icon" @click=\${() => this._showLogout()}>
                <app-icon name="log-out" style="width:1rem;height:1rem;"></app-icon>
              </app-button>
            </div>
          </div>
        </div>

        <!-- Content -->
        <div slot="content" style="display: flex; flex-direction: column; height: 100%;">

          <header style="padding: 1rem 1.5rem; border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; flex-shrink: 0;">
            <div>
              <h1 style="font-size: 1.25rem; font-weight: 700; color: var(--fg-heading); margin: 0;">Dashboard</h1>
              <p style="font-size: 0.8rem; color: var(--fg-muted); margin: 0.125rem 0 0;">Welcome back, John</p>
            </div>
            <app-searchbar placeholder="Search..." style="width: 220px;"></app-searchbar>
          </header>

          <div style="flex: 1; min-height: 0; padding: 1.5rem; overflow-y: auto;">
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
              <app-stat label="Total Revenue" value="$45,231" trend="up" trend-value="12%"></app-stat>
              <app-stat label="Subscriptions" value="2,350" trend="up" trend-value="8%"></app-stat>
              <app-stat label="Active Users" value="1,247" trend="down" trend-value="3%"></app-stat>
              <app-stat label="Bounce Rate" value="24.5%" trend="down" trend-value="5%"></app-stat>
            </div>
            <app-card card-title="Recent Activity">
              <app-timeline .items=\${[
                { time: '2 min ago',   title: 'New user signed up',    description: 'jane@example.com created an account', color: 'var(--primary)' },
                { time: '1 hour ago',  title: 'Payment received',      description: '$99.00 from Pro plan subscription' },
                { time: '3 hours ago', title: 'Blog post published',   description: 'Getting Started with ZeeLit' },
                { time: 'Yesterday',   title: 'Server update',         description: 'Deployed v2.4.1 to production' },
              ]}></app-timeline>
            </app-card>
          </div>
        </div>

      </app-sidebar-layout>

      <!-- Logout dialog -->
      <app-dialog id="logout-dialog"
        dialog-title="Log out"
        description="Are you sure you want to log out? You will need to sign in again.">
        <div style="display: flex; justify-content: flex-end; gap: 0.5rem; margin-top: 1rem;">
          <app-button variant="outline" @click=\${(e) => e.target.closest('app-dialog').close()}>Cancel</app-button>
          <app-button variant="destructive">Log Out</app-button>
        </div>
      </app-dialog>
    \`;
  }
}

customElements.define('dashboard-page', DashboardPage);`;

  const dashboardIndexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard</title>
  <link rel="stylesheet" href="./style.css">
  <script type="module" src="./pages/dashboard-page.js"><\/script>
</head>
<body>
  <dashboard-page></dashboard-page>
</body>
</html>`;

  const dashboardFiles = [
    { name: 'dashboard-page.js',       path: 'pages/dashboard-page.js',         code: dashboardPageCode },
    { name: 'app-sidebar-layout.js',   path: 'layouts/app-sidebar-layout.js',   code: sidebarLayoutSource },
    { name: 'index.html',              path: 'index.html',                       code: dashboardIndexHtml },
  ];

  const dashboardPreviewFn = (fullscreen) => html`
    <div style="position: relative; height: ${fullscreen ? '100%' : '550px'}; ${!fullscreen ? 'border-radius: 0.5rem; overflow: hidden;' : ''}">
      <app-sidebar-layout sidebar-width="240px" style="height: 100%;">

        <div slot="sidebar" style="display: flex; flex-direction: column; height: 100%;">
          <div style="display: flex; align-items: center; gap: 0.625rem; padding: 1rem; border-bottom: 1px solid var(--border); flex-shrink: 0;">
            <div style="width: 2rem; height: 2rem; border-radius: 0.5rem; background: var(--logo-bg); display: flex; align-items: center; justify-content: center;">
              <span style="font-weight: 700; font-size: 0.75rem; color: var(--logo-fg);">Z</span>
            </div>
            <span style="font-weight: 700; color: var(--fg);">My App</span>
          </div>
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
            style="flex: 1; min-height: 0; overflow-y: auto;"
          ></app-sidebar-nav>
          <div style="padding: 0.75rem 1rem; border-top: 1px solid var(--border); flex-shrink: 0;">
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <app-avatar fallback="JD" size="sm"></app-avatar>
              <div style="flex: 1; min-width: 0;">
                <div style="font-size: 0.8rem; font-weight: 600; color: var(--fg);">John Doe</div>
                <div style="font-size: 0.7rem; color: var(--fg-muted);">john@example.com</div>
              </div>
              <app-button variant="ghost" size="icon" @click="${(e) => {
                e.target.closest('[style*="position: relative"]')?.querySelector('app-dialog')?.show();
              }}">
                <app-icon name="log-out" class="w-4 h-4"></app-icon>
              </app-button>
            </div>
          </div>
        </div>

        <div slot="content" style="display: flex; flex-direction: column; height: 100%;">
          <header style="padding: 1rem 1.5rem; border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; flex-shrink: 0;">
            <div>
              <h1 style="font-size: 1.125rem; font-weight: 700; color: var(--fg-heading); margin: 0;">Dashboard</h1>
              <p style="font-size: 0.75rem; color: var(--fg-muted); margin: 0.125rem 0 0;">Welcome back, John</p>
            </div>
            <app-searchbar placeholder="Search..." style="width: 200px;"></app-searchbar>
          </header>
          <div style="flex: 1; min-height: 0; padding: 1.25rem; overflow-y: auto;">
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.75rem; margin-bottom: 1.25rem;">
              <app-stat label="Total Revenue" value="$45,231" trend="up" trend-value="12%"></app-stat>
              <app-stat label="Subscriptions" value="2,350" trend="up" trend-value="8%"></app-stat>
              <app-stat label="Active Users" value="1,247" trend="down" trend-value="3%"></app-stat>
              <app-stat label="Bounce Rate" value="24.5%" trend="down" trend-value="5%"></app-stat>
            </div>
            <app-card card-title="Recent Activity">
              <app-timeline .items="${[
                { time: '2 min ago',   title: 'New user signed up',  description: 'jane@example.com created an account', color: 'var(--primary)' },
                { time: '1 hour ago',  title: 'Payment received',    description: '$99.00 from Pro plan subscription' },
                { time: '3 hours ago', title: 'Blog post published', description: 'Getting Started with ZeeLit' },
                { time: 'Yesterday',   title: 'Server update',       description: 'Deployed v2.4.1 to production' },
              ]}"></app-timeline>
            </app-card>
          </div>
        </div>

      </app-sidebar-layout>

      <app-dialog
        dialog-title="Log out"
        description="Are you sure you want to log out? You will need to sign in again.">
        <div style="display: flex; justify-content: flex-end; gap: 0.5rem; margin-top: 1rem;">
          <app-button variant="outline" @click="${(e) => e.target.closest('app-dialog').close()}">Cancel</app-button>
          <app-button variant="destructive">Log Out</app-button>
        </div>
      </app-dialog>
    </div>
  `;

  /* ══════════════════════════════════════════════════
     Render
     ══════════════════════════════════════════════════ */

  return html`
    <div class="space-y-16">
      <div>
        <h1 class="text-3xl font-bold tracking-tight" style="color: var(--fg-heading)">Templates</h1>
        <p class="mt-2" style="color: var(--fg-muted)">
          Full page templates built with ZeeLit layout components.
          Click <strong style="color: var(--fg)">Code</strong> to copy the complete
          <code class="px-1.5 py-0.5 rounded text-xs" style="color: var(--fg); background: var(--bg-muted)">LitElement</code>
          page file, or <strong style="color: var(--fg)">Source</strong> for the full project structure.
        </p>
      </div>

      <div class="h-px" style="background: var(--border)"></div>

      ${renderTemplate(
        'template-login',
        'Login Page',
        'Two-panel split — branding left, form right. Drop login-page.js into your project and mount <login-page>.',
        loginPreviewFn,
        loginPageCode,
        loginFiles,
      )}

      <div class="h-px" style="background: var(--border)"></div>

      ${renderTemplate(
        'template-dashboard',
        'Dashboard with Sidebar',
        'Sidebar nav, stat cards, activity feed, and logout dialog. Drop dashboard-page.js in and mount <dashboard-page>.',
        dashboardPreviewFn,
        dashboardPageCode,
        dashboardFiles,
      )}
    </div>
  `;
}

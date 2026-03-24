import { html } from 'lit';
import layoutSource from '../layouts/app-sidebar-layout.js?raw';
import centerCardSource from '../layouts/app-center-card-layout.js?raw';
import splitSource from '../layouts/app-split-layout.js?raw';
import dualCardSource from '../layouts/app-dual-card-layout.js?raw';

/* ─── Source Code ─── */

const sidebarLayoutCode = `<app-sidebar-layout style="height: 100vh;">
  <app-sidebar-nav slot="sidebar" header="My App"></app-sidebar-nav>
  <app-page-content slot="content" heading="Home" description="Welcome to your app.">
    <p>Your page body content goes here.</p>
  </app-page-content>
</app-sidebar-layout>`;

/* ─── Page ─── */

export function layoutsPage(ctx) {
  const bt = '`';
  const pageExample = `import { LitElement, html, css } from 'lit';
import '@/layouts/app-sidebar-layout.js';
import '@/components/app-sidebar-nav.js';
import '@/components/app-page-content.js';

class MyPage extends LitElement {
  static styles = css${bt}
    :host {
      display: block;
      height: 100vh;
    }
  ${bt};

  render() {
    return html${bt}
      <app-sidebar-layout>
        <app-sidebar-nav slot="sidebar" header="My App"></app-sidebar-nav>
        <app-page-content slot="content" heading="Home" description="Welcome to your app.">
          <p>Your page body content goes here.</p>
        </app-page-content>
      </app-sidebar-layout>
    ${bt};
  }
}
customElements.define('my-page', MyPage);`;

  const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sidebar Layout — ZeeLit</title>
  <link rel="stylesheet" href="./styles.css">
  <script type="module" src="./layouts/app-sidebar-layout.js"><\/script>
  <script type="module" src="./components/app-sidebar-nav.js"><\/script>
  <script type="module" src="./components/app-page-content.js"><\/script>
</head>
<body>

  <app-sidebar-layout style="height: 100vh;">
    <app-sidebar-nav slot="sidebar" header="My App"></app-sidebar-nav>
    <app-page-content slot="content" heading="Home" description="Welcome to your app.">
      <p>Your page body content goes here.</p>
    </app-page-content>
  </app-sidebar-layout>

</body>
</html>`;

  const files = [
    { name: 'app-sidebar-layout.js', path: 'layouts/app-sidebar-layout.js', code: layoutSource },
    { name: 'index.html', path: 'index.html', code: indexHtml },
    { name: 'my-page.js', path: 'pages/my-page.js', code: pageExample },
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
            <app-sidebar-layout style="height: 400px;"></app-sidebar-layout>
          `,
          sidebarLayoutCode,
          {
            importPath: '@/layouts/app-sidebar-layout.js',
            files,
            title: 'Sidebar Layout',
          },
        )}
      </div>

      <div class="h-px" style="background: var(--border)"></div>

      <!-- Center Card Layout -->
      <div class="space-y-4">
        <div>
          <h3 class="text-xl font-semibold"
              style="color: var(--fg-heading)">
            Center Card Layout
          </h3>
          <p class="text-sm mt-1" style="color: var(--fg-muted)">
            Two panels with a centered card. Great for login or sign-up pages.
          </p>
        </div>
        ${ctx.renderDemo(
          'layout-center-card',
          html`
            <app-center-card-layout style="height: 400px;"></app-center-card-layout>
          `,
          `<app-center-card-layout style="height: 100vh;"></app-center-card-layout>`,
          {
            importPath: '@/layouts/app-center-card-layout.js',
            files: [
              { name: 'app-center-card-layout.js', path: 'layouts/app-center-card-layout.js', code: centerCardSource },
            ],
            title: 'Center Card Layout',
          },
        )}
      </div>

      <div class="h-px" style="background: var(--border)"></div>

      <!-- Left Card Layout -->
      <div class="space-y-4">
        <div>
          <h3 class="text-xl font-semibold"
              style="color: var(--fg-heading)">
            Left Card Layout
          </h3>
          <p class="text-sm mt-1" style="color: var(--fg-muted)">
            Card positioned on the left side.
          </p>
        </div>
        ${ctx.renderDemo(
          'layout-left-card',
          html`
            <app-center-card-layout card-position="left" style="height: 400px;"></app-center-card-layout>
          `,
          `<app-center-card-layout card-position="left" style="height: 100vh;"></app-center-card-layout>`,
          {
            importPath: '@/layouts/app-center-card-layout.js',
            files: [
              { name: 'app-center-card-layout.js', path: 'layouts/app-center-card-layout.js', code: centerCardSource },
            ],
            title: 'Left Card Layout',
          },
        )}
      </div>

      <div class="h-px" style="background: var(--border)"></div>

      <!-- Right Card Layout -->
      <div class="space-y-4">
        <div>
          <h3 class="text-xl font-semibold"
              style="color: var(--fg-heading)">
            Right Card Layout
          </h3>
          <p class="text-sm mt-1" style="color: var(--fg-muted)">
            Card positioned on the right side.
          </p>
        </div>
        ${ctx.renderDemo(
          'layout-right-card',
          html`
            <app-center-card-layout card-position="right" style="height: 400px;"></app-center-card-layout>
          `,
          `<app-center-card-layout card-position="right" style="height: 100vh;"></app-center-card-layout>`,
          {
            importPath: '@/layouts/app-center-card-layout.js',
            files: [
              { name: 'app-center-card-layout.js', path: 'layouts/app-center-card-layout.js', code: centerCardSource },
            ],
            title: 'Right Card Layout',
          },
        )}
      </div>

      <div class="h-px" style="background: var(--border)"></div>

      <!-- Split Layout -->
      <div class="space-y-4">
        <div>
          <h3 class="text-xl font-semibold"
              style="color: var(--fg-heading)">
            Split Layout
          </h3>
          <p class="text-sm mt-1" style="color: var(--fg-muted)">
            One container with two equal sections inside.
          </p>
        </div>
        ${ctx.renderDemo(
          'layout-split',
          html`
            <app-split-layout style="height: 400px;"></app-split-layout>
          `,
          `<app-split-layout style="height: 100vh;"></app-split-layout>`,
          {
            importPath: '@/layouts/app-split-layout.js',
            files: [
              { name: 'app-split-layout.js', path: 'layouts/app-split-layout.js', code: splitSource },
            ],
            title: 'Split Layout',
          },
        )}
      </div>

      <div class="h-px" style="background: var(--border)"></div>

      <!-- Dual Card Layout -->
      <div class="space-y-4">
        <div>
          <h3 class="text-xl font-semibold"
              style="color: var(--fg-heading)">
            Dual Card Layout
          </h3>
          <p class="text-sm mt-1" style="color: var(--fg-muted)">
            One container with two cards inside.
          </p>
        </div>
        ${ctx.renderDemo(
          'layout-dual-card',
          html`
            <app-dual-card-layout style="height: 400px;"></app-dual-card-layout>
          `,
          `<app-dual-card-layout style="height: 100vh;"></app-dual-card-layout>`,
          {
            importPath: '@/layouts/app-dual-card-layout.js',
            files: [
              { name: 'app-dual-card-layout.js', path: 'layouts/app-dual-card-layout.js', code: dualCardSource },
            ],
            title: 'Dual Card Layout',
          },
        )}
      </div>
    </div>
  `;
}

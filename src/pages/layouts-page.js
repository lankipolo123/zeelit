import { html } from 'lit';
import layoutSource from '../layouts/app-sidebar-layout.js?raw';
import centerCardSource from '../layouts/app-center-card-layout.js?raw';
import splitSource from '../layouts/app-split-layout.js?raw';
import dualCardSource from '../layouts/app-dual-card-layout.js?raw';
import heroSource from '../layouts/app-hero-layout.js?raw';
import navSource from '../components/app-nav.js?raw';

/* ─── Source Code ─── */

const sidebarLayoutCode = `<app-sidebar-layout style="height: 100vh;">
  <app-sidebar-nav slot="sidebar" header="My App"></app-sidebar-nav>
  <app-page-content slot="content" heading="Home" description="Welcome to your app.">
    <p>Your page body content goes here.</p>
  </app-page-content>
</app-sidebar-layout>`;

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

export function layoutsPage(ctx) {
  const bt = '`';

  /* ── Sidebar Layout files ── */
  const sidebarFiles = [
    { name: 'app-sidebar-layout.js', path: 'layouts/app-sidebar-layout.js', code: layoutSource },
    { name: 'index.html', path: 'index.html', code: makeHtml('Sidebar Layout',
      ['./layouts/app-sidebar-layout.js', './components/app-sidebar-nav.js', './components/app-page-content.js'],
      `  <app-sidebar-layout style="height: 100vh;">
    <app-sidebar-nav slot="sidebar" header="My App"></app-sidebar-nav>
    <app-page-content slot="content" heading="Home" description="Welcome to your app.">
      <p>Your page body content goes here.</p>
    </app-page-content>
  </app-sidebar-layout>`)},
    { name: 'my-page.js', path: 'pages/my-page.js', code: makePage(bt,
      ['@/layouts/app-sidebar-layout.js', '@/components/app-sidebar-nav.js', '@/components/app-page-content.js'],
      `      <app-sidebar-layout>
        <app-sidebar-nav slot="sidebar" header="My App"></app-sidebar-nav>
        <app-page-content slot="content" heading="Home" description="Welcome to your app.">
          <p>Your page body content goes here.</p>
        </app-page-content>
      </app-sidebar-layout>`)},
  ];

  /* ── Center Card Layout files ── */
  const centerCardFiles = [
    { name: 'app-center-card-layout.js', path: 'layouts/app-center-card-layout.js', code: centerCardSource },
    { name: 'index.html', path: 'index.html', code: makeHtml('Center Card Layout',
      ['./layouts/app-center-card-layout.js'],
      '  <app-center-card-layout style="height: 100vh;"></app-center-card-layout>')},
    { name: 'my-page.js', path: 'pages/my-page.js', code: makePage(bt,
      ['@/layouts/app-center-card-layout.js'],
      '      <app-center-card-layout></app-center-card-layout>')},
  ];

  /* ── Split Layout files ── */
  const splitFiles = [
    { name: 'app-split-layout.js', path: 'layouts/app-split-layout.js', code: splitSource },
    { name: 'index.html', path: 'index.html', code: makeHtml('Split Layout',
      ['./layouts/app-split-layout.js'],
      '  <app-split-layout style="height: 100vh;"></app-split-layout>')},
    { name: 'my-page.js', path: 'pages/my-page.js', code: makePage(bt,
      ['@/layouts/app-split-layout.js'],
      '      <app-split-layout></app-split-layout>')},
  ];

  /* ── Dual Card Layout files ── */
  const dualCardFiles = [
    { name: 'app-dual-card-layout.js', path: 'layouts/app-dual-card-layout.js', code: dualCardSource },
    { name: 'index.html', path: 'index.html', code: makeHtml('Dual Card Layout',
      ['./layouts/app-dual-card-layout.js'],
      '  <app-dual-card-layout style="height: 100vh;"></app-dual-card-layout>')},
    { name: 'my-page.js', path: 'pages/my-page.js', code: makePage(bt,
      ['@/layouts/app-dual-card-layout.js'],
      '      <app-dual-card-layout></app-dual-card-layout>')},
  ];

  /* ── Hero Layout files ── */
  const heroFiles = [
    { name: 'app-hero-layout.js', path: 'layouts/app-hero-layout.js', code: heroSource },
    { name: 'app-nav.js', path: 'components/app-nav.js', code: navSource },
    { name: 'index.html', path: 'index.html', code: makeHtml('Hero Layout',
      ['./layouts/app-hero-layout.js'],
      '  <app-hero-layout style="height: 100vh;"></app-hero-layout>')},
    { name: 'my-page.js', path: 'pages/my-page.js', code: makePage(bt,
      ['@/layouts/app-hero-layout.js'],
      '      <app-hero-layout></app-hero-layout>')},
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
            files: sidebarFiles,
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
            files: centerCardFiles,
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
            files: centerCardFiles,
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
            files: centerCardFiles,
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
            files: splitFiles,
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
            One container with two sections inside.
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
            files: dualCardFiles,
            title: 'Dual Card Layout',
          },
        )}
      </div>

      <div class="h-px" style="background: var(--border)"></div>

      <!-- Hero Layout -->
      <div class="space-y-4">
        <div>
          <h3 class="text-xl font-semibold"
              style="color: var(--fg-heading)">
            Hero Layout
          </h3>
          <p class="text-sm mt-1" style="color: var(--fg-muted)">
            Nav bar on top with a jumbotron section below.
          </p>
        </div>
        ${ctx.renderDemo(
          'layout-hero',
          html`
            <app-hero-layout style="height: 400px;"></app-hero-layout>
          `,
          `<app-hero-layout style="height: 100vh;"></app-hero-layout>`,
          {
            importPath: '@/layouts/app-hero-layout.js',
            files: heroFiles,
            title: 'Hero Layout',
          },
        )}
      </div>
    </div>
  `;
}

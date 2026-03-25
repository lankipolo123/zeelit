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

  /* ── Sidebar Layout ── */

  const sidebarHtmlBody = `  <app-sidebar-layout style="height: 100vh;">
    <app-sidebar-nav slot="sidebar" header="My App"></app-sidebar-nav>
    <app-page-content slot="content" heading="Home" description="Welcome to your app.">
      <p>Your page body content goes here.</p>
    </app-page-content>
  </app-sidebar-layout>`;

  const sidebarPageBody = `      <app-sidebar-layout>
        <app-sidebar-nav slot="sidebar" header="My App"></app-sidebar-nav>
        <app-page-content slot="content" heading="Home" description="Welcome to your app.">
          <p>Your page body content goes here.</p>
        </app-page-content>
      </app-sidebar-layout>`;

  const sidebarFiles = [
    { name: 'app-sidebar-layout.js', path: 'layouts/app-sidebar-layout.js', code: layoutSource },
    { name: 'index.html', path: 'index.html', code: makeHtml('Sidebar Layout',
      ['./layouts/app-sidebar-layout.js', './components/app-sidebar-nav.js', './components/app-page-content.js'],
      sidebarHtmlBody) },
    { name: 'my-page.js', path: 'pages/my-page.js', code: makePage(bt,
      ['@/layouts/app-sidebar-layout.js', '@/components/app-sidebar-nav.js', '@/components/app-page-content.js'],
      sidebarPageBody) },
  ];

  /* ── Center Card Layout ── */

  const centerCardHtmlBody = `  <app-center-card-layout style="height: 100vh;">
    <div>
      <h2>Welcome Back</h2>
      <p>Sign in to your account</p>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  </app-center-card-layout>`;

  const centerCardPageBody = `      <app-center-card-layout>
        <div>
          <h2>Welcome Back</h2>
          <p>Sign in to your account</p>
          <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign In</button>
          </form>
        </div>
      </app-center-card-layout>`;

  const centerCardFiles = [
    { name: 'app-center-card-layout.js', path: 'layouts/app-center-card-layout.js', code: centerCardSource },
    { name: 'index.html', path: 'index.html', code: makeHtml('Center Card Layout',
      ['./layouts/app-center-card-layout.js'],
      centerCardHtmlBody) },
    { name: 'my-page.js', path: 'pages/my-page.js', code: makePage(bt,
      ['@/layouts/app-center-card-layout.js'],
      centerCardPageBody) },
  ];

  /* ── Left Card Layout ── */

  const leftCardHtmlBody = `  <app-center-card-layout card-position="left" style="height: 100vh;">
    <div>
      <h2>Get Started</h2>
      <p>Create your free account</p>
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  </app-center-card-layout>`;

  const leftCardPageBody = `      <app-center-card-layout card-position="left">
        <div>
          <h2>Get Started</h2>
          <p>Create your free account</p>
          <form>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </app-center-card-layout>`;

  const leftCardFiles = [
    { name: 'app-center-card-layout.js', path: 'layouts/app-center-card-layout.js', code: centerCardSource },
    { name: 'index.html', path: 'index.html', code: makeHtml('Left Card Layout',
      ['./layouts/app-center-card-layout.js'],
      leftCardHtmlBody) },
    { name: 'my-page.js', path: 'pages/my-page.js', code: makePage(bt,
      ['@/layouts/app-center-card-layout.js'],
      leftCardPageBody) },
  ];

  /* ── Right Card Layout ── */

  const rightCardHtmlBody = `  <app-center-card-layout card-position="right" style="height: 100vh;">
    <div>
      <h2>Contact Us</h2>
      <p>We'd love to hear from you</p>
      <form>
        <input type="text" placeholder="Your Name" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  </app-center-card-layout>`;

  const rightCardPageBody = `      <app-center-card-layout card-position="right">
        <div>
          <h2>Contact Us</h2>
          <p>We'd love to hear from you</p>
          <form>
            <input type="text" placeholder="Your Name" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </app-center-card-layout>`;

  const rightCardFiles = [
    { name: 'app-center-card-layout.js', path: 'layouts/app-center-card-layout.js', code: centerCardSource },
    { name: 'index.html', path: 'index.html', code: makeHtml('Right Card Layout',
      ['./layouts/app-center-card-layout.js'],
      rightCardHtmlBody) },
    { name: 'my-page.js', path: 'pages/my-page.js', code: makePage(bt,
      ['@/layouts/app-center-card-layout.js'],
      rightCardPageBody) },
  ];

  /* ── Split Layout ── */

  const splitHtmlBody = `  <app-split-layout style="height: 100vh;">
    <div slot="left">
      <h2>Left Panel</h2>
      <p>Navigation, filters, or any sidebar content.</p>
    </div>
    <div slot="right">
      <h2>Right Panel</h2>
      <p>Main content, details, or a preview pane.</p>
    </div>
  </app-split-layout>`;

  const splitPageBody = `      <app-split-layout>
        <div slot="left">
          <h2>Left Panel</h2>
          <p>Navigation, filters, or any sidebar content.</p>
        </div>
        <div slot="right">
          <h2>Right Panel</h2>
          <p>Main content, details, or a preview pane.</p>
        </div>
      </app-split-layout>`;

  const splitFiles = [
    { name: 'app-split-layout.js', path: 'layouts/app-split-layout.js', code: splitSource },
    { name: 'index.html', path: 'index.html', code: makeHtml('Split Layout',
      ['./layouts/app-split-layout.js'],
      splitHtmlBody) },
    { name: 'my-page.js', path: 'pages/my-page.js', code: makePage(bt,
      ['@/layouts/app-split-layout.js'],
      splitPageBody) },
  ];

  /* ── Dual Card Layout ── */

  const dualCardHtmlBody = `  <app-dual-card-layout style="height: 100vh;">
    <div slot="left">
      <h3>Plan A</h3>
      <p>Basic features for individuals.</p>
      <button>Choose Plan</button>
    </div>
    <div slot="right">
      <h3>Plan B</h3>
      <p>Advanced features for teams.</p>
      <button>Choose Plan</button>
    </div>
  </app-dual-card-layout>`;

  const dualCardPageBody = `      <app-dual-card-layout>
        <div slot="left">
          <h3>Plan A</h3>
          <p>Basic features for individuals.</p>
          <button>Choose Plan</button>
        </div>
        <div slot="right">
          <h3>Plan B</h3>
          <p>Advanced features for teams.</p>
          <button>Choose Plan</button>
        </div>
      </app-dual-card-layout>`;

  const dualCardFiles = [
    { name: 'app-dual-card-layout.js', path: 'layouts/app-dual-card-layout.js', code: dualCardSource },
    { name: 'index.html', path: 'index.html', code: makeHtml('Dual Card Layout',
      ['./layouts/app-dual-card-layout.js'],
      dualCardHtmlBody) },
    { name: 'my-page.js', path: 'pages/my-page.js', code: makePage(bt,
      ['@/layouts/app-dual-card-layout.js'],
      dualCardPageBody) },
  ];

  /* ── Hero Layout ── */

  const heroHtmlBody = `  <app-hero-layout style="height: 100vh;">
    <nav slot="nav">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </nav>
    <div slot="hero">
      <h1>Build Something Amazing</h1>
      <p>A modern toolkit for web developers.</p>
      <button>Get Started</button>
    </div>
  </app-hero-layout>`;

  const heroPageBody = `      <app-hero-layout>
        <nav slot="nav">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
        <div slot="hero">
          <h1>Build Something Amazing</h1>
          <p>A modern toolkit for web developers.</p>
          <button>Get Started</button>
        </div>
      </app-hero-layout>`;

  const heroFiles = [
    { name: 'app-hero-layout.js', path: 'layouts/app-hero-layout.js', code: heroSource },
    { name: 'app-nav.js', path: 'components/app-nav.js', code: navSource },
    { name: 'index.html', path: 'index.html', code: makeHtml('Hero Layout',
      ['./layouts/app-hero-layout.js'],
      heroHtmlBody) },
    { name: 'my-page.js', path: 'pages/my-page.js', code: makePage(bt,
      ['@/layouts/app-hero-layout.js'],
      heroPageBody) },
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
          centerCardHtmlBody.trim(),
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
          leftCardHtmlBody.trim(),
          {
            importPath: '@/layouts/app-center-card-layout.js',
            files: leftCardFiles,
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
          rightCardHtmlBody.trim(),
          {
            importPath: '@/layouts/app-center-card-layout.js',
            files: rightCardFiles,
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
          splitHtmlBody.trim(),
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
            One container with two cards inside.
          </p>
        </div>
        ${ctx.renderDemo(
          'layout-dual-card',
          html`
            <app-dual-card-layout style="height: 400px;"></app-dual-card-layout>
          `,
          dualCardHtmlBody.trim(),
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
          heroHtmlBody.trim(),
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

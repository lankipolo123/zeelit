import { LitElement, html } from 'lit';

// Components
import './components/app-button.js';
import './components/app-input.js';
import './components/app-card.js';
import './components/app-badge.js';
import './components/app-alert.js';
import './components/app-toggle.js';
import './components/app-tabs.js';
import './components/app-dialog.js';
import './components/app-separator.js';
import './components/app-skeleton.js';

const COMPONENTS = [
  { id: 'button', label: 'Button', category: 'Actions' },
  { id: 'input', label: 'Input', category: 'Forms' },
  { id: 'toggle', label: 'Toggle', category: 'Forms' },
  { id: 'card', label: 'Card', category: 'Layout' },
  { id: 'separator', label: 'Separator', category: 'Layout' },
  { id: 'badge', label: 'Badge', category: 'Data Display' },
  { id: 'alert', label: 'Alert', category: 'Feedback' },
  { id: 'skeleton', label: 'Skeleton', category: 'Feedback' },
  { id: 'tabs', label: 'Tabs', category: 'Navigation' },
  { id: 'dialog', label: 'Dialog', category: 'Overlay' },
];

const CATEGORIES = [...new Set(COMPONENTS.map(c => c.category))];

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function highlightCode(code) {
  return escapeHtml(code)
    .replace(/(\/\/.*)/g, '<span class="comment">$1</span>')
    .replace(/(["'])((?:(?!\1).)*?)\1/g, '<span class="str">$1$2$1</span>')
    .replace(/\b(import|export|from|class|extends|const|let|var|return|if|else|new|this|static|get|set|constructor|super|function)\b/g, '<span class="kw">$1</span>')
    .replace(/(&lt;\/?)(app-[\w-]+|div|span|button|input|label|h[1-6]|p|nav|header|section|svg|path|circle|line)/g, '<span class="tag">$1$2</span>')
    .replace(/\s(class|type|placeholder|variant|size|disabled|checked|label|role|aria-[\w]+|style|alertTitle|cardTitle|description|orientation|width|height|rounded|open|dialogTitle)=/g, ' <span class="attr">$1</span>=')
    .replace(/\b(\d+)\b/g, '<span class="num">$1</span>');
}

class AppShowcase extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    activePage: { type: String },
    sidebarOpen: { type: Boolean },
    _codeVisible: { state: true },
  };

  constructor() {
    super();
    this.activePage = this._getPageFromHash() || 'home';
    this.sidebarOpen = false;
    this._codeVisible = {};
    window.addEventListener('hashchange', () => {
      this.activePage = this._getPageFromHash() || 'home';
      this._codeVisible = {};
    });
  }

  _getPageFromHash() {
    return window.location.hash.replace('#/', '').replace('#', '') || 'home';
  }

  _navigate(page) {
    window.location.hash = `#/${page}`;
    this.activePage = page;
    this.sidebarOpen = false;
    this._codeVisible = {};
    window.scrollTo(0, 0);
  }

  _toggleCode(key) {
    this._codeVisible = { ...this._codeVisible, [key]: !this._codeVisible[key] };
  }

  _copyCode(code) {
    navigator.clipboard.writeText(code);
  }

  /* ─── Preview + Code block ─── */

  _renderDemo(key, preview, code) {
    const showCode = this._codeVisible[key];
    return html`
      <div class="rounded-lg border border-zinc-800 overflow-hidden">
        <div class="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/50 px-4">
          <div class="flex">
            <button
              @click="${() => this._toggleCode(key)}"
              class="px-4 py-2.5 text-sm font-medium transition-colors cursor-pointer ${!showCode ? 'text-zinc-100 border-b-2 border-white' : 'text-zinc-500 hover:text-zinc-300'}"
            >Preview</button>
            <button
              @click="${() => this._toggleCode(key)}"
              class="px-4 py-2.5 text-sm font-medium transition-colors cursor-pointer ${showCode ? 'text-zinc-100 border-b-2 border-white' : 'text-zinc-500 hover:text-zinc-300'}"
            >Code</button>
          </div>
          ${showCode ? html`
            <button @click="${() => this._copyCode(code)}" class="text-xs text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke-width="2"/><path stroke-width="2" d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
              Copy
            </button>
          ` : ''}
        </div>
        ${showCode
          ? html`<div class="code-block max-h-[500px] overflow-auto rounded-none border-0">${this._renderHighlighted(code)}</div>`
          : html`<div class="p-8 flex items-center justify-center min-h-[180px] bg-zinc-950/50">${preview}</div>`
        }
      </div>
    `;
  }

  _renderHighlighted(code) {
    const el = document.createElement('div');
    el.innerHTML = highlightCode(code);
    const frag = document.createDocumentFragment();
    while (el.firstChild) frag.appendChild(el.firstChild);
    return frag;
  }

  /* ─── Header ─── */

  _renderHeader() {
    const navItems = [
      { id: 'home', label: 'Docs' },
      { id: 'installation', label: 'Installation' },
    ];
    const isComponentPage = COMPONENTS.some(c => c.id === this.activePage);

    return html`
      <header class="sticky top-0 z-40 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
        <div class="flex h-14 items-center px-4 md:px-6">
          <!-- Mobile hamburger -->
          <button @click="${() => this.sidebarOpen = true}" class="mr-3 text-zinc-400 hover:text-zinc-100 cursor-pointer md:hidden">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>

          <!-- Logo -->
          <a @click="${() => this._navigate('home')}" class="flex items-center gap-2 cursor-pointer mr-8">
            <div class="h-7 w-7 rounded-md bg-white flex items-center justify-center">
              <span class="text-zinc-900 font-bold text-xs">Z</span>
            </div>
            <span class="font-semibold tracking-tight hidden sm:block">ZeeLit</span>
          </a>

          <!-- Nav tabs -->
          <nav class="flex items-center gap-1">
            ${navItems.map(item => html`
              <a
                @click="${() => this._navigate(item.id)}"
                class="px-3 py-1.5 text-sm rounded-md cursor-pointer transition-colors ${this.activePage === item.id ? 'text-zinc-100 bg-zinc-800' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'}"
              >${item.label}</a>
            `)}
            <a
              @click="${() => this._navigate('button')}"
              class="px-3 py-1.5 text-sm rounded-md cursor-pointer transition-colors ${isComponentPage ? 'text-zinc-100 bg-zinc-800' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'}"
            >Components</a>
          </nav>
        </div>
      </header>
    `;
  }

  /* ─── Sidebar ─── */

  _sidebarContent() {
    return html`
      <nav class="p-4 space-y-5">
        <div class="space-y-0.5">
          <h4 class="text-[11px] font-semibold text-zinc-500 uppercase tracking-widest mb-1.5 px-2">Getting Started</h4>
          <a
            @click="${() => this._navigate('home')}"
            class="block text-sm py-1.5 px-2 rounded cursor-pointer transition-colors ${this.activePage === 'home' ? 'text-zinc-100 font-medium bg-zinc-800/50' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/30'}"
          >Introduction</a>
          <a
            @click="${() => this._navigate('installation')}"
            class="block text-sm py-1.5 px-2 rounded cursor-pointer transition-colors ${this.activePage === 'installation' ? 'text-zinc-100 font-medium bg-zinc-800/50' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/30'}"
          >Installation</a>
        </div>

        ${CATEGORIES.map(cat => html`
          <div>
            <h4 class="text-[11px] font-semibold text-zinc-500 uppercase tracking-widest mb-1.5 px-2">${cat}</h4>
            <div class="space-y-0.5">
              ${COMPONENTS.filter(c => c.category === cat).map(comp => html`
                <a
                  @click="${() => this._navigate(comp.id)}"
                  class="block text-sm py-1.5 px-2 rounded cursor-pointer transition-colors ${this.activePage === comp.id ? 'text-zinc-100 font-medium bg-zinc-800/50' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/30'}"
                >${comp.label}</a>
              `)}
            </div>
          </div>
        `)}
      </nav>
    `;
  }

  render() {
    return html`
      <div class="flex flex-col h-screen">
        ${this._renderHeader()}

        <div class="flex flex-1 overflow-hidden">
          <!-- Desktop sidebar - scrolls independently -->
          <aside class="w-56 shrink-0 border-r border-zinc-800 bg-zinc-950 overflow-y-auto hidden md:block">
            ${this._sidebarContent()}
          </aside>

          <!-- Mobile sidebar overlay -->
          ${this.sidebarOpen ? html`
            <div class="fixed inset-0 z-50 md:hidden">
              <div class="fixed inset-0 bg-black/60" @click="${() => this.sidebarOpen = false}"></div>
              <aside class="fixed inset-y-0 left-0 w-72 bg-zinc-950 border-r border-zinc-800 overflow-y-auto">
                <div class="flex items-center gap-2 p-4 border-b border-zinc-800">
                  <div class="h-7 w-7 rounded-md bg-white flex items-center justify-center">
                    <span class="text-zinc-900 font-bold text-xs">Z</span>
                  </div>
                  <span class="font-semibold tracking-tight">ZeeLit</span>
                </div>
                ${this._sidebarContent()}
              </aside>
            </div>
          ` : ''}

          <!-- Main content - scrolls independently -->
          <main class="flex-1 overflow-y-auto">
            <div class="max-w-3xl mx-auto px-6 py-10 lg:py-14">
              ${this._renderPage()}
            </div>
          </main>
        </div>
      </div>
    `;
  }

  _renderPage() {
    switch (this.activePage) {
      case 'home': return this._homePage();
      case 'installation': return this._installationPage();
      case 'button': return this._buttonPage();
      case 'input': return this._inputPage();
      case 'card': return this._cardPage();
      case 'badge': return this._badgePage();
      case 'alert': return this._alertPage();
      case 'toggle': return this._togglePage();
      case 'tabs': return this._tabsPage();
      case 'dialog': return this._dialogPage();
      case 'separator': return this._separatorPage();
      case 'skeleton': return this._skeletonPage();
      default: return this._homePage();
    }
  }

  /* ─── Pages ─── */

  _homePage() {
    return html`
      <div class="space-y-6">
        <div>
          <h1 class="text-4xl font-bold tracking-tight">ZeeLit</h1>
          <p class="mt-2 text-lg text-zinc-400">Beautifully crafted Lit web components. Styled with Tailwind CSS. Open source.</p>
        </div>
        <div class="h-px bg-zinc-800"></div>
        <div class="space-y-4 text-zinc-300 text-[15px] leading-relaxed">
          <p>ZeeLit is a collection of reusable web components built with <strong class="text-zinc-100">Lit</strong> and styled with <strong class="text-zinc-100">Tailwind CSS</strong>. Inspired by <strong class="text-zinc-100">shadcn/ui</strong>, these are not installed from npm — you copy the component source directly into your project and own the code.</p>
          <p>Every component is a standard Web Component. Use them in any framework or vanilla HTML — no React, no Vue required.</p>
        </div>

        <div class="grid sm:grid-cols-2 gap-4 pt-4">
          <div class="rounded-lg border border-zinc-800 p-6 hover:border-zinc-600 transition-colors">
            <h3 class="font-semibold mb-2">Web Standards</h3>
            <p class="text-sm text-zinc-400">Built on standard Web Components. Works everywhere — any framework or no framework at all.</p>
          </div>
          <div class="rounded-lg border border-zinc-800 p-6 hover:border-zinc-600 transition-colors">
            <h3 class="font-semibold mb-2">Copy & Paste</h3>
            <p class="text-sm text-zinc-400">Each component is a single file. Copy the source, drop it in your project, customize freely.</p>
          </div>
          <div class="rounded-lg border border-zinc-800 p-6 hover:border-zinc-600 transition-colors">
            <h3 class="font-semibold mb-2">Tailwind CSS</h3>
            <p class="text-sm text-zinc-400">Styled with utility classes. Customize colors, spacing, and sizing through Tailwind.</p>
          </div>
          <div class="rounded-lg border border-zinc-800 p-6 hover:border-zinc-600 transition-colors">
            <h3 class="font-semibold mb-2">Accessible</h3>
            <p class="text-sm text-zinc-400">Components follow WAI-ARIA patterns with proper roles, states, and keyboard interactions.</p>
          </div>
        </div>

        <div class="pt-4">
          <app-button @click="${() => this._navigate('installation')}">Get Started</app-button>
        </div>
      </div>
    `;
  }

  _installationPage() {
    return html`
      <div class="space-y-6">
        <div>
          <h1 class="text-3xl font-bold tracking-tight">Installation</h1>
          <p class="mt-2 text-zinc-400">How to set up ZeeLit in your project.</p>
        </div>
        <div class="h-px bg-zinc-800"></div>

        <div class="space-y-8 text-[15px]">
          <div>
            <h2 class="text-xl font-semibold mb-3">1. Create a Vite + Lit project</h2>
            <div class="code-block">npm create vite@latest my-app -- --template vanilla
cd my-app
npm install lit</div>
          </div>

          <div>
            <h2 class="text-xl font-semibold mb-3">2. Add Tailwind CSS</h2>
            <div class="code-block">npm install tailwindcss @tailwindcss/vite</div>
            <p class="text-sm text-zinc-400 mt-2">Add the plugin to <code class="text-zinc-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">vite.config.js</code>:</p>
            <div class="code-block mt-2">import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
})</div>
          </div>

          <div>
            <h2 class="text-xl font-semibold mb-3">3. Copy components</h2>
            <p class="text-zinc-300">Browse the components in the sidebar, click <strong class="text-zinc-100">Code</strong> to see the source, and copy them into your project's <code class="text-zinc-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">src/components/</code> directory.</p>
          </div>

          <div>
            <h2 class="text-xl font-semibold mb-3">4. Import and use</h2>
            <div class="code-block">import './components/app-button.js';

// Then use in your HTML or Lit templates:
// &lt;app-button variant="default"&gt;Click me&lt;/app-button&gt;</div>
          </div>
        </div>
      </div>
    `;
  }

  _componentPage(title, description, sections) {
    return html`
      <div class="space-y-8">
        <div>
          <h1 class="text-3xl font-bold tracking-tight">${title}</h1>
          <p class="mt-2 text-zinc-400">${description}</p>
        </div>
        <div class="h-px bg-zinc-800"></div>
        ${sections.map((s, i) => html`
          <div class="space-y-3">
            ${s.title ? html`<h2 class="text-xl font-semibold">${s.title}</h2>` : ''}
            ${s.description ? html`<p class="text-sm text-zinc-400">${s.description}</p>` : ''}
            ${this._renderDemo(`${title}-${i}`, s.preview, s.code)}
          </div>
        `)}
      </div>
    `;
  }

  /* ─── Component Pages ─── */

  _buttonPage() {
    return this._componentPage('Button', 'Displays a button or a component that looks like a button.', [
      {
        title: 'Default',
        code: `<app-button>Button</app-button>`,
        preview: html`<app-button>Button</app-button>`,
      },
      {
        title: 'Variants',
        description: 'Use the variant prop to change the visual style.',
        code: `<app-button variant="default">Default</app-button>
<app-button variant="secondary">Secondary</app-button>
<app-button variant="destructive">Destructive</app-button>
<app-button variant="outline">Outline</app-button>
<app-button variant="ghost">Ghost</app-button>
<app-button variant="link">Link</app-button>`,
        preview: html`
          <div class="flex flex-wrap gap-3">
            <app-button variant="default">Default</app-button>
            <app-button variant="secondary">Secondary</app-button>
            <app-button variant="destructive">Destructive</app-button>
            <app-button variant="outline">Outline</app-button>
            <app-button variant="ghost">Ghost</app-button>
            <app-button variant="link">Link</app-button>
          </div>
        `,
      },
      {
        title: 'Sizes',
        code: `<app-button size="sm">Small</app-button>
<app-button size="default">Default</app-button>
<app-button size="lg">Large</app-button>`,
        preview: html`
          <div class="flex items-center gap-3">
            <app-button size="sm">Small</app-button>
            <app-button size="default">Default</app-button>
            <app-button size="lg">Large</app-button>
          </div>
        `,
      },
      {
        title: 'Disabled',
        code: `<app-button disabled>Disabled</app-button>`,
        preview: html`<app-button disabled>Disabled</app-button>`,
      },
    ]);
  }

  _inputPage() {
    return this._componentPage('Input', 'Displays a form input field.', [
      {
        title: 'Default',
        code: `<app-input placeholder="Enter your email"></app-input>`,
        preview: html`<div class="w-80"><app-input placeholder="Enter your email"></app-input></div>`,
      },
      {
        title: 'With Label',
        code: `<app-input label="Email" placeholder="name@example.com" type="email"></app-input>`,
        preview: html`<div class="w-80"><app-input label="Email" placeholder="name@example.com" type="email"></app-input></div>`,
      },
      {
        title: 'Disabled',
        code: `<app-input label="Username" placeholder="john_doe" disabled></app-input>`,
        preview: html`<div class="w-80"><app-input label="Username" placeholder="john_doe" disabled></app-input></div>`,
      },
    ]);
  }

  _cardPage() {
    return this._componentPage('Card', 'Displays a card with header, content, and footer.', [
      {
        title: 'Default',
        code: `<app-card cardTitle="Create project" description="Deploy your new project in one-click.">
  <app-input label="Name" placeholder="Name of your project"></app-input>
  <div class="mt-4">
    <app-button>Create</app-button>
  </div>
</app-card>`,
        preview: html`
          <div class="w-96">
            <app-card cardTitle="Create project" description="Deploy your new project in one-click.">
              <app-input label="Name" placeholder="Name of your project"></app-input>
              <div class="mt-4">
                <app-button>Create</app-button>
              </div>
            </app-card>
          </div>
        `,
      },
    ]);
  }

  _badgePage() {
    return this._componentPage('Badge', 'Displays a badge or a component that looks like a badge.', [
      {
        title: 'Variants',
        code: `<app-badge>Default</app-badge>
<app-badge variant="secondary">Secondary</app-badge>
<app-badge variant="destructive">Destructive</app-badge>
<app-badge variant="outline">Outline</app-badge>`,
        preview: html`
          <div class="flex gap-3">
            <app-badge>Default</app-badge>
            <app-badge variant="secondary">Secondary</app-badge>
            <app-badge variant="destructive">Destructive</app-badge>
            <app-badge variant="outline">Outline</app-badge>
          </div>
        `,
      },
    ]);
  }

  _alertPage() {
    return this._componentPage('Alert', 'Displays a callout for important information.', [
      {
        title: 'Default',
        code: `<app-alert alertTitle="Heads up!">
  You can add components to your app using the CLI.
</app-alert>`,
        preview: html`
          <div class="w-full max-w-lg">
            <app-alert alertTitle="Heads up!">You can add components to your app using the CLI.</app-alert>
          </div>
        `,
      },
      {
        title: 'Destructive',
        code: `<app-alert variant="destructive" alertTitle="Error">
  Your session has expired. Please log in again.
</app-alert>`,
        preview: html`
          <div class="w-full max-w-lg">
            <app-alert variant="destructive" alertTitle="Error">Your session has expired. Please log in again.</app-alert>
          </div>
        `,
      },
    ]);
  }

  _togglePage() {
    return this._componentPage('Toggle', 'A switch control for toggling between two states.', [
      {
        title: 'Default',
        code: `<app-toggle label="Airplane Mode"></app-toggle>`,
        preview: html`<app-toggle label="Airplane Mode"></app-toggle>`,
      },
      {
        title: 'Checked',
        code: `<app-toggle label="Wi-Fi" checked></app-toggle>`,
        preview: html`<app-toggle label="Wi-Fi" checked></app-toggle>`,
      },
      {
        title: 'Disabled',
        code: `<app-toggle label="Bluetooth" disabled></app-toggle>`,
        preview: html`<app-toggle label="Bluetooth" disabled></app-toggle>`,
      },
    ]);
  }

  _tabsPage() {
    return this._componentPage('Tabs', 'A set of layered sections of content, shown one at a time.', [
      {
        title: 'Default',
        code: `<app-tabs .tabs=\${[
  { id: 'account', label: 'Account', content: html\`Make changes to your account.\` },
  { id: 'password', label: 'Password', content: html\`Change your password here.\` },
]}></app-tabs>`,
        preview: html`
          <app-tabs .tabs=${[
            { id: 'account', label: 'Account', content: html`<p class="text-sm text-zinc-400">Make changes to your account here.</p>` },
            { id: 'password', label: 'Password', content: html`<p class="text-sm text-zinc-400">Change your password here.</p>` },
          ]}></app-tabs>
        `,
      },
    ]);
  }

  _dialogPage() {
    return this._componentPage('Dialog', 'A modal dialog that interrupts the user with important content.', [
      {
        title: 'Default',
        code: `<app-button @click=\${() => dialog.show()}>Open Dialog</app-button>

<app-dialog id="dialog"
  dialogTitle="Are you sure?"
  description="This action cannot be undone.">
  <div class="flex justify-end gap-3 mt-4">
    <app-button variant="outline" @click=\${() => dialog.close()}>Cancel</app-button>
    <app-button variant="destructive">Continue</app-button>
  </div>
</app-dialog>`,
        preview: html`
          <div>
            <app-button @click=${(e) => e.target.closest('div').querySelector('app-dialog').show()}>Open Dialog</app-button>
            <app-dialog dialogTitle="Are you sure?" description="This action cannot be undone. This will permanently delete your account and remove your data from our servers.">
              <div class="flex justify-end gap-3 mt-4">
                <app-button variant="outline" @click=${(e) => e.target.closest('app-dialog').close()}>Cancel</app-button>
                <app-button variant="destructive" @click=${(e) => e.target.closest('app-dialog').close()}>Continue</app-button>
              </div>
            </app-dialog>
          </div>
        `,
      },
    ]);
  }

  _separatorPage() {
    return this._componentPage('Separator', 'Visually or semantically separates content.', [
      {
        title: 'Default',
        code: `<app-separator></app-separator>`,
        preview: html`
          <div class="w-full max-w-sm space-y-4">
            <div>
              <h4 class="text-sm font-medium">ZeeLit Components</h4>
              <p class="text-sm text-zinc-400">An open-source component library.</p>
            </div>
            <app-separator></app-separator>
            <div class="flex h-5 items-center gap-4 text-sm">
              <span>Docs</span>
              <app-separator orientation="vertical"></app-separator>
              <span>Source</span>
              <app-separator orientation="vertical"></app-separator>
              <span>Blog</span>
            </div>
          </div>
        `,
      },
    ]);
  }

  _skeletonPage() {
    return this._componentPage('Skeleton', 'Used to show a placeholder while content is loading.', [
      {
        title: 'Default',
        code: `<app-skeleton width="250px" height="1rem"></app-skeleton>
<app-skeleton width="200px" height="0.75rem"></app-skeleton>
<app-skeleton width="48px" height="48px" rounded="rounded-full"></app-skeleton>`,
        preview: html`
          <div class="flex items-center gap-4">
            <app-skeleton width="48px" height="48px" rounded="rounded-full"></app-skeleton>
            <div class="space-y-2">
              <app-skeleton width="250px" height="1rem"></app-skeleton>
              <app-skeleton width="200px" height="0.75rem"></app-skeleton>
            </div>
          </div>
        `,
      },
    ]);
  }
}

customElements.define('app-showcase', AppShowcase);

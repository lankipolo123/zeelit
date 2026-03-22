import { LitElement, html } from 'lit';

// Components
import './components/zee-button.js';
import './components/zee-input.js';
import './components/zee-card.js';
import './components/zee-badge.js';
import './components/zee-alert.js';
import './components/zee-toggle.js';
import './components/zee-tabs.js';
import './components/zee-dialog.js';
import './components/zee-separator.js';
import './components/zee-skeleton.js';
import './components/zee-code-preview.js';

const COMPONENTS = [
  { id: 'button', label: 'Button', category: 'Actions' },
  { id: 'input', label: 'Input', category: 'Forms' },
  { id: 'card', label: 'Card', category: 'Layout' },
  { id: 'badge', label: 'Badge', category: 'Data Display' },
  { id: 'alert', label: 'Alert', category: 'Feedback' },
  { id: 'toggle', label: 'Toggle', category: 'Forms' },
  { id: 'tabs', label: 'Tabs', category: 'Navigation' },
  { id: 'dialog', label: 'Dialog', category: 'Overlay' },
  { id: 'separator', label: 'Separator', category: 'Layout' },
  { id: 'skeleton', label: 'Skeleton', category: 'Feedback' },
];

const CATEGORIES = [...new Set(COMPONENTS.map(c => c.category))];

class ZeeShowcase extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    activePage: { type: String },
    sidebarOpen: { type: Boolean },
  };

  constructor() {
    super();
    this.activePage = this._getPageFromHash() || 'home';
    this.sidebarOpen = false;
    window.addEventListener('hashchange', () => {
      this.activePage = this._getPageFromHash() || 'home';
    });
  }

  _getPageFromHash() {
    return window.location.hash.replace('#/', '').replace('#', '') || 'home';
  }

  _navigate(page) {
    window.location.hash = `#/${page}`;
    this.activePage = page;
    this.sidebarOpen = false;
  }

  _renderSidebar() {
    return html`
      <aside class="w-64 shrink-0 border-r border-zinc-800 bg-zinc-950 overflow-y-auto h-screen sticky top-0 hidden lg:block">
        ${this._sidebarContent()}
      </aside>
    `;
  }

  _sidebarContent() {
    return html`
      <div class="p-6">
        <a @click="${() => this._navigate('home')}" class="flex items-center gap-2 cursor-pointer mb-8">
          <div class="h-7 w-7 rounded-md bg-white flex items-center justify-center">
            <span class="text-zinc-900 font-bold text-sm">Z</span>
          </div>
          <span class="font-semibold text-lg">ZeeLit</span>
        </a>

        <nav class="space-y-6">
          <div>
            <a
              @click="${() => this._navigate('home')}"
              class="block text-sm py-1 cursor-pointer transition-colors ${this.activePage === 'home' ? 'text-zinc-100 font-medium' : 'text-zinc-400 hover:text-zinc-200'}"
            >Introduction</a>
            <a
              @click="${() => this._navigate('installation')}"
              class="block text-sm py-1 cursor-pointer transition-colors ${this.activePage === 'installation' ? 'text-zinc-100 font-medium' : 'text-zinc-400 hover:text-zinc-200'}"
            >Installation</a>
          </div>

          ${CATEGORIES.map(cat => html`
            <div>
              <h4 class="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">${cat}</h4>
              ${COMPONENTS.filter(c => c.category === cat).map(comp => html`
                <a
                  @click="${() => this._navigate(comp.id)}"
                  class="block text-sm py-1 cursor-pointer transition-colors ${this.activePage === comp.id ? 'text-zinc-100 font-medium' : 'text-zinc-400 hover:text-zinc-200'}"
                >${comp.label}</a>
              `)}
            </div>
          `)}
        </nav>
      </div>
    `;
  }

  _renderMobileSidebar() {
    if (!this.sidebarOpen) return html``;
    return html`
      <div class="fixed inset-0 z-50 lg:hidden">
        <div class="fixed inset-0 bg-black/60" @click="${() => this.sidebarOpen = false}"></div>
        <div class="fixed inset-y-0 left-0 w-72 bg-zinc-950 border-r border-zinc-800 overflow-y-auto">
          ${this._sidebarContent()}
        </div>
      </div>
    `;
  }

  render() {
    return html`
      <div class="flex min-h-screen">
        ${this._renderSidebar()}
        ${this._renderMobileSidebar()}

        <main class="flex-1 min-w-0">
          <!-- Mobile header -->
          <div class="lg:hidden flex items-center gap-3 p-4 border-b border-zinc-800">
            <button @click="${() => this.sidebarOpen = true}" class="text-zinc-400 hover:text-zinc-100 cursor-pointer">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
            <span class="font-semibold">ZeeLit</span>
          </div>

          <div class="max-w-4xl mx-auto px-6 py-12">
            ${this._renderPage()}
          </div>
        </main>
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
          <div class="rounded-lg border border-zinc-800 p-6 hover:border-zinc-700 transition-colors">
            <h3 class="font-semibold mb-2">Web Standards</h3>
            <p class="text-sm text-zinc-400">Built on standard Web Components. Works everywhere — any framework or no framework at all.</p>
          </div>
          <div class="rounded-lg border border-zinc-800 p-6 hover:border-zinc-700 transition-colors">
            <h3 class="font-semibold mb-2">Copy & Paste</h3>
            <p class="text-sm text-zinc-400">Each component is a single file. Copy the source, drop it in your project, customize freely.</p>
          </div>
          <div class="rounded-lg border border-zinc-800 p-6 hover:border-zinc-700 transition-colors">
            <h3 class="font-semibold mb-2">Tailwind CSS</h3>
            <p class="text-sm text-zinc-400">Styled with utility classes. Customize colors, spacing, and sizing through Tailwind.</p>
          </div>
          <div class="rounded-lg border border-zinc-800 p-6 hover:border-zinc-700 transition-colors">
            <h3 class="font-semibold mb-2">Accessible</h3>
            <p class="text-sm text-zinc-400">Components follow WAI-ARIA patterns with proper roles, states, and keyboard interactions.</p>
          </div>
        </div>

        <div class="pt-4">
          <zee-button @click="${() => this._navigate('installation')}">Get Started</zee-button>
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
            <div class="code-block">import './components/zee-button.js';

// Then use in your HTML or Lit templates:
// &lt;zee-button variant="default"&gt;Click me&lt;/zee-button&gt;</div>
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
        ${sections.map(s => html`
          <div class="space-y-3">
            ${s.title ? html`<h2 class="text-xl font-semibold">${s.title}</h2>` : ''}
            ${s.description ? html`<p class="text-sm text-zinc-400">${s.description}</p>` : ''}
            <zee-code-preview code="${s.code}">
              ${s.preview}
            </zee-code-preview>
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
        code: `<zee-button>Button</zee-button>`,
        preview: html`<zee-button>Button</zee-button>`,
      },
      {
        title: 'Variants',
        description: 'Use the variant prop to change the visual style.',
        code: `<zee-button variant="default">Default</zee-button>
<zee-button variant="secondary">Secondary</zee-button>
<zee-button variant="destructive">Destructive</zee-button>
<zee-button variant="outline">Outline</zee-button>
<zee-button variant="ghost">Ghost</zee-button>
<zee-button variant="link">Link</zee-button>`,
        preview: html`
          <div class="flex flex-wrap gap-3">
            <zee-button variant="default">Default</zee-button>
            <zee-button variant="secondary">Secondary</zee-button>
            <zee-button variant="destructive">Destructive</zee-button>
            <zee-button variant="outline">Outline</zee-button>
            <zee-button variant="ghost">Ghost</zee-button>
            <zee-button variant="link">Link</zee-button>
          </div>
        `,
      },
      {
        title: 'Sizes',
        code: `<zee-button size="sm">Small</zee-button>
<zee-button size="default">Default</zee-button>
<zee-button size="lg">Large</zee-button>`,
        preview: html`
          <div class="flex items-center gap-3">
            <zee-button size="sm">Small</zee-button>
            <zee-button size="default">Default</zee-button>
            <zee-button size="lg">Large</zee-button>
          </div>
        `,
      },
      {
        title: 'Disabled',
        code: `<zee-button disabled>Disabled</zee-button>`,
        preview: html`<zee-button disabled>Disabled</zee-button>`,
      },
    ]);
  }

  _inputPage() {
    return this._componentPage('Input', 'Displays a form input field.', [
      {
        title: 'Default',
        code: `<zee-input placeholder="Enter your email"></zee-input>`,
        preview: html`<div class="w-80"><zee-input placeholder="Enter your email"></zee-input></div>`,
      },
      {
        title: 'With Label',
        code: `<zee-input label="Email" placeholder="name@example.com" type="email"></zee-input>`,
        preview: html`<div class="w-80"><zee-input label="Email" placeholder="name@example.com" type="email"></zee-input></div>`,
      },
      {
        title: 'Disabled',
        code: `<zee-input label="Username" placeholder="john_doe" disabled></zee-input>`,
        preview: html`<div class="w-80"><zee-input label="Username" placeholder="john_doe" disabled></zee-input></div>`,
      },
    ]);
  }

  _cardPage() {
    return this._componentPage('Card', 'Displays a card with header, content, and footer.', [
      {
        title: 'Default',
        code: `<zee-card cardTitle="Create project" description="Deploy your new project in one-click.">
  <zee-input label="Name" placeholder="Name of your project"></zee-input>
  <div class="mt-4">
    <zee-button>Create</zee-button>
  </div>
</zee-card>`,
        preview: html`
          <div class="w-96">
            <zee-card cardTitle="Create project" description="Deploy your new project in one-click.">
              <zee-input label="Name" placeholder="Name of your project"></zee-input>
              <div class="mt-4">
                <zee-button>Create</zee-button>
              </div>
            </zee-card>
          </div>
        `,
      },
    ]);
  }

  _badgePage() {
    return this._componentPage('Badge', 'Displays a badge or a component that looks like a badge.', [
      {
        title: 'Variants',
        code: `<zee-badge>Default</zee-badge>
<zee-badge variant="secondary">Secondary</zee-badge>
<zee-badge variant="destructive">Destructive</zee-badge>
<zee-badge variant="outline">Outline</zee-badge>`,
        preview: html`
          <div class="flex gap-3">
            <zee-badge>Default</zee-badge>
            <zee-badge variant="secondary">Secondary</zee-badge>
            <zee-badge variant="destructive">Destructive</zee-badge>
            <zee-badge variant="outline">Outline</zee-badge>
          </div>
        `,
      },
    ]);
  }

  _alertPage() {
    return this._componentPage('Alert', 'Displays a callout for important information.', [
      {
        title: 'Default',
        code: `<zee-alert alertTitle="Heads up!">
  You can add components to your app using the CLI.
</zee-alert>`,
        preview: html`
          <div class="w-full max-w-lg">
            <zee-alert alertTitle="Heads up!">You can add components to your app using the CLI.</zee-alert>
          </div>
        `,
      },
      {
        title: 'Destructive',
        code: `<zee-alert variant="destructive" alertTitle="Error">
  Your session has expired. Please log in again.
</zee-alert>`,
        preview: html`
          <div class="w-full max-w-lg">
            <zee-alert variant="destructive" alertTitle="Error">Your session has expired. Please log in again.</zee-alert>
          </div>
        `,
      },
    ]);
  }

  _togglePage() {
    return this._componentPage('Toggle', 'A switch control for toggling between two states.', [
      {
        title: 'Default',
        code: `<zee-toggle label="Airplane Mode"></zee-toggle>`,
        preview: html`<zee-toggle label="Airplane Mode"></zee-toggle>`,
      },
      {
        title: 'Checked',
        code: `<zee-toggle label="Wi-Fi" checked></zee-toggle>`,
        preview: html`<zee-toggle label="Wi-Fi" checked></zee-toggle>`,
      },
      {
        title: 'Disabled',
        code: `<zee-toggle label="Bluetooth" disabled></zee-toggle>`,
        preview: html`<zee-toggle label="Bluetooth" disabled></zee-toggle>`,
      },
    ]);
  }

  _tabsPage() {
    return this._componentPage('Tabs', 'A set of layered sections of content, shown one at a time.', [
      {
        title: 'Default',
        code: `<zee-tabs .tabs=\${[
  { id: 'account', label: 'Account' },
  { id: 'password', label: 'Password' },
]}>
  <div slot="account">Make changes to your account.</div>
  <div slot="password">Change your password here.</div>
</zee-tabs>`,
        preview: html`
          <zee-tabs .tabs=${[{ id: 'account', label: 'Account' }, { id: 'password', label: 'Password' }]}>
            <div slot="account" class="text-sm text-zinc-400">Make changes to your account here.</div>
            <div slot="password" class="text-sm text-zinc-400">Change your password here.</div>
          </zee-tabs>
        `,
      },
    ]);
  }

  _dialogPage() {
    return this._componentPage('Dialog', 'A modal dialog that interrupts the user with important content.', [
      {
        title: 'Default',
        code: `<zee-button @click=\${() => dialog.show()}>Open Dialog</zee-button>

<zee-dialog id="dialog"
  dialogTitle="Are you sure?"
  description="This action cannot be undone.">
  <div class="flex justify-end gap-3 mt-4">
    <zee-button variant="outline" @click=\${() => dialog.close()}>Cancel</zee-button>
    <zee-button variant="destructive">Continue</zee-button>
  </div>
</zee-dialog>`,
        preview: html`
          <div>
            <zee-button @click=${(e) => { e.target.closest('div').querySelector('zee-dialog').show(); }}>Open Dialog</zee-button>
            <zee-dialog dialogTitle="Are you sure?" description="This action cannot be undone. This will permanently delete your account and remove your data from our servers.">
              <div class="flex justify-end gap-3 mt-4">
                <zee-button variant="outline" @click=${(e) => { e.target.closest('zee-dialog').close(); }}>Cancel</zee-button>
                <zee-button variant="destructive" @click=${(e) => { e.target.closest('zee-dialog').close(); }}>Continue</zee-button>
              </div>
            </zee-dialog>
          </div>
        `,
      },
    ]);
  }

  _separatorPage() {
    return this._componentPage('Separator', 'Visually or semantically separates content.', [
      {
        title: 'Default',
        code: `<zee-separator></zee-separator>`,
        preview: html`
          <div class="w-full max-w-sm space-y-4">
            <div>
              <h4 class="text-sm font-medium">ZeeLit Components</h4>
              <p class="text-sm text-zinc-400">An open-source component library.</p>
            </div>
            <zee-separator></zee-separator>
            <div class="flex h-5 items-center gap-4 text-sm">
              <span>Docs</span>
              <zee-separator orientation="vertical"></zee-separator>
              <span>Source</span>
              <zee-separator orientation="vertical"></zee-separator>
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
        code: `<zee-skeleton width="250px" height="1rem"></zee-skeleton>
<zee-skeleton width="200px" height="1rem"></zee-skeleton>
<zee-skeleton width="48px" height="48px" rounded="rounded-full"></zee-skeleton>`,
        preview: html`
          <div class="flex items-center gap-4">
            <zee-skeleton width="48px" height="48px" rounded="rounded-full"></zee-skeleton>
            <div class="space-y-2">
              <zee-skeleton width="250px" height="1rem"></zee-skeleton>
              <zee-skeleton width="200px" height="0.75rem"></zee-skeleton>
            </div>
          </div>
        `,
      },
    ]);
  }
}

customElements.define('zee-showcase', ZeeShowcase);

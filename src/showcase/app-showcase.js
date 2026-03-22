import { LitElement, html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { highlightCode } from './code-highlight.js';
import { COMPONENTS, CATEGORIES } from './component-data.js';
import { toast } from '../components/app-toast.js';

// Pages
import { homePage } from '../pages/home-page.js';
import { installationPage } from '../pages/installation-page.js';
import { buttonPage } from '../pages/button-page.js';
import { inputPage } from '../pages/input-page.js';
import { cardPage } from '../pages/card-page.js';
import { badgePage } from '../pages/badge-page.js';
import { alertPage } from '../pages/alert-page.js';
import { togglePage } from '../pages/toggle-page.js';
import { tabsPage } from '../pages/tabs-page.js';
import { dialogPage } from '../pages/dialog-page.js';
import { separatorPage } from '../pages/separator-page.js';
import { skeletonPage } from '../pages/skeleton-page.js';
import { toastPage } from '../pages/toast-page.js';

const PAGE_MAP = {
  home: homePage,
  installation: installationPage,
  button: buttonPage,
  input: inputPage,
  card: cardPage,
  badge: badgePage,
  alert: alertPage,
  toggle: togglePage,
  tabs: tabsPage,
  dialog: dialogPage,
  separator: separatorPage,
  skeleton: skeletonPage,
  toast: toastPage,
};

export class AppShowcase extends LitElement {
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

  navigate(page) {
    window.location.hash = `#/${page}`;
    this.activePage = page;
    this.sidebarOpen = false;
    this._codeVisible = {};
    window.scrollTo(0, 0);
  }

  _setView(key, view) {
    this._codeVisible = { ...this._codeVisible, [key]: view };
  }

  _getView(key) {
    return this._codeVisible[key] || 'preview';
  }

  _copyCode(code) {
    navigator.clipboard.writeText(code);
    toast('Copied to clipboard', { variant: 'success' });
  }

  /* ─── Preview + Code block ─── */

  renderDemo(key, preview, code, { importPath, tagName } = {}) {
    const view = this._getView(key);
    const importCode = importPath
      ? `import '${importPath}';\n\n${code}`
      : code;
    const cdnCode = tagName
      ? `<!-- Lit via CDN (jsDelivr) -->\n<script type="module">\n  import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';\n\n  // Your component file (${tagName}.js) goes here\n  // or load it separately:\n  // import './${tagName}.js';\n</script>\n\n${code}`
      : code;
    const activeCode = view === 'cdn' ? cdnCode : importCode;

    const tabBtn = (id, label) => html`
      <button
        @click="${() => this._setView(key, id)}"
        class="px-4 py-2.5 text-sm font-medium transition-colors cursor-pointer ${view === id ? 'text-zinc-100 border-b-2 border-white' : 'text-zinc-500 hover:text-zinc-300'}"
      >${label}</button>
    `;

    return html`
      <div class="rounded-lg border border-zinc-800 overflow-hidden">
        <div class="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/50 px-4">
          <div class="flex">
            ${tabBtn('preview', 'Preview')}
            ${tabBtn('code', 'Code')}
            ${tabBtn('cdn', 'CDN')}
          </div>
          ${view !== 'preview' ? html`
            <button @click="${() => this._copyCode(activeCode)}" class="text-xs text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke-width="2"/><path stroke-width="2" d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
              Copy
            </button>
          ` : ''}
        </div>
        ${view === 'preview'
          ? html`<div class="p-8 flex items-center justify-center min-h-[180px] bg-zinc-950/50">${preview}</div>`
          : html`<div class="code-block max-h-[500px] overflow-auto rounded-none border-0">${unsafeHTML(highlightCode(activeCode))}</div>`
        }
      </div>
    `;
  }

  /* ─── Source viewer ─── */

  _renderSource(source, fileName) {
    const key = `source-${fileName}`;
    const expanded = this._codeVisible[key];
    return html`
      <div class="space-y-3">
        <h2 class="text-xl font-semibold">Source</h2>
        <p class="text-sm text-zinc-400">Copy this file into your project to use the component.</p>
        <div class="rounded-lg border border-zinc-800 overflow-hidden">
          <div class="flex items-center justify-between px-4 py-2 border-b border-zinc-800 bg-zinc-900/50">
            <div class="flex items-center gap-2">
              <svg class="w-3.5 h-3.5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              <span class="text-xs text-zinc-400 font-mono">${fileName}</span>
            </div>
            <div class="flex items-center gap-3">
              <button @click="${() => this._copyCode(source)}" class="text-xs text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke-width="2"/><path stroke-width="2" d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
                Copy
              </button>
              <button @click="${() => { this._setView(key, expanded ? '' : 'open'); toast(expanded ? 'Source collapsed' : 'Source expanded'); }}" class="text-xs text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer">
                ${expanded ? 'Collapse' : 'Expand'}
              </button>
            </div>
          </div>
          <div class="code-block rounded-none border-0 ${expanded ? '' : 'max-h-[300px]'} overflow-auto">${unsafeHTML(highlightCode(source))}</div>
        </div>
      </div>
    `;
  }

  componentPage(title, description, sections, { source, fileName, importPath, tagName } = {}) {
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
            ${this.renderDemo(`${title}-${i}`, s.preview, s.code, { importPath, tagName })}
          </div>
        `)}
        ${source ? this._renderSource(source, fileName) : ''}
      </div>
    `;
  }

  /* ─── Header ─── */

  _renderHeader() {
    const isComponentPage = COMPONENTS.some(c => c.id === this.activePage);

    return html`
      <header class="sticky top-0 z-40 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
        <div class="flex h-14 items-center px-4 md:px-6">
          <button @click="${() => this.sidebarOpen = true}" class="mr-3 text-zinc-400 hover:text-zinc-100 cursor-pointer md:hidden">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>

          <a @click="${() => this.navigate('home')}" class="flex items-center gap-2 cursor-pointer mr-8">
            <div class="h-7 w-7 rounded-md bg-white flex items-center justify-center">
              <span class="text-zinc-900 font-bold text-xs">Z</span>
            </div>
            <span class="font-semibold tracking-tight hidden sm:block">ZeeLit</span>
          </a>

          <nav class="flex items-center gap-1">
            <a @click="${() => this.navigate('home')}" class="px-3 py-1.5 text-sm rounded-md cursor-pointer transition-colors ${this.activePage === 'home' ? 'text-zinc-100 bg-zinc-800' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'}">Docs</a>
            <a @click="${() => this.navigate('installation')}" class="px-3 py-1.5 text-sm rounded-md cursor-pointer transition-colors ${this.activePage === 'installation' ? 'text-zinc-100 bg-zinc-800' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'}">Installation</a>
            <a @click="${() => this.navigate('button')}" class="px-3 py-1.5 text-sm rounded-md cursor-pointer transition-colors ${isComponentPage ? 'text-zinc-100 bg-zinc-800' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'}">Components</a>
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
          <a @click="${() => this.navigate('home')}" class="block text-sm py-1.5 px-2 rounded cursor-pointer transition-colors ${this.activePage === 'home' ? 'text-zinc-100 font-medium bg-zinc-800/50' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/30'}">Introduction</a>
          <a @click="${() => this.navigate('installation')}" class="block text-sm py-1.5 px-2 rounded cursor-pointer transition-colors ${this.activePage === 'installation' ? 'text-zinc-100 font-medium bg-zinc-800/50' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/30'}">Installation</a>
        </div>
        ${CATEGORIES.map(cat => html`
          <div>
            <h4 class="text-[11px] font-semibold text-zinc-500 uppercase tracking-widest mb-1.5 px-2">${cat}</h4>
            <div class="space-y-0.5">
              ${COMPONENTS.filter(c => c.category === cat).map(comp => html`
                <a @click="${() => this.navigate(comp.id)}" class="block text-sm py-1.5 px-2 rounded cursor-pointer transition-colors ${this.activePage === comp.id ? 'text-zinc-100 font-medium bg-zinc-800/50' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/30'}">${comp.label}</a>
              `)}
            </div>
          </div>
        `)}
      </nav>
    `;
  }

  /* ─── Layout ─── */

  render() {
    return html`
      <div class="flex flex-col h-screen">
        ${this._renderHeader()}

        <div class="flex flex-1 overflow-hidden">
          <aside class="w-56 shrink-0 border-r border-zinc-800 bg-zinc-950 overflow-y-auto hidden md:block">
            ${this._sidebarContent()}
          </aside>

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
    const pageFn = PAGE_MAP[this.activePage] || PAGE_MAP.home;
    return pageFn(this);
  }
}

customElements.define('app-showcase', AppShowcase);

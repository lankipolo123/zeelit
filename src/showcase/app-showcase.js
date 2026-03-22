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
import { avatarPage } from '../pages/avatar-page.js';
import { tooltipPage } from '../pages/tooltip-page.js';
import { progressPage } from '../pages/progress-page.js';
import { dropdownPage } from '../pages/dropdown-page.js';
import { textareaPage } from '../pages/textarea-page.js';
import { checkboxPage } from '../pages/checkbox-page.js';
import { radioPage } from '../pages/radio-page.js';
import { accordionPage } from '../pages/accordion-page.js';

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
  avatar: avatarPage,
  tooltip: tooltipPage,
  progress: progressPage,
  dropdown: dropdownPage,
  textarea: textareaPage,
  checkbox: checkboxPage,
  radio: radioPage,
  accordion: accordionPage,
};

export class AppShowcase extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    activePage: { type: String },
    sidebarOpen: { type: Boolean },
    sidebarCollapsed: { type: Boolean },
    _codeVisible: { state: true },
    _copied: { state: true },
    _dark: { state: true },
  };

  constructor() {
    super();
    this.activePage = this._getPageFromHash() || 'home';
    this.sidebarOpen = false;
    this.sidebarCollapsed = localStorage.getItem('zeelit-sidebar') === 'collapsed';
    this._codeVisible = {};
    this._copied = {};
    this._dark = localStorage.getItem('zeelit-theme') !== 'light';
    this._applyTheme();
    window.addEventListener('hashchange', () => {
      this.activePage = this._getPageFromHash() || 'home';
      this._codeVisible = {};
    });
  }

  _applyTheme() {
    document.documentElement.classList.toggle('light', !this._dark);
    localStorage.setItem('zeelit-theme', this._dark ? 'dark' : 'light');
  }

  _toggleTheme() {
    this._dark = !this._dark;
    this._applyTheme();
    toast(this._dark ? 'Dark mode' : 'Light mode');
  }

  _toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
    localStorage.setItem('zeelit-sidebar', this.sidebarCollapsed ? 'collapsed' : 'expanded');
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

  _copyCode(code, copyKey) {
    navigator.clipboard.writeText(code);
    this._copied = { ...this._copied, [copyKey]: true };
    this.requestUpdate();
    toast('Copied to clipboard', { variant: 'success' });
    setTimeout(() => {
      this._copied = { ...this._copied, [copyKey]: false };
      this.requestUpdate();
    }, 2000);
  }

  _isCopied(copyKey) {
    return this._copied[copyKey] || false;
  }

  _copyButton(code, copyKey) {
    const copied = this._isCopied(copyKey);
    return html`
      <button @click="${() => this._copyCode(code, copyKey)}" class="text-xs transition-colors cursor-pointer flex items-center gap-1.5" style="color: ${copied ? 'var(--fg)' : 'var(--fg-subtle)'}">
        ${copied ? html`
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          Copied!
        ` : html`
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke-width="2"/><path stroke-width="2" d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
          Copy
        `}
      </button>
    `;
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
        class="px-4 py-2.5 text-sm font-medium transition-colors cursor-pointer"
        style="color: ${view === id ? 'var(--fg)' : 'var(--fg-subtle)'}; ${view === id ? 'border-bottom: 2px solid var(--fg)' : ''}"
      >${label}</button>
    `;

    return html`
      <div class="rounded-lg overflow-hidden" style="border: 1px solid var(--border)">
        <div class="flex items-center justify-between px-4" style="border-bottom: 1px solid var(--border); background: var(--bg-card)">
          <div class="flex">
            ${tabBtn('preview', 'Preview')}
            ${tabBtn('code', 'Code')}
            ${tabBtn('cdn', 'CDN')}
          </div>
          ${view !== 'preview' ? this._copyButton(activeCode, `demo-${key}-${view}`) : ''}
        </div>
        ${view === 'preview'
          ? html`<div class="p-8 flex items-center justify-center min-h-[180px]" style="background: var(--bg-preview)">${preview}</div>`
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
        <h2 class="text-xl font-semibold" style="color: var(--fg-heading)">Source</h2>
        <p class="text-sm" style="color: var(--fg-muted)">Copy this file into your project to use the component.</p>
        <div class="rounded-lg overflow-hidden" style="border: 1px solid var(--border)">
          <div class="flex items-center justify-between px-4 py-2" style="border-bottom: 1px solid var(--border); background: var(--bg-card)">
            <div class="flex items-center gap-2">
              <svg class="w-3.5 h-3.5" style="color: var(--fg-subtle)" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              <span class="text-xs font-mono" style="color: var(--fg-muted)">${fileName}</span>
            </div>
            <div class="flex items-center gap-3">
              ${this._copyButton(source, `source-${fileName}`)}
              <button @click="${() => { this._setView(key, expanded ? '' : 'open'); toast(expanded ? 'Source collapsed' : 'Source expanded'); }}" class="text-xs transition-colors cursor-pointer" style="color: var(--fg-subtle)">
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
          <h1 class="text-3xl font-bold tracking-tight" style="color: var(--fg-heading)">${title}</h1>
          <p class="mt-2" style="color: var(--fg-muted)">${description}</p>
        </div>
        <div class="h-px" style="background: var(--border)"></div>
        ${sections.map((s, i) => html`
          <div class="space-y-3">
            ${s.title ? html`<h2 class="text-xl font-semibold" style="color: var(--fg-heading)">${s.title}</h2>` : ''}
            ${s.description ? html`<p class="text-sm" style="color: var(--fg-muted)">${s.description}</p>` : ''}
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

    const navLink = (page, label, active) => html`
      <a @click="${() => this.navigate(page)}" class="px-3 py-1.5 text-sm rounded-md cursor-pointer transition-colors"
        style="color: ${active ? 'var(--fg)' : 'var(--fg-muted)'}; background: ${active ? 'var(--bg-muted)' : 'transparent'}"
      >${label}</a>
    `;

    return html`
      <header class="sticky top-0 z-40 w-full backdrop-blur-md" style="border-bottom: 1px solid var(--border); background: var(--bg-header)">
        <div class="flex h-14 items-center px-4 md:px-6">
          <button @click="${() => this.sidebarOpen = true}" class="mr-3 cursor-pointer md:hidden" style="color: var(--fg-muted)">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>

          <a @click="${() => this.navigate('home')}" class="flex items-center gap-2 cursor-pointer mr-8">
            <div class="h-7 w-7 rounded-md flex items-center justify-center" style="background: var(--logo-bg)">
              <span class="font-bold text-xs" style="color: var(--logo-fg)">Z</span>
            </div>
            <span class="font-semibold tracking-tight hidden sm:block" style="color: var(--fg)">ZeeLit</span>
          </a>

          <nav class="flex items-center gap-1 flex-1">
            ${navLink('home', 'Docs', this.activePage === 'home')}
            ${navLink('installation', 'Installation', this.activePage === 'installation')}
            ${navLink('button', 'Components', isComponentPage)}
          </nav>

          <button @click="${() => this._toggleTheme()}" class="p-2 rounded-md cursor-pointer transition-colors" style="color: var(--fg-muted)" title="${this._dark ? 'Switch to light mode' : 'Switch to dark mode'}">
            ${this._dark ? html`
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            ` : html`
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
            `}
          </button>
        </div>
      </header>
    `;
  }

  /* ─── Sidebar ─── */

  _sidebarComponentGrid() {
    const tile = (comp) => {
      const active = this.activePage === comp.id;
      return html`
        <a @click="${() => this.navigate(comp.id)}"
          class="inline-flex items-center px-2.5 py-1 rounded-md cursor-pointer transition-colors text-[11px] font-medium whitespace-nowrap"
          style="background: ${active ? 'var(--bg-hover)' : 'var(--bg-card)'}; color: ${active ? 'var(--fg)' : 'var(--fg-muted)'}; border: 1px solid ${active ? 'var(--border)' : 'var(--border)'}"
        >${comp.label}</a>
      `;
    };

    return html`
      <div class="p-3" style="border-bottom: 1px solid var(--border)">
        <h4 class="text-[11px] font-semibold uppercase tracking-widest mb-2 px-1" style="color: var(--fg-subtle)">Components</h4>
        <div class="flex flex-wrap gap-1">
          ${COMPONENTS.map(comp => tile(comp))}
        </div>
      </div>
    `;
  }

  _sidebarCollapseToggle() {
    return html`
      <button @click="${() => this._toggleSidebar()}"
        class="flex items-center justify-center gap-2 w-full py-2 cursor-pointer transition-colors hidden md:flex"
        style="border-bottom: 1px solid var(--border); color: var(--fg-subtle); background: var(--bg-card)"
        title="${this.sidebarCollapsed ? 'Expand navigation' : 'Collapse navigation'}"
      >
        ${this.sidebarCollapsed ? html`
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
        ` : html`
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7"/></svg>
        `}
        <span class="text-[11px] font-medium uppercase tracking-wider">${this.sidebarCollapsed ? 'Show nav' : 'Hide nav'}</span>
      </button>
    `;
  }

  _sidebarNav() {
    const sideLink = (page, label) => {
      const active = this.activePage === page;
      return html`
        <a @click="${() => this.navigate(page)}" class="block text-sm py-1.5 px-2 rounded cursor-pointer transition-colors"
          style="color: ${active ? 'var(--fg)' : 'var(--fg-muted)'}; background: ${active ? 'var(--bg-hover)' : 'transparent'}; font-weight: ${active ? '500' : 'normal'}"
        >${label}</a>
      `;
    };

    return html`
      <nav class="p-3 space-y-4 overflow-y-auto">
        <div class="space-y-0.5">
          <h4 class="text-[11px] font-semibold uppercase tracking-widest mb-1.5 px-2" style="color: var(--fg-subtle)">Getting Started</h4>
          ${sideLink('home', 'Introduction')}
          ${sideLink('installation', 'Installation')}
        </div>
        ${CATEGORIES.map(cat => html`
          <div>
            <h4 class="text-[11px] font-semibold uppercase tracking-widest mb-1.5 px-2" style="color: var(--fg-subtle)">${cat}</h4>
            <div class="space-y-0.5">
              ${COMPONENTS.filter(c => c.category === cat).map(comp => sideLink(comp.id, comp.label))}
            </div>
          </div>
        `)}
      </nav>
    `;
  }

  /* ─── Layout ─── */

  render() {
    return html`
      <div class="flex flex-col h-screen" style="background: var(--bg); color: var(--fg)">
        ${this._renderHeader()}

        <div class="flex flex-1 overflow-hidden">
          <aside class="w-[22%] min-w-[220px] max-w-[300px] shrink-0 overflow-y-auto hidden md:flex md:flex-col" style="border-right: 1px solid var(--border); background: var(--bg)">
            ${this._sidebarComponentGrid()}
            ${this._sidebarCollapseToggle()}
            ${!this.sidebarCollapsed ? this._sidebarNav() : ''}
          </aside>

          ${this.sidebarOpen ? html`
            <div class="fixed inset-0 z-50 md:hidden">
              <div class="fixed inset-0" style="background: var(--overlay)" @click="${() => this.sidebarOpen = false}"></div>
              <aside class="fixed inset-y-0 left-0 w-72 overflow-y-auto flex flex-col" style="background: var(--bg); border-right: 1px solid var(--border)">
                <div class="flex items-center justify-between p-4" style="border-bottom: 1px solid var(--border)">
                  <div class="flex items-center gap-2">
                    <div class="h-7 w-7 rounded-md flex items-center justify-center" style="background: var(--logo-bg)">
                      <span class="font-bold text-xs" style="color: var(--logo-fg)">Z</span>
                    </div>
                    <span class="font-semibold tracking-tight" style="color: var(--fg)">ZeeLit</span>
                  </div>
                  <button @click="${() => this.sidebarOpen = false}" class="p-1 rounded cursor-pointer" style="color: var(--fg-subtle)">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
                  </button>
                </div>
                ${this._sidebarComponentGrid()}
                ${this._sidebarNav()}
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

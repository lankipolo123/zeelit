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
import { selectPage } from '../pages/select-page.js';
import { breadcrumbPage } from '../pages/breadcrumb-page.js';
import { popoverPage } from '../pages/popover-page.js';
import { sliderPage } from '../pages/slider-page.js';
import { sheetPage } from '../pages/sheet-page.js';
import { dataTablePage } from '../pages/data-table-page.js';
import { paginationPage } from '../pages/pagination-page.js';
import { hoverCardPage } from '../pages/hover-card-page.js';
import { collapsiblePage } from '../pages/collapsible-page.js';
import { scrollAreaPage } from '../pages/scroll-area-page.js';
import { contextMenuPage } from '../pages/context-menu-page.js';
import { carouselPage } from '../pages/carousel-page.js';
import { layoutsPage } from '../pages/layouts-page.js';

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
  select: selectPage,
  breadcrumb: breadcrumbPage,
  popover: popoverPage,
  slider: sliderPage,
  sheet: sheetPage,
  'data-table': dataTablePage,
  pagination: paginationPage,
  'hover-card': hoverCardPage,
  collapsible: collapsiblePage,
  'scroll-area': scrollAreaPage,
  'context-menu': contextMenuPage,
  carousel: carouselPage,
  layouts: layoutsPage,
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
    _viewAllOpen: { state: true },
    _sidebarPage: { state: true },
  };

  constructor() {
    super();
    this.activePage = this._getPageFromHash() || 'home';
    this.sidebarOpen = false;
    this.sidebarCollapsed = false;
    this._codeVisible = {};
    this._copied = {};
    this._dark = localStorage.getItem('zeelit-theme') !== 'light';
    this._viewAllOpen = false;
    this._sidebarPage = 0;
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

  /* ─── File Explorer Code Viewer ─── */

  _isFolderOpen(key) { return this._codeVisible[key] !== 'closed'; }
  _toggleFolder(key) { this._setView(key, this._isFolderOpen(key) ? 'closed' : 'open'); }

  renderFileExplorer(key, files) {
    const activeFileKey = `file-explorer-${key}`;
    const activeFile = this._codeVisible[activeFileKey] || files[0]?.name;
    const currentFile = files.find(f => f.name === activeFile) || files[0];

    const chevron = (open) => html`<svg class="w-3 h-3 shrink-0 transition-transform ${open ? 'rotate-90' : ''}" style="color: var(--fg-subtle)" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>`;
    const folderIcon = (open) => open
      ? html`<svg class="w-4 h-4 shrink-0" style="color: #f59e0b" fill="currentColor" viewBox="0 0 24 24"><path d="M2 6a2 2 0 012-2h5l2 2h9a2 2 0 012 2v1H2V6zm0 3h20v9a2 2 0 01-2 2H4a2 2 0 01-2-2V9z"/></svg>`
      : html`<svg class="w-4 h-4 shrink-0" style="color: #f59e0b" fill="currentColor" viewBox="0 0 24 24"><path d="M2 6a2 2 0 012-2h5l2 2h9a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/></svg>`;
    const fileIcon = (name) => {
      const ext = name.split('.').pop();
      const color = ext === 'js' ? '#facc15' : ext === 'json' ? '#34d399' : ext === 'css' ? '#60a5fa' : 'var(--fg-subtle)';
      return html`<svg class="w-4 h-4 shrink-0" style="color: ${color}" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/></svg>`;
    };

    // Group files by folder
    const tree = {};
    const rootFiles = [];
    for (const f of files) {
      const parts = f.path ? f.path.split('/') : [f.name];
      if (parts.length > 1) {
        const folder = parts.slice(0, -1).join('/');
        if (!tree[folder]) tree[folder] = [];
        tree[folder].push(f);
      } else {
        rootFiles.push(f);
      }
    }

    return html`
      <div class="rounded-lg overflow-hidden flex" style="border: 1px solid var(--border); height: 420px;">
        <!-- File tree sidebar -->
        <div class="w-52 shrink-0 flex flex-col overflow-y-auto" style="border-right: 1px solid var(--border); background: var(--bg-card)">
          <div class="px-3 py-2.5 text-xs font-semibold uppercase tracking-wider" style="color: var(--fg-subtle); border-bottom: 1px solid var(--border)">Explorer</div>
          <div class="py-1">
            ${Object.entries(tree).map(([folder, folderFiles]) => {
              const folderKey = `folder-${key}-${folder}`;
              const open = this._isFolderOpen(folderKey);
              return html`
                <div>
                  <!-- Folder header (clickable accordion) -->
                  <button
                    @click="${() => this._toggleFolder(folderKey)}"
                    class="flex items-center gap-1.5 w-full text-left px-3 py-2 text-xs font-medium cursor-pointer transition-colors select-none"
                    style="color: var(--fg-muted)"
                    @mouseenter=${(e) => e.currentTarget.style.background = 'var(--bg-hover)'}
                    @mouseleave=${(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    ${chevron(open)}
                    ${folderIcon(open)}
                    <span>${folder}</span>
                  </button>
                  <!-- Folder separator -->
                  <div class="mx-3" style="height: 1px; background: var(--border)"></div>
                  <!-- Folder children (collapsible) -->
                  ${open ? html`
                    <div class="py-0.5">
                      ${folderFiles.map(f => html`
                        <button
                          @click="${() => this._setView(activeFileKey, f.name)}"
                          class="flex items-center gap-2 w-full text-left text-xs cursor-pointer transition-colors pl-8 pr-3 py-1.5"
                          style="color: ${activeFile === f.name ? 'var(--fg)' : 'var(--fg-muted)'}; background: ${activeFile === f.name ? 'var(--accent, var(--bg-muted))' : 'transparent'}"
                        >
                          ${fileIcon(f.name)}
                          <span class="truncate">${f.name}</span>
                        </button>
                      `)}
                    </div>
                  ` : ''}
                </div>
              `;
            })}
            ${rootFiles.length ? html`
              ${Object.keys(tree).length ? html`<div class="mx-3 my-1" style="height: 1px; background: var(--border)"></div>` : ''}
              ${rootFiles.map(f => html`
                <button
                  @click="${() => this._setView(activeFileKey, f.name)}"
                  class="flex items-center gap-2 w-full text-left text-xs cursor-pointer transition-colors pl-3 pr-3 py-1.5"
                  style="color: ${activeFile === f.name ? 'var(--fg)' : 'var(--fg-muted)'}; background: ${activeFile === f.name ? 'var(--accent, var(--bg-muted))' : 'transparent'}"
                >
                  ${fileIcon(f.name)}
                  <span class="truncate">${f.name}</span>
                </button>
              `)}
            ` : ''}
          </div>
        </div>
        <!-- Code panel -->
        <div class="flex-1 flex flex-col overflow-hidden" style="background: var(--code-bg)">
          <div class="flex items-center justify-between px-4 py-2 shrink-0" style="border-bottom: 1px solid var(--border); background: var(--bg-card)">
            <div class="flex items-center gap-2">
              ${fileIcon(currentFile.name)}
              <span class="text-xs font-mono" style="color: var(--fg-muted)">${currentFile.path || currentFile.name}</span>
            </div>
            ${this._copyButton(currentFile.code, `explorer-${key}-${currentFile.name}`)}
          </div>
          <div class="code-block flex-1 overflow-auto rounded-none border-0">${unsafeHTML(highlightCode(currentFile.code))}</div>
        </div>
      </div>
    `;
  }

  /* ─── Preview + Code block ─── */

  renderDemo(key, preview, code, { importPath, tagName, layout } = {}) {
    // Auto-generate preview from code if not provided
    if (!preview) {
      const wrapper = layout ? `<div class="${layout}">` : '<div>';
      preview = html`${unsafeHTML(wrapper + code + '</div>')}`;
    }
    const view = this._getView(key);
    const importCode = importPath
      ? `import '${importPath}';\n\n${code}`
      : code;
    const cdnCode = tagName
      ? `<!-- Lit via CDN (jsDelivr) -->\n<script type="module">\n  import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';\n\n  // Your component file (${tagName}.js) goes here\n  // or load it separately:\n  // import './${tagName}.js';\n</script>\n\n${code}`
      : code;
    const htmlCode = tagName
      ? `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${tagName} Example</title>
  <link rel="stylesheet" href="./styles.css">
  <script type="module" src="./components/${tagName}.js"><\/script>
</head>
<body>

  ${code}

</body>
</html>`
      : code;
    const activeCode = view === 'html' ? htmlCode : view === 'cdn' ? cdnCode : importCode;

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
            ${tabBtn('html', 'HTML')}
            ${tabBtn('cdn', 'CDN')}
          </div>
          ${view !== 'preview' ? this._copyButton(activeCode, `demo-${key}-${view}`) : ''}
        </div>
        ${view === 'preview'
          ? html`<div class="p-6 min-h-[180px]" style="background: var(--bg-preview)">${preview}</div>`
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

  componentPage(title, description, sections, { source, fileName, importPath, tagName, pageSource, pageFileName } = {}) {
    const files = [];
    if (source) {
      files.push({ name: fileName, path: `components/${fileName}`, code: source });
    }
    if (pageSource && pageFileName) {
      files.push({ name: pageFileName, path: `pages/${pageFileName}`, code: pageSource });
    }
    // Auto-generate examples file from demo code snippets
    if (sections.length && importPath) {
      const examplesCode = `import '${importPath}';\n\n` + sections.map((s, i) => {
        const header = s.title ? `/* ${s.title}${s.description ? ' — ' + s.description : ''} */` : '';
        return (header ? header + '\n' : '') + s.code;
      }).join('\n\n');
      files.push({ name: 'examples.html', path: `examples/${tagName || 'component'}-examples.html`, code: examplesCode });
    }
    // Auto-generate a standalone index.html example
    if (sections.length && tagName) {
      const usage = sections.map(s => {
        const comment = s.title ? `  <!-- ${s.title} -->` : '';
        return (comment ? comment + '\n' : '') + '  ' + s.code.split('\n').join('\n  ');
      }).join('\n\n');
      const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} — ZeeLit</title>
  <link rel="stylesheet" href="./styles.css">
  <script type="module" src="./components/${tagName}.js"><\/script>
</head>
<body>

${usage}

</body>
</html>`;
      files.push({ name: 'index.html', path: 'index.html', code: indexHtml });
    }

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
            ${this.renderDemo(`${title}-${i}`, s.preview, s.code, { importPath, tagName, layout: s.layout })}
          </div>
        `)}
        ${files.length ? html`
          <div class="space-y-3">
            <h2 class="text-xl font-semibold" style="color: var(--fg-heading)">Source</h2>
            <p class="text-sm" style="color: var(--fg-muted)">Browse the component source and how it's used.</p>
            ${this.renderFileExplorer(title, files)}
          </div>
        ` : ''}
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
      <header class="sticky top-0 z-40 w-full backdrop-blur-md h-14 shrink-0" style="border-bottom: 1px solid var(--border); background: var(--bg-header)">
        <div class="flex h-full items-center px-4 md:px-6">
          <button @click="${() => this.sidebarOpen = true}" class="mr-3 cursor-pointer md:hidden" style="color: var(--fg-muted)">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>

          <nav class="flex items-center gap-1 flex-1">
            ${navLink('home', 'Docs', this.activePage === 'home')}
            ${navLink('installation', 'Installation', this.activePage === 'installation')}
            ${navLink('button', 'Components', isComponentPage)}
            ${navLink('layouts', 'Layouts', this.activePage === 'layouts')}
          </nav>

          <button @click="${() => this._toggleTheme()}" class="p-2 rounded-md cursor-pointer transition-colors" title="${this._dark ? 'Switch to light mode' : 'Switch to dark mode'}">
            ${this._dark ? html`
              <svg class="w-5 h-5" fill="#f59e0b" stroke="#f59e0b" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            ` : html`
              <svg class="w-5 h-5" fill="#1a1a2e" stroke="#1a1a2e" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
            `}
          </button>
        </div>
      </header>
    `;
  }

  /* ─── Sidebar ─── */

  _sidebarNav() {
    const perPage = 36;
    const totalPages = Math.ceil(COMPONENTS.length / perPage);
    const start = this._sidebarPage * perPage;
    const visibleComponents = COMPONENTS.slice(start, start + perPage);

    const link = (id, label) => {
      const active = this.activePage === id;
      return html`
        <a @click="${() => this.navigate(id)}"
          class="px-3 py-2.5 text-[13px] cursor-pointer transition-colors rounded-md text-center truncate"
          style="color: ${active ? 'var(--fg)' : 'var(--fg-muted)'}; font-weight: ${active ? '600' : '400'}; background: ${active ? 'var(--sidebar-active-bg, rgba(0,0,0,0.06))' : 'transparent'}"
        >${label}</a>
      `;
    };

    return html`
      <div class="flex-1 flex flex-col">
        <nav class="p-4 grid grid-cols-3 gap-2.5 content-start flex-1">
          ${this._sidebarPage === 0 ? html`
            ${link('home', 'Introduction')}
            ${link('installation', 'Installation')}
            ${link('layouts', 'Layouts')}
          ` : ''}
          ${visibleComponents.map(comp => link(comp.id, comp.label))}
        </nav>
        ${totalPages > 1 ? html`
          <div class="px-3 pb-3 flex items-center justify-between shrink-0">
          <div class="flex items-center gap-1">
            <button
              @click="${() => { if (this._sidebarPage > 0) this._sidebarPage--; }}"
              class="h-7 w-7 rounded inline-flex items-center justify-center cursor-pointer transition-colors"
              style="color: ${this._sidebarPage === 0 ? 'var(--fg-subtle)' : 'var(--fg-muted)'}; opacity: ${this._sidebarPage === 0 ? '0.4' : '1'}; ${this._sidebarPage === 0 ? 'cursor: default;' : ''}"
              @mouseenter=${(e) => { if (this._sidebarPage > 0) e.currentTarget.style.background = 'var(--bg-muted)'; }}
              @mouseleave=${(e) => e.currentTarget.style.background = 'transparent'}
            ><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg></button>
            <span class="text-xs px-1" style="color: var(--fg-subtle)">${this._sidebarPage + 1}/${totalPages}</span>
            <button
              @click="${() => { if (this._sidebarPage < totalPages - 1) this._sidebarPage++; }}"
              class="h-7 w-7 rounded inline-flex items-center justify-center cursor-pointer transition-colors"
              style="color: ${this._sidebarPage >= totalPages - 1 ? 'var(--fg-subtle)' : 'var(--fg-muted)'}; opacity: ${this._sidebarPage >= totalPages - 1 ? '0.4' : '1'}; ${this._sidebarPage >= totalPages - 1 ? 'cursor: default;' : ''}"
              @mouseenter=${(e) => { if (this._sidebarPage < totalPages - 1) e.currentTarget.style.background = 'var(--bg-muted)'; }}
              @mouseleave=${(e) => e.currentTarget.style.background = 'transparent'}
            ><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg></button>
          </div>
          <button
            @click="${() => { this._viewAllOpen = true; }}"
            class="text-xs font-medium px-2.5 py-1.5 rounded-md cursor-pointer transition-colors"
            style="color: var(--primary); background: transparent;"
            @mouseenter=${(e) => e.currentTarget.style.background = 'var(--bg-muted)'}
            @mouseleave=${(e) => e.currentTarget.style.background = 'transparent'}
          >View All</button>
        </div>
      ` : ''}
      </div>
    `;
  }

  /* ─── View All Dialog ─── */

  _renderViewAllDialog() {
    if (!this._viewAllOpen) return '';

    const link = (id, label) => {
      const active = this.activePage === id;
      return html`
        <a @click="${() => { this.navigate(id); this._viewAllOpen = false; }}"
          class="px-3 py-2.5 text-[13px] cursor-pointer transition-colors rounded-md text-center truncate"
          style="color: ${active ? 'var(--fg)' : 'var(--fg-muted)'}; font-weight: ${active ? '600' : '400'}; background: ${active ? 'var(--sidebar-active-bg, rgba(0,0,0,0.06))' : 'transparent'}; border: 1px solid ${active ? 'var(--primary)' : 'var(--border)'};"
          @mouseenter=${(e) => { if (!active) e.currentTarget.style.background = 'var(--bg-muted)'; }}
          @mouseleave=${(e) => { if (!active) e.currentTarget.style.background = active ? 'var(--sidebar-active-bg, rgba(0,0,0,0.06))' : 'transparent'; }}
        >${label}</a>
      `;
    };

    return html`
      <div class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div class="fixed inset-0" style="background: var(--overlay)" @click="${() => { this._viewAllOpen = false; }}"></div>
        <div class="relative rounded-xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col overflow-hidden" style="background: var(--bg-card); border: 1px solid var(--border);">
          <!-- Header -->
          <div class="flex items-center justify-between px-6 py-4 shrink-0" style="border-bottom: 1px solid var(--border);">
            <div>
              <h2 class="text-lg font-semibold" style="color: var(--fg-heading)">All Components</h2>
              <p class="text-xs mt-0.5" style="color: var(--fg-muted)">${COMPONENTS.length} components available</p>
            </div>
            <button @click="${() => { this._viewAllOpen = false; }}" class="p-1.5 rounded-md cursor-pointer transition-colors" style="color: var(--fg-subtle);"
              @mouseenter=${(e) => e.currentTarget.style.background = 'var(--bg-muted)'}
              @mouseleave=${(e) => e.currentTarget.style.background = 'transparent'}
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
          <!-- Body -->
          <div class="flex-1 overflow-y-auto p-6">
            ${CATEGORIES.map(cat => html`
              <div class="mb-5">
                <h3 class="text-xs font-semibold uppercase tracking-wider mb-2.5 px-1" style="color: var(--fg-subtle)">${cat}</h3>
                <div class="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  ${COMPONENTS.filter(c => c.category === cat).map(c => link(c.id, c.label))}
                </div>
              </div>
            `)}
          </div>
        </div>
      </div>
    `;
  }


  /* ─── Layout ─── */

  render() {
    return html`
      <div class="flex h-screen" style="background: var(--bg); color: var(--fg)">
        <!-- 1: Sidebar — full height left -->
        ${this.sidebarCollapsed ? html`
          <div class="relative w-16 shrink-0 hidden md:flex flex-col items-center select-none" style="border-right: 1px solid var(--border); background: var(--bg)">
            <!-- Branding collapsed -->
            <div class="flex items-center justify-center h-14 w-full shrink-0" style="border-bottom: 1px solid var(--border)">
              <div class="h-9 w-9 rounded-md flex items-center justify-center" style="background: var(--logo-bg)">
                <span class="font-bold text-sm" style="color: var(--logo-fg)">Z</span>
              </div>
            </div>
            <!-- Vertical text centered -->
            <div class="flex-1 flex items-center justify-center cursor-pointer" @click="${() => this.sidebarCollapsed = false}">
              <span class="font-bold text-xs tracking-[0.25em] uppercase" style="writing-mode: vertical-lr; text-orientation: mixed; color: var(--fg-muted);">Component Library</span>
            </div>
            <!-- Circle expand button on the border line -->
            <button @click="${() => this.sidebarCollapsed = false}" class="absolute top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-colors shadow-sm" style="right: -18px; background: var(--bg); border: 1px solid var(--border); color: var(--fg-muted)" title="Expand sidebar">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        ` : html`
          <div class="relative shrink-0 hidden md:block" style="width: clamp(300px, 28%, 420px)">
            <aside class="h-full overflow-y-auto flex flex-col" style="border-right: 1px solid var(--border); background: var(--bg)">
              <!-- Sidebar branding -->
              <div class="flex items-center gap-2 px-4 h-14 shrink-0" style="border-bottom: 1px solid var(--border)">
                <div class="h-7 w-7 rounded-md flex items-center justify-center" style="background: var(--logo-bg)">
                  <span class="font-bold text-xs" style="color: var(--logo-fg)">Z</span>
                </div>
                <span class="font-semibold tracking-tight" style="color: var(--fg)">ZeeLit</span>
              </div>
              <!-- Component grid -->
              ${this._sidebarNav()}
            </aside>
            <!-- Circle collapse button — outside overflow container -->
            <button @click="${() => this.sidebarCollapsed = true}" class="absolute top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-colors shadow-sm" style="right: -18px; background: var(--bg); border: 1px solid var(--border); color: var(--fg-muted)" title="Collapse sidebar">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
            </button>
          </div>
        `}

        <!-- Mobile sidebar overlay -->
        ${this.sidebarOpen ? html`
          <div class="fixed inset-0 z-50 md:hidden">
            <div class="fixed inset-0" style="background: var(--overlay)" @click="${() => this.sidebarOpen = false}"></div>
            <aside class="fixed inset-y-0 left-0 w-80 overflow-y-auto flex flex-col" style="background: var(--bg); border-right: 1px solid var(--border)">
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
              ${this._sidebarNav()}
            </aside>
          </div>
        ` : ''}

        <!-- Right side: 2 (header) + 3 (content) -->
        <div class="flex-1 flex flex-col overflow-hidden">
          <!-- 2: Header — only spans right side -->
          ${this._renderHeader()}

          <!-- 3: Page content -->
          <main class="flex-1 overflow-y-auto">
            <div class="max-w-4xl px-8 py-10 lg:py-14">
              ${this._renderPage()}
            </div>
          </main>
        </div>
      </div>

      <!-- View All Components Dialog -->
      ${this._renderViewAllDialog()}
    `;
  }

  _renderPage() {
    const pageFn = PAGE_MAP[this.activePage] || PAGE_MAP.home;
    return pageFn(this);
  }
}

customElements.define('app-showcase', AppShowcase);

import { html } from 'lit';
import componentSource from '../components/app-data-table.js?raw';
import configSource from '../config/data-table.config.js?raw';
import { paymentsTableConfig, usersTableConfig } from '../config/data-table.config.js';

const TAG = 'app-data-table';
const IMPORT = '@/components/app-data-table.js';
const FILE = 'app-data-table.js';

export function dataTablePage(ctx) {
  const pageExample = [
    "import { LitElement, html, css } from 'lit';",
    "import '" + IMPORT + "';",
    "import { paymentsTableConfig } from '@/config/data-table.config.js';",
    "",
    "class DataTablePage extends LitElement {",
    "  static styles = css`",
    "    :host {",
    "      display: block;",
    "      padding: 1.5rem;",
    "    }",
    "    h1 {",
    "      font-size: 1.5rem;",
    "      font-weight: 700;",
    "      margin: 0 0 1.5rem;",
    "    }",
    "  `;",
    "",
    "  render() {",
    "    return html`",
    "      <h1>Payments</h1>",
    "      <app-data-table .config=${paymentsTableConfig}></app-data-table>",
    "    `;",
    "  }",
    "}",
    "customElements.define('data-table-page', DataTablePage);",
  ].join('\n');

  const indexHtml = [
    '<!DOCTYPE html>',
    '<html lang="en">',
    '<head>',
    '  <meta charset="UTF-8">',
    '  <meta name="viewport" content="width=device-width, initial-scale=1.0">',
    '  <title>Data Table — ZeeLit</title>',
    '  <link rel="stylesheet" href="./styles.css">',
    '  <script type="module" src="./components/app-data-table.js"><\/script>',
    '  <script type="module" src="./config/data-table.config.js"><\/script>',
    '</head>',
    '<body>',
    '',
    '  <!-- Payments Table -->',
    '  <app-data-table id="payments"></app-data-table>',
    '',
    '  <!-- Users Table -->',
    '  <app-data-table id="users"></app-data-table>',
    '',
    '  <script type="module">',
    "    import { paymentsTableConfig, usersTableConfig } from './config/data-table.config.js';",
    "    document.getElementById('payments').config = paymentsTableConfig;",
    "    document.getElementById('users').config = usersTableConfig;",
    '  <\/script>',
    '',
    '</body>',
    '</html>',
  ].join('\n');

  const files = [
    {
      name: 'app-data-table.js',
      path: 'components/app-data-table.js',
      code: componentSource,
    },
    {
      name: 'data-table-page.js',
      path: 'pages/data-table-page.js',
      code: pageExample,
    },
    {
      name: 'index.html',
      path: 'index.html',
      code: indexHtml,
    },
    {
      name: 'data-table.config.js',
      path: 'config/data-table.config.js',
      code: configSource,
    },
  ];

  return html`
    <div class="space-y-8">
      <div>
        <h1 class="text-3xl font-bold tracking-tight" style="color: var(--fg-heading)">Data Table</h1>
        <p class="mt-2" style="color: var(--fg-muted)">A powerful, config-driven data table with sorting, searching, pagination, and row selection.</p>
      </div>
      <div class="h-px" style="background: var(--border)"></div>

      <!-- Payments table -->
      <div class="space-y-3">
        <h2 class="text-xl font-semibold" style="color: var(--fg-heading)">Payments</h2>
        <p class="text-sm" style="color: var(--fg-muted)">A table with search, sort, pagination, and selectable rows.</p>
        ${ctx.renderDemo('DataTable-0',
          html`<app-data-table .config=${paymentsTableConfig}></app-data-table>`,
          `import { paymentsTableConfig } from '@/config/data-table.config.js';

<app-data-table .config=\${paymentsTableConfig}></app-data-table>`,
          { importPath: IMPORT, tagName: TAG }
        )}
      </div>

      <!-- Users table -->
      <div class="space-y-3">
        <h2 class="text-xl font-semibold" style="color: var(--fg-heading)">Users</h2>
        <p class="text-sm" style="color: var(--fg-muted)">A striped table without row selection.</p>
        ${ctx.renderDemo('DataTable-1',
          html`<app-data-table .config=${usersTableConfig}></app-data-table>`,
          `import { usersTableConfig } from '@/config/data-table.config.js';

<app-data-table .config=\${usersTableConfig}></app-data-table>`,
          { importPath: IMPORT, tagName: TAG }
        )}
      </div>

      <!-- File Explorer: source code -->
      <div class="space-y-3">
        <h2 class="text-xl font-semibold" style="color: var(--fg-heading)">Source</h2>
        <p class="text-sm" style="color: var(--fg-muted)">Browse the component and its config file.</p>
        ${ctx.renderFileExplorer('data-table', files)}
      </div>
    </div>
  `;
}

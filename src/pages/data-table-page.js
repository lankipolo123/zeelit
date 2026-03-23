import { html } from 'lit';
import componentSource from '../components/app-data-table.js?raw';
import configSource from '../components/data-table.config.js?raw';
import { paymentsTableConfig, usersTableConfig } from '../components/data-table.config.js';

const TAG = 'app-data-table';
const IMPORT = '@/components/app-data-table.js';
const FILE = 'app-data-table.js';

export function dataTablePage(ctx) {
  const files = [
    {
      name: 'app-data-table.js',
      path: 'components/app-data-table.js',
      code: componentSource,
    },
    {
      name: 'data-table.config.js',
      path: 'components/data-table.config.js',
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
          `import { paymentsTableConfig } from './data-table.config.js';

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
          `import { usersTableConfig } from './data-table.config.js';

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

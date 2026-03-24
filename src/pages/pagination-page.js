import { meta } from '../showcase/component-data.js';
import source from '../components/app-pagination.js?raw';

export function paginationPage(ctx) {
  return ctx.componentPage('Pagination', 'Page navigation with two modes — arrows with go-to-page search (mode 1) or Previous/Next text buttons (mode 2). Supports disabled state.', [
    {
      title: 'Default (Mode 1)',
      description: 'Arrows with page number buttons and go-to-page search.',
      code: `<app-pagination total="10" current="1"></app-pagination>`,
    },
    {
      title: 'Deep Pagination',
      description: 'Ellipses appear when there are many pages.',
      code: `<app-pagination total="20" current="10"></app-pagination>`,
    },
    {
      title: 'Text Mode (Mode 2)',
      description: 'Previous/Next text instead of arrows, no search box.',
      code: `<app-pagination total="15" current="5" mode="2"></app-pagination>`,
    },
    {
      title: 'Short List',
      description: 'Just a few pages — no ellipses needed.',
      code: `<app-pagination total="3" current="2"></app-pagination>`,
    },
    {
      title: 'Disabled',
      description: 'All controls disabled.',
      code: `<app-pagination total="10" current="3" disabled></app-pagination>`,
    },
  ], meta('pagination', source));
}

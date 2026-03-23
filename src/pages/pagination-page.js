import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-pagination.js?raw';

export function paginationPage(ctx) {
  return ctx.componentPage('Pagination', 'Navigation controls for paging through content.', [
    {
      title: 'Default',
      code: `<app-pagination total="10" current="1"></app-pagination>`,
      preview: html`<app-pagination total="10" current="1"></app-pagination>`,
    },
    {
      title: 'Mid-range',
      description: 'When on a middle page, ellipses appear to condense the range.',
      code: `<app-pagination total="20" current="10"></app-pagination>`,
      preview: html`<app-pagination total="20" current="10"></app-pagination>`,
    },
    {
      title: 'Few pages',
      code: `<app-pagination total="3" current="2"></app-pagination>`,
      preview: html`<app-pagination total="3" current="2"></app-pagination>`,
    },
  ], meta('pagination', source));
}

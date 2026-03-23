import { meta } from '../showcase/component-data.js';
import source from '../components/app-pagination.js?raw';

export function paginationPage(ctx) {
  return ctx.componentPage('Pagination', 'Page navigation — set total pages and current page. Use it for tables, search results, blog archives, or any paginated content.', [
    {
      title: 'Search Results',
      description: 'Page 1 of 10 results.',
      code: `<app-pagination total="10" current="1"></app-pagination>`,
    },
    {
      title: 'Blog Archive',
      description: 'Deep pagination with ellipses.',
      code: `<app-pagination total="20" current="10"></app-pagination>`,
    },
    {
      title: 'Short List',
      description: 'Just a few pages — no ellipses needed.',
      code: `<app-pagination total="3" current="2"></app-pagination>`,
    },
  ], meta('pagination', source));
}

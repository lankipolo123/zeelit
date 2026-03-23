import { html } from 'lit';
import source from '../components/app-breadcrumb.js?raw';
import pageSource from './breadcrumb-page.js?raw';

const TAG = 'app-breadcrumb';
const IMPORT = '@/components/app-breadcrumb.js';
const FILE = 'app-breadcrumb.js';

export function breadcrumbPage(ctx) {
  return ctx.componentPage('Breadcrumb', 'Displays the path to the current page using a hierarchy of links.', [
    {
      title: 'Default',
      code: `<app-breadcrumb
  .items='\${JSON.stringify([
    { label: "Home", href: "/" },
    { label: "Components", href: "/components" },
    { label: "Breadcrumb" }
  ])}'
></app-breadcrumb>`,
      preview: html`
        <app-breadcrumb
          .items=${[
            { label: 'Home', href: '/' },
            { label: 'Components', href: '/components' },
            { label: 'Breadcrumb' },
          ]}
        ></app-breadcrumb>
      `,
    },
    {
      title: 'Long Path',
      code: `<app-breadcrumb
  .items='\${JSON.stringify([
    { label: "Home", href: "/" },
    { label: "Docs", href: "/docs" },
    { label: "Components", href: "/components" },
    { label: "Navigation", href: "/navigation" },
    { label: "Breadcrumb" }
  ])}'
></app-breadcrumb>`,
      preview: html`
        <app-breadcrumb
          .items=${[
            { label: 'Home', href: '/' },
            { label: 'Docs', href: '/docs' },
            { label: 'Components', href: '/components' },
            { label: 'Navigation', href: '/navigation' },
            { label: 'Breadcrumb' },
          ]}
        ></app-breadcrumb>
      `,
    },
  ], { source, fileName: FILE, importPath: IMPORT, tagName: TAG, pageSource, pageFileName: 'breadcrumb-page.js' });
}

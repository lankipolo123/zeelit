import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-breadcrumb.js?raw';
import pageSource from './breadcrumb-page.js?raw';

export function breadcrumbPage(ctx) {
  return ctx.componentPage('Breadcrumb', 'Displays the path to the current page using a hierarchy of links.', [
    {
      title: 'Default',
      code: `<app-breadcrumb .items=\${[
  { label: "Home", href: "/" },
  { label: "Components", href: "/components" },
  { label: "Breadcrumb" }
]}></app-breadcrumb>`,
      preview: html`<app-breadcrumb .items=${[{ label: 'Home', href: '/' }, { label: 'Components', href: '/components' }, { label: 'Breadcrumb' }]}></app-breadcrumb>`,
    },
    {
      title: 'Long Path',
      code: `<app-breadcrumb .items=\${[
  { label: "Home", href: "/" },
  { label: "Docs", href: "/docs" },
  { label: "Components", href: "/components" },
  { label: "Breadcrumb" }
]}></app-breadcrumb>`,
      preview: html`<app-breadcrumb .items=${[{ label: 'Home', href: '/' }, { label: 'Docs', href: '/docs' }, { label: 'Components', href: '/components' }, { label: 'Breadcrumb' }]}></app-breadcrumb>`,
    },
  ], meta('breadcrumb', source, pageSource));
}

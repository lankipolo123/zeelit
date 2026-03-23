import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-breadcrumb.js?raw';
import pageSource from './breadcrumb-page.js?raw';

export function breadcrumbPage(ctx) {
  return ctx.componentPage('Breadcrumb', 'A navigation trail — pass your own items array with labels and hrefs. Use it for any page hierarchy.', [
    {
      title: 'Component Docs',
      description: 'Pass items with label and href. Last item has no href (current page).',
      code: `<app-breadcrumb .items=\${[
  { label: "Home", href: "/" },
  { label: "Components", href: "/components" },
  { label: "Breadcrumb" }
]}></app-breadcrumb>`,
      preview: html`<app-breadcrumb .items=${[{ label: 'Home', href: '/' }, { label: 'Components', href: '/components' }, { label: 'Breadcrumb' }]}></app-breadcrumb>`,
    },
    {
      title: 'Dashboard Path',
      description: 'Same component for a deep app path.',
      code: `<app-breadcrumb .items=\${[
  { label: "Dashboard", href: "/dashboard" },
  { label: "Projects", href: "/projects" },
  { label: "ZeeLit", href: "/projects/zeelit" },
  { label: "Settings" }
]}></app-breadcrumb>`,
      preview: html`<app-breadcrumb .items=${[{ label: 'Dashboard', href: '/dashboard' }, { label: 'Projects', href: '/projects' }, { label: 'ZeeLit', href: '/projects/zeelit' }, { label: 'Settings' }]}></app-breadcrumb>`,
    },
  ], { ...meta('breadcrumb', source), pageSource, pageFileName: 'breadcrumb-page.js' });
}

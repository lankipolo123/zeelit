import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-page-content.js?raw';

export function pageContentPage(ctx) {
  return ctx.componentPage('Page Content', 'A simple content area with heading, description, and body. Use as the main content region inside layouts.', [
    {
      title: 'Default',
      description: 'Basic page content with a heading and description.',
      code: `<app-page-content heading="Dashboard" description="Overview of your project metrics and activity.">
  <p>Your page body content goes here.</p>
</app-page-content>`,
      preview: html`
        <app-page-content heading="Dashboard" description="Overview of your project metrics and activity.">
          <p>Your page body content goes here.</p>
        </app-page-content>
      `,
    },
    {
      title: 'Heading Only',
      description: 'Just a heading with body content, no description.',
      code: `<app-page-content heading="Settings">
  <p>Configure your account preferences here.</p>
</app-page-content>`,
      preview: html`
        <app-page-content heading="Settings">
          <p>Configure your account preferences here.</p>
        </app-page-content>
      `,
    },
    {
      title: 'Body Only',
      description: 'No heading or description — just a content container with padding.',
      code: `<app-page-content>
  <p>Plain content without any heading.</p>
</app-page-content>`,
      preview: html`
        <app-page-content>
          <p>Plain content without any heading.</p>
        </app-page-content>
      `,
    },
  ], meta('page-content', source));
}

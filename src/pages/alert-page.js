import { meta } from '../showcase/component-data.js';
import source from '../components/app-alert.js?raw';
import pageSource from './alert-page.js?raw';

export function alertPage(ctx) {
  return ctx.componentPage('Alert', 'A callout for any message — info, success, error, warning. Change the title, description, and variant to fit your use case.', [
    {
      title: 'Update Available',
      code: `<app-alert alertTitle="New update available">Version 2.0 is now available with new components.</app-alert>`,
    },
    {
      title: 'Session Expired',
      description: 'Same component with destructive variant for errors.',
      code: `<app-alert variant="destructive" alertTitle="Session expired">Please log in again to continue.</app-alert>`,
    },
    {
      title: 'Payment Successful',
      description: 'Use it for success messages too.',
      code: `<app-alert alertTitle="Payment received">Your order #1234 has been confirmed.</app-alert>`,
    },
    {
      title: 'Maintenance Notice',
      description: 'Or scheduled downtime — same component, different text.',
      code: `<app-alert alertTitle="Scheduled maintenance">The system will be down on Sunday 2am–4am.</app-alert>`,
    },
  ], { ...meta('alert', source), pageSource, pageFileName: 'alert-page.js' });
}

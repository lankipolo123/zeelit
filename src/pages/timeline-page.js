import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-timeline.js?raw';

export function timelinePage(ctx) {
  return ctx.componentPage('Timeline', 'A vertical timeline for activity feeds, changelogs, or event histories.', [
    {
      title: 'Activity Feed',
      description: 'Show recent events with timestamps.',
      code: `<app-timeline items='[{"time":"2 hours ago","title":"Pushed to main","description":"Merged PR #42 — fix auth bug"},{"time":"5 hours ago","title":"Code review","description":"Approved changes on feature branch"},{"time":"Yesterday","title":"Created branch","description":"Started work on dark mode support"}]'></app-timeline>`,
    },
    {
      title: 'Order Tracking',
      description: 'Track a shipment with colored dots.',
      code: `<app-timeline items='[{"time":"Mar 24","title":"Delivered","description":"Package received","color":"#22c55e"},{"time":"Mar 23","title":"Out for delivery","color":"#22c55e"},{"time":"Mar 22","title":"In transit","color":"#3b82f6"},{"time":"Mar 20","title":"Order placed","color":"#6b7280"}]'></app-timeline>`,
    },
    {
      title: 'Changelog',
      description: 'Version history with no timestamps.',
      code: `<app-timeline items='[{"title":"v2.0.0","description":"Complete redesign with Tailwind"},{"title":"v1.5.0","description":"Added dark mode support"},{"title":"v1.0.0","description":"Initial release"}]'></app-timeline>`,
    },
  ], meta('timeline', source));
}

import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-calendar.js?raw';

export function calendarPage(ctx) {
  return ctx.componentPage('Calendar', 'A date picker calendar grid. Navigate months, select a date. Today is highlighted automatically.', [
    {
      title: 'Default',
      description: 'Shows the current month with today highlighted.',
      code: `<app-calendar></app-calendar>`,
    },
    {
      title: 'Pre-selected Date',
      description: 'Pass a value to pre-select a date.',
      code: `<app-calendar value="2026-03-15"></app-calendar>`,
    },
    {
      title: 'Side by Side',
      description: 'Two calendars for a date range picker pattern.',
      code: `<app-calendar value="2026-03-10"></app-calendar>
<app-calendar value="2026-03-20"></app-calendar>`,
      preview: html`
        <div class="flex flex-wrap gap-4">
          <app-calendar value="2026-03-10"></app-calendar>
          <app-calendar value="2026-03-20"></app-calendar>
        </div>
      `,
    },
  ], meta('calendar', source));
}

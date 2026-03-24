import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-stat.js?raw';

export function statPage(ctx) {
  return ctx.componentPage('Stat', 'A stat card — show a label, value, trend, and description. Use it for dashboards, analytics, or KPI displays.', [
    {
      title: 'With Trend',
      description: 'Show positive or negative trends.',
      code: `<app-stat label="Revenue" value="$45,231" trend="up" trendValue="+20.1%" description="from last month"></app-stat>`,
    },
    {
      title: 'Negative Trend',
      description: 'Red indicator for declining metrics.',
      code: `<app-stat label="Bounce Rate" value="42.5%" trend="down" trendValue="-3.2%" description="from last week"></app-stat>`,
    },
    {
      title: 'Simple Stat',
      description: 'Just a label and value.',
      code: `<app-stat label="Total Users" value="12,485"></app-stat>`,
    },
    {
      title: 'Dashboard Row',
      description: 'Stack them in a grid for a dashboard.',
      code: `<app-stat label="Revenue" value="$45,231" trend="up" trendValue="+20.1%"></app-stat>
<app-stat label="Users" value="+2,350" trend="up" trendValue="+12.5%"></app-stat>
<app-stat label="Orders" value="1,284" trend="down" trendValue="-2.3%"></app-stat>`,
      preview: html`
        <div class="grid grid-cols-3 gap-4">
          <app-stat label="Revenue" value="$45,231" trend="up" trendValue="+20.1%"></app-stat>
          <app-stat label="Users" value="+2,350" trend="up" trendValue="+12.5%"></app-stat>
          <app-stat label="Orders" value="1,284" trend="down" trendValue="-2.3%"></app-stat>
        </div>
      `,
    },
  ], meta('stat', source));
}

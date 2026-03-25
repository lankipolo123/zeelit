import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-searchbar.js?raw';

export function searchbarPage(ctx) {
  return ctx.componentPage(
    'Searchbar',
    'A search input with filterable dropdown results. Accepts an items array and emits events on selection.',
    [
      {
        title: 'Default',
        description: 'Type to filter through items.',
        code: `<app-searchbar
  placeholder="Search components..."
  items='[
    { "id": "button", "label": "Button", "category": "Actions" },
    { "id": "input", "label": "Input", "category": "Forms" },
    { "id": "card", "label": "Card", "category": "Layout" },
    { "id": "dialog", "label": "Dialog", "category": "Overlay" },
    { "id": "avatar", "label": "Avatar", "category": "Data Display" },
    { "id": "alert", "label": "Alert", "category": "Feedback" },
    { "id": "tabs", "label": "Tabs", "category": "Navigation" },
    { "id": "badge", "label": "Badge", "category": "Data Display" }
  ]'
></app-searchbar>`,
      },
      {
        title: 'Custom Placeholder',
        description: 'Use a descriptive placeholder to guide the user.',
        code: `<app-searchbar
  placeholder="Find a page or feature..."
  items='[
    { "id": "home", "label": "Home" },
    { "id": "settings", "label": "Settings" },
    { "id": "profile", "label": "Profile" },
    { "id": "dashboard", "label": "Dashboard" }
  ]'
></app-searchbar>`,
      },
      {
        title: 'With Categories',
        description: 'Items with categories show a tag badge in the dropdown.',
        code: `<app-searchbar
  placeholder="Search by name or category..."
  items='[
    { "id": "select", "label": "Select", "category": "Forms" },
    { "id": "slider", "label": "Slider", "category": "Forms" },
    { "id": "skeleton", "label": "Skeleton", "category": "Feedback" },
    { "id": "sheet", "label": "Sheet", "category": "Overlay" },
    { "id": "stepper", "label": "Stepper", "category": "Navigation" },
    { "id": "stat", "label": "Stat", "category": "Data Display" },
    { "id": "separator", "label": "Separator", "category": "Layout" },
    { "id": "switch-group", "label": "Switch Group", "category": "Forms" }
  ]'
></app-searchbar>`,
      },
    ],
    meta('searchbar', source),
  );
}

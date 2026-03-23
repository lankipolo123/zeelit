import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-radio.js?raw';
import pageSource from './radio-page.js?raw';

export function radioPage(ctx) {
  return ctx.componentPage('Radio Group', 'A single-choice selector — pass your own options array. Use it for settings, preferences, plan selection, or any exclusive choice.', [
    {
      title: 'Theme Preference',
      description: 'Pass options with label and value.',
      code: `<app-radio .options="\${[
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
  { label: 'System', value: 'system' },
]}"></app-radio>`,
      preview: html`<app-radio .options="${[
        { label: 'Light', value: 'light' },
        { label: 'Dark', value: 'dark' },
        { label: 'System', value: 'system' },
      ]}"></app-radio>`,
    },
    {
      title: 'Density Setting',
      description: 'Same component for a different choice. Set value for a default selection.',
      code: `<app-radio value="comfortable" .options="\${[
  { label: 'Compact', value: 'compact' },
  { label: 'Comfortable', value: 'comfortable' },
  { label: 'Spacious', value: 'spacious' },
]}"></app-radio>`,
      preview: html`<app-radio value="comfortable" .options="${[
        { label: 'Compact', value: 'compact' },
        { label: 'Comfortable', value: 'comfortable' },
        { label: 'Spacious', value: 'spacious' },
      ]}"></app-radio>`,
    },
    {
      title: 'Disabled',
      description: 'Lock when the choice is already made.',
      code: `<app-radio disabled value="monthly" .options="\${[
  { label: 'Monthly', value: 'monthly' },
  { label: 'Yearly', value: 'yearly' },
]}"></app-radio>`,
      preview: html`<app-radio disabled value="monthly" .options="${[
        { label: 'Monthly', value: 'monthly' },
        { label: 'Yearly', value: 'yearly' },
      ]}"></app-radio>`,
    },
  ], { ...meta('radio', source), pageSource, pageFileName: 'radio-page.js' });
}

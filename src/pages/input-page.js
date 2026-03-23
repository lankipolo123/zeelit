import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-input.js?raw';
import pageSource from './input-page.js?raw';

export function inputPage(ctx) {
  return ctx.componentPage('Input', 'A form input — set label, placeholder, type, and disabled to match any field in your app.', [
    {
      title: 'Email Field',
      code: `<app-input label="Email" placeholder="name@example.com" type="email"></app-input>`,
      preview: html`<div class="w-80"><app-input label="Email" placeholder="name@example.com" type="email"></app-input></div>`,
    },
    {
      title: 'Password Field',
      description: 'Same component, different type.',
      code: `<app-input label="Password" placeholder="Enter password" type="password"></app-input>`,
      preview: html`<div class="w-80"><app-input label="Password" placeholder="Enter password" type="password"></app-input></div>`,
    },
    {
      title: 'Search Field',
      description: 'Use it for search bars too.',
      code: `<app-input placeholder="Search products..." type="search"></app-input>`,
      preview: html`<div class="w-80"><app-input placeholder="Search products..." type="search"></app-input></div>`,
    },
    {
      title: 'Disabled',
      description: 'Lock a field when editing is not allowed.',
      code: `<app-input label="Username" value="john_doe" disabled></app-input>`,
      preview: html`<div class="w-80"><app-input label="Username" value="john_doe" disabled></app-input></div>`,
    },
  ], { ...meta('input', source), pageSource, pageFileName: 'input-page.js' });
}

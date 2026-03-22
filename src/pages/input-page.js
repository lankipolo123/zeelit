import { html } from 'lit';

export function inputPage(ctx) {
  return ctx.componentPage('Input', 'Displays a form input field.', [
    {
      title: 'Default',
      code: `<app-input placeholder="Enter your email" type="email"></app-input>`,
      preview: html`<div class="w-80"><app-input placeholder="Enter your email" type="email"></app-input></div>`,
    },
    {
      title: 'With Label',
      code: `<app-input label="Email" placeholder="name@example.com" type="email"></app-input>`,
      preview: html`<div class="w-80"><app-input label="Email" placeholder="name@example.com" type="email"></app-input></div>`,
    },
    {
      title: 'Password',
      code: `<app-input label="Password" placeholder="Enter password" type="password"></app-input>`,
      preview: html`<div class="w-80"><app-input label="Password" placeholder="Enter password" type="password"></app-input></div>`,
    },
    {
      title: 'Disabled',
      code: `<app-input label="Username" value="john_doe" disabled></app-input>`,
      preview: html`<div class="w-80"><app-input label="Username" value="john_doe" disabled></app-input></div>`,
    },
  ]);
}

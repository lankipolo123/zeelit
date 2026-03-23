import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-avatar.js?raw';

export function avatarPage(ctx) {
  return ctx.componentPage('Avatar', 'An image element with a fallback for representing the user.', [
    {
      title: 'Profile Avatars',
      code: `<app-avatar src="https://i.imgur.com/uherCAZ.png" alt="Profile"></app-avatar>`,
      preview: html`
        <div class="flex gap-3">
          <app-avatar src="https://i.imgur.com/uherCAZ.png" alt="Profile 1"></app-avatar>
          <app-avatar src="https://i.imgur.com/WqV8GTy.png" alt="Profile 2"></app-avatar>
          <app-avatar src="https://i.imgur.com/kXp4fIF.png" alt="Profile 3"></app-avatar>
        </div>
      `,
    },
    {
      title: 'Fallback Initials',
      code: `<app-avatar fallback="JD"></app-avatar>`,
      preview: html`
        <div class="flex gap-3">
          <app-avatar fallback="JD"></app-avatar>
          <app-avatar fallback="AB"></app-avatar>
          <app-avatar fallback="ZL"></app-avatar>
        </div>
      `,
    },
    {
      title: 'Sizes',
      code: `<app-avatar fallback="SM" size="sm"></app-avatar>
<app-avatar fallback="MD" size="default"></app-avatar>
<app-avatar fallback="LG" size="lg"></app-avatar>`,
      preview: html`
        <div class="flex items-center gap-3">
          <app-avatar fallback="SM" size="sm"></app-avatar>
          <app-avatar fallback="MD" size="default"></app-avatar>
          <app-avatar fallback="LG" size="lg"></app-avatar>
        </div>
      `,
    },
  ], meta('avatar', source));
}

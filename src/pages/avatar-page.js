import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-avatar.js?raw';

export function avatarPage(ctx) {
  return ctx.componentPage('Avatar', 'A user image with fallback — set src for photos, fallback for initials, size to scale. Use it for profiles, comments, team lists, or anywhere you show a user.', [
    {
      title: 'With Photo',
      description: 'Pass any image URL via src.',
      layout: 'flex gap-3',
      code: `<app-avatar src="https://i.imgur.com/uherCAZ.png" alt="Alice"></app-avatar>
<app-avatar src="https://i.imgur.com/WqV8GTy.png" alt="Bob"></app-avatar>
<app-avatar src="https://i.imgur.com/kXp4fIF.png" alt="Carol"></app-avatar>`,
    },
    {
      title: 'With Initials',
      description: 'No photo? Set fallback to show initials instead.',
      layout: 'flex gap-3',
      code: `<app-avatar fallback="JD"></app-avatar>
<app-avatar fallback="AB"></app-avatar>
<app-avatar fallback="ZL"></app-avatar>`,
    },
    {
      title: 'Sizes',
      description: 'Set size to sm, default, or lg.',
      layout: 'flex items-center gap-3',
      code: `<app-avatar fallback="SM" size="sm"></app-avatar>
<app-avatar fallback="MD" size="default"></app-avatar>
<app-avatar fallback="LG" size="lg"></app-avatar>`,
    },
  ], meta('avatar', source));
}

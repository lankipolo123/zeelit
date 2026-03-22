import { html } from 'lit';
import source from '../components/app-avatar.js?raw';

const TAG = 'app-avatar';
const IMPORT = '@/components/app-avatar.js';
const FILE = 'app-avatar.js';

export function avatarPage(ctx) {
  return ctx.componentPage('Avatar', 'An image element with a fallback for representing the user.', [
    {
      title: 'Image Avatar',
      code: `<app-avatar src="https://i.pravatar.cc/80?img=3" alt="User avatar"></app-avatar>`,
      preview: html`
        <div class="flex gap-3">
          <app-avatar src="https://i.pravatar.cc/80?img=3" alt="User avatar"></app-avatar>
        </div>
      `,
    },
    {
      title: 'Fallback Initials',
      code: `<app-avatar fallback="JD"></app-avatar>
<app-avatar fallback="AB"></app-avatar>
<app-avatar fallback="ZL"></app-avatar>`,
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
  ], { source, fileName: FILE, importPath: IMPORT, tagName: TAG });
}

import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-hover-card.js?raw';

export function hoverCardPage(ctx) {
  return ctx.componentPage('Hover Card', 'A preview card on hover — put any content in the trigger and content slots. Use it for user profiles, link previews, or product info.', [
    {
      title: 'User Profile Preview',
      description: 'Hover the link to see a user card.',
      code: `<app-hover-card>
  <a slot="trigger">@zeelit</a>
  <div slot="content">
    <p><strong>ZeeLit UI</strong></p>
    <p>Component library for Lit</p>
  </div>
</app-hover-card>`,
      preview: html`
        <app-hover-card>
          <a slot="trigger" style="color: var(--primary); text-decoration: underline; cursor: pointer;">@zeelit</a>
          <div slot="content">
            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="width: 40px; height: 40px; border-radius: 999px; background: var(--bg-muted); display: flex; align-items: center; justify-content: center;">
                <span style="font-weight: 600; color: var(--fg-muted);">Z</span>
              </div>
              <div>
                <p style="font-weight: 600; color: var(--fg);">ZeeLit UI</p>
                <p style="font-size: 13px; color: var(--fg-muted);">Component library for Lit</p>
              </div>
            </div>
            <p style="margin-top: 8px; font-size: 13px; color: var(--fg-muted);">Building beautiful, accessible web components with Lit and Tailwind CSS.</p>
          </div>
        </app-hover-card>
      `,
    },
  ], meta('hover-card', source));
}

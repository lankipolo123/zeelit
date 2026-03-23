import { html } from 'lit';
import source from '../components/app-hover-card.js?raw';

const TAG = 'app-hover-card';
const IMPORT = '@/components/app-hover-card.js';
const FILE = 'app-hover-card.js';

export function hoverCardPage(ctx) {
  return ctx.componentPage('Hover Card', 'A card that appears on hover, useful for showing preview info.', [
    {
      title: 'User Preview',
      description: 'Hover over the link to see a preview card.',
      code: `<app-hover-card>
  <a slot="trigger" style="color: var(--primary); text-decoration: underline;">@zeelit</a>
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
  ], { source, fileName: FILE, importPath: IMPORT, tagName: TAG });
}

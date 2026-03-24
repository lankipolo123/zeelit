import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-kbd.js?raw';

export function kbdPage(ctx) {
  return ctx.componentPage('Kbd', 'Keyboard shortcut display — pass a key combo string. Use it for shortcut hints, documentation, or command palettes.', [
    {
      title: 'Single Key',
      description: 'A single keystroke.',
      code: `<app-kbd keys="Esc"></app-kbd>`,
    },
    {
      title: 'Key Combinations',
      description: 'Separate keys with + signs.',
      code: `<app-kbd keys="Ctrl+S"></app-kbd>
<app-kbd keys="Cmd+Shift+P"></app-kbd>
<app-kbd keys="Alt+F4"></app-kbd>`,
      preview: html`
        <div class="flex items-center gap-4">
          <app-kbd keys="Ctrl+S"></app-kbd>
          <app-kbd keys="Cmd+Shift+P"></app-kbd>
          <app-kbd keys="Alt+F4"></app-kbd>
        </div>
      `,
    },
    {
      title: 'Sizes',
      description: 'Small, default, and large.',
      code: `<app-kbd keys="Ctrl+Z" size="sm"></app-kbd>
<app-kbd keys="Ctrl+Z" size="default"></app-kbd>
<app-kbd keys="Ctrl+Z" size="lg"></app-kbd>`,
      preview: html`
        <div class="flex items-center gap-4">
          <app-kbd keys="Ctrl+Z" size="sm"></app-kbd>
          <app-kbd keys="Ctrl+Z" size="default"></app-kbd>
          <app-kbd keys="Ctrl+Z" size="lg"></app-kbd>
        </div>
      `,
    },
    {
      title: 'Inline Usage',
      description: 'Use inside text for shortcut hints.',
      code: `<p>Press <app-kbd keys="Ctrl+K"></app-kbd> to open search</p>`,
      preview: html`
        <p class="text-sm" style="color: var(--fg)">Press <app-kbd keys="Ctrl+K"></app-kbd> to open search</p>
      `,
    },
  ], meta('kbd', source));
}

import { html } from 'lit';

export function homePage(ctx) {
  return html`
    <div class="space-y-6">
      <div>
        <h1 class="text-4xl font-bold tracking-tight" style="color: var(--fg-heading)">ZeeLit</h1>
        <p class="mt-2 text-lg" style="color: var(--fg-muted)">Beautifully crafted Lit web components. Styled with Tailwind CSS. Open source.</p>
      </div>
      <div class="h-px" style="background: var(--border)"></div>
      <div class="space-y-4 text-[15px] leading-relaxed" style="color: var(--fg-muted)">
        <p>ZeeLit is a collection of reusable web components built with <strong style="color: var(--fg)">Lit</strong> and styled with <strong style="color: var(--fg)">Tailwind CSS</strong>. Inspired by <strong style="color: var(--fg)">shadcn/ui</strong>, these are not installed from npm — you copy the component source directly into your project and own the code.</p>
        <p>Every component is a standard Web Component. Use them in any framework or vanilla HTML — no React, no Vue required.</p>
      </div>

      <div class="grid sm:grid-cols-2 gap-4 pt-4">
        <div class="rounded-lg p-6 transition-colors" style="border: 1px solid var(--border)">
          <h3 class="font-semibold mb-2" style="color: var(--fg-heading)">Web Standards</h3>
          <p class="text-sm" style="color: var(--fg-muted)">Built on standard Web Components. Works everywhere — any framework or no framework at all.</p>
        </div>
        <div class="rounded-lg p-6 transition-colors" style="border: 1px solid var(--border)">
          <h3 class="font-semibold mb-2" style="color: var(--fg-heading)">Copy & Paste</h3>
          <p class="text-sm" style="color: var(--fg-muted)">Each component is a single file. Copy the source, drop it in your project, customize freely.</p>
        </div>
        <div class="rounded-lg p-6 transition-colors" style="border: 1px solid var(--border)">
          <h3 class="font-semibold mb-2" style="color: var(--fg-heading)">Tailwind CSS</h3>
          <p class="text-sm" style="color: var(--fg-muted)">Styled with utility classes. Customize colors, spacing, and sizing through Tailwind.</p>
        </div>
        <div class="rounded-lg p-6 transition-colors" style="border: 1px solid var(--border)">
          <h3 class="font-semibold mb-2" style="color: var(--fg-heading)">Accessible</h3>
          <p class="text-sm" style="color: var(--fg-muted)">Components follow WAI-ARIA patterns with proper roles, states, and keyboard interactions.</p>
        </div>
      </div>

      <div class="pt-4">
        <app-button @click="${() => ctx.navigate('installation')}">Get Started</app-button>
      </div>
    </div>
  `;
}

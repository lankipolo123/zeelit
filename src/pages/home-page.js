import { html } from 'lit';

export function homePage(ctx) {
  return html`
    <div class="space-y-6">
      <div>
        <h1 class="text-4xl font-bold tracking-tight">ZeeLit</h1>
        <p class="mt-2 text-lg text-zinc-400">Beautifully crafted Lit web components. Styled with Tailwind CSS. Open source.</p>
      </div>
      <div class="h-px bg-zinc-800"></div>
      <div class="space-y-4 text-zinc-300 text-[15px] leading-relaxed">
        <p>ZeeLit is a collection of reusable web components built with <strong class="text-zinc-100">Lit</strong> and styled with <strong class="text-zinc-100">Tailwind CSS</strong>. Inspired by <strong class="text-zinc-100">shadcn/ui</strong>, these are not installed from npm — you copy the component source directly into your project and own the code.</p>
        <p>Every component is a standard Web Component. Use them in any framework or vanilla HTML — no React, no Vue required.</p>
      </div>

      <div class="grid sm:grid-cols-2 gap-4 pt-4">
        <div class="rounded-lg border border-zinc-800 p-6 hover:border-zinc-600 transition-colors">
          <h3 class="font-semibold mb-2">Web Standards</h3>
          <p class="text-sm text-zinc-400">Built on standard Web Components. Works everywhere — any framework or no framework at all.</p>
        </div>
        <div class="rounded-lg border border-zinc-800 p-6 hover:border-zinc-600 transition-colors">
          <h3 class="font-semibold mb-2">Copy & Paste</h3>
          <p class="text-sm text-zinc-400">Each component is a single file. Copy the source, drop it in your project, customize freely.</p>
        </div>
        <div class="rounded-lg border border-zinc-800 p-6 hover:border-zinc-600 transition-colors">
          <h3 class="font-semibold mb-2">Tailwind CSS</h3>
          <p class="text-sm text-zinc-400">Styled with utility classes. Customize colors, spacing, and sizing through Tailwind.</p>
        </div>
        <div class="rounded-lg border border-zinc-800 p-6 hover:border-zinc-600 transition-colors">
          <h3 class="font-semibold mb-2">Accessible</h3>
          <p class="text-sm text-zinc-400">Components follow WAI-ARIA patterns with proper roles, states, and keyboard interactions.</p>
        </div>
      </div>

      <div class="pt-4">
        <app-button @click="${() => ctx.navigate('installation')}">Get Started</app-button>
      </div>
    </div>
  `;
}

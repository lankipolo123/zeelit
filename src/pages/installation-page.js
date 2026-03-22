import { html } from 'lit';

export function installationPage() {
  return html`
    <div class="space-y-6">
      <div>
        <h1 class="text-3xl font-bold tracking-tight">Installation</h1>
        <p class="mt-2 text-zinc-400">How to set up ZeeLit in your project.</p>
      </div>
      <div class="h-px bg-zinc-800"></div>

      <div class="space-y-8 text-[15px]">
        <div>
          <h2 class="text-xl font-semibold mb-3">1. Create a Vite + Lit project</h2>
          <div class="code-block">npm create vite@latest my-app -- --template vanilla
cd my-app
npm install lit</div>
        </div>

        <div>
          <h2 class="text-xl font-semibold mb-3">2. Add Tailwind CSS</h2>
          <div class="code-block">npm install tailwindcss @tailwindcss/vite</div>
          <p class="text-sm text-zinc-400 mt-2">Add the plugin to <code class="text-zinc-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">vite.config.js</code>:</p>
          <div class="code-block mt-2">import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
})</div>
        </div>

        <div>
          <h2 class="text-xl font-semibold mb-3">3. Copy components</h2>
          <p class="text-zinc-300">Browse the components in the sidebar, click <strong class="text-zinc-100">Code</strong> to see the source, and copy them into your project's <code class="text-zinc-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">src/components/</code> directory.</p>
        </div>

        <div>
          <h2 class="text-xl font-semibold mb-3">4. Import and use</h2>
          <div class="code-block">import './components/app-button.js';

// Then use in your HTML or Lit templates:
// &lt;app-button variant="default"&gt;Click me&lt;/app-button&gt;</div>
        </div>
      </div>
    </div>
  `;
}

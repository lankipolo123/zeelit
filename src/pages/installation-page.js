import { html } from 'lit';

export function installationPage() {
  return html`
    <div class="space-y-6">
      <div>
        <h1 class="text-3xl font-bold tracking-tight" style="color: var(--fg-heading)">Installation</h1>
        <p class="mt-2" style="color: var(--fg-muted)">How to set up ZeeLit in your project.</p>
      </div>
      <div class="h-px" style="background: var(--border)"></div>

      <div class="space-y-8 text-[15px]">

        <!-- Step 1 -->
        <div>
          <h2 class="text-xl font-semibold mb-3" style="color: var(--fg-heading)">1. Create a Vite project</h2>
          <p class="text-sm mb-2" style="color: var(--fg-muted)">Scaffold a new project with the vanilla template, then install Lit and Lucide icons.</p>
          <div class="code-block">npm create vite@latest my-app -- --template vanilla
cd my-app
npm install lit lucide</div>
        </div>

        <!-- Step 2 -->
        <div>
          <h2 class="text-xl font-semibold mb-3" style="color: var(--fg-heading)">2. Add Tailwind CSS</h2>
          <div class="code-block">npm install tailwindcss @tailwindcss/vite</div>
          <p class="text-sm mt-3 mb-2" style="color: var(--fg-muted)">
            Update <code class="px-1.5 py-0.5 rounded text-xs" style="color: var(--fg); background: var(--bg-muted)">vite.config.js</code>
            to enable Tailwind and add the <code class="px-1.5 py-0.5 rounded text-xs" style="color: var(--fg); background: var(--bg-muted)">@/</code> path alias:
          </p>
          <div class="code-block">import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  resolve: {
    alias: { '@': '/src' },
  },
})</div>
        </div>

        <!-- Step 3 -->
        <div>
          <h2 class="text-xl font-semibold mb-3" style="color: var(--fg-heading)">3. Set up CSS</h2>
          <p class="text-sm mb-2" style="color: var(--fg-muted)">
            Replace the contents of <code class="px-1.5 py-0.5 rounded text-xs" style="color: var(--fg); background: var(--bg-muted)">src/style.css</code> with the Tailwind import and ZeeLit theme tokens:
          </p>
          <div class="code-block">@import "tailwindcss";

/* ─── ZeeLit theme tokens ─── */
:root {
  --bg: #09090b;
  --bg-card: #18181b;
  --bg-muted: #27272a;
  --fg: #f4f4f5;
  --fg-heading: #f4f4f5;
  --fg-muted: #a1a1aa;
  --fg-subtle: #71717a;
  --border: #27272a;
  --primary: #ffffff;
  --primary-fg: #18181b;
  --destructive: #dc2626;
  --destructive-fg: #ffffff;
  --input: #3f3f46;
  --input-bg: #18181b;
  --accent: #27272a;
  --accent-fg: #f4f4f5;
  --ring: #d4d4d8;
  --logo-bg: #ffffff;
  --logo-fg: #18181b;
  --overlay: rgb(0 0 0 / 0.6);
}

body {
  background-color: var(--bg);
  color: var(--fg);
}</div>
          <p class="text-sm mt-3" style="color: var(--fg-muted)">
            The vanilla Vite template already imports <code class="px-1.5 py-0.5 rounded text-xs" style="color: var(--fg); background: var(--bg-muted)">style.css</code> in
            <code class="px-1.5 py-0.5 rounded text-xs" style="color: var(--fg); background: var(--bg-muted)">src/main.js</code> — no changes needed there.
          </p>
        </div>

        <!-- Step 4 -->
        <div>
          <h2 class="text-xl font-semibold mb-3" style="color: var(--fg-heading)">4. Copy components</h2>
          <p style="color: var(--fg)">
            Browse the components in the sidebar. Click <strong style="color: var(--fg-heading)">Source</strong> to view the full file, then copy it into your project's
            <code class="px-1.5 py-0.5 rounded text-xs" style="color: var(--fg); background: var(--bg-muted)">src/components/</code> directory.
          </p>
          <p class="text-sm mt-2" style="color: var(--fg-muted)">
            Components that show icons also need <code class="px-1.5 py-0.5 rounded text-xs" style="color: var(--fg); background: var(--bg-muted)">src/lib/icons.js</code>
            and <code class="px-1.5 py-0.5 rounded text-xs" style="color: var(--fg); background: var(--bg-muted)">src/components/app-icon.js</code> — copy those too.
          </p>
        </div>

        <!-- Step 5 -->
        <div>
          <h2 class="text-xl font-semibold mb-3" style="color: var(--fg-heading)">5. Import and use</h2>
          <p class="text-sm mb-2" style="color: var(--fg-muted)">Import the component file once, then use its custom element tag anywhere in your HTML or Lit templates.</p>
          <div class="code-block">import '@/components/app-button.js';
import '@/components/app-input.js';

// In your HTML or Lit render():
// &lt;app-button variant="default"&gt;Click me&lt;/app-button&gt;
// &lt;app-input label="Email" placeholder="you@example.com"&gt;&lt;/app-input&gt;</div>
        </div>

        <!-- Step 6: plain HTML -->
        <div>
          <h2 class="text-xl font-semibold mb-3" style="color: var(--fg-heading)">Using without a bundler</h2>
          <p class="text-sm mb-2" style="color: var(--fg-muted)">You can also load components directly in a plain HTML file using script tags — no build step required.</p>
          <div class="code-block">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;link rel="stylesheet" href="./style.css"&gt;
  &lt;script type="module" src="./components/app-button.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;app-button variant="default"&gt;Hello ZeeLit&lt;/app-button&gt;
&lt;/body&gt;
&lt;/html&gt;</div>
        </div>

      </div>
    </div>
  `;
}

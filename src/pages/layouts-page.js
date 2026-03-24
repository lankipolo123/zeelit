import { html } from 'lit';

export function layoutsPage(ctx) {
  return html`
    <div class="space-y-6">
      <div>
        <h1 class="text-3xl font-bold tracking-tight" style="color: var(--fg-heading)">Layouts</h1>
        <p class="mt-2" style="color: var(--fg-muted)">Pre-built layout compositions using ZeeLit components. Copy and adapt for your projects.</p>
      </div>
      <div class="h-px" style="background: var(--border)"></div>
      <div class="rounded-lg p-12 text-center" style="border: 1px dashed var(--border)">
        <p class="text-sm" style="color: var(--fg-subtle)">Layouts coming soon.</p>
      </div>
    </div>
  `;
}

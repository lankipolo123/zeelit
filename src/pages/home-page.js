import { html } from 'lit';

export function homePage(ctx) {
  return html`
    <div class="space-y-16">

      <!-- Hero -->
      <div class="space-y-6 pt-4">
        <div class="space-y-3">
          <h1 class="text-4xl sm:text-5xl font-bold tracking-tight" style="color: var(--fg-heading)">ZeeLit</h1>
          <p class="text-lg sm:text-xl leading-relaxed max-w-2xl" style="color: var(--fg-muted)">
            Beautifully crafted Lit web components. Styled with Tailwind CSS. Open source.
          </p>
        </div>
        <p class="leading-relaxed max-w-2xl" style="color: var(--fg-muted)">
          Copy &amp; paste components built on Web Standards. Works everywhere — any framework or vanilla HTML. Inspired by <strong style="color: var(--fg)">shadcn/ui</strong>.
        </p>
        <div class="flex gap-3 pt-2">
          <app-button @click="${() => ctx.navigate('installation')}">Get Started</app-button>
          <app-button variant="outline" @click="${() => ctx.navigate('button')}">Browse Components</app-button>
        </div>
      </div>

      <div class="h-px" style="background: var(--border)"></div>

      <!-- Features -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold tracking-tight" style="color: var(--fg-heading)">Why ZeeLit</h2>
        <div class="grid sm:grid-cols-2 gap-4">
          ${featureCard('Web Standards', 'Built on native Web Components. Works in any framework — React, Vue, Svelte, or plain HTML.', svgGlobe())}
          ${featureCard('Copy & Paste', 'Each component is a single file. Copy the source into your project and own the code.', svgCopy())}
          ${featureCard('Tailwind CSS', 'Styled with utility classes. Customize colors, spacing, and sizing through Tailwind.', svgPalette())}
          ${featureCard('Accessible', 'WAI-ARIA patterns with proper roles, keyboard navigation, and focus management.', svgAccessible())}
        </div>
      </div>

      <div class="h-px" style="background: var(--border)"></div>

      <!-- Examples showcase -->
      <div class="space-y-6">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-2xl font-semibold tracking-tight" style="color: var(--fg-heading)">Examples</h2>
            <p class="text-sm mt-1" style="color: var(--fg-muted)">Pre-built layouts you can copy and adapt. See all on the <a class="cursor-pointer underline underline-offset-4" style="color: var(--primary)" @click="${() => ctx.navigate('layouts')}">Layouts</a> page.</p>
          </div>
        </div>

        <!-- Login example -->
        <div class="rounded-lg overflow-hidden" style="border: 1px solid var(--border)">
          <div class="px-4 py-3 flex items-center justify-between" style="border-bottom: 1px solid var(--border); background: var(--bg-card)">
            <div>
              <span class="text-sm font-medium" style="color: var(--fg-heading)">Login</span>
              <span class="text-xs ml-2" style="color: var(--fg-subtle)">Card + Input + Checkbox + Button</span>
            </div>
            <a class="text-xs cursor-pointer" style="color: var(--primary)" @click="${() => ctx.navigate('layouts')}">View source</a>
          </div>
          <div class="p-8 flex items-center justify-center min-h-[380px]" style="background: var(--bg-preview)">
            <app-card style="width: 100%; max-width: 380px;">
              <div class="space-y-5">
                <div class="text-center space-y-1">
                  <h3 class="text-xl font-semibold" style="color: var(--fg-heading)">Sign in</h3>
                  <p class="text-sm" style="color: var(--fg-muted)">Enter your credentials to continue</p>
                </div>
                <div class="space-y-3">
                  <app-input label="Email" placeholder="you@example.com" type="email"></app-input>
                  <app-input label="Password" placeholder="••••••••" type="password"></app-input>
                </div>
                <div class="flex items-center justify-between">
                  <app-checkbox label="Remember me"></app-checkbox>
                  <a class="text-xs cursor-pointer" style="color: var(--primary)">Forgot password?</a>
                </div>
                <app-button style="width: 100%;">Sign In</app-button>
                <p class="text-center text-xs" style="color: var(--fg-muted)">Don't have an account? <a class="cursor-pointer" style="color: var(--primary)">Sign up</a></p>
              </div>
            </app-card>
          </div>
        </div>

        <!-- Dashboard example -->
        <div class="rounded-lg overflow-hidden" style="border: 1px solid var(--border)">
          <div class="px-4 py-3 flex items-center justify-between" style="border-bottom: 1px solid var(--border); background: var(--bg-card)">
            <div>
              <span class="text-sm font-medium" style="color: var(--fg-heading)">Dashboard</span>
              <span class="text-xs ml-2" style="color: var(--fg-subtle)">Card + Badge + Avatar + Separator + Button</span>
            </div>
            <a class="text-xs cursor-pointer" style="color: var(--primary)" @click="${() => ctx.navigate('layouts')}">View source</a>
          </div>
          <div class="p-8" style="background: var(--bg-preview)">
            <div class="space-y-6">
              <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <app-card><div><p class="text-xs font-medium uppercase tracking-wider" style="color: var(--fg-muted)">Revenue</p><p class="text-2xl font-bold mt-1" style="color: var(--fg-heading)">$45,231</p><p class="text-xs mt-1" style="color: #22c55e;">+20.1%</p></div></app-card>
                <app-card><div><p class="text-xs font-medium uppercase tracking-wider" style="color: var(--fg-muted)">Users</p><p class="text-2xl font-bold mt-1" style="color: var(--fg-heading)">+2,350</p><p class="text-xs mt-1" style="color: #22c55e;">+12.5%</p></div></app-card>
                <app-card><div><p class="text-xs font-medium uppercase tracking-wider" style="color: var(--fg-muted)">Sales</p><p class="text-2xl font-bold mt-1" style="color: var(--fg-heading)">+12,234</p><p class="text-xs mt-1" style="color: #22c55e;">+8.2%</p></div></app-card>
                <app-card><div><p class="text-xs font-medium uppercase tracking-wider" style="color: var(--fg-muted)">Active Now</p><p class="text-2xl font-bold mt-1" style="color: var(--fg-heading)">+573</p><p class="text-xs mt-1" style="color: #22c55e;">+4.1%</p></div></app-card>
              </div>
              <app-card>
                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <h3 class="font-semibold" style="color: var(--fg-heading)">Recent Activity</h3>
                    <app-button variant="outline" size="sm">View All</app-button>
                  </div>
                  <app-separator></app-separator>
                  <div class="space-y-4">
                    <div class="flex items-center gap-3"><app-avatar fallback="OL" size="sm"></app-avatar><div class="flex-1 min-w-0"><p class="text-sm font-medium truncate" style="color: var(--fg)">Olivia Lee</p><p class="text-xs" style="color: var(--fg-muted)">Deployed to production</p></div><app-badge variant="default">Deploy</app-badge></div>
                    <div class="flex items-center gap-3"><app-avatar fallback="JW" size="sm"></app-avatar><div class="flex-1 min-w-0"><p class="text-sm font-medium truncate" style="color: var(--fg)">James Wilson</p><p class="text-xs" style="color: var(--fg-muted)">Merged pull request #42</p></div><app-badge variant="secondary">Merge</app-badge></div>
                    <div class="flex items-center gap-3"><app-avatar fallback="SK" size="sm"></app-avatar><div class="flex-1 min-w-0"><p class="text-sm font-medium truncate" style="color: var(--fg)">Sarah Kim</p><p class="text-xs" style="color: var(--fg-muted)">Opened issue: Fix auth flow</p></div><app-badge variant="destructive">Bug</app-badge></div>
                  </div>
                </div>
              </app-card>
            </div>
          </div>
        </div>

        <!-- Pricing example -->
        <div class="rounded-lg overflow-hidden" style="border: 1px solid var(--border)">
          <div class="px-4 py-3 flex items-center justify-between" style="border-bottom: 1px solid var(--border); background: var(--bg-card)">
            <div>
              <span class="text-sm font-medium" style="color: var(--fg-heading)">Pricing</span>
              <span class="text-xs ml-2" style="color: var(--fg-subtle)">Card + Badge + Button + Separator</span>
            </div>
            <a class="text-xs cursor-pointer" style="color: var(--primary)" @click="${() => ctx.navigate('layouts')}">View source</a>
          </div>
          <div class="p-8" style="background: var(--bg-preview)">
            <div class="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
              <app-card>
                <div class="space-y-4 text-center">
                  <h3 class="font-semibold" style="color: var(--fg-heading)">Free</h3>
                  <div><span class="text-3xl font-bold" style="color: var(--fg-heading)">$0</span><span class="text-sm" style="color: var(--fg-muted)">/month</span></div>
                  <app-separator></app-separator>
                  <ul class="space-y-2 text-sm text-left" style="color: var(--fg-muted)"><li>5 projects</li><li>1 GB storage</li><li>Community support</li></ul>
                  <app-button variant="outline" style="width: 100%;">Get Started</app-button>
                </div>
              </app-card>
              <app-card>
                <div class="space-y-4 text-center">
                  <div class="flex items-center justify-center gap-2"><h3 class="font-semibold" style="color: var(--fg-heading)">Pro</h3><app-badge>Popular</app-badge></div>
                  <div><span class="text-3xl font-bold" style="color: var(--fg-heading)">$19</span><span class="text-sm" style="color: var(--fg-muted)">/month</span></div>
                  <app-separator></app-separator>
                  <ul class="space-y-2 text-sm text-left" style="color: var(--fg-muted)"><li>Unlimited projects</li><li>50 GB storage</li><li>Priority support</li></ul>
                  <app-button style="width: 100%;">Upgrade</app-button>
                </div>
              </app-card>
              <app-card>
                <div class="space-y-4 text-center">
                  <h3 class="font-semibold" style="color: var(--fg-heading)">Enterprise</h3>
                  <div><span class="text-3xl font-bold" style="color: var(--fg-heading)">$99</span><span class="text-sm" style="color: var(--fg-muted)">/month</span></div>
                  <app-separator></app-separator>
                  <ul class="space-y-2 text-sm text-left" style="color: var(--fg-muted)"><li>Everything in Pro</li><li>Unlimited storage</li><li>Dedicated support</li></ul>
                  <app-button variant="outline" style="width: 100%;">Contact Sales</app-button>
                </div>
              </app-card>
            </div>
          </div>
        </div>
      </div>

      <div class="h-px" style="background: var(--border)"></div>

      <!-- CTA -->
      <div class="text-center space-y-4 pb-8">
        <h2 class="text-2xl font-semibold tracking-tight" style="color: var(--fg-heading)">Ready to build?</h2>
        <p style="color: var(--fg-muted)">Start using ZeeLit components in your project today.</p>
        <div class="flex gap-3 justify-center">
          <app-button @click="${() => ctx.navigate('installation')}">Get Started</app-button>
          <app-button variant="outline" @click="${() => ctx.navigate('layouts')}">View All Layouts</app-button>
        </div>
      </div>
    </div>
  `;
}

function featureCard(title, desc, icon) {
  return html`
    <div class="rounded-lg p-5 space-y-3 transition-colors" style="border: 1px solid var(--border); background: var(--bg-card)">
      <div class="w-9 h-9 rounded-md flex items-center justify-center" style="background: var(--bg-muted)">
        ${icon}
      </div>
      <h3 class="font-semibold text-sm" style="color: var(--fg-heading)">${title}</h3>
      <p class="text-sm leading-relaxed" style="color: var(--fg-muted)">${desc}</p>
    </div>
  `;
}

function svgGlobe() {
  return html`<svg class="w-4.5 h-4.5" style="color: var(--fg-subtle)" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`;
}

function svgCopy() {
  return html`<svg class="w-4.5 h-4.5" style="color: var(--fg-subtle)" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>`;
}

function svgPalette() {
  return html`<svg class="w-4.5 h-4.5" style="color: var(--fg-subtle)" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.04-.23-.29-.38-.63-.38-1.02 0-.83.67-1.5 1.5-1.5H16c3.31 0 6-2.69 6-6 0-5.52-4.48-9.96-10-9.94z"/><circle cx="7.5" cy="11.5" r="1.5"/><circle cx="10.5" cy="7.5" r="1.5"/><circle cx="16.5" cy="7.5" r="1.5"/><circle cx="19.5" cy="11.5" r="1.5"/></svg>`;
}

function svgAccessible() {
  return html`<svg class="w-4.5 h-4.5" style="color: var(--fg-subtle)" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="8" r="1.5" fill="currentColor"/><path d="M12 11v5M9 22l3-6 3 6M8 13h8"/></svg>`;
}

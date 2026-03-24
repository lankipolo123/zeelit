import { html } from 'lit';

/* ─── Layout data ─── */

const LAYOUTS = [
  {
    title: 'Login',
    components: 'Card + Input + Checkbox + Button',
    imports: ['app-card', 'app-input', 'app-checkbox', 'app-button'],
    code: `<app-card style="width: 100%; max-width: 380px;">
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
</app-card>`,
    preview: () => html`
      <div class="flex items-center justify-center min-h-[420px]">
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
    `,
  },
  {
    title: 'Settings',
    components: 'Card + Tabs + Toggle + Select + Input + Separator + Button',
    imports: ['app-card', 'app-tabs', 'app-toggle', 'app-select', 'app-input', 'app-separator', 'app-button'],
    code: `<div style="max-width: 560px; margin: 0 auto;">
  <app-card>
    <div class="space-y-5">
      <div>
        <h3 class="text-lg font-semibold" style="color: var(--fg-heading)">Account Settings</h3>
        <p class="text-sm" style="color: var(--fg-muted)">Manage your preferences</p>
      </div>
      <app-separator></app-separator>
      <app-tabs .tabs=\${[
        { id: 'general', label: 'General' },
        { id: 'notifications', label: 'Notifications' },
        { id: 'security', label: 'Security' },
      ]} active="general"></app-tabs>
      <div class="space-y-4">
        <app-input label="Display Name" placeholder="Your name" value="John Doe"></app-input>
        <app-select label="Language" .options=\${[
          { value: 'en', label: 'English' },
          { value: 'es', label: 'Spanish' },
          { value: 'fr', label: 'French' },
        ]} value="en"></app-select>
        <app-select label="Timezone" .options=\${[
          { value: 'utc', label: 'UTC' },
          { value: 'est', label: 'EST' },
          { value: 'pst', label: 'PST' },
        ]} value="utc"></app-select>
      </div>
      <app-separator></app-separator>
      <div class="space-y-3">
        <app-toggle label="Email notifications" checked></app-toggle>
        <app-toggle label="Push notifications"></app-toggle>
        <app-toggle label="Marketing emails"></app-toggle>
      </div>
      <app-separator></app-separator>
      <div class="flex gap-3 justify-end">
        <app-button variant="outline">Cancel</app-button>
        <app-button>Save Changes</app-button>
      </div>
    </div>
  </app-card>
</div>`,
    preview: () => html`
      <div style="max-width: 560px; margin: 0 auto;">
        <app-card>
          <div class="space-y-5">
            <div>
              <h3 class="text-lg font-semibold" style="color: var(--fg-heading)">Account Settings</h3>
              <p class="text-sm" style="color: var(--fg-muted)">Manage your preferences</p>
            </div>
            <app-separator></app-separator>
            <app-tabs .tabs=${[
              { id: 'general', label: 'General' },
              { id: 'notifications', label: 'Notifications' },
              { id: 'security', label: 'Security' },
            ]} active="general"></app-tabs>
            <div class="space-y-4">
              <app-input label="Display Name" placeholder="Your name" value="John Doe"></app-input>
              <app-select label="Language" .options=${[
                { value: 'en', label: 'English' },
                { value: 'es', label: 'Spanish' },
                { value: 'fr', label: 'French' },
              ]} value="en"></app-select>
              <app-select label="Timezone" .options=${[
                { value: 'utc', label: 'UTC' },
                { value: 'est', label: 'EST' },
                { value: 'pst', label: 'PST' },
              ]} value="utc"></app-select>
            </div>
            <app-separator></app-separator>
            <div class="space-y-3">
              <app-toggle label="Email notifications" checked></app-toggle>
              <app-toggle label="Push notifications"></app-toggle>
              <app-toggle label="Marketing emails"></app-toggle>
            </div>
            <app-separator></app-separator>
            <div class="flex gap-3 justify-end">
              <app-button variant="outline">Cancel</app-button>
              <app-button>Save Changes</app-button>
            </div>
          </div>
        </app-card>
      </div>
    `,
  },
  {
    title: 'Profile Card',
    components: 'Card + Avatar + Badge + Button + Separator + Progress',
    imports: ['app-card', 'app-avatar', 'app-badge', 'app-button', 'app-separator', 'app-progress'],
    code: `<app-card style="width: 100%; max-width: 380px;">
  <div class="space-y-4">
    <div class="flex items-center gap-4">
      <app-avatar fallback="JD" size="lg"></app-avatar>
      <div class="flex-1">
        <div class="flex items-center gap-2">
          <h3 class="font-semibold" style="color: var(--fg-heading)">Jane Doe</h3>
          <app-badge variant="secondary">Pro</app-badge>
        </div>
        <p class="text-sm" style="color: var(--fg-muted)">jane@example.com</p>
      </div>
    </div>
    <app-separator></app-separator>
    <div class="space-y-2">
      <div class="flex items-center justify-between text-sm">
        <span style="color: var(--fg-muted)">Storage used</span>
        <span style="color: var(--fg)">7.2 GB / 10 GB</span>
      </div>
      <app-progress value="72"></app-progress>
    </div>
    <div class="grid grid-cols-3 gap-3 text-center">
      <div class="rounded-md py-2" style="background: var(--bg-muted)">
        <div class="text-lg font-semibold" style="color: var(--fg-heading)">128</div>
        <div class="text-xs" style="color: var(--fg-muted)">Projects</div>
      </div>
      <div class="rounded-md py-2" style="background: var(--bg-muted)">
        <div class="text-lg font-semibold" style="color: var(--fg-heading)">14k</div>
        <div class="text-xs" style="color: var(--fg-muted)">Followers</div>
      </div>
      <div class="rounded-md py-2" style="background: var(--bg-muted)">
        <div class="text-lg font-semibold" style="color: var(--fg-heading)">98%</div>
        <div class="text-xs" style="color: var(--fg-muted)">Uptime</div>
      </div>
    </div>
    <div class="flex gap-3">
      <app-button style="flex: 1;">Follow</app-button>
      <app-button variant="outline" style="flex: 1;">Message</app-button>
    </div>
  </div>
</app-card>`,
    preview: () => html`
      <div class="flex items-center justify-center min-h-[360px]">
        <app-card style="width: 100%; max-width: 380px;">
          <div class="space-y-4">
            <div class="flex items-center gap-4">
              <app-avatar fallback="JD" size="lg"></app-avatar>
              <div class="flex-1">
                <div class="flex items-center gap-2">
                  <h3 class="font-semibold" style="color: var(--fg-heading)">Jane Doe</h3>
                  <app-badge variant="secondary">Pro</app-badge>
                </div>
                <p class="text-sm" style="color: var(--fg-muted)">jane@example.com</p>
              </div>
            </div>
            <app-separator></app-separator>
            <div class="space-y-2">
              <div class="flex items-center justify-between text-sm">
                <span style="color: var(--fg-muted)">Storage used</span>
                <span style="color: var(--fg)">7.2 GB / 10 GB</span>
              </div>
              <app-progress value="72"></app-progress>
            </div>
            <div class="grid grid-cols-3 gap-3 text-center">
              <div class="rounded-md py-2" style="background: var(--bg-muted)"><div class="text-lg font-semibold" style="color: var(--fg-heading)">128</div><div class="text-xs" style="color: var(--fg-muted)">Projects</div></div>
              <div class="rounded-md py-2" style="background: var(--bg-muted)"><div class="text-lg font-semibold" style="color: var(--fg-heading)">14k</div><div class="text-xs" style="color: var(--fg-muted)">Followers</div></div>
              <div class="rounded-md py-2" style="background: var(--bg-muted)"><div class="text-lg font-semibold" style="color: var(--fg-heading)">98%</div><div class="text-xs" style="color: var(--fg-muted)">Uptime</div></div>
            </div>
            <div class="flex gap-3">
              <app-button style="flex: 1;">Follow</app-button>
              <app-button variant="outline" style="flex: 1;">Message</app-button>
            </div>
          </div>
        </app-card>
      </div>
    `,
  },
  {
    title: 'Dashboard',
    components: 'Card + Badge + Avatar + Progress + Separator + Button',
    imports: ['app-card', 'app-badge', 'app-avatar', 'app-progress', 'app-separator', 'app-button'],
    code: `<div class="space-y-6">
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
    <app-card>
      <div>
        <p class="text-xs font-medium uppercase tracking-wider" style="color: var(--fg-muted)">Revenue</p>
        <p class="text-2xl font-bold mt-1" style="color: var(--fg-heading)">$45,231</p>
        <p class="text-xs mt-1" style="color: #22c55e;">+20.1% from last month</p>
      </div>
    </app-card>
    <app-card>
      <div>
        <p class="text-xs font-medium uppercase tracking-wider" style="color: var(--fg-muted)">Users</p>
        <p class="text-2xl font-bold mt-1" style="color: var(--fg-heading)">+2,350</p>
        <p class="text-xs mt-1" style="color: #22c55e;">+12.5% from last month</p>
      </div>
    </app-card>
    <app-card>
      <div>
        <p class="text-xs font-medium uppercase tracking-wider" style="color: var(--fg-muted)">Sales</p>
        <p class="text-2xl font-bold mt-1" style="color: var(--fg-heading)">+12,234</p>
        <p class="text-xs mt-1" style="color: #22c55e;">+8.2% from last month</p>
      </div>
    </app-card>
    <app-card>
      <div>
        <p class="text-xs font-medium uppercase tracking-wider" style="color: var(--fg-muted)">Active Now</p>
        <p class="text-2xl font-bold mt-1" style="color: var(--fg-heading)">+573</p>
        <p class="text-xs mt-1" style="color: #22c55e;">+4.1% from last hour</p>
      </div>
    </app-card>
  </div>
  <app-card>
    <div class="space-y-4">
      <div class="flex items-center justify-between">
        <h3 class="font-semibold" style="color: var(--fg-heading)">Recent Activity</h3>
        <app-button variant="outline" size="sm">View All</app-button>
      </div>
      <app-separator></app-separator>
      <div class="space-y-4">
        <div class="flex items-center gap-3">
          <app-avatar fallback="OL" size="sm"></app-avatar>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium truncate" style="color: var(--fg)">Olivia Lee</p>
            <p class="text-xs" style="color: var(--fg-muted)">Deployed to production</p>
          </div>
          <app-badge variant="default">Deploy</app-badge>
        </div>
        <div class="flex items-center gap-3">
          <app-avatar fallback="JW" size="sm"></app-avatar>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium truncate" style="color: var(--fg)">James Wilson</p>
            <p class="text-xs" style="color: var(--fg-muted)">Merged pull request #42</p>
          </div>
          <app-badge variant="secondary">Merge</app-badge>
        </div>
        <div class="flex items-center gap-3">
          <app-avatar fallback="SK" size="sm"></app-avatar>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium truncate" style="color: var(--fg)">Sarah Kim</p>
            <p class="text-xs" style="color: var(--fg-muted)">Opened issue: Fix auth flow</p>
          </div>
          <app-badge variant="destructive">Bug</app-badge>
        </div>
      </div>
    </div>
  </app-card>
</div>`,
    preview: () => html`
      <div class="space-y-6">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <app-card><div><p class="text-xs font-medium uppercase tracking-wider" style="color: var(--fg-muted)">Revenue</p><p class="text-2xl font-bold mt-1" style="color: var(--fg-heading)">$45,231</p><p class="text-xs mt-1" style="color: #22c55e;">+20.1%</p></div></app-card>
          <app-card><div><p class="text-xs font-medium uppercase tracking-wider" style="color: var(--fg-muted)">Users</p><p class="text-2xl font-bold mt-1" style="color: var(--fg-heading)">+2,350</p><p class="text-xs mt-1" style="color: #22c55e;">+12.5%</p></div></app-card>
          <app-card><div><p class="text-xs font-medium uppercase tracking-wider" style="color: var(--fg-muted)">Sales</p><p class="text-2xl font-bold mt-1" style="color: var(--fg-heading)">+12,234</p><p class="text-xs mt-1" style="color: #22c55e;">+8.2%</p></div></app-card>
          <app-card><div><p class="text-xs font-medium uppercase tracking-wider" style="color: var(--fg-muted)">Active Now</p><p class="text-2xl font-bold mt-1" style="color: var(--fg-heading)">+573</p><p class="text-xs mt-1" style="color: #22c55e;">+4.1%</p></div></app-card>
        </div>
        <app-card>
          <div class="space-y-4">
            <div class="flex items-center justify-between"><h3 class="font-semibold" style="color: var(--fg-heading)">Recent Activity</h3><app-button variant="outline" size="sm">View All</app-button></div>
            <app-separator></app-separator>
            <div class="space-y-4">
              <div class="flex items-center gap-3"><app-avatar fallback="OL" size="sm"></app-avatar><div class="flex-1 min-w-0"><p class="text-sm font-medium truncate" style="color: var(--fg)">Olivia Lee</p><p class="text-xs" style="color: var(--fg-muted)">Deployed to production</p></div><app-badge variant="default">Deploy</app-badge></div>
              <div class="flex items-center gap-3"><app-avatar fallback="JW" size="sm"></app-avatar><div class="flex-1 min-w-0"><p class="text-sm font-medium truncate" style="color: var(--fg)">James Wilson</p><p class="text-xs" style="color: var(--fg-muted)">Merged pull request #42</p></div><app-badge variant="secondary">Merge</app-badge></div>
              <div class="flex items-center gap-3"><app-avatar fallback="SK" size="sm"></app-avatar><div class="flex-1 min-w-0"><p class="text-sm font-medium truncate" style="color: var(--fg)">Sarah Kim</p><p class="text-xs" style="color: var(--fg-muted)">Opened issue: Fix auth flow</p></div><app-badge variant="destructive">Bug</app-badge></div>
            </div>
          </div>
        </app-card>
      </div>
    `,
  },
  {
    title: 'Pricing',
    components: 'Card + Badge + Button + Separator',
    imports: ['app-card', 'app-badge', 'app-button', 'app-separator'],
    code: `<div class="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
  <app-card>
    <div class="space-y-4 text-center">
      <h3 class="font-semibold" style="color: var(--fg-heading)">Free</h3>
      <div>
        <span class="text-3xl font-bold" style="color: var(--fg-heading)">$0</span>
        <span class="text-sm" style="color: var(--fg-muted)">/month</span>
      </div>
      <app-separator></app-separator>
      <ul class="space-y-2 text-sm text-left" style="color: var(--fg-muted)">
        <li>5 projects</li>
        <li>1 GB storage</li>
        <li>Community support</li>
      </ul>
      <app-button variant="outline" style="width: 100%;">Get Started</app-button>
    </div>
  </app-card>
  <app-card>
    <div class="space-y-4 text-center">
      <div class="flex items-center justify-center gap-2">
        <h3 class="font-semibold" style="color: var(--fg-heading)">Pro</h3>
        <app-badge>Popular</app-badge>
      </div>
      <div>
        <span class="text-3xl font-bold" style="color: var(--fg-heading)">$19</span>
        <span class="text-sm" style="color: var(--fg-muted)">/month</span>
      </div>
      <app-separator></app-separator>
      <ul class="space-y-2 text-sm text-left" style="color: var(--fg-muted)">
        <li>Unlimited projects</li>
        <li>50 GB storage</li>
        <li>Priority support</li>
      </ul>
      <app-button style="width: 100%;">Upgrade</app-button>
    </div>
  </app-card>
  <app-card>
    <div class="space-y-4 text-center">
      <h3 class="font-semibold" style="color: var(--fg-heading)">Enterprise</h3>
      <div>
        <span class="text-3xl font-bold" style="color: var(--fg-heading)">$99</span>
        <span class="text-sm" style="color: var(--fg-muted)">/month</span>
      </div>
      <app-separator></app-separator>
      <ul class="space-y-2 text-sm text-left" style="color: var(--fg-muted)">
        <li>Everything in Pro</li>
        <li>Unlimited storage</li>
        <li>Dedicated support</li>
      </ul>
      <app-button variant="outline" style="width: 100%;">Contact Sales</app-button>
    </div>
  </app-card>
</div>`,
    preview: () => html`
      <div class="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
        <app-card><div class="space-y-4 text-center"><h3 class="font-semibold" style="color: var(--fg-heading)">Free</h3><div><span class="text-3xl font-bold" style="color: var(--fg-heading)">$0</span><span class="text-sm" style="color: var(--fg-muted)">/month</span></div><app-separator></app-separator><ul class="space-y-2 text-sm text-left" style="color: var(--fg-muted)"><li>5 projects</li><li>1 GB storage</li><li>Community support</li></ul><app-button variant="outline" style="width: 100%;">Get Started</app-button></div></app-card>
        <app-card><div class="space-y-4 text-center"><div class="flex items-center justify-center gap-2"><h3 class="font-semibold" style="color: var(--fg-heading)">Pro</h3><app-badge>Popular</app-badge></div><div><span class="text-3xl font-bold" style="color: var(--fg-heading)">$19</span><span class="text-sm" style="color: var(--fg-muted)">/month</span></div><app-separator></app-separator><ul class="space-y-2 text-sm text-left" style="color: var(--fg-muted)"><li>Unlimited projects</li><li>50 GB storage</li><li>Priority support</li></ul><app-button style="width: 100%;">Upgrade</app-button></div></app-card>
        <app-card><div class="space-y-4 text-center"><h3 class="font-semibold" style="color: var(--fg-heading)">Enterprise</h3><div><span class="text-3xl font-bold" style="color: var(--fg-heading)">$99</span><span class="text-sm" style="color: var(--fg-muted)">/month</span></div><app-separator></app-separator><ul class="space-y-2 text-sm text-left" style="color: var(--fg-muted)"><li>Everything in Pro</li><li>Unlimited storage</li><li>Dedicated support</li></ul><app-button variant="outline" style="width: 100%;">Contact Sales</app-button></div></app-card>
      </div>
    `,
  },
  {
    title: 'Newsletter',
    components: 'Card + Input + Button + Alert',
    imports: ['app-card', 'app-input', 'app-button', 'app-alert'],
    code: `<app-card style="width: 100%; max-width: 480px;">
  <div class="space-y-4 text-center">
    <div>
      <h3 class="text-xl font-semibold" style="color: var(--fg-heading)">Stay up to date</h3>
      <p class="text-sm mt-1" style="color: var(--fg-muted)">Subscribe to our newsletter for the latest updates and releases.</p>
    </div>
    <div class="flex gap-3">
      <app-input placeholder="you@example.com" type="email" style="flex: 1;"></app-input>
      <app-button>Subscribe</app-button>
    </div>
    <app-alert variant="default">We respect your privacy. Unsubscribe at any time.</app-alert>
  </div>
</app-card>`,
    preview: () => html`
      <div class="flex items-center justify-center min-h-[280px]">
        <app-card style="width: 100%; max-width: 480px;">
          <div class="space-y-4 text-center">
            <div>
              <h3 class="text-xl font-semibold" style="color: var(--fg-heading)">Stay up to date</h3>
              <p class="text-sm mt-1" style="color: var(--fg-muted)">Subscribe to our newsletter for the latest updates and releases.</p>
            </div>
            <div class="flex gap-3">
              <app-input placeholder="you@example.com" type="email" style="flex: 1;"></app-input>
              <app-button>Subscribe</app-button>
            </div>
            <app-alert variant="default">We respect your privacy. Unsubscribe at any time.</app-alert>
          </div>
        </app-card>
      </div>
    `,
  },
  {
    title: 'File Upload',
    components: 'Card + Progress + Badge + Button + Separator',
    imports: ['app-card', 'app-progress', 'app-badge', 'app-button', 'app-separator'],
    code: `<app-card style="width: 100%; max-width: 440px;">
  <div class="space-y-4">
    <div>
      <h3 class="font-semibold" style="color: var(--fg-heading)">Upload Files</h3>
      <p class="text-sm" style="color: var(--fg-muted)">Drag and drop or click to browse</p>
    </div>
    <div class="rounded-lg py-8 flex flex-col items-center justify-center gap-2" style="border: 2px dashed var(--border);">
      <p class="text-sm" style="color: var(--fg-muted)">Click to upload or drag here</p>
      <p class="text-xs" style="color: var(--fg-subtle)">PNG, JPG, PDF up to 10MB</p>
    </div>
    <app-separator></app-separator>
    <div class="space-y-3">
      <div class="flex items-center gap-3">
        <div class="flex-1 min-w-0">
          <div class="flex items-center justify-between">
            <p class="text-sm font-medium truncate" style="color: var(--fg)">design-system.fig</p>
            <app-badge variant="secondary">Done</app-badge>
          </div>
          <app-progress value="100"></app-progress>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <div class="flex-1 min-w-0">
          <div class="flex items-center justify-between">
            <p class="text-sm font-medium truncate" style="color: var(--fg)">report-q4.pdf</p>
            <span class="text-xs" style="color: var(--fg-muted)">64%</span>
          </div>
          <app-progress value="64"></app-progress>
        </div>
      </div>
    </div>
    <div class="flex justify-end">
      <app-button>Upload All</app-button>
    </div>
  </div>
</app-card>`,
    preview: () => html`
      <div class="flex items-center justify-center min-h-[380px]">
        <app-card style="width: 100%; max-width: 440px;">
          <div class="space-y-4">
            <div>
              <h3 class="font-semibold" style="color: var(--fg-heading)">Upload Files</h3>
              <p class="text-sm" style="color: var(--fg-muted)">Drag and drop or click to browse</p>
            </div>
            <div class="rounded-lg py-8 flex flex-col items-center justify-center gap-2" style="border: 2px dashed var(--border);">
              <p class="text-sm" style="color: var(--fg-muted)">Click to upload or drag here</p>
              <p class="text-xs" style="color: var(--fg-subtle)">PNG, JPG, PDF up to 10MB</p>
            </div>
            <app-separator></app-separator>
            <div class="space-y-3">
              <div class="flex items-center gap-3"><div class="flex-1 min-w-0"><div class="flex items-center justify-between"><p class="text-sm font-medium truncate" style="color: var(--fg)">design-system.fig</p><app-badge variant="secondary">Done</app-badge></div><app-progress value="100"></app-progress></div></div>
              <div class="flex items-center gap-3"><div class="flex-1 min-w-0"><div class="flex items-center justify-between"><p class="text-sm font-medium truncate" style="color: var(--fg)">report-q4.pdf</p><span class="text-xs" style="color: var(--fg-muted)">64%</span></div><app-progress value="64"></app-progress></div></div>
            </div>
            <div class="flex justify-end"><app-button>Upload All</app-button></div>
          </div>
        </app-card>
      </div>
    `,
  },
];

/* ─── Helpers ─── */

function buildPageExample(layout) {
  const slug = layout.title.toLowerCase().replace(/\s+/g, '-');
  const pascal = layout.title.replace(/\s+/g, '') + 'Page';
  const imports = [...new Set(layout.imports)].map(c => "import '@/components/" + c + ".js';").join('\n');
  const code = layout.code.split('\n').map(l => '      ' + l).join('\n');
  return `import { LitElement, html, css } from 'lit';
${imports}

class ${pascal} extends LitElement {
  static styles = css\`
    :host {
      display: block;
      padding: 1.5rem;
    }
  \`;

  render() {
    return html\`
${code}
    \`;
  }
}
customElements.define('${slug}-page', ${pascal});`;
}

function buildHtmlExample(layout) {
  const scripts = [...new Set(layout.imports)].map(c => '  <script type="module" src="./components/' + c + '.js"><\/script>').join('\n');
  const code = layout.code.split('\n').map(l => '  ' + l).join('\n');
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${layout.title} — ZeeLit</title>
  <link rel="stylesheet" href="./styles.css">
${scripts}
</head>
<body>

${code}

</body>
</html>`;
}

/* ─── Page ─── */

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

      <!-- Examples — all 7 layouts with code tabs + source explorer -->
      <div class="space-y-10">
        <div>
          <h2 class="text-2xl font-semibold tracking-tight" style="color: var(--fg-heading)">Examples</h2>
          <p class="text-sm mt-1" style="color: var(--fg-muted)">Pre-built layouts you can copy and adapt for your projects.</p>
        </div>

        ${LAYOUTS.map((layout, i) => {
          const slug = layout.title.toLowerCase().replace(/\s+/g, '-');
          const files = [
            { name: slug + '-page.js', path: 'pages/' + slug + '-page.js', code: buildPageExample(layout) },
            { name: 'index.html', path: 'index.html', code: buildHtmlExample(layout) },
          ];
          return html`
            <div class="space-y-4">
              <div>
                <h3 class="text-xl font-semibold" style="color: var(--fg-heading)">${layout.title}</h3>
                <p class="text-sm mt-1" style="color: var(--fg-muted)">${layout.components}</p>
              </div>
              ${ctx.renderDemo('home-layout-' + i, layout.preview(), layout.code)}
              <div class="space-y-2">
                <h4 class="text-sm font-semibold" style="color: var(--fg-heading)">Source</h4>
                <p class="text-xs" style="color: var(--fg-muted)">Copy the page file or the plain HTML version.</p>
                ${ctx.renderFileExplorer('home-layout-src-' + slug, files)}
              </div>
            </div>
            ${i < LAYOUTS.length - 1 ? html`<div class="h-px" style="background: var(--border)"></div>` : ''}
          `;
        })}
      </div>

      <div class="h-px" style="background: var(--border)"></div>

      <!-- CTA -->
      <div class="text-center space-y-4 pb-8">
        <h2 class="text-2xl font-semibold tracking-tight" style="color: var(--fg-heading)">Ready to build?</h2>
        <p style="color: var(--fg-muted)">Start using ZeeLit components in your project today.</p>
        <div class="flex gap-3 justify-center">
          <app-button @click="${() => ctx.navigate('installation')}">Get Started</app-button>
          <app-button variant="outline" @click="${() => ctx.navigate('button')}">Browse Components</app-button>
        </div>
      </div>
    </div>
  `;
}

/* ─── Feature card ─── */

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

/* ─── Icons ─── */

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

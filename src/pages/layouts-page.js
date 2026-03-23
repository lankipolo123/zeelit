import { html } from 'lit';

export function layoutsPage(ctx) {
  return html`
    <div class="space-y-10">
      <div>
        <h1 class="text-3xl font-bold tracking-tight" style="color: var(--fg-heading)">Layouts</h1>
        <p class="mt-2" style="color: var(--fg-muted)">Pre-built layout compositions using ZeeLit components. Copy and adapt for your projects.</p>
      </div>
      <div class="h-px" style="background: var(--border)"></div>

      <!-- Layout 1: Login -->
      <div class="space-y-4">
        <div>
          <h2 class="text-xl font-semibold" style="color: var(--fg-heading)">Login</h2>
          <p class="text-sm mt-1" style="color: var(--fg-muted)">Card + Input + Checkbox + Button</p>
        </div>
        <div class="rounded-lg p-8 flex items-center justify-center min-h-[420px]" style="background: var(--bg-preview); border: 1px solid var(--border);">
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

      <!-- Layout 2: Settings -->
      <div class="space-y-4">
        <div>
          <h2 class="text-xl font-semibold" style="color: var(--fg-heading)">Settings</h2>
          <p class="text-sm mt-1" style="color: var(--fg-muted)">Card + Tabs + Toggle + Select + Input + Separator + Button</p>
        </div>
        <div class="rounded-lg p-8" style="background: var(--bg-preview); border: 1px solid var(--border);">
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
        </div>
      </div>

      <!-- Layout 3: Profile -->
      <div class="space-y-4">
        <div>
          <h2 class="text-xl font-semibold" style="color: var(--fg-heading)">Profile Card</h2>
          <p class="text-sm mt-1" style="color: var(--fg-muted)">Card + Avatar + Badge + Button + Separator + Progress</p>
        </div>
        <div class="rounded-lg p-8 flex items-center justify-center min-h-[360px]" style="background: var(--bg-preview); border: 1px solid var(--border);">
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
          </app-card>
        </div>
      </div>

      <!-- Layout 4: Dashboard -->
      <div class="space-y-4">
        <div>
          <h2 class="text-xl font-semibold" style="color: var(--fg-heading)">Dashboard</h2>
          <p class="text-sm mt-1" style="color: var(--fg-muted)">Card + Badge + Avatar + Progress + Separator + Button</p>
        </div>
        <div class="rounded-lg p-8" style="background: var(--bg-preview); border: 1px solid var(--border);">
          <div class="space-y-6">
            <!-- Stats row -->
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

            <!-- Recent activity -->
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
                  <div class="flex items-center gap-3">
                    <app-avatar fallback="MR" size="sm"></app-avatar>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium truncate" style="color: var(--fg)">Mike Ross</p>
                      <p class="text-xs" style="color: var(--fg-muted)">Updated dependencies</p>
                    </div>
                    <app-badge variant="outline">Chore</app-badge>
                  </div>
                </div>
              </div>
            </app-card>
          </div>
        </div>
      </div>

      <!-- Layout 5: Pricing -->
      <div class="space-y-4">
        <div>
          <h2 class="text-xl font-semibold" style="color: var(--fg-heading)">Pricing</h2>
          <p class="text-sm mt-1" style="color: var(--fg-muted)">Card + Badge + Button + Separator</p>
        </div>
        <div class="rounded-lg p-8" style="background: var(--bg-preview); border: 1px solid var(--border);">
          <div class="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            <!-- Free -->
            <app-card>
              <div class="space-y-4 text-center">
                <h3 class="font-semibold" style="color: var(--fg-heading)">Free</h3>
                <div>
                  <span class="text-3xl font-bold" style="color: var(--fg-heading)">$0</span>
                  <span class="text-sm" style="color: var(--fg-muted)">/month</span>
                </div>
                <app-separator></app-separator>
                <ul class="space-y-2 text-sm text-left" style="color: var(--fg-muted)">
                  <li class="flex items-center gap-2"><svg class="w-4 h-4 shrink-0" style="color: #22c55e" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>5 projects</li>
                  <li class="flex items-center gap-2"><svg class="w-4 h-4 shrink-0" style="color: #22c55e" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>1 GB storage</li>
                  <li class="flex items-center gap-2"><svg class="w-4 h-4 shrink-0" style="color: #22c55e" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>Community support</li>
                </ul>
                <app-button variant="outline" style="width: 100%;">Get Started</app-button>
              </div>
            </app-card>
            <!-- Pro -->
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
                  <li class="flex items-center gap-2"><svg class="w-4 h-4 shrink-0" style="color: #22c55e" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>Unlimited projects</li>
                  <li class="flex items-center gap-2"><svg class="w-4 h-4 shrink-0" style="color: #22c55e" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>50 GB storage</li>
                  <li class="flex items-center gap-2"><svg class="w-4 h-4 shrink-0" style="color: #22c55e" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>Priority support</li>
                </ul>
                <app-button style="width: 100%;">Upgrade</app-button>
              </div>
            </app-card>
            <!-- Enterprise -->
            <app-card>
              <div class="space-y-4 text-center">
                <h3 class="font-semibold" style="color: var(--fg-heading)">Enterprise</h3>
                <div>
                  <span class="text-3xl font-bold" style="color: var(--fg-heading)">$99</span>
                  <span class="text-sm" style="color: var(--fg-muted)">/month</span>
                </div>
                <app-separator></app-separator>
                <ul class="space-y-2 text-sm text-left" style="color: var(--fg-muted)">
                  <li class="flex items-center gap-2"><svg class="w-4 h-4 shrink-0" style="color: #22c55e" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>Everything in Pro</li>
                  <li class="flex items-center gap-2"><svg class="w-4 h-4 shrink-0" style="color: #22c55e" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>Unlimited storage</li>
                  <li class="flex items-center gap-2"><svg class="w-4 h-4 shrink-0" style="color: #22c55e" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>Dedicated support</li>
                </ul>
                <app-button variant="outline" style="width: 100%;">Contact Sales</app-button>
              </div>
            </app-card>
          </div>
        </div>
      </div>

      <!-- Layout 6: Newsletter / CTA -->
      <div class="space-y-4">
        <div>
          <h2 class="text-xl font-semibold" style="color: var(--fg-heading)">Newsletter</h2>
          <p class="text-sm mt-1" style="color: var(--fg-muted)">Card + Input + Button + Alert</p>
        </div>
        <div class="rounded-lg p-8 flex items-center justify-center min-h-[280px]" style="background: var(--bg-preview); border: 1px solid var(--border);">
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
      </div>

      <!-- Layout 7: File Upload -->
      <div class="space-y-4">
        <div>
          <h2 class="text-xl font-semibold" style="color: var(--fg-heading)">File Upload</h2>
          <p class="text-sm mt-1" style="color: var(--fg-muted)">Card + Progress + Badge + Button + Separator</p>
        </div>
        <div class="rounded-lg p-8 flex items-center justify-center min-h-[380px]" style="background: var(--bg-preview); border: 1px solid var(--border);">
          <app-card style="width: 100%; max-width: 440px;">
            <div class="space-y-4">
              <div>
                <h3 class="font-semibold" style="color: var(--fg-heading)">Upload Files</h3>
                <p class="text-sm" style="color: var(--fg-muted)">Drag and drop or click to browse</p>
              </div>
              <div class="rounded-lg py-8 flex flex-col items-center justify-center gap-2 cursor-pointer" style="border: 2px dashed var(--border);"
                @mouseenter=${(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
                @mouseleave=${(e) => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <svg class="w-10 h-10" style="color: var(--fg-subtle)" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 16V4m0 0l-4 4m4-4l4 4m4 4v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5"/></svg>
                <p class="text-sm" style="color: var(--fg-muted)">Click to upload or drag here</p>
                <p class="text-xs" style="color: var(--fg-subtle)">PNG, JPG, PDF up to 10MB</p>
              </div>
              <app-separator></app-separator>
              <div class="space-y-3">
                <div class="flex items-center gap-3">
                  <svg class="w-8 h-8 shrink-0" style="color: var(--fg-subtle)" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/></svg>
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center justify-between">
                      <p class="text-sm font-medium truncate" style="color: var(--fg)">design-system.fig</p>
                      <app-badge variant="secondary">Done</app-badge>
                    </div>
                    <app-progress value="100"></app-progress>
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  <svg class="w-8 h-8 shrink-0" style="color: var(--fg-subtle)" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/></svg>
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
          </app-card>
        </div>
      </div>
    </div>
  `;
}

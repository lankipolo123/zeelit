import { html } from 'lit';
import { COMPONENTS, CATEGORIES } from '../showcase/component-data.js';

/* ─── Component raw sources for file explorer ─── */
import srcCard from '../components/app-card.js?raw';
import srcInput from '../components/app-input.js?raw';
import srcCheckbox from '../components/app-checkbox.js?raw';
import srcButton from '../components/app-button.js?raw';
import srcTabs from '../components/app-tabs.js?raw';
import srcToggle from '../components/app-toggle.js?raw';
import srcSelect from '../components/app-select.js?raw';
import srcSeparator from '../components/app-separator.js?raw';
import srcAvatar from '../components/app-avatar.js?raw';
import srcBadge from '../components/app-badge.js?raw';
import srcProgress from '../components/app-progress.js?raw';
import srcAlert from '../components/app-alert.js?raw';

const COMPONENT_SOURCE = {
  'app-card': srcCard,
  'app-input': srcInput,
  'app-checkbox': srcCheckbox,
  'app-button': srcButton,
  'app-tabs': srcTabs,
  'app-toggle': srcToggle,
  'app-select': srcSelect,
  'app-separator': srcSeparator,
  'app-avatar': srcAvatar,
  'app-badge': srcBadge,
  'app-progress': srcProgress,
  'app-alert': srcAlert,
};

/* ─── Layout data ─── */

const LAYOUTS = [
  {
    title: 'Login',
    components: 'Card + Input + Checkbox + Button',
    imports: ['app-card', 'app-input', 'app-checkbox', 'app-button'],
    code: `<app-card cardTitle="Sign in" description="Enter your credentials to continue" spacing="5" style="width: 100%; max-width: 380px;">
  <app-input label="Email" placeholder="you@example.com" type="email"></app-input>
  <app-input label="Password" placeholder="••••••••" type="password"></app-input>
  <app-checkbox label="Remember me"></app-checkbox>
  <app-button style="width: 100%;">Sign In</app-button>
</app-card>`,
    preview: () => html`
      <div class="flex items-center justify-center min-h-[420px]">
        <app-card cardTitle="Sign in" description="Enter your credentials to continue" spacing="5" style="width: 100%; max-width: 380px;">
          <app-input label="Email" placeholder="you@example.com" type="email"></app-input>
          <app-input label="Password" placeholder="••••••••" type="password"></app-input>
          <app-checkbox label="Remember me"></app-checkbox>
          <app-button style="width: 100%;">Sign In</app-button>
        </app-card>
      </div>
    `,
  },
  {
    title: 'Settings',
    components: 'Card + Tabs + Toggle + Select + Input + Separator + Button',
    imports: ['app-card', 'app-tabs', 'app-toggle', 'app-select', 'app-input', 'app-separator', 'app-button'],
    code: `<app-card cardTitle="Account Settings" description="Manage your preferences" spacing="5" style="max-width: 560px;">
  <app-tabs .tabs=\${[
    { id: 'general', label: 'General' },
    { id: 'notifications', label: 'Notifications' },
    { id: 'security', label: 'Security' },
  ]} active="general"></app-tabs>
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
  <app-separator></app-separator>
  <app-toggle label="Email notifications" checked></app-toggle>
  <app-toggle label="Push notifications"></app-toggle>
  <app-toggle label="Marketing emails"></app-toggle>
  <app-separator></app-separator>
  <app-button variant="outline">Cancel</app-button>
  <app-button>Save Changes</app-button>
</app-card>`,
    preview: () => html`
      <app-card cardTitle="Account Settings" description="Manage your preferences" spacing="5" style="max-width: 560px; margin: 0 auto;">
        <app-tabs .tabs=${[
          { id: 'general', label: 'General' },
          { id: 'notifications', label: 'Notifications' },
          { id: 'security', label: 'Security' },
        ]} active="general"></app-tabs>
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
        <app-separator></app-separator>
        <app-toggle label="Email notifications" checked></app-toggle>
        <app-toggle label="Push notifications"></app-toggle>
        <app-toggle label="Marketing emails"></app-toggle>
        <app-separator></app-separator>
        <app-button variant="outline">Cancel</app-button>
        <app-button>Save Changes</app-button>
      </app-card>
    `,
  },
  {
    title: 'Profile Card',
    components: 'Card + Avatar + Badge + Button + Separator + Progress',
    imports: ['app-card', 'app-avatar', 'app-badge', 'app-button', 'app-separator', 'app-progress'],
    code: `<app-card spacing="4" style="width: 100%; max-width: 380px;">
  <app-avatar fallback="JD" size="lg"></app-avatar>
  <app-badge variant="secondary">Pro</app-badge>
  <app-separator></app-separator>
  <app-progress value="72"></app-progress>
  <app-button style="flex: 1;">Follow</app-button>
  <app-button variant="outline" style="flex: 1;">Message</app-button>
</app-card>`,
    preview: () => html`
      <div class="flex items-center justify-center min-h-[360px]">
        <app-card spacing="4" style="width: 100%; max-width: 380px;">
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
            <app-card><p class="text-lg font-semibold" style="color: var(--fg-heading)">128</p><p class="text-xs" style="color: var(--fg-muted)">Projects</p></app-card>
            <app-card><p class="text-lg font-semibold" style="color: var(--fg-heading)">14k</p><p class="text-xs" style="color: var(--fg-muted)">Followers</p></app-card>
            <app-card><p class="text-lg font-semibold" style="color: var(--fg-heading)">98%</p><p class="text-xs" style="color: var(--fg-muted)">Uptime</p></app-card>
          </div>
          <div class="flex gap-3">
            <app-button style="flex: 1;">Follow</app-button>
            <app-button variant="outline" style="flex: 1;">Message</app-button>
          </div>
        </app-card>
      </div>
    `,
  },
  {
    title: 'Dashboard',
    components: 'Card + Badge + Avatar + Separator + Button',
    imports: ['app-card', 'app-badge', 'app-avatar', 'app-separator', 'app-button'],
    code: `<app-card cardTitle="Revenue" description="+20.1% from last month">
  <p class="text-2xl font-bold" style="color: var(--fg-heading)">$45,231</p>
</app-card>

<app-card cardTitle="Users" description="+12.5% from last month">
  <p class="text-2xl font-bold" style="color: var(--fg-heading)">+2,350</p>
</app-card>

<app-card cardTitle="Recent Activity" spacing="4">
  <app-separator></app-separator>
  <app-avatar fallback="OL" size="sm"></app-avatar>
  <app-badge variant="default">Deploy</app-badge>
  <app-avatar fallback="JW" size="sm"></app-avatar>
  <app-badge variant="secondary">Merge</app-badge>
  <app-avatar fallback="SK" size="sm"></app-avatar>
  <app-badge variant="destructive">Bug</app-badge>
</app-card>`,
    preview: () => html`
      <div class="space-y-6">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <app-card cardTitle="Revenue" description="+20.1% from last month"><p class="text-2xl font-bold" style="color: var(--fg-heading)">$45,231</p></app-card>
          <app-card cardTitle="Users" description="+12.5% from last month"><p class="text-2xl font-bold" style="color: var(--fg-heading)">+2,350</p></app-card>
          <app-card cardTitle="Sales" description="+8.2% from last month"><p class="text-2xl font-bold" style="color: var(--fg-heading)">+12,234</p></app-card>
          <app-card cardTitle="Active Now" description="+4.1% from last hour"><p class="text-2xl font-bold" style="color: var(--fg-heading)">+573</p></app-card>
        </div>
        <app-card cardTitle="Recent Activity" spacing="4">
          <app-separator></app-separator>
          <div class="flex items-center gap-3"><app-avatar fallback="OL" size="sm"></app-avatar><div class="flex-1 min-w-0"><p class="text-sm font-medium truncate" style="color: var(--fg)">Olivia Lee</p><p class="text-xs" style="color: var(--fg-muted)">Deployed to production</p></div><app-badge variant="default">Deploy</app-badge></div>
          <div class="flex items-center gap-3"><app-avatar fallback="JW" size="sm"></app-avatar><div class="flex-1 min-w-0"><p class="text-sm font-medium truncate" style="color: var(--fg)">James Wilson</p><p class="text-xs" style="color: var(--fg-muted)">Merged pull request #42</p></div><app-badge variant="secondary">Merge</app-badge></div>
          <div class="flex items-center gap-3"><app-avatar fallback="SK" size="sm"></app-avatar><div class="flex-1 min-w-0"><p class="text-sm font-medium truncate" style="color: var(--fg)">Sarah Kim</p><p class="text-xs" style="color: var(--fg-muted)">Opened issue: Fix auth flow</p></div><app-badge variant="destructive">Bug</app-badge></div>
        </app-card>
      </div>
    `,
  },
  {
    title: 'Pricing',
    components: 'Card + Badge + Button + Separator',
    imports: ['app-card', 'app-badge', 'app-button', 'app-separator'],
    code: `<app-card cardTitle="Free" description="$0/month" spacing="4">
  <app-separator></app-separator>
  <p>5 projects</p>
  <p>1 GB storage</p>
  <p>Community support</p>
  <app-button variant="outline" style="width: 100%;">Get Started</app-button>
</app-card>

<app-card cardTitle="Pro" description="$19/month" spacing="4">
  <app-badge>Popular</app-badge>
  <app-separator></app-separator>
  <p>Unlimited projects</p>
  <p>50 GB storage</p>
  <p>Priority support</p>
  <app-button style="width: 100%;">Upgrade</app-button>
</app-card>

<app-card cardTitle="Enterprise" description="$99/month" spacing="4">
  <app-separator></app-separator>
  <p>Everything in Pro</p>
  <p>Unlimited storage</p>
  <p>Dedicated support</p>
  <app-button variant="outline" style="width: 100%;">Contact Sales</app-button>
</app-card>`,
    preview: () => html`
      <div class="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
        <app-card cardTitle="Free" description="$0/month" spacing="4">
          <app-separator></app-separator>
          <ul class="space-y-2 text-sm" style="color: var(--fg-muted)"><li>5 projects</li><li>1 GB storage</li><li>Community support</li></ul>
          <app-button variant="outline" style="width: 100%;">Get Started</app-button>
        </app-card>
        <app-card cardTitle="Pro" description="$19/month" spacing="4">
          <app-badge>Popular</app-badge>
          <app-separator></app-separator>
          <ul class="space-y-2 text-sm" style="color: var(--fg-muted)"><li>Unlimited projects</li><li>50 GB storage</li><li>Priority support</li></ul>
          <app-button style="width: 100%;">Upgrade</app-button>
        </app-card>
        <app-card cardTitle="Enterprise" description="$99/month" spacing="4">
          <app-separator></app-separator>
          <ul class="space-y-2 text-sm" style="color: var(--fg-muted)"><li>Everything in Pro</li><li>Unlimited storage</li><li>Dedicated support</li></ul>
          <app-button variant="outline" style="width: 100%;">Contact Sales</app-button>
        </app-card>
      </div>
    `,
  },
  {
    title: 'Newsletter',
    components: 'Card + Input + Button + Alert',
    imports: ['app-card', 'app-input', 'app-button', 'app-alert'],
    code: `<app-card cardTitle="Stay up to date" description="Subscribe to our newsletter for the latest updates." spacing="4" style="width: 100%; max-width: 480px;">
  <app-input placeholder="you@example.com" type="email"></app-input>
  <app-button>Subscribe</app-button>
  <app-alert variant="default">We respect your privacy. Unsubscribe at any time.</app-alert>
</app-card>`,
    preview: () => html`
      <div class="flex items-center justify-center min-h-[280px]">
        <app-card cardTitle="Stay up to date" description="Subscribe to our newsletter for the latest updates." spacing="4" style="width: 100%; max-width: 480px;">
          <div class="flex gap-3">
            <app-input placeholder="you@example.com" type="email" style="flex: 1;"></app-input>
            <app-button>Subscribe</app-button>
          </div>
          <app-alert variant="default">We respect your privacy. Unsubscribe at any time.</app-alert>
        </app-card>
      </div>
    `,
  },
  {
    title: 'File Upload',
    components: 'Card + Progress + Badge + Button + Separator',
    imports: ['app-card', 'app-progress', 'app-badge', 'app-button', 'app-separator'],
    code: `<app-card cardTitle="Upload Files" description="Drag and drop or click to browse" spacing="4" style="width: 100%; max-width: 440px;">
  <app-separator></app-separator>
  <app-badge variant="secondary">Done</app-badge>
  <app-progress value="100"></app-progress>
  <app-progress value="64"></app-progress>
  <app-button>Upload All</app-button>
</app-card>`,
    preview: () => html`
      <div class="flex items-center justify-center min-h-[380px]">
        <app-card cardTitle="Upload Files" description="Drag and drop or click to browse" spacing="4" style="width: 100%; max-width: 440px;">
          <div class="rounded-lg py-8 flex flex-col items-center justify-center gap-2" style="border: 2px dashed var(--border);">
            <p class="text-sm" style="color: var(--fg-muted)">Click to upload or drag here</p>
            <p class="text-xs" style="color: var(--fg-subtle)">PNG, JPG, PDF up to 10MB</p>
          </div>
          <app-separator></app-separator>
          <div class="flex items-center justify-between"><p class="text-sm font-medium" style="color: var(--fg)">design-system.fig</p><app-badge variant="secondary">Done</app-badge></div>
          <app-progress value="100"></app-progress>
          <div class="flex items-center justify-between"><p class="text-sm font-medium" style="color: var(--fg)">report-q4.pdf</p><span class="text-xs" style="color: var(--fg-muted)">64%</span></div>
          <app-progress value="64"></app-progress>
          <app-button>Upload All</app-button>
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

      <!-- Components -->
      <div class="space-y-6">
        <div>
          <h2 class="text-2xl font-semibold tracking-tight" style="color: var(--fg-heading)">Components</h2>
          <p class="text-sm mt-1" style="color: var(--fg-muted)">${COMPONENTS.length} components across ${CATEGORIES.length} categories. Click any to view docs.</p>
        </div>
        ${CATEGORIES.map(cat => html`
          <div class="space-y-3">
            <h3 class="text-sm font-semibold uppercase tracking-wider" style="color: var(--fg-subtle)">${cat}</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              ${COMPONENTS.filter(c => c.category === cat).map(c => html`
                <a @click="${() => ctx.navigate(c.id)}"
                  class="px-3 py-2.5 rounded-md text-sm cursor-pointer transition-colors text-center truncate"
                  style="border: 1px solid var(--border); color: var(--fg-muted); background: var(--bg-card)"
                  @mouseenter=${(e) => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.color = 'var(--fg)'; }}
                  @mouseleave=${(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--fg-muted)'; }}
                >${c.label}</a>
              `)}
            </div>
          </div>
        `)}
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
          const componentFiles = [...new Set(layout.imports)]
            .filter(c => COMPONENT_SOURCE[c])
            .map(c => ({ name: c + '.js', path: 'components/' + c + '.js', code: COMPONENT_SOURCE[c] }));
          const files = [
            { name: slug + '-page.js', path: 'pages/' + slug + '-page.js', code: buildPageExample(layout) },
            { name: 'index.html', path: 'index.html', code: buildHtmlExample(layout) },
            ...componentFiles,
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

import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-form.js?raw';

export function formPage(ctx) {
  return ctx.componentPage('Form', 'A structured form layout with labeled fields, validation errors, hints, sections, and horizontal/vertical layouts. Compose with app-form-field and app-form-section.', [
    {
      title: 'Basic Form',
      description: 'Simple vertical form with fields and a submit button.',
      code: `<app-form>
  <app-form-field label="Name" name="name" placeholder="Enter your name" required></app-form-field>
  <app-form-field label="Email" name="email" type="email" placeholder="you@example.com" required hint="We'll never share your email."></app-form-field>
  <app-form-field label="Password" name="password" type="password" placeholder="••••••••" required></app-form-field>
  <app-button label="Create Account" variant="primary" type="submit"></app-button>
</app-form>`,
      preview: html`
        <div class="max-w-md">
          <app-form>
            <app-form-field label="Name" name="name" placeholder="Enter your name" required></app-form-field>
            <app-form-field label="Email" name="email" type="email" placeholder="you@example.com" required hint="We'll never share your email."></app-form-field>
            <app-form-field label="Password" name="password" type="password" placeholder="••••••••" required></app-form-field>
            <app-button label="Create Account" variant="primary"></app-button>
          </app-form>
        </div>
      `,
    },
    {
      title: 'With Validation Errors',
      description: 'Show inline error messages on fields.',
      code: `<app-form>
  <app-form-field label="Username" name="username" value="ab" error="Username must be at least 3 characters." required></app-form-field>
  <app-form-field label="Email" name="email" value="invalid" error="Please enter a valid email address." required></app-form-field>
  <app-button label="Save" variant="primary"></app-button>
</app-form>`,
      preview: html`
        <div class="max-w-md">
          <app-form>
            <app-form-field label="Username" name="username" value="ab" error="Username must be at least 3 characters." required></app-form-field>
            <app-form-field label="Email" name="email" value="invalid" error="Please enter a valid email address." required></app-form-field>
            <app-button label="Save" variant="primary"></app-button>
          </app-form>
        </div>
      `,
    },
    {
      title: 'Horizontal Layout',
      description: 'Labels beside inputs — ideal for settings pages.',
      code: `<app-form>
  <app-form-field layout="horizontal" label="Display Name" name="display" placeholder="John Doe"></app-form-field>
  <app-form-field layout="horizontal" label="Bio" name="bio" type="textarea" placeholder="Tell us about yourself..."></app-form-field>
  <app-form-field layout="horizontal" label="Role" name="role" type="select" placeholder="Select a role" options='["Admin","Editor","Viewer"]'></app-form-field>
</app-form>`,
      preview: html`
        <div class="max-w-lg">
          <app-form>
            <app-form-field layout="horizontal" label="Display Name" name="display" placeholder="John Doe"></app-form-field>
            <app-form-field layout="horizontal" label="Bio" name="bio" type="textarea" placeholder="Tell us about yourself..."></app-form-field>
            <app-form-field layout="horizontal" label="Role" name="role" type="select" placeholder="Select a role" .options=${['Admin', 'Editor', 'Viewer']}></app-form-field>
          </app-form>
        </div>
      `,
    },
    {
      title: 'With Sections',
      description: 'Group related fields into titled sections.',
      code: `<app-form>
  <app-form-section title="Personal Info" description="Your basic information.">
    <app-form-field label="First Name" name="first" placeholder="Jane" required></app-form-field>
    <app-form-field label="Last Name" name="last" placeholder="Doe" required></app-form-field>
  </app-form-section>
  <app-form-section title="Preferences" description="How should we reach you?">
    <app-form-field label="Newsletter" name="newsletter" type="checkbox" placeholder="Subscribe to weekly updates"></app-form-field>
    <app-form-field label="Frequency" name="frequency" type="select" placeholder="Pick one" options='["Daily","Weekly","Monthly"]'></app-form-field>
  </app-form-section>
  <app-button label="Save Preferences" variant="primary"></app-button>
</app-form>`,
      preview: html`
        <div class="max-w-md">
          <app-form>
            <app-form-section title="Personal Info" description="Your basic information.">
              <app-form-field label="First Name" name="first" placeholder="Jane" required></app-form-field>
              <app-form-field label="Last Name" name="last" placeholder="Doe" required></app-form-field>
            </app-form-section>
            <app-form-section title="Preferences" description="How should we reach you?">
              <app-form-field label="Newsletter" name="newsletter" type="checkbox" placeholder="Subscribe to weekly updates"></app-form-field>
              <app-form-field label="Frequency" name="frequency" type="select" placeholder="Pick one" .options=${['Daily', 'Weekly', 'Monthly']}></app-form-field>
            </app-form-section>
            <app-button label="Save Preferences" variant="primary"></app-button>
          </app-form>
        </div>
      `,
    },
  ], meta('form', source));
}

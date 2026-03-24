import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-stepper.js?raw';

export function stepperPage(ctx) {
  return ctx.componentPage('Stepper', 'A step indicator for multi-step flows — wizards, onboarding, checkout. Supports horizontal and vertical orientations.', [
    {
      title: 'Horizontal',
      description: 'Steps with a connecting line. Step 2 is active.',
      code: `<app-stepper current="1" steps='["Account", "Profile", "Review", "Done"]'></app-stepper>`,
    },
    {
      title: 'Completed Steps',
      description: 'First two steps completed, third is active.',
      code: `<app-stepper current="2" steps='["Cart", "Shipping", "Payment", "Confirm"]'></app-stepper>`,
    },
    {
      title: 'Vertical',
      description: 'Vertical layout with descriptions.',
      code: `<app-stepper orientation="vertical" current="1" steps='[{"label":"Create account","description":"Enter your email and password"},{"label":"Verify email","description":"Check your inbox for a code"},{"label":"Complete profile","description":"Add your name and avatar"}]'></app-stepper>`,
    },
    {
      title: 'All Complete',
      description: 'All steps finished — checkmarks everywhere.',
      code: `<app-stepper current="3" steps='["Upload", "Process", "Done"]'></app-stepper>`,
    },
  ], meta('stepper', source));
}

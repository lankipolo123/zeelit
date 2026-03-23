import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-carousel.js?raw';

export function carouselPage(ctx) {
  const slides = [
    { title: 'Welcome', description: 'Get started with ZeeLit components.', icon: '👋' },
    { title: 'Customizable', description: 'Every component supports theming out of the box.', icon: '🎨' },
    { title: 'Lightweight', description: 'Built with Lit for minimal overhead.', icon: '⚡' },
    { title: 'Accessible', description: 'Keyboard and screen reader friendly.', icon: '♿' },
  ];

  return ctx.componentPage('Carousel', 'A slideshow component for cycling through content.', [
    {
      title: 'Content Slides',
      description: 'Cycle through cards with navigation arrows and dot indicators.',
      code: `<app-carousel .slides=\${slides}></app-carousel>`,
      preview: html`<app-carousel .slides=${slides}></app-carousel>`,
    },
    {
      title: 'Autoplay',
      description: 'Automatically advances every 3 seconds.',
      code: `<app-carousel .slides=\${slides} autoplay="3000"></app-carousel>`,
      preview: html`<app-carousel .slides=${slides} autoplay="3000"></app-carousel>`,
    },
  ], meta('carousel', source));
}

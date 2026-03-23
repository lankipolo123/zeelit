import { html } from 'lit';
import source from '../components/app-carousel.js?raw';
import pageSource from './carousel-page.js?raw';

const TAG = 'app-carousel';
const IMPORT = '@/components/app-carousel.js';
const FILE = 'app-carousel.js';

export function carouselPage(ctx) {
  const contentSlides = [
    { title: 'Welcome', description: 'Get started with ZeeLit components.', icon: '👋' },
    { title: 'Customizable', description: 'Every component supports theming out of the box.', icon: '🎨' },
    { title: 'Lightweight', description: 'Built with Lit for minimal overhead.', icon: '⚡' },
    { title: 'Accessible', description: 'Keyboard and screen reader friendly.', icon: '♿' },
  ];

  return ctx.componentPage('Carousel', 'A slideshow component for cycling through content.', [
    {
      title: 'Content Slides',
      description: 'Cycle through cards with navigation arrows and dot indicators.',
      code: `<app-carousel .slides=\${[
  { title: 'Welcome', description: 'Get started with ZeeLit.', icon: '👋' },
  { title: 'Customizable', description: 'Theming out of the box.', icon: '🎨' },
  { title: 'Lightweight', description: 'Built with Lit.', icon: '⚡' },
  { title: 'Accessible', description: 'Keyboard friendly.', icon: '♿' },
]}></app-carousel>`,
      preview: html`<app-carousel .slides=${contentSlides}></app-carousel>`,
    },
    {
      title: 'Autoplay',
      description: 'Automatically advances every 3 seconds.',
      code: `<app-carousel .slides=\${slides} autoplay="3000"></app-carousel>`,
      preview: html`<app-carousel .slides=${contentSlides} autoplay="3000"></app-carousel>`,
    },
  ], { source, fileName: FILE, importPath: IMPORT, tagName: TAG, pageSource, pageFileName: 'carousel-page.js' });
}

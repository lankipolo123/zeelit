import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-carousel.js?raw';
import pageSource from './carousel-page.js?raw';

export function carouselPage(ctx) {
  return ctx.componentPage('Carousel', 'A slideshow — pass your own slides array. Use it for onboarding, feature highlights, testimonials, or image galleries.', [
    {
      title: 'Feature Highlights',
      description: 'Pass slides with title, description, and icon.',
      code: `<app-carousel .slides=\${[
  { title: 'Fast Setup', description: 'Install and start building in seconds.', icon: '⚡' },
  { title: 'Themeable', description: 'Customize colors with CSS variables.', icon: '🎨' },
  { title: 'Accessible', description: 'Keyboard and screen reader support.', icon: '♿' },
]}></app-carousel>`,
      preview: html`<app-carousel .slides=${[
        { title: 'Fast Setup', description: 'Install and start building in seconds.', icon: '⚡' },
        { title: 'Themeable', description: 'Customize colors with CSS variables.', icon: '🎨' },
        { title: 'Accessible', description: 'Keyboard and screen reader support.', icon: '♿' },
      ]}></app-carousel>`,
    },
    {
      title: 'Autoplay Testimonials',
      description: 'Add autoplay with a duration in ms.',
      code: `<app-carousel autoplay="3000" .slides=\${[
  { title: 'Great library!', description: '— Sarah, Frontend Dev', icon: '⭐' },
  { title: 'Saved us weeks', description: '— Mike, Tech Lead', icon: '🚀' },
  { title: 'Clean API', description: '— Lisa, Designer', icon: '✨' },
]}></app-carousel>`,
      preview: html`<app-carousel autoplay="3000" .slides=${[
        { title: 'Great library!', description: '— Sarah, Frontend Dev', icon: '⭐' },
        { title: 'Saved us weeks', description: '— Mike, Tech Lead', icon: '🚀' },
        { title: 'Clean API', description: '— Lisa, Designer', icon: '✨' },
      ]}></app-carousel>`,
    },
  ], meta('carousel', source, pageSource));
}

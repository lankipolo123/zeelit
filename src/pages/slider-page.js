import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-slider.js?raw';
import pageSource from './slider-page.js?raw';

export function sliderPage(ctx) {
  return ctx.componentPage('Slider', 'A range input — set label, value, min, max, and step. Use it for volume, price filters, brightness, or any numeric range.', [
    {
      title: 'Volume Control',
      code: `<app-slider label="Volume" value="50"></app-slider>`,
      preview: html`<div class="w-80"><app-slider label="Volume" value="50"></app-slider></div>`,
    },
    {
      title: 'Price Filter',
      description: 'Same component with custom range.',
      code: `<app-slider label="Max Price" value="250" min="0" max="1000" step="10"></app-slider>`,
      preview: html`<div class="w-80"><app-slider label="Max Price" value="250" min="0" max="1000" step="10"></app-slider></div>`,
    },
    {
      title: 'Disabled',
      description: 'Lock when the value is fixed.',
      code: `<app-slider label="Brightness" value="75" disabled></app-slider>`,
      preview: html`<div class="w-80"><app-slider label="Brightness" value="75" disabled></app-slider></div>`,
    },
  ], { ...meta('slider', source), pageSource, pageFileName: 'slider-page.js' });
}

import { html } from 'lit';
import { meta } from '../showcase/component-data.js';
import source from '../components/app-slider.js?raw';
import pageSource from './slider-page.js?raw';

export function sliderPage(ctx) {
  return ctx.componentPage('Slider', 'An input where the user selects a value from within a given range.', [
    {
      title: 'Default',
      code: `<app-slider label="Volume" value="50"></app-slider>`,
      preview: html`<div class="w-80"><app-slider label="Volume" value="50"></app-slider></div>`,
    },
    {
      title: 'Custom Range',
      code: `<app-slider label="Temperature" value="36" min="0" max="100" step="1"></app-slider>`,
      preview: html`<div class="w-80"><app-slider label="Temperature" value="36" min="0" max="100" step="1"></app-slider></div>`,
    },
    {
      title: 'Disabled',
      code: `<app-slider label="Brightness" value="75" disabled></app-slider>`,
      preview: html`<div class="w-80"><app-slider label="Brightness" value="75" disabled></app-slider></div>`,
    },
  ], meta('slider', source, pageSource));
}

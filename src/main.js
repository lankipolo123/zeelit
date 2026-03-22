import { LitElement, html } from 'lit'

export class AppMain extends LitElement {
  render() {
    return html`
      <div class="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <slot></slot>
        <p class="text-gray-700 text-lg">Welcome to your Lit + Tailwind app!</p>
      </div>
    `
  }
}

window.customElements.define('app-main', AppMain)
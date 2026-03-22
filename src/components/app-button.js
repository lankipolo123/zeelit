import { LitElement, html, css } from 'lit';
import '/src/style.css'; // your Tailwind CSS

class AppButton extends LitElement {
    static styles = css``; // optional per-component CSS

    render() {
        return html`
      <button class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
        <slot></slot>
      </button>
    `;
    }
}

customElements.define('app-button', AppButton);
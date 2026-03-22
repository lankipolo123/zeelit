import { LitElement, html } from 'lit';

export class PageHeader extends LitElement {
    static properties = { title: {}, userName: {}, userRole: {} };

    constructor() {
        super();
        this.title = 'No Title';
        this.userName = 'Guest';
        this.userRole = '';
    }

    render() {
        return html`
      <header class="flex justify-between items-center h-20 px-8 bg-white border-b border-gray-300">
        <h1 class="text-2xl font-bold text-red-800">${this.title}</h1>
        <div class="flex items-center gap-4">
          <div class="text-gray-600 text-sm">${this.userName}</div>
          <div class="text-gray-400 text-xs uppercase">${this.userRole}</div>
        </div>
      </header>
    `;
    }
}

customElements.define('page-header', PageHeader);
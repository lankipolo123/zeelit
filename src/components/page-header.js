import { LitElement, html } from 'lit';

export class PageHeader extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    title: { type: String },
    userName: { type: String },
    userRole: { type: String },
  };

  constructor() {
    super();
    this.title = 'No Title';
    this.userName = 'Guest';
    this.userRole = '';
  }

  render() {
    return html`
      <header class="flex justify-between items-center h-16 px-6 bg-zinc-950 border-b border-zinc-800">
        <h1 class="text-xl font-bold text-zinc-100">${this.title}</h1>
        <div class="flex items-center gap-3">
          <span class="text-zinc-400 text-sm">${this.userName}</span>
          ${this.userRole ? html`<span class="text-zinc-500 text-xs uppercase bg-zinc-800 px-2 py-0.5 rounded">${this.userRole}</span>` : ''}
        </div>
      </header>
    `;
  }
}

customElements.define('page-header', PageHeader);

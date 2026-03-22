import { LitElement, html } from 'lit';

export class AppSidebar extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    activePage: { type: String },
    collapsed: { type: Boolean },
    userRole: { type: String },
  };

  constructor() {
    super();
    this.activePage = 'dashboard';
    this.collapsed = false;
    this.userRole = 'customer';
  }

  get menuItems() {
    const adminOnly = ['user', 'logs'];
    const allItems = [
      { id: 'dashboard', label: 'Dashboard', icon: '📊' },
      { id: 'reservation', label: 'Reservation', icon: '📅' },
      { id: 'booking', label: 'Booking', icon: '📋' },
      { id: 'ticket', label: 'Ticket', icon: '🎫' },
      { id: 'user', label: 'User', icon: '👤' },
      { id: 'logs', label: 'Logs', icon: '📝' },
      { id: 'payments', label: 'Payments', icon: '💳' },
      { id: 'settings', label: 'Settings', icon: '⚙️' },
    ];
    return this.userRole === 'customer'
      ? allItems.filter(i => !adminOnly.includes(i.id))
      : allItems;
  }

  handleNavClick(pageId) {
    this.activePage = pageId;
    this.dispatchEvent(new CustomEvent('page-change', {
      detail: { page: pageId },
      bubbles: true,
      composed: true,
    }));
  }

  render() {
    return html`
      <div class="flex flex-col h-full bg-zinc-950 border-r border-zinc-800 transition-all duration-300 ${this.collapsed ? 'w-16' : 'w-64'}">
        <div class="h-16 flex items-center justify-center border-b border-zinc-800 px-4">
          <span class="${this.collapsed ? 'hidden' : ''} font-semibold text-zinc-100">Dashboard</span>
          <span class="${this.collapsed ? '' : 'hidden'} font-semibold text-zinc-100">D</span>
        </div>
        <nav class="flex-1 overflow-y-auto py-2">
          ${this.menuItems.map(item => html`
            <div
              class="flex items-center px-4 py-2.5 cursor-pointer transition-colors ${this.activePage === item.id ? 'text-white bg-zinc-800' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'}"
              @click=${() => this.handleNavClick(item.id)}
            >
              <span class="text-base">${item.icon}</span>
              <span class="${this.collapsed ? 'hidden' : 'ml-3 text-sm'}">${item.label}</span>
            </div>
          `)}
        </nav>
      </div>
    `;
  }
}

customElements.define('app-sidebar', AppSidebar);

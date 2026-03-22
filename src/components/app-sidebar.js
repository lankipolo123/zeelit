import { LitElement, html } from 'lit';
import { ICONS } from '/src/components/dashboard-icons.js';

export class AppSidebar extends LitElement {
    static properties = { activePage: {}, collapsed: {}, userRole: {} };

    constructor() {
        super();
        this.activePage = 'dashboard';
        this.collapsed = false;
        this.userRole = 'customer';
    }

    get menuItems() {
        const adminOnly = ['user', 'logs'];
        const allItems = [
            { id: 'dashboard', label: 'Dashboard', icon: ICONS.dashboard },
            { id: 'reservation', label: 'Reservation', icon: ICONS.calendar },
            { id: 'booking', label: 'Booking', icon: ICONS.booking },
            { id: 'ticket', label: 'Ticket', icon: ICONS.ticket },
            { id: 'user', label: 'User', icon: ICONS.user },
            { id: 'logs', label: 'Logs', icon: ICONS.logs },
            { id: 'payments', label: 'Payments', icon: ICONS.payments },
            { id: 'settings', label: 'Settings', icon: ICONS.settings }
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
            composed: true
        }));
    }

    render() {
        return html`
      <div class="flex flex-col h-full bg-white border-r border-gray-300 transition-all duration-300 ${this.collapsed ? 'w-16' : 'w-64'}">
        <div class="h-20 flex items-center justify-center border-b border-gray-300">
          <img src="/assets/logoExtended.svg" class="${this.collapsed ? 'hidden' : ''}" />
          <img src="/assets/logoCollapse.svg" class="${this.collapsed ? '' : 'hidden'}" />
        </div>
        <nav class="flex-1 overflow-y-auto">
          ${this.menuItems.map(item => html`
            <div
              class="flex items-center px-4 py-2 cursor-pointer hover:text-red-600 ${this.activePage === item.id ? 'text-red-800 font-bold' : 'text-gray-700'}"
              @click=${() => this.handleNavClick(item.id)}
            >
              <span class="mr-3">${item.icon}</span>
              <span class="${this.collapsed ? 'hidden' : ''}">${item.label}</span>
            </div>
          `)}
        </nav>
      </div>
    `;
    }
}

customElements.define('app-sidebar', AppSidebar);
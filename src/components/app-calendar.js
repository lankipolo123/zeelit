import { LitElement, html } from 'lit';

export class AppCalendar extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    value: { type: String },
    _year: { state: true },
    _month: { state: true },
  };

  constructor() {
    super();
    this.value = '';
    const now = new Date();
    this._year = now.getFullYear();
    this._month = now.getMonth();
  }

  willUpdate(changed) {
    if (changed.has('value') && this.value) {
      const d = new Date(this.value);
      if (!isNaN(d)) {
        this._year = d.getFullYear();
        this._month = d.getMonth();
      }
    }
  }

  get _days() {
    const first = new Date(this._year, this._month, 1);
    const last = new Date(this._year, this._month + 1, 0);
    const startDay = first.getDay();
    const totalDays = last.getDate();
    const days = [];

    for (let i = 0; i < startDay; i++) days.push(null);
    for (let d = 1; d <= totalDays; d++) days.push(d);
    return days;
  }

  get _monthName() {
    return new Date(this._year, this._month).toLocaleString('default', { month: 'long' });
  }

  _prevMonth() {
    if (this._month === 0) { this._month = 11; this._year--; }
    else this._month--;
  }

  _nextMonth() {
    if (this._month === 11) { this._month = 0; this._year++; }
    else this._month++;
  }

  _selectDay(day) {
    if (!day) return;
    const date = `${this._year}-${String(this._month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    this.value = date;
    this.dispatchEvent(new CustomEvent('app-change', {
      detail: { value: date },
      bubbles: true, composed: true,
    }));
  }

  _isSelected(day) {
    if (!day || !this.value) return false;
    const date = `${this._year}-${String(this._month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return date === this.value;
  }

  _isToday(day) {
    if (!day) return false;
    const now = new Date();
    return day === now.getDate() && this._month === now.getMonth() && this._year === now.getFullYear();
  }

  render() {
    const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

    return html`
      <div class="w-72 rounded-lg p-4" style="border: 1px solid var(--border); background: var(--bg-card);">
        <div class="flex items-center justify-between mb-3">
          <button
            class="w-8 h-8 rounded-md inline-flex items-center justify-center cursor-pointer transition-colors"
            style="color: var(--fg-muted); background: transparent; border: none;"
            @mouseenter=${(e) => e.currentTarget.style.background = 'var(--bg-muted)'}
            @mouseleave=${(e) => e.currentTarget.style.background = 'transparent'}
            @click=${this._prevMonth}
          ><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg></button>
          <span class="text-sm font-semibold" style="color: var(--fg)">${this._monthName} ${this._year}</span>
          <button
            class="w-8 h-8 rounded-md inline-flex items-center justify-center cursor-pointer transition-colors"
            style="color: var(--fg-muted); background: transparent; border: none;"
            @mouseenter=${(e) => e.currentTarget.style.background = 'var(--bg-muted)'}
            @mouseleave=${(e) => e.currentTarget.style.background = 'transparent'}
            @click=${this._nextMonth}
          ><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg></button>
        </div>
        <div class="grid grid-cols-7 gap-0.5 mb-1">
          ${weekdays.map(d => html`
            <div class="h-8 flex items-center justify-center text-xs font-medium" style="color: var(--fg-subtle)">${d}</div>
          `)}
        </div>
        <div class="grid grid-cols-7 gap-0.5">
          ${this._days.map(day => day === null
            ? html`<div class="h-8"></div>`
            : html`
              <button
                class="h-8 w-full rounded-md text-sm cursor-pointer transition-colors inline-flex items-center justify-center"
                style="${this._isSelected(day)
                  ? 'background: var(--primary); color: var(--primary-fg); font-weight: 600;'
                  : this._isToday(day)
                    ? 'background: var(--bg-muted); color: var(--fg); font-weight: 600; border: none;'
                    : 'background: transparent; color: var(--fg); border: none;'}"
                @mouseenter=${(e) => { if (!this._isSelected(day)) e.currentTarget.style.background = 'var(--bg-muted)'; }}
                @mouseleave=${(e) => { if (!this._isSelected(day)) e.currentTarget.style.background = this._isToday(day) ? 'var(--bg-muted)' : 'transparent'; }}
                @click=${() => this._selectDay(day)}
              >${day}</button>
            `
          )}
        </div>
      </div>
    `;
  }
}

customElements.define('app-calendar', AppCalendar);

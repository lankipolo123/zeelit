export const COMPONENTS = [
  { id: 'button', label: 'Button', category: 'Actions' },
  { id: 'input', label: 'Input', category: 'Forms' },
  { id: 'toggle', label: 'Toggle', category: 'Forms' },
  { id: 'card', label: 'Card', category: 'Layout' },
  { id: 'separator', label: 'Separator', category: 'Layout' },
  { id: 'badge', label: 'Badge', category: 'Data Display' },
  { id: 'alert', label: 'Alert', category: 'Feedback' },
  { id: 'skeleton', label: 'Skeleton', category: 'Feedback' },
  { id: 'tabs', label: 'Tabs', category: 'Navigation' },
  { id: 'toast', label: 'Toast', category: 'Feedback' },
  { id: 'dialog', label: 'Dialog', category: 'Overlay' },
];

export const CATEGORIES = [...new Set(COMPONENTS.map(c => c.category))];

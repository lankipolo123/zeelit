export const COMPONENTS = [
  { id: 'button', label: 'Button', category: 'Actions' },
  { id: 'dropdown', label: 'Dropdown', category: 'Actions' },
  { id: 'input', label: 'Input', category: 'Forms' },
  { id: 'textarea', label: 'Textarea', category: 'Forms' },
  { id: 'checkbox', label: 'Checkbox', category: 'Forms' },
  { id: 'radio', label: 'Radio Group', category: 'Forms' },
  { id: 'toggle', label: 'Toggle', category: 'Forms' },
  { id: 'select', label: 'Select', category: 'Forms' },
  { id: 'slider', label: 'Slider', category: 'Forms' },
  { id: 'card', label: 'Card', category: 'Layout' },
  { id: 'separator', label: 'Separator', category: 'Layout' },
  { id: 'accordion', label: 'Accordion', category: 'Layout' },
  { id: 'avatar', label: 'Avatar', category: 'Data Display' },
  { id: 'badge', label: 'Badge', category: 'Data Display' },
  { id: 'progress', label: 'Progress', category: 'Data Display' },
  { id: 'tooltip', label: 'Tooltip', category: 'Data Display' },
  { id: 'alert', label: 'Alert', category: 'Feedback' },
  { id: 'skeleton', label: 'Skeleton', category: 'Feedback' },
  { id: 'toast', label: 'Toast', category: 'Feedback' },
  { id: 'tabs', label: 'Tabs', category: 'Navigation' },
  { id: 'breadcrumb', label: 'Breadcrumb', category: 'Navigation' },
  { id: 'dialog', label: 'Dialog', category: 'Overlay' },
  { id: 'sheet', label: 'Sheet', category: 'Overlay' },
  { id: 'popover', label: 'Popover', category: 'Overlay' },
  { id: 'data-table', label: 'Data Table', category: 'Data Display' },
  { id: 'pagination', label: 'Pagination', category: 'Navigation' },
  { id: 'hover-card', label: 'Hover Card', category: 'Data Display' },
  { id: 'collapsible', label: 'Collapsible', category: 'Layout' },
  { id: 'scroll-area', label: 'Scroll Area', category: 'Layout' },
  { id: 'context-menu', label: 'Context Menu', category: 'Overlay' },
  { id: 'carousel', label: 'Carousel', category: 'Data Display' },
];

export const CATEGORIES = [...new Set(COMPONENTS.map(c => c.category))];

export function meta(id, source, pageSource) {
  const tag = `app-${id}`;
  return {
    source,
    fileName: `${tag}.js`,
    importPath: `@/components/${tag}.js`,
    tagName: tag,
    pageSource,
    pageFileName: `${id}-page.js`,
  };
}

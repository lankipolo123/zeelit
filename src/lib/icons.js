import { createElement } from 'lucide';
import {
  Check,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ChevronsLeft,
  ChevronsRight,
  Search,
  X,
  Star,
  TrendingUp,
  TrendingDown,
  ArrowUpDown,
  CircleAlert,
  Info,
  Globe,
  Copy,
  Palette,
  Accessibility,
  Menu,
  Sun,
  Moon,
  Folder,
  FolderOpen,
  FileText,
} from 'lucide';

const ICONS = {
  'check': Check,
  'chevron-left': ChevronLeft,
  'chevron-right': ChevronRight,
  'chevron-down': ChevronDown,
  'chevron-up': ChevronUp,
  'chevrons-left': ChevronsLeft,
  'chevrons-right': ChevronsRight,
  'search': Search,
  'x': X,
  'star': Star,
  'trending-up': TrendingUp,
  'trending-down': TrendingDown,
  'arrow-up-down': ArrowUpDown,
  'circle-alert': CircleAlert,
  'info': Info,
  'globe': Globe,
  'copy': Copy,
  'palette': Palette,
  'accessibility': Accessibility,
  'menu': Menu,
  'sun': Sun,
  'moon': Moon,
  'folder': Folder,
  'folder-open': FolderOpen,
  'file-text': FileText,
};

class AppIcon extends HTMLElement {
  static get observedAttributes() {
    return ['name', 'stroke-width', 'fill'];
  }

  constructor() {
    super();
    this.style.display = 'inline-flex';
    this.style.alignItems = 'center';
    this.style.justifyContent = 'center';
    this.style.flexShrink = '0';
  }

  connectedCallback() {
    this._render();
  }

  attributeChangedCallback() {
    if (this.isConnected) this._render();
  }

  _render() {
    const name = this.getAttribute('name');
    const iconDef = ICONS[name];
    if (!iconDef) return;

    this.innerHTML = '';

    const svg = createElement(iconDef);
    svg.style.width = '100%';
    svg.style.height = '100%';

    const sw = this.getAttribute('stroke-width');
    if (sw) svg.setAttribute('stroke-width', sw);

    const fill = this.getAttribute('fill');
    if (fill) svg.setAttribute('fill', fill);

    this.appendChild(svg);
  }
}

customElements.define('app-icon', AppIcon);

export { ICONS, AppIcon };

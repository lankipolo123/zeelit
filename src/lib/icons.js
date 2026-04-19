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
  // Dashboard / nav icons
  LayoutDashboard,
  BarChart2,
  Users,
  PenLine,
  Image,
  Settings,
  CreditCard,
  LogOut,
  Plus,
  Home,
  Bell,
  Inbox,
  Mail,
  Calendar,
  Bookmark,
  Tag,
  Trash2,
  Edit,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  ShieldCheck,
  User,
  UserPlus,
  Package,
  Layers,
  Grid2x2,
  LayoutGrid,
  Sliders,
  Link,
  ExternalLink,
  Download,
  Upload,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  XCircle,
  HelpCircle,
  ChevronLeftSquare,
  ChevronRightSquare,
  ArrowLeft,
  ArrowRight,
  LogIn,
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
  // Dashboard / navigation
  'layout-dashboard': LayoutDashboard,
  'bar-chart-2': BarChart2,
  'users': Users,
  'pen-line': PenLine,
  'image': Image,
  'settings': Settings,
  'credit-card': CreditCard,
  'log-out': LogOut,
  'log-in': LogIn,
  'plus': Plus,
  'home': Home,
  'bell': Bell,
  'inbox': Inbox,
  'mail': Mail,
  'calendar': Calendar,
  'bookmark': Bookmark,
  'tag': Tag,
  'trash-2': Trash2,
  'edit': Edit,
  'eye': Eye,
  'eye-off': EyeOff,
  'lock': Lock,
  'unlock': Unlock,
  'shield-check': ShieldCheck,
  'user': User,
  'user-plus': UserPlus,
  'package': Package,
  'layers': Layers,
  'grid-2x2': Grid2x2,
  'layout-grid': LayoutGrid,
  'sliders': Sliders,
  'link': Link,
  'external-link': ExternalLink,
  'download': Download,
  'upload': Upload,
  'refresh-cw': RefreshCw,
  'alert-triangle': AlertTriangle,
  'check-circle': CheckCircle,
  'x-circle': XCircle,
  'help-circle': HelpCircle,
  'arrow-left': ArrowLeft,
  'arrow-right': ArrowRight,
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

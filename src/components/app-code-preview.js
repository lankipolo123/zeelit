import { LitElement, html } from 'lit';

export class AppCodePreview extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    code: { type: String },
    activeView: { type: String },
  };

  constructor() {
    super();
    this.code = '';
    this.activeView = 'preview';
    this._copied = false;
  }

  _setView(view) {
    this.activeView = view;
    this.requestUpdate();
  }

  _copyCode() {
    navigator.clipboard.writeText(this.code).then(() => {
      this._copied = true;
      this.requestUpdate();
      setTimeout(() => {
        this._copied = false;
        this.requestUpdate();
      }, 2000);
    });
  }

  _highlightCode(code) {
    return code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      // Comments
      .replace(/(\/\/.*)/g, '<span class="comment">$1</span>')
      // Strings
      .replace(/(&quot;|&#39;|`)(.*?)(\1)/g, '<span class="str">$1$2$3</span>')
      .replace(/(["'])((?:(?!\1).)*)\1/g, '<span class="str">$1$2$1</span>')
      // Keywords
      .replace(/\b(import|export|from|class|extends|const|let|var|return|if|else|new|this|static|get|set|constructor|super|function)\b/g, '<span class="kw">$1</span>')
      // HTML tags in template literals
      .replace(/(&lt;\/?)(app-[\w-]+|div|span|button|input|label|h[1-6]|p|nav|header|section|slot|svg|path|circle|line)/g, '<span class="tag">$1$2</span>')
      // Attributes
      .replace(/\s(class|type|placeholder|variant|size|disabled|checked|label|role|aria-[\w]+|style)=/g, ' <span class="attr">$1</span>=')
      // Numbers
      .replace(/\b(\d+)\b/g, '<span class="num">$1</span>')
      // Function calls
      .replace(/\b(html|css|customElements\.define|render|constructor|firstUpdated|dispatchEvent)\b/g, '<span class="fn">$1</span>');
  }

  render() {
    const isPreview = this.activeView === 'preview';

    return html`
      <div class="rounded-lg border border-zinc-800 overflow-hidden">
        <!-- Tab bar -->
        <div class="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/50 px-4">
          <div class="flex">
            <button
              @click="${() => this._setView('preview')}"
              class="px-4 py-2.5 text-sm font-medium transition-colors cursor-pointer ${isPreview ? 'text-zinc-100 border-b-2 border-white' : 'text-zinc-500 hover:text-zinc-300'}"
            >Preview</button>
            <button
              @click="${() => this._setView('code')}"
              class="px-4 py-2.5 text-sm font-medium transition-colors cursor-pointer ${!isPreview ? 'text-zinc-100 border-b-2 border-white' : 'text-zinc-500 hover:text-zinc-300'}"
            >Code</button>
          </div>
          ${!isPreview ? html`
            <button @click="${this._copyCode}" class="text-xs text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer flex items-center gap-1">
              ${this._copied ? html`
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                Copied!
              ` : html`
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke-width="2"/><path stroke-width="2" d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
                Copy
              `}
            </button>
          ` : ''}
        </div>

        <!-- Content -->
        ${isPreview ? html`
          <div class="p-8 flex items-center justify-center min-h-[200px] bg-zinc-950">
            <slot></slot>
          </div>
        ` : html`
          <div class="code-block max-h-[500px] overflow-auto rounded-none border-0" .innerHTML="${this._highlightCode(this.code)}"></div>
        `}
      </div>
    `;
  }
}

customElements.define('app-code-preview', AppCodePreview);

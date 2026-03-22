const TAG_NAMES = 'app-[\\w-]+|div|span|button|input|label|h[1-6]|p|nav|header|section|svg|path|circle|line';
const ATTRS = 'type|placeholder|variant|size|disabled|checked|label|role|style|alertTitle|cardTitle|description|orientation|width|height|rounded|open|dialogTitle';
const KW = 'import|export|from|class|extends|const|let|var|return|if|else|new|this|static|get|set|constructor|super|function';

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export function highlightCode(code) {
  const lines = code.split('\n');
  return lines.map(line => {
    if (/^\s*\/\//.test(line)) {
      return `<span class="comment">${esc(line)}</span>`;
    }
    if (/^\s*<!--/.test(line)) {
      return `<span class="comment">${esc(line)}</span>`;
    }

    let result = '';
    let i = 0;
    while (i < line.length) {
      if (line[i] === '"' || line[i] === "'") {
        const q = line[i];
        let end = line.indexOf(q, i + 1);
        if (end === -1) end = line.length - 1;
        result += `<span class="str">${esc(line.slice(i, end + 1))}</span>`;
        i = end + 1;
        continue;
      }

      if (line[i] === '<') {
        const m = line.slice(i).match(new RegExp(`^(<\\/?)(${TAG_NAMES})((?:\\s+[^>]*)?>)`));
        if (m) {
          const highlightedRest = esc(m[3]).replace(
            new RegExp(`(${ATTRS})(=)`, 'g'),
            '<span class="attr">$1</span>$2'
          );
          result += `<span class="tag">${esc(m[1])}${esc(m[2])}</span>${highlightedRest}`;
          i += m[0].length;
          continue;
        }
        result += esc(line[i]);
        i++;
        continue;
      }

      const wordMatch = line.slice(i).match(/^[a-zA-Z_$][\w$]*/);
      if (wordMatch) {
        const word = wordMatch[0];
        if (new RegExp(`^(${KW})$`).test(word)) {
          result += `<span class="kw">${esc(word)}</span>`;
        } else {
          result += esc(word);
        }
        i += word.length;
        continue;
      }

      const numMatch = line.slice(i).match(/^\d+/);
      if (numMatch) {
        result += `<span class="num">${numMatch[0]}</span>`;
        i += numMatch[0].length;
        continue;
      }

      result += esc(line[i]);
      i++;
    }
    return result;
  }).join('\n');
}

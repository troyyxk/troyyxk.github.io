/* ==========================================================================
   Site UI behaviours
   --------------------------------------------------------------------------
   1. Sidebar WeChat QR panel
      The "WeChat" row behaves like a normal link when JavaScript is unavailable
      (it opens the QR image), and collapses into a small panel when it is.
   2. One-click copy for code blocks
      Every highlighted block gets a copy button in its top-right corner, in
      place of the theme's decorative "</>" badge.
   ========================================================================== */

(function () {
  function closePanel(toggle, panel) {
    panel.setAttribute('hidden', '');
    toggle.setAttribute('aria-expanded', 'false');
  }

  function openPanel(toggle, panel) {
    panel.removeAttribute('hidden');
    toggle.setAttribute('aria-expanded', 'true');
  }

  function init() {
    var toggles = document.querySelectorAll('[data-wechat-toggle]');

    Array.prototype.forEach.call(toggles, function (toggle) {
      toggle.addEventListener('click', function (event) {
        var panelId = toggle.getAttribute('aria-controls');
        var panel = panelId ? document.getElementById(panelId) : null;

        if (!panel) {
          return; // no panel to toggle - let the link open the image
        }

        event.preventDefault();

        if (panel.hasAttribute('hidden')) {
          openPanel(toggle, panel);
        } else {
          closePanel(toggle, panel);
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

/* ==========================================================================
   One-click copy for code blocks
   --------------------------------------------------------------------------
   Each code block gets a button in the corner the theme's decorative "</>"
   badge used to occupy. The badge is hidden only once the button is in place
   (the `has-code-copy` class), so nothing is lost when the script cannot run.
   The label follows the language switch through the site's lang-en / lang-zh
   spans, and reports success for a moment before reverting.
   ========================================================================== */

(function () {
  var COPIED_MS = 1600;

  function codeText(block) {
    var code = block.querySelector('code');
    return (code || block).textContent;
  }

  function legacyCopy(text) {
    // A hidden textarea plus the pre-Clipboard-API copy command.
    return new Promise(function (resolve, reject) {
      var area = document.createElement('textarea');
      area.value = text;
      area.setAttribute('readonly', '');
      area.style.position = 'fixed';
      area.style.top = '-1000px';
      document.body.appendChild(area);
      area.select();

      var copied = false;
      try {
        copied = document.execCommand('copy');
      } catch (error) {
        copied = false;
      }

      document.body.removeChild(area);
      copied ? resolve() : reject(new Error('copy failed'));
    });
  }

  function writeClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      // Rejected when the browser is not allowed to write (no permission, a
      // permissions policy, an unfocused document) - the legacy path still
      // works there, so fall through to it rather than giving up.
      return navigator.clipboard.writeText(text).catch(function () {
        return legacyCopy(text);
      });
    }

    return legacyCopy(text);
  }

  function buildButton() {
    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'code-copy';
    button.innerHTML =
      '<i class="fa-solid fa-copy" aria-hidden="true"></i>' +
      '<span class="code-copy__idle">' +
        '<span class="lang-en lang-inline">Copy</span>' +
        '<span class="lang-zh lang-inline">复制</span>' +
      '</span>' +
      '<span class="code-copy__done">' +
        '<span class="lang-en lang-inline">Copied</span>' +
        '<span class="lang-zh lang-inline">已复制</span>' +
      '</span>';
    return button;
  }

  function init() {
    var blocks = document.querySelectorAll('div.highlighter-rouge, figure.highlight');

    Array.prototype.forEach.call(blocks, function (block) {
      if (!block.querySelector('code') || block.querySelector('.code-copy')) {
        return;
      }

      var button = buildButton();
      var timer = null;

      button.addEventListener('click', function () {
        writeClipboard(codeText(block)).then(function () {
          button.classList.add('is-copied');
          window.clearTimeout(timer);
          timer = window.setTimeout(function () {
            button.classList.remove('is-copied');
          }, COPIED_MS);
        }, function () {
          // Clipboard refused (no permission, insecure origin): stay quiet
          // rather than claiming the code was copied.
        });
      });

      block.classList.add('has-code-copy');
      block.appendChild(button);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

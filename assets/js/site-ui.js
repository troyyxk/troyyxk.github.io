/* ==========================================================================
   Sidebar WeChat QR panel
   --------------------------------------------------------------------------
   The "WeChat" row behaves like a normal link when JavaScript is unavailable
   (it opens the QR image), and collapses into a small panel when it is.
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

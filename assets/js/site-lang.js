/* ==========================================================================
   Language switcher (EN / 中文)
   --------------------------------------------------------------------------
   The actual show/hide work is done in CSS through the `data-site-lang`
   attribute on <html> (see _sass/layout/_redesign.scss). This script only
   remembers the reader's choice and keeps the buttons in sync. The attribute
   is also set inline in <head> so the correct language paints on first frame.
   ========================================================================== */

(function () {
  var STORAGE_KEY = 'site-lang';
  var DEFAULT_LANG = 'en';

  function normalize(lang) {
    return lang === 'zh' ? 'zh' : 'en';
  }

  function readStoredLang() {
    try {
      return normalize(window.localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG);
    } catch (error) {
      return DEFAULT_LANG;
    }
  }

  function storeLang(lang) {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      /* storage unavailable (private mode) - the choice just won't persist */
    }
  }

  function syncButtons(lang) {
    var buttons = document.querySelectorAll('[data-set-lang]');

    Array.prototype.forEach.call(buttons, function (button) {
      var isActive = normalize(button.getAttribute('data-set-lang')) === lang;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  function syncDocumentTitle(lang) {
    var holder = document.querySelector('[data-page-title-en]');
    if (!holder) {
      return;
    }

    var title = holder.getAttribute(lang === 'zh' ? 'data-page-title-zh' : 'data-page-title-en');
    if (title) {
      document.title = title;
    }
  }

  function applyLang(lang) {
    document.documentElement.setAttribute('data-site-lang', lang);
    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-Hans' : 'en');
    syncButtons(lang);
    syncDocumentTitle(lang);
  }

  function init() {
    var buttons = document.querySelectorAll('[data-set-lang]');

    Array.prototype.forEach.call(buttons, function (button) {
      button.addEventListener('click', function (event) {
        var lang = normalize(event.currentTarget.getAttribute('data-set-lang'));
        storeLang(lang);
        applyLang(lang);
      });
    });

    applyLang(readStoredLang());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

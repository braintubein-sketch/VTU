/* ============================================
   Braintube – Page Loader Script
   Auto-injects loader HTML and handles dismissal
   ============================================ */

(function () {
  // Add loading class to body
  document.body.classList.add('bt-loading');

  // Create loader HTML
  var loader = document.createElement('div');
  loader.className = 'bt-loader';
  loader.id = 'btLoader';
  loader.innerHTML =
    '<div class="bt-loader-particles">' +
    '<div class="particle"></div><div class="particle"></div>' +
    '<div class="particle"></div><div class="particle"></div>' +
    '<div class="particle"></div><div class="particle"></div>' +
    '</div>' +
    '<div class="bt-loader-logo">' +
    '<div class="logo-ring-2"></div>' +
    '<div class="logo-ring"></div>' +
    '<div class="logo-mark">B</div>' +
    '</div>' +
    '<div class="bt-loader-brand"><span>Braintube</span></div>' +
    '<div class="bt-loader-progress"><div class="bar"></div></div>' +
    '<div class="bt-loader-tagline">Engineering Made Simple</div>';

  // Insert at very beginning of body
  document.body.insertBefore(loader, document.body.firstChild);

  // Hide loader when page is ready
  function hideLoader() {
    var el = document.getElementById('btLoader');
    if (el) {
      el.classList.add('hide');
      document.body.classList.remove('bt-loading');
      // Remove from DOM after animation
      setTimeout(function () {
        if (el.parentNode) el.parentNode.removeChild(el);
      }, 600);
    }
  }

  // Dismiss on window load (or after max 4 seconds)
  window.addEventListener('load', function () {
    setTimeout(hideLoader, 400);
  });

  // Safety timeout - never show loader for more than 4 seconds
  setTimeout(hideLoader, 4000);
})();

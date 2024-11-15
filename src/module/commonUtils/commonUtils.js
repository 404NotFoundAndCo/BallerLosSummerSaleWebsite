/* all utils that are used in all html pages
   ToDO
   accessibility
   switch pages ref issue #5
   light/dark mode
*/

// JavaScript for Light/Dark Mode Toggle
const toggleModeButton = document.getElementById('toggle-mode');
toggleModeButton.addEventListener('click', () => {
  commonUtils.toggleLightDarkMode();
});

const commonUtils = {
  // JavaScript for Light/Dark Mode Toggle
  toggleLightDarkMode: function () {
    // Save the currently active button to session storage
    const activeButtonId = document.querySelector('nav a.active')?.getAttribute('href');
    sessionStorage.setItem('activeButton', activeButtonId);

    // Toggle mode classes
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');

    // Notify the iframe of the mode change
    const iframe = document.querySelector('iframe'); // Replace with appropriate selector
    if (iframe) {
      const mode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
      iframe.contentWindow.postMessage({ mode: mode }, '*');
    }

    // Restore the active button after mode switch using a slight delay to ensure DOM updates
    if (activeButtonId) {
      setTimeout(() => {
        document.querySelector(`nav a[href='${activeButtonId}']`)?.classList.add('active');
      }, 10);
    }
  },

  // JavaScript for button active state
  setActiveButton: function () {
    document.querySelectorAll('nav a, #toggle-mode').forEach(function (button) {
      button.addEventListener('click', function () {
        document.querySelectorAll('nav a, #toggle-mode').forEach(function (btn) {
          btn.classList.remove('active');
        });
        this.classList.add('active');
        // Save the current active state to session storage
        sessionStorage.setItem('activeButton', this.getAttribute('href'));
      });
    });
  },

  // JavaScript for changing iframe content
  loadIframeContent: function (page) {
    const iframe = document.getElementById('contentFrame');
    iframe.src = page;
    sessionStorage.setItem('iframeSrc', page);
  },

  // JavaScript to restore iframe content and active button state on page reload
  restoreIframeAndActiveButton: function () {
    document.addEventListener('DOMContentLoaded', () => {
      // Restore iframe source
      const savedIframeSrc = sessionStorage.getItem('iframeSrc');
      if (savedIframeSrc) {
        document.getElementById('contentFrame').src = savedIframeSrc;
      }

      // Restore active button
      const activeButtonId = sessionStorage.getItem('activeButton');
      if (activeButtonId) {
        document.querySelector(`nav a[href='${activeButtonId}']`)?.classList.add('active');
      }
    });
  },
};

// Event listeners setup on page load
document.addEventListener('DOMContentLoaded', () => {
  commonUtils.setActiveButton();
  commonUtils.restoreIframeAndActiveButton();
});

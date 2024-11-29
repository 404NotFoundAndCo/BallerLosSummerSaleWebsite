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

  // Function to load content dynamically based on the hash
  loadContentFromHash: async function () {
    const hash = window.location.hash;
    const contentContainer = document.getElementById('content');
    if (hash) {
      let page = '';

      // Determine which content to load based on the hash
      switch (hash) {
        case '#firma':
          page = 'module/company/company.html';
          break;
        case '#produkt':
          page = 'module/product/product.html';
          break;
        case '#team':
          page = 'module/team/team.html';
          break;
        case '#kontakt':
          page = 'module/contactForm/contactForm.html';
          break;
        case '#impressum':
          page = 'impressum.html';
          break;
        case '#datenschutz':
          page = 'datenschutz.html';
          break;
        default:
          contentContainer.innerHTML = '<p>Willkommen! Wählen Sie eine Seite aus dem Menü aus.</p>';
          return;
      }

      // Load the page content dynamically
      try {
        const response = await fetch(page);
        if (response.ok) {
          const html = await response.text();
          contentContainer.innerHTML = html;
        } else {
          contentContainer.innerHTML = '<p>Inhalt konnte nicht geladen werden.</p>';
        }
      } catch (error) {
        contentContainer.innerHTML = '<p>Fehler beim Laden des Inhalts.</p>';
      }
    }
  }
};

// Event listeners setup on page load
document.addEventListener('DOMContentLoaded', () => {
  commonUtils.setActiveButton();
});

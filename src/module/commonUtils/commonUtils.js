/*all utils that are used in all html pages
    ToDO
    accessibility
    switch pages ref issue #5
    light/dark mode
*/

// JavaScript for Light/Dark Mode Toggle
const toggleModeButton = document.getElementById('toggle-mode');
toggleModeButton.addEventListener('click', () => {
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
});

// JavaScript for button active state
function setActiveButton() {
  document.querySelectorAll('nav a, #toggle-mode').forEach(function(button) {
    button.addEventListener('click', function() {
      document.querySelectorAll('nav a, #toggle-mode').forEach(function(btn) {
        btn.classList.remove('active');
      });
      this.classList.add('active');
      // Save the current active state to session storage
      sessionStorage.setItem('activeButton', this.getAttribute('href'));
    });
  });
}

//Javascript for changing iframe content
function loadIframeContent(page) {
  document.getElementById('contentFrame').src = page;
}
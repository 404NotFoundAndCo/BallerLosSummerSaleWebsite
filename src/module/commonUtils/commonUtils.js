/*all utils that are used in all html pages
    ToDO
    accessibility
    switch pages ref issue #5
    light/dark mode
*/

// JavaScript for Light/Dark Mode Toggle
// example: <button id="toggle-mode" class="lightbulb">💡</button>
const toggleModeButton = document.getElementById('toggle-mode');
toggleModeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
});

//Javascript for changing iframe content
function loadIframeContent(page) {
  document.getElementById('contentFrame').src = page;
}

/* JavaScript for button active state */
function setActiveButton() {
  document.querySelectorAll('nav a, #toggle-mode').forEach(function(button) {
    button.addEventListener('click', function() {
      document.querySelectorAll('nav a, #toggle-mode').forEach(function(btn) {
        btn.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
}
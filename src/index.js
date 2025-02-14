import { dict } from "./i18n/dict.js";

//JavaScript for Light/Dark Mode Toggle
function toggleLightDarkMode() {
    //Save the currently active button to session storage
  const activeButtonId = document.querySelector('nav a.active')?.getAttribute('href');
  sessionStorage.setItem('activeButton', activeButtonId);

  //Toggle mode classes
  const currentMode = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
  const newMode = currentMode === 'dark-mode' ? 'light-mode' : 'dark-mode';

  document.body.classList.remove(currentMode);
  document.body.classList.add(newMode);

  //Save the new mode to local storage
  localStorage.setItem('themeMode', newMode);

  //Restore the active button after mode switch using a slight delay to ensure DOM updates
  if (activeButtonId) {
    setTimeout(() => {
      document.querySelector(`nav a[href='${activeButtonId}']`)?.classList.add('active');
    }, 10);
    sessionStorage.setItem('activeButton', activeButtonId);
  }
};

function loadSavedMode() {
    //Load the saved mode from local storage
    const savedMode = localStorage.getItem('themeMode');

    if (savedMode) {
      document.body.classList.add(savedMode);
    } else {
      //Default to light mode if nothing is saved
      document.body.classList.add('light-mode');
    }

    //Load the active button from session storage
    const activeButtonId = sessionStorage.getItem('activeButton');
    if (activeButtonId) {
      document.querySelector(`nav a[href='${activeButtonId}']`)?.classList.add('active');
    }
};

//Function to add 'click' listeners to each button
function setActiveButton() {
    //Select all buttons or links that should be affected
    document.querySelectorAll('nav a, #toggle-mode').forEach(function (button) {
        button.addEventListener('click', function () {
        //Remove 'active' class from all buttons/links
        document.querySelectorAll('nav a, #toggle-mode').forEach(function (btn) {
            btn.classList.remove('active');
        });
        //Add 'active' class to the clicked button
        this.classList.add('active');

        //Save the current active state to session storage
        if (this.hasAttribute('href')) {
            sessionStorage.setItem('activeButton', this.getAttribute('href'));
        } else if (this.id === 'toggle-mode') {
            sessionStorage.setItem('activeButton', this.id);
        }
        });
    });
}

//Function to load the active button from session storage on page load
function loadActiveButton() {
    //Retrieve the active button identifier from session storage
  const activeButtonIdentifier = sessionStorage.getItem('activeButton');
  if (activeButtonIdentifier) {
    //Find the button/link with the matching href or ID
    let activeButton = document.querySelector(`nav a[href="${activeButtonIdentifier}"]`);
    
    if (!activeButton) {
      activeButton = document.querySelector(`#${activeButtonIdentifier}`);
    }
    
    if (activeButton) {
      //Add 'active' class to the button found
      activeButton.classList.add('active');
    } else {
      console.error("No button found for identifier:", activeButtonIdentifier);
    }
  }
}

//Function to load content dynamically based on the hash
async function loadContentFromHash(translator, lang) {
    const hash = window.location.hash;
    const contentContainer = document.getElementById('content');
    let page = '';

    //Determine which content to load based on the hash
    switch (hash) {
        case '#firma':
            page = 'module/company/company.html';
            break;
        case '#produkt':
            page = 'module/product/product.html';
            break;
        case '#kontakt':
            page = 'module/contactForm/contactForm.html';
            break;
        case '#datenschutz':
            page = 'datenschutz.html';
            break;
        default:
            page = 'module/company/company.html';
    }

    //Load the page content dynamically
    try {
    const response = await fetch(page);
    if (response.ok) {
        const html = await response.text();
        contentContainer.innerHTML = html;

        translator.lang(lang);
    } else {
        contentContainer.innerHTML = '<p>Inhalt konnte nicht geladen werden.</p>';
    }
    } catch (error) {
    contentContainer.innerHTML = '<p>Fehler beim Laden des Inhalts.</p>';
    }
}

document.addEventListener('DOMContentLoaded', async function () {
  //detect language used in browser
  var locale = navigator.language,
      translator = $('body').translate({lang: locale, t: dict});

  window.addEventListener('hashchange', function () {
    loadContentFromHash(translator, locale);
  });
  loadContentFromHash(translator, locale);
  setActiveButton();
  loadSavedMode();
  loadActiveButton();

  document.getElementById('toggle-mode')
  .addEventListener('click', function () {
      toggleLightDarkMode();
  });

  if (window.location.hash === '') {
    document.getElementById('navCompany').click();
  }

  $('#btnTranslate')
  .on('click', function () {
    locale = locale === 'en' ? 'de': 'en';

    translator.lang(locale);

    if (locale === 'en') {
      $('#btnTranslate').text('\ud83c\uddec\ud83c\udde7');
    } else {
      $('#btnTranslate').text('\ud83c\udde9\ud83c\uddea');
    }
  });
});
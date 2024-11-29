import { commonUtils } from './module/commonUtils/commonUtils.js'

document.addEventListener('DOMContentLoaded', function () {
    commonUtils.setActiveButton();
    commonUtils.restoreIframeAndActiveButton();

    // JavaScript for Light/Dark Mode Toggle
    document.getElementById('toggle-mode')
    .addEventListener('click', function () {
        commonUtils.toggleLightDarkMode();
    });

    // Function to get the iframe content based on the hash
    function loadContentFromHash() {
    const hash = window.location.hash;
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
            page = 'about:blank'; // Default case if no valid hash is found
        }

        // Load the content into the iframe
        commonUtils.loadIframeContent(page);
    }
    }

    // Event listener for hash change
    window.addEventListener('hashchange', loadContentFromHash);

    // Event listener for DOM content loaded
    document.addEventListener('DOMContentLoaded', () => {
    // Restore iframe content from the URL hash on page load
    loadContentFromHash();

    // Initialize button active state handlers
    commonUtils.setActiveButton();
    });
});
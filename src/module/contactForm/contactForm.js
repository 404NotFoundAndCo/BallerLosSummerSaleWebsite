// EmailJS initialization
(function () {
    emailjs.init({
        publicKey: 'Test',
    });
})();

function initializeContactForm() {
    const form = document.getElementById('contact-form');

    if (!form) {
        console.error('The contact form was not found on the page.');
        return;
    }

    const buttonSubmit = form.querySelector('.buttonSubmit');
    const messageContainer = document.createElement('div');
    form.appendChild(messageContainer);

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Disable submit button and show loading message
        buttonSubmit.disabled = true;
        messageContainer.innerHTML = '<p>Senden...</p>';

        // Collect field values individually
        const params = {
            first_name: document.getElementById('first-name').value,
            last_name: document.getElementById('last-name').value,
            user_email: document.getElementById('email').value,
            message: document.getElementById('message').value,
        };

        // Send the email using emailjs.send()
        emailjs
            .send('Test', 'Test', params, {
                publicKey: 'Test', // Optional: Pass the public key here as well
            })
            .then(function (response) {
                console.log('E-Mail wurde erfolgreich gesendet!', response.status, response.text);
                messageContainer.innerHTML = '<p class="success">Vielen Dank für Ihre Nachricht! Wir melden uns bald bei Ihnen.</p>';
                form.reset();
            })
            .catch(function (error) {
                console.error('Fehler beim Senden der E-Mail:', error);
                messageContainer.innerHTML = '<p class="error">Entschuldigung, ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.</p>';
            })
            .finally(function () {
                buttonSubmit.disabled = false;
            });
    });
}

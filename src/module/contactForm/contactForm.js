function SendMail() {
    const form = document.getElementById('contact-form');

    console.log("Sending mail");

    if (!form) {
        console.error('The contact form was not found on the page.');
        return;
    }

    const buttonSubmit = form.querySelector('.buttonSubmit');
    let messageContainer = form.querySelector('.message-container'); // Check for existing container

    if (!messageContainer) {
        messageContainer = document.createElement('div');
        messageContainer.className = 'message-container';
        form.appendChild(messageContainer);
    }

    let isSubmitting = false; // Flag to prevent multiple submissions

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        if (isSubmitting) {
            console.warn('Form is already being submitted.');
            return;
        }

        isSubmitting = true; // Set flag to true to prevent multiple submissions

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

        try {
            // Send the data to the backend server
            const response = await fetch('http://localhost:3000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('E-Mail wurde erfolgreich gesendet!', result);
                messageContainer.innerHTML = '<p class="success">Vielen Dank für Ihre Nachricht! Wir melden uns bald bei Ihnen.</p>';
                form.reset();
            } else {
                const error = await response.json();
                console.error('Fehler beim Senden der E-Mail:', error);
                messageContainer.innerHTML = '<p class="error">Entschuldigung, ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.</p>';
            }
        } catch (error) {
            console.error('Fehler beim Senden der E-Mail:', error);
            messageContainer.innerHTML = '<p class="error">Entschuldigung, ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.</p>';
        } finally {
            buttonSubmit.disabled = false;
            isSubmitting = false; // Reset flag after submission is complete
        }
    });
}
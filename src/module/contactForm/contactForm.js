//ref issue #6

// EmailJS initialisieren
(function() {
    emailjs.init("YOUR_USER_ID");
})();

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
            .then(function(response) {
                console.log('E-Mail wurde erfolgreich gesendet!', response.status, response.text);
                alert("Vielen Dank für Ihre Nachricht! Wir werden uns so schnell wie möglich bei Ihnen melden.");
            }, function(error) {
                console.error('Fehler beim Senden der E-Mail:', error);
                alert("Entschuldigung, es gab ein Problem beim Versenden Ihrer Nachricht. Bitte versuchen Sie es erneut.");
            });
    });
});

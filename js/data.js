document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Show GIF while sending
    const gifContainer = document.getElementById('gif-container');
    gifContainer.style.display = 'block';
    document.querySelector('.contact-container').style.display = 'none';

    // Create an object with the form data
    const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value,
        hire: document.getElementById('hire').value
    };

    console.log('Sending data:', data); // Log the data being sent

    fetch('https://yourdomain.com/submit.php', { // Update the URL to your PHP script location
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('Response from server:', data); // Log the server response
        if (data.status === 'success') {
            alert('Your message has been sent!');
            window.location.href = "index.html"; // Redirect after successful submission
        } else {
            alert('There was an error sending your message: ' + data.message);
            document.querySelector('.contact-container').style.display = 'block'; // Show form again
        }
    })
    .catch(error => {
        console.error('Fetch error:', error);
        alert('There was an error sending your message. Check the console for details.');
        document.querySelector('.contact-container').style.display = 'block'; // Show form again
    });
});

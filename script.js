// script.js

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 50, // Adjust this value as needed
                behavior: 'smooth'
            });
        }
    });
});

// Form validation
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    let isValid = true;

    if (nameInput.value.trim() === '') {
        isValid = false;
        alert('Please enter your name.');
    }

    if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value.trim())) {
        isValid = false;
        alert('Please enter a valid email address.');
    }

    if (messageInput.value.trim() === '') {
        isValid = false;
        alert('Please enter a message.');
    }

    if (!isValid) {
        e.preventDefault(); // Prevent form submission if validation fails
    }
});

function isValidEmail(email) {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

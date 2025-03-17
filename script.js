document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            burger.classList.remove('active');
        });
    });

    // Contact form validation
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        let isValid = true;

        // Clear previous error messages
        document.querySelectorAll('.error').forEach(el => el.remove());

        if (!name) {
            addError('name', 'Please enter your name');
            isValid = false;
        }

        if (!email || !isValidEmail(email)) {
            addError('email', 'Please enter a valid email address');
            isValid = false;
        }

        if (!message) {
            addError('message', 'Please enter your message');
            isValid = false;
        }

        if (isValid) {
            // In a real implementation, you would send the form data to a server
            // This is just a placeholder
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        }
    });

    function addError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const error = document.createElement('div');
        error.className = 'error';
        error.style.color = 'red';
        error.style.fontSize = '0.8rem';
        error.textContent = message;
        field.parentNode.appendChild(error);
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
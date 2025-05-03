document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('.navlist a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Responsive Navigation Menu
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.querySelector('.navlist');

    menuIcon.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    // Scroll to Top Button
    const scrollToTopBtn = document.querySelector('.top a');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('active');
        } else {
            scrollToTopBtn.classList.remove('active');
        }
    });

    // Form Validation
    const contactForm = document.querySelector('.contact-form form');
    const notification = document.createElement('div');
    notification.className = 'notification';
    document.body.appendChild(notification);

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission for validation

        const name = this.querySelector('input[name="name"]').value;
        const email = this.querySelector('input[name="email"]').value;
        const mobile = this.querySelector('input[name="number"]').value;
        const message = this.querySelector('textarea').value;

        // Clear previous notifications
        notification.textContent = '';
        notification.className = 'notification';

        // Basic validation checks
        if (!name || !email || !mobile || !message) {
            notification.textContent = "Please fill in all fields.";
            notification.className = 'notification error';
        } else if (!validateEmail(email)) {
            notification.textContent = "Please enter a valid email address.";
            notification.className = 'notification error';
        } else if (!validateMobile(mobile)) {
            notification.textContent = "Please enter a valid mobile number.";
            notification.className = 'notification error';
        } else {
            // Simulate successful message sending
            notification.textContent = "Message sent successfully!";
            notification.className = 'notification success';
            this.reset(); // Reset form fields after submission
        }
    });

    // Email validation 
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Mobile number validation 
    function validateMobile(mobile) {
        const regex = /^\d{10}$/; 
        return regex.test(mobile);
    }
});

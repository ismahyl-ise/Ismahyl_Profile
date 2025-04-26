// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Here you would typically send the form data to a server
        // For now, we'll just log it and show a success message
        console.log('Form submitted:', { name, email, message });
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        this.reset();
    });
}

// Add animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.cert-card, .project-card, .skill-category');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial styles for animation
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.cert-card, .project-card, .skill-category');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
});

// Add scroll event listener
window.addEventListener('scroll', animateOnScroll);

// Mobile menu toggle (for smaller screens)
const createMobileMenu = () => {
    const nav = document.querySelector('nav .container');
    const menuButton = document.createElement('button');
    menuButton.className = 'mobile-menu-button';
    menuButton.innerHTML = '<i class="fas fa-bars"></i>';
    
    const navList = nav.querySelector('ul');
    
    menuButton.addEventListener('click', () => {
        navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
    });
    
    nav.insertBefore(menuButton, navList);
    
    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navList.style.display = 'flex';
        } else {
            navList.style.display = 'none';
        }
    });
};

// Initialize mobile menu
createMobileMenu();

function toggleQR(type) {
    const modal = document.getElementById(`${type}-qr`);
    modal.classList.toggle('active');
    
    // Prevent scrolling when modal is open
    document.body.style.overflow = modal.classList.contains('active') ? 'hidden' : '';
} 
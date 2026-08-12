// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinksContainer = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
    // Change icon between burger and X
    const icon = hamburger.querySelector('i');
    if(navLinksContainer.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
        hamburger.querySelector('i').classList.replace('fa-times', 'fa-bars');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // offset for fixed navbar
                behavior: 'smooth'
            });
        }
    });
});

// Update active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Copy Email Functionality
function copyEmail() {
    const emailToCopy = "stephensikder@gmail.com";
    navigator.clipboard.writeText(emailToCopy).then(() => {
        const copyBtn = document.getElementById('copyBtn');
        const originalText = copyBtn.innerText;
        
        copyBtn.innerText = "COPIED!";
        copyBtn.style.color = "var(--accent-green)";
        copyBtn.style.borderColor = "var(--accent-green)";
        
        setTimeout(() => {
            copyBtn.innerText = originalText;
            copyBtn.style.color = "var(--text-primary)";
            copyBtn.style.borderColor = "var(--border-color)";
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

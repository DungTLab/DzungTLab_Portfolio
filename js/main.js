// =========================================================================
// 1. DARK/LIGHT THEME TOGGLE LOGIC (BOOTSTRAP 5.3 NATIVE THEMING)
// =========================================================================
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const htmlElement = document.documentElement;

/**
 * Sets the theme for the entire website and persists it to LocalStorage.
 * @param {string} theme - The target theme, either 'dark' or 'light'.
 */
function setTheme(theme) {
    htmlElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update the corresponding theme icon
    if (theme === 'dark') {
        themeIcon.className = 'bi bi-sun-fill';
    } else {
        themeIcon.className = 'bi bi-moon-stars-fill';
    }
}

// Check user's previous preference in LocalStorage, default to 'dark'
const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);

// Event listener for the theme toggle button
themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});


// =========================================================================
// 2. SCROLL REVEAL EFFECT (INTERSECTION OBSERVER)
// =========================================================================
const revealElements = document.querySelectorAll('.reveal');

// Use IntersectionObserver to optimize scroll performance and prevent lag
const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Once the element is visible, stop observing to save resources
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15 // Trigger animation when 15% of the element enters the viewport
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});


// =========================================================================
// 3. TYPEWRITER EFFECT
// =========================================================================
const textElement = document.getElementById('typewriter');
const phrases = ["Software Engineer", "Problem Solver", "Tech Enthusiast"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        // Erase character
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50; // Faster deleting speed for a more natural feel
    } else {
        // Type character
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100; // Standard typing speed
    }

    // Handle transition between typing and deleting states
    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause for 2 seconds at the end of the phrase before deleting
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500; // Pause for 0.5 seconds before typing the next word
    }

    setTimeout(type, typeSpeed);
}

// Start the typewriter animation once the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    if (textElement) {
        type();
    }
});


// =========================================================================
// 4. SCROLLSPY DETECTOR FOR ACTIVE NAV LINK
// =========================================================================
const navLinks = document.querySelectorAll('.nav-link-custom');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Check if the current scroll position has reached the section's threshold
        if (window.pageYOffset >= (sectionTop - 150)) {
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


// =========================================================================
// 5. AUTOMATICALLY COLLAPSE MOBILE MENU ON LINK CLICK
// =========================================================================
const navbarCollapse = document.getElementById('navbarNav');
const bootstrapCollapse = navbarCollapse ? new bootstrap.Collapse(navbarCollapse, { toggle: false }) : null;

if (bootstrapCollapse) {
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Only hide the collapse element if the menu is currently visible (has 'show' class)
            if (navbarCollapse.classList.contains('show')) {
                bootstrapCollapse.hide();
            }
        });
    });
}
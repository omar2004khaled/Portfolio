/**
 * Omar Khaled Hussein - Portfolio Script
 * This file handles all interactive features of the website:
 * 1. Mobile navigation menu toggling
 * 2. Sticky header styling & scroll updates
 * 3. Theme toggle (Light/Dark mode) with LocalStorage persistence
 * 4. JS Typewriter effect for the hero section
 * 5. Scroll reveal animations using Intersection Observer
 * 6. Active nav link highlight based on scroll position
 * 7. Back-to-Top button behavior
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================================================
    // 1. Mobile Navigation Menu
    // ==========================================================================
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    const navbar = document.getElementById('navbar');
    const navLinksList = document.querySelectorAll('.nav-link');
    
    if (mobileNavToggle && navbar) {
        mobileNavToggle.addEventListener('click', () => {
            const isOpen = navbar.classList.contains('open');
            if (isOpen) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });

        // Close mobile menu when clicking any nav link
        navLinksList.forEach(link => {
            link.addEventListener('click', () => {
                closeMobileMenu();
            });
        });
    }

    function openMobileMenu() {
        navbar.classList.add('open');
        mobileNavToggle.setAttribute('aria-expanded', 'true');
        mobileNavToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }

    function closeMobileMenu() {
        navbar.classList.remove('open');
        mobileNavToggle.setAttribute('aria-expanded', 'false');
        mobileNavToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }


    // ==========================================================================
    // 2. Sticky Header Styling & Scroll Behavior
    // ==========================================================================
    const mainHeader = document.getElementById('main-header');
    
    function checkHeaderScroll() {
        if (window.scrollY > 50) {
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', checkHeaderScroll);
    checkHeaderScroll(); // Run once initially in case of page refresh mid-page


    // ==========================================================================
    // 3. Theme Toggle (Light/Dark Mode)
    // ==========================================================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;
    
    // Check local storage for preference, fallback to dark mode (standard for developer portfolios)
    const storedTheme = localStorage.getItem('theme');
    
    // Initialize theme based on preference or fallback to system default (dark preferred)
    if (storedTheme === 'light') {
        setLightMode();
    } else {
        setDarkMode();
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            if (document.body.classList.contains('dark-mode')) {
                setLightMode();
            } else {
                setDarkMode();
            }
        });
    }

    function setLightMode() {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
        if (themeIcon) {
            themeIcon.className = 'fa-solid fa-moon';
        }
    }

    // Set theme to Dark Mode
    function setDarkMode() {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        if (themeIcon) {
            themeIcon.className = 'fa-solid fa-sun';
        }
    }


    // ==========================================================================
    // 4. Typewriter Effect
    // ==========================================================================
    const typewriterElement = document.getElementById('typewriter-text');
    
    if (typewriterElement) {
        // List of titles/roles to display
        const words = [
            "Computer & Systems Engineering Student",
            "Full-Stack Developer",
            "Scrum Master"
        ];
        
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100; // Normal typing speed in ms

        function type() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                // Remove character
                typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 50; // Faster deleting speed
            } else {
                // Add character
                typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 100; // Normal speed
            }

            // Word completed
            if (!isDeleting && charIndex === currentWord.length) {
                // Pause at the end of the word
                typeSpeed = 2000; 
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                // Move to next word, loop back to start if finished
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 500; // Pause before typing new word
            }

            setTimeout(type, typeSpeed);
        }

        // Initialize typewriter sequence
        setTimeout(type, 500);
    }


    // ==========================================================================
    // 5. Scroll Reveal Animations (Intersection Observer)
    // ==========================================================================
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    if ('IntersectionObserver' in window && revealElements.length > 0) {
        const revealOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is fully visible
        };

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    // Stop observing once animated
                    observer.unobserve(entry.target);
                }
            });
        }, revealOptions);

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        // Fallback for older browsers: show elements immediately
        revealElements.forEach(el => el.classList.add('revealed'));
    }


    // ==========================================================================
    // 6. Active Nav Link Highlight based on Scroll Position
    // ==========================================================================
    const sections = document.querySelectorAll('section[id]');
    
    if ('IntersectionObserver' in window && sections.length > 0) {
        const navObserverOptions = {
            threshold: 0.35, // Trigger when 35% of the section is visible
            rootMargin: '-80px 0px -20% 0px' // Adjust for sticky header height
        };

        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.getAttribute('id');
                    
                    navLinksList.forEach(link => {
                        const href = link.getAttribute('href');
                        if (href === `#${sectionId}`) {
                            link.classList.add('active');
                        } else {
                            link.classList.remove('active');
                        }
                    });
                }
            });
        }, navObserverOptions);

        sections.forEach(section => navObserver.observe(section));
    }


    // ==========================================================================
    // 7. Back-to-Top Button
    // ==========================================================================
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (backToTopBtn) {
        function checkBackToTopScroll() {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }

        window.addEventListener('scroll', checkBackToTopScroll);
        checkBackToTopScroll(); // Run on startup

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

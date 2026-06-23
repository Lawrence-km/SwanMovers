document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');

    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            nav.classList.toggle('active');
            const icon = this.querySelector('i');
            if (!icon) return;
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    document.addEventListener('click', function (event) {
        if (!nav || !mobileMenuBtn) return;
        if (!nav.classList.contains('active')) return;
        if (nav.contains(event.target) || mobileMenuBtn.contains(event.target)) return;
        nav.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '#!') return;
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;
            e.preventDefault();
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            if (nav && mobileMenuBtn && nav.classList.contains('active')) {
                nav.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });

    const testimonialSlider = document.querySelector('.testimonials-slider');
    const testimonials = document.querySelectorAll('.testimonial');

    if (testimonialSlider && testimonials.length > 0) {
        let currentIndex = 0;
        const testimonialWidth = testimonials[0].offsetWidth;
        const gap = 30;

        setInterval(() => {
            currentIndex = (currentIndex + 1) % testimonials.length;
            testimonialSlider.scrollTo({
                left: (testimonialWidth + gap) * currentIndex,
                behavior: 'smooth'
            });
        }, 5000);
    }

    const header = document.querySelector('header');
    const heroSection = document.querySelector('.hero');

    if (header && heroSection) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            let isValid = true;
            const nameInput = this.querySelector('input[name="name"]');
            const emailInput = this.querySelector('input[name="email"]');
            const subjectInput = this.querySelector('input[name="subject"]');
            const messageInput = this.querySelector('textarea[name="message"]');

            this.querySelectorAll('.error-message').forEach(el => el.remove());

            if (nameInput && !nameInput.value.trim()) {
                isValid = false;
                showError(nameInput, 'Please enter your name');
            }

            if (emailInput) {
                if (!emailInput.value.trim()) {
                    isValid = false;
                    showError(emailInput, 'Please enter your email');
                } else if (!isValidEmail(emailInput.value)) {
                    isValid = false;
                    showError(emailInput, 'Please enter a valid email address');
                }
            }

            if (subjectInput && !subjectInput.value.trim()) {
                isValid = false;
                showError(subjectInput, 'Please enter a subject');
            }

            if (messageInput && !messageInput.value.trim()) {
                isValid = false;
                showError(messageInput, 'Please enter your message');
            }

            if (!isValid) {
                e.preventDefault();
            }
        });

        function showError(input, message) {
            const parent = input.closest('.form-group') || input.parentNode;
            const errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            errorElement.textContent = message;
            errorElement.style.color = '#ff3333';
            errorElement.style.fontSize = '0.9rem';
            errorElement.style.marginTop = '5px';
            parent.appendChild(errorElement);
            input.style.borderColor = '#ff3333';

            input.addEventListener('input', function onInput() {
                input.style.borderColor = '';
                const err = parent.querySelector('.error-message');
                if (err) err.remove();
                input.removeEventListener('input', onInput);
            });
        }

        function isValidEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }
    }

    const animateElements = document.querySelectorAll('.animate-on-scroll');

    if (animateElements.length > 0) {
        animateElements.forEach(el => {
            el.classList.add('hidden');
        });

        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
                rect.bottom >= 0
            );
        }

        function handleScrollAnimation() {
            animateElements.forEach(el => {
                if (isInViewport(el) && el.classList.contains('hidden')) {
                    el.classList.remove('hidden');
                    el.classList.add('animate');
                }
            });
        }

        handleScrollAnimation();
        window.addEventListener('scroll', handleScrollAnimation);
    }
});

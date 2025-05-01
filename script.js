// Language Toggle
const langToggle = document.getElementById('lang-toggle');
const textElements = document.querySelectorAll('[data-en], [data-es]');
let currentLang = 'en';

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    langToggle.textContent = currentLang === 'en' ? 'ES' : 'EN';
    textElements.forEach(el => {
        el.textContent = el.getAttribute(`data-${currentLang}`);
    });
});

// File Upload Preview
const uploadInput = document.getElementById('upload-input');
const uploadPreview = document.getElementById('upload-preview');

if (uploadInput) {
    uploadInput.addEventListener('change', () => {
        const file = uploadInput.files[0];
        if (file) {
            uploadPreview.textContent = `Selected File: ${file.name}`;
        } else {
            uploadPreview.textContent = '';
        }
    });
}

// Scroll Animations
window.addEventListener('scroll', () => {
    document.querySelectorAll('.slide-up').forEach(el => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) {
            el.classList.add('animate');
        }
    });
});

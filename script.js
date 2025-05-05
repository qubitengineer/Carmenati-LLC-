// Language Toggle
const langToggle = document.getElementById('lang-toggle');
const textElements = document.querySelectorAll('[data-en], [data-es]');
let currentLang = 'en'; // Default language

// Ensure langToggle exists before adding listener
if (langToggle) {
    langToggle.addEventListener('click', () => {
        // Determine the new language
        currentLang = currentLang === 'en' ? 'es' : 'en';
        // Update the button text
        langToggle.textContent = currentLang === 'en' ? 'ES' : 'EN';

        // Update text content for all targeted elements
        textElements.forEach(el => {
            const text = el.getAttribute(`data-${currentLang}`);
            if (text !== null) {
                 // Using textContent is generally preferred for changing text only
                 el.textContent = text;
            }
        });
    });

    // Set initial button text based on default language
    langToggle.textContent = currentLang === 'en' ? 'ES' : 'EN';
}


// Scroll Animations using Intersection Observer
const slideUpElements = document.querySelectorAll('.slide-up');

const observerOptions = {
  root: null, // relative to document viewport
  rootMargin: '0px',
  threshold: 0.1 // Trigger when 10% of the element is visible (adjust as needed)
};

const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      // Optional: Stop observing the element once it has animated
      // to prevent re-triggering if it scrolls out and back in.
      // observer.unobserve(entry.target);
    }
    // Optional: Remove animation if element scrolls out of view entirely
    // else {
    //    if (entry.target.classList.contains('animate')) { // Only remove if it was animated
    //        entry.target.classList.remove('animate');
    //    }
    // }
  });
};

// Only create observer if there are elements to observe
if (slideUpElements.length > 0) {
    const slideObserver = new IntersectionObserver(observerCallback, observerOptions);
    slideUpElements.forEach(el => slideObserver.observe(el));
}

// END Scroll Animations using Intersection Observer

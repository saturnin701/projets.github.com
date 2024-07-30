document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('section, h1, p, form');

    elements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
    });

    window.addEventListener('scroll', () => {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.style.opacity = 1;
                el.style.transform = 'translateY(0)';
            }
        });
    });

    // Trigger scroll event to animate elements in the viewport on page load
    window.dispatchEvent(new Event('scroll'));
});

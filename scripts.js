document.addEventListener('DOMContentLoaded', () => {
    // Elements à animer
    const elements = document.querySelectorAll('section, p, form');

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

    // Déclencher l'événement de défilement pour animer les éléments dans la fenêtre de visualisation lors du chargement de la page
    window.dispatchEvent(new Event('scroll'));

    // Animer les lettres des titres
    const titles = document.querySelectorAll('.animated-title span');
    titles.forEach((letter, index) => {
        letter.style.opacity = 0;
        letter.style.transform = 'translateY(-50px)';
        letter.style.transition = opacity 0.5s ${index * 0.1}s ease-out, transform 0.5s ${index * 0.1}s ease-out;
        setTimeout(() => {
            letter.style.opacity = 1;
            letter.style.transform = 'translateY(0)';
        }, index * 100);document.addEventListener('DOMContentLoaded', () => {
            // Elements à animer
            const elements = document.querySelectorAll('section, p, form');
        
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
        
            // Déclencher l'événement de défilement pour animer les éléments dans la fenêtre de visualisation lors du chargement de la page
            window.dispatchEvent(new Event('scroll'));
        
            // Animer les lettres des titres
            const titles = document.querySelectorAll('.animated-title span');
            titles.forEach((letter, index) => {
                letter.style.opacity = 0;
                letter.style.transform = 'translateY(-50px)';
                letter.style.transition = opacity 0.5s ${index * 0.1}s ease-out, transform 0.5s ${index * 0.1}s ease-out;
                setTimeout(() => {
                    letter.style.opacity = 1;
                    letter.style.transform = 'translateY(0)';
                }, index * 100);
            });
        });
        
    });
});

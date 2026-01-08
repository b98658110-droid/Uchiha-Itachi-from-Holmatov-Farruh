// Добавить в script.js
const createSectionIndicator = () => {
    if (window.innerWidth <= 1024) {
        const sections = document.querySelectorAll('section');
        const indicator = document.createElement('div');
        indicator.className = 'section-indicator';
        
        sections.forEach((section, index) => {
            const dot = document.createElement('div');
            dot.className = 'indicator-dot';
            dot.dataset.section = section.id;
            
            dot.addEventListener('click', () => {
                section.scrollIntoView({ behavior: 'smooth' });
            });
            
            indicator.appendChild(dot);
        });
        
        document.body.appendChild(indicator);
        
        // Обновление активной точки при скролле
        const updateIndicator = () => {
            const dots = document.querySelectorAll('.indicator-dot');
            const scrollPos = window.scrollY + 100;
            
            document.querySelectorAll('section').forEach((section, index) => {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;
                
                if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                    dots[index].classList.add('active');
                } else {
                    dots[index].classList.remove('active');
                }
            });
        };
        
        window.addEventListener('scroll', updateIndicator);
        updateIndicator();
    }
};

// Вызвать в DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    createSectionIndicator();
    // остальной код...
});

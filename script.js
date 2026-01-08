document.addEventListener('DOMContentLoaded', function () {
    console.log('Сайт Итачи Учиха загружен!');

    /* ===== АНИМАЦИЯ ПОЯВЛЕНИЯ ===== */
    const elements = document.querySelectorAll(
        '.type, .jutsu, .ability, .gallery-item'
    );

    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    const animateOnScroll = () => {
        elements.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 100) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    /* ===== ЭФФЕКТ КРОВИ ===== */
    const createBloodEffect = (x, y) => {
        const blood = document.createElement('div');
        blood.className = 'click-blood';
        blood.style.left = `${x}px`;
        blood.style.top = `${y}px`;
        document.body.appendChild(blood);
        setTimeout(() => blood.remove(), 1000);
    };

    document.querySelectorAll(
        '.btn, .image-frame, .gallery-item, .sharingan-display'
    ).forEach(el => {
        el.addEventListener('click', e => {
            createBloodEffect(e.clientX, e.clientY);
        });
    });

    /* ===== БУРГЕР МЕНЮ - ОБНОВЛЁННЫЙ КОД ===== */
    const burger = document.getElementById('burger');
    const navMenu = document.getElementById('nav-menu');

    if (burger && navMenu) {
        // ТОЛЬКО клик открывает/закрывает меню
        burger.addEventListener('click', (e) => {
            e.stopPropagation(); // Предотвращаем всплытие
            const isOpen = navMenu.classList.toggle('active');
            burger.classList.toggle('open');
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        // Закрытие меню при клике на ссылку
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                burger.classList.remove('open');
                document.body.style.overflow = '';
            });
        });

        // Закрытие меню при клике вне меню
        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('active') && 
                !navMenu.contains(e.target) && 
                !burger.contains(e.target)) {
                navMenu.classList.remove('active');
                burger.classList.remove('open');
                document.body.style.overflow = '';
            }
        });

        // Предотвращаем скролл свайпом вправо/влево для меню
        document.addEventListener('touchstart', (e) => {
            if (navMenu.classList.contains('active')) {
                e.preventDefault();
            }
        }, { passive: false });
    }

    /* ===== ПЛАВНАЯ ПРОКРУТКА ===== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

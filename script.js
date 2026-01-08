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

    /* ===== БУРГЕР МЕНЮ ===== */
    const burger = document.getElementById('burger');
    const navMenu = document.getElementById('nav-menu');

    if (burger && navMenu) {
        burger.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('active');
            burger.classList.toggle('open');

            // 🔒 Блокируем скролл страницы
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });
    }

    /* ===== ПЛАВНАЯ ПРОКРУТКА + ЗАКРЫТИЕ МЕНЮ ===== */
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', e => {

            const id = link.getAttribute('href');
            if (!id || !id.startsWith('#')) return;

            e.preventDefault();

            const target = document.querySelector(id);
            if (!target) return;

            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });

            // ❌ Закрываем меню
            navMenu.classList.remove('active');
            burger.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

});

// Анимация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log('Сайт Итачи Учиха загружен!');
    
    // Анимация появления элементов
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.type, .jutsu, .ability, .gallery-item');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Инициализация анимации
    const initAnimation = () => {
        const elements = document.querySelectorAll('.type, .jutsu, .ability, .gallery-item');
        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
        
        window.addEventListener('scroll', animateOnScroll);
        animateOnScroll(); // Запуск при загрузке
    };
    
    // Кровавый эффект при клике
    const createBloodEffect = (x, y) => {
        const blood = document.createElement('div');
        blood.classList.add('click-blood');
        blood.style.left = `${x}px`;
        blood.style.top = `${y}px`;
        document.body.appendChild(blood);
        
        setTimeout(() => {
            blood.remove();
        }, 1000);
    };
    
    // Шаринган эффект для логотипа
    const logoSharingan = document.querySelector('.logo');
    if (logoSharingan) {
        logoSharingan.addEventListener('mouseenter', function() {
            const shariganIcons = this.querySelectorAll('.sharingan-icon');
            shariganIcons.forEach(icon => {
                icon.style.animation = 'pulse 0.5s infinite alternate';
            });
        });
        
        logoSharingan.addEventListener('mouseleave', function() {
            const shariganIcons = this.querySelectorAll('.sharingan-icon');
            shariganIcons.forEach(icon => {
                icon.style.animation = 'pulse 2s infinite';
            });
        });
    }
    
    // Плавная прокрутка для навигации
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Обновление активного пункта меню
                    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
                    this.classList.add('active');
                }
            }
        });
    });
    
    // Определение активного раздела при прокрутке
    const updateActiveNav = () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav a');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    };
    
    // В функции смены изображений заменить на локальные
    const itachiImages = [
        'images/itachi-main.jpg',
        'images/itachi-akatsuki.jpg',
        'images/itachi-vs-sasuke.jpg',
        'images/itachi-crow.jpg'
    ];

    
    const mainItachiImage = document.getElementById('main-itachi');
    if (mainItachiImage) {
        mainItachiImage.addEventListener('click', function() {
            const randomImage = itachiImages[Math.floor(Math.random() * itachiImages.length)];
            this.style.opacity = '0';
            
            setTimeout(() => {
                this.src = randomImage;
                this.style.opacity = '1';
            }, 300);
        });
    }
    
    // Эффект крови при клике на определенных элементах
    const bloodElements = document.querySelectorAll('.btn, .image-frame, .gallery-item, .sharingan-display');
    bloodElements.forEach(element => {
        element.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            createBloodEffect(x + rect.left, y + rect.top);
        });
    });
    
    // Кровавый дождь при загрузке
    const createBloodRain = () => {
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const x = Math.random() * window.innerWidth;
                const y = -20;
                createBloodEffect(x, y);
            }, i * 50);
        }
    };
    
    // Цитаты Итачи
    const itachiQuotes = [
        "Отрекись от ненависти, и ты обретёшь покой.",
        "Тот, кто не может признать свою истинную сущность, обречён на неудачу.",
        "Каждый человек живёт, полагаясь на свои знания и восприятие.",
        "Мы, ниндзя, — инструменты войны.",
        "Те, кто не может понять истинную боль, никогда не поймут истинного мира.",
        "Знание и осознание — это разные вещи.",
        "Сила порождает одиночество.",
        "Жертва необходима, чтобы защитить то, что важно."
    ];
    
    // Случайная цитата в футере
    const updateQuote = () => {
        const quoteElement = document.querySelector('.quote');
        const randomQuote = itachiQuotes[Math.floor(Math.random() * itachiQuotes.length)];
        
        if (quoteElement) {
            quoteElement.style.opacity = '0';
            setTimeout(() => {
                quoteElement.textContent = `"${randomQuote}"`;
                quoteElement.style.opacity = '1';
            }, 500);
        }
    };
    
    // Таймер для смены цитат
    setInterval(updateQuote, 10000);
    
    // Запуск всех функций
    initAnimation();
    
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();
    
    // Запуск кровавого дождя при загрузке
    setTimeout(createBloodRain, 1000);
    
    // Консоль приветствие
    console.log(`%c
    ╔═══════════════════════════════════════════════════╗
    ║                                                   ║
    ║         ШАРИНГАН ИТАЧИ УЧИХА АКТИВИРОВАН          ║
    ║                                                   ║
    ║         Сайт посвящён величайшему шиноби          ║
    ║                                                   ║
    ╚═══════════════════════════════════════════════════╝
    `, 'color: #8B0000; font-weight: bold; font-size: 12px;');

    const burger = document.getElementById("burger");
    const navMenu = document.getElementById("nav-menu");
        
    burger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

});

const burger = document.getElementById("burger");
const navMenu = document.getElementById("nav-menu");

burger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    burger.classList.toggle("open");
});

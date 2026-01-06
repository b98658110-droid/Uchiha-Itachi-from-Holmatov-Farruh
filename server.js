const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware для статических файлов
app.use(express.static(path.join(__dirname)));

// Маршрут для главной страницы
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`
    ╔═══════════════════════════════════════════════════╗
    ║                                                   ║
    ║   🌑 Сервер Итачи Учиха запущен! 🌑              ║
    ║                                                   ║
    ║   🔗 Доступно по адресу: http://localhost:${PORT}    ║
    ║                                                   ║
    ║   👁️  Мангекё Шаринган активирован! 👁️           ║
    ║                                                   ║
    ╚═══════════════════════════════════════════════════╝
    `);
});
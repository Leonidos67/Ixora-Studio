// Функция для загрузки шапки сайта
async function loadHeader() {
    try {
        // Проверка: если это главная страница, не загружаем шапку
        const currentPath = window.location.pathname;
        if (currentPath === '/' || currentPath === '/index.html') {
            return;
        }
        // Определяем правильный путь к файлу шапки
        const isInSubfolder = currentPath.split('/').length > 2; // Если путь содержит подпапки
        const headerPath = isInSubfolder ? '../src/components/header.html' : './src/components/header.html';
        
        const response = await fetch(headerPath);
        const headerHtml = await response.text();
        
        // Вставляем шапку в начало body
        document.body.insertAdjacentHTML('afterbegin', headerHtml);
        
        // Обновляем активную ссылку в зависимости от текущей страницы
        updateActiveNavLink();
        
        // Применяем стиль шапки в зависимости от страницы
        applyHeaderStyle();
        
        console.log('Шапка сайта успешно загружена');
    } catch (error) {
        console.error('Ошибка при загрузке шапки:', error);
    }
}

// Функция для обновления активной ссылки в навигации
function updateActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Убираем активный класс со всех ссылок
    navLinks.forEach(link => {
        link.classList.remove('w--current');
        link.removeAttribute('aria-current');
    });
    
    // Находим соответствующую ссылку и делаем её активной
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === '/' && href === '/')) {
            link.classList.add('w--current');
            link.setAttribute('aria-current', 'page');
        }
    });
}

// Функция для применения стиля шапки в зависимости от страницы
function applyHeaderStyle() {
    const currentPath = window.location.pathname;
    const header = document.getElementById('dynamic-header');
    
    if (!header) return;
    
    // Страницы с белым фоном
    const whiteBackgroundPages = ['/contact'];
    
    if (whiteBackgroundPages.includes(currentPath)) {
        // Применяем белый стиль
        header.classList.add('white-bg-nav');
        header.querySelector('.nav-holder').classList.add('nav-holder-light');
        header.querySelector('.nav-menu').classList.add('nav-menu-on-white');
        
        // Показываем черные элементы
        const logoBlack = header.querySelector('.logo-black');
        const logoWhite = header.querySelector('.logo-white');
        const menuBlack = header.querySelector('.menu-black');
        const menuWhite = header.querySelector('.menu-white');
        
        if (logoBlack && logoWhite) {
            logoBlack.style.display = 'block';
            logoWhite.style.display = 'none';
        }
        
        if (menuBlack && menuWhite) {
            menuBlack.style.display = 'block';
            menuWhite.style.display = 'none';
        }
        
        // Добавляем классы для белых ссылок
        const navLinks = header.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.add('nav-link-on-white');
        });
        
        // Стилизуем кнопку "Связаться"
        const contactButton = header.querySelector('.nav-button');
        if (contactButton) {
            contactButton.classList.add('black');
        }
    }
}

// Загружаем шапку при загрузке страницы
document.addEventListener('DOMContentLoaded', loadHeader); 
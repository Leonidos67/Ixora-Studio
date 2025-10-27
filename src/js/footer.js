// Функция для загрузки футера сайта
async function loadFooter() {
    try {
        // Определяем правильный путь к файлу футера
        const currentPath = window.location.pathname;
        const isInSubfolder = currentPath.split('/').length > 2; // Если путь содержит подпапки
        const footerPath = isInSubfolder ? '../src/components/footer.html' : './src/components/footer.html';
        
        const response = await fetch(footerPath);
        const footerHtml = await response.text();
        
        // Вставляем футер в конец body
        document.body.insertAdjacentHTML('beforeend', footerHtml);
        
        // Обновляем активную ссылку в футере в зависимости от текущей страницы
        updateFooterActiveLink();
        
        console.log('Футер сайта успешно загружен');
    } catch (error) {
        console.error('Ошибка при загрузке футера:', error);
    }
}

// Функция для обновления активной ссылки в футере
function updateFooterActiveLink() {
    const currentPath = window.location.pathname;
    const footerLinks = document.querySelectorAll('.footer-link');
    
    // Убираем активный класс со всех ссылок в футере
    footerLinks.forEach(link => {
        link.classList.remove('w--current');
        link.removeAttribute('aria-current');
    });
    
    // Находим соответствующую ссылку и делаем её активной
    footerLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === '/' && href === '/')) {
            link.classList.add('w--current');
            link.setAttribute('aria-current', 'page');
        }
    });
}

// Загружаем футер при загрузке страницы
document.addEventListener('DOMContentLoaded', loadFooter); 
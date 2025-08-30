# Система общей шапки и футера сайта

## Описание
Система позволяет использовать единую шапку и футер сайта на всех страницах без дублирования кода. Автоматически адаптируется под дизайн каждой страницы.

## Структура файлов
```
src/
├── components/
│   ├── header.html          # HTML код шапки
│   └── footer.html          # HTML код футера
└── js/
    ├── header.js            # JavaScript для загрузки шапки
    └── footer.js            # JavaScript для загрузки футера
```

## Как использовать

### 1. На существующих страницах
Добавьте в `<head>` или перед закрывающим тегом `</body>`:
```html
<script src="./src/js/header.js"></script>
<script src="./src/js/footer.js"></script>
```

### 2. При создании новых страниц

**Для страниц в корневой папке:**
```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8"/>
    <title>Название страницы</title>
    <meta content="Описание страницы" name="description"/>
    <meta content="width=device-width, initial-scale=1" name="viewport"/>
    
    <!-- Подключение стилей -->
    <link href="https://cdn.prod.website-files.com/64007488ac2f668174e03bc5/css/whipsaw.webflow.shared.ff4260269.css" rel="stylesheet" type="text/css"/>
    <link href="https://fonts.googleapis.com" rel="preconnect"/>
    <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin="anonymous"/>
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
    <link rel="stylesheet" href="./src/css/main.css">
</head>
<body>
    <!-- Шапка будет загружена автоматически -->
    
    <!-- Содержимое страницы -->
    <div class="section">
        <div class="container">
            <h1>Заголовок страницы</h1>
            <p>Содержимое страницы</p>
        </div>
    </div>
    
    <!-- Подключение скриптов -->
    <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=64007488ac2f668174e03bc5" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="https://cdn.prod.website-files.com/64007488ac2f668174e03bc5/js/webflow.schunk.36b8fb49256177c8.js" type="text/javascript"></script>
    <script src="https://cdn.prod.website-files.com/64007488ac2f668174e03bc5/js/webflow.schunk.d67c850d4ca38174.js" type="text/javascript"></script>
    <script src="https://cdn.prod.website-files.com/64007488ac2f668174e03bc5/js/webflow.295b187c.b25158e5f6177ae4.js" type="text/javascript"></script>
    <script src="./src/js/header.js"></script>
    <script src="./src/js/footer.js"></script>
    <script src="./src/js/main.js"></script>
</body>
</html>
```

**Для страниц в подпапках (например, work/index.html):**
```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8"/>
    <title>Название страницы</title>
    <meta content="Описание страницы" name="description"/>
    <meta content="width=device-width, initial-scale=1" name="viewport"/>
    
    <!-- Подключение стилей -->
    <link href="https://cdn.prod.website-files.com/64007488ac2f668174e03bc5/css/whipsaw.webflow.shared.ff4260269.css" rel="stylesheet" type="text/css"/>
    <link href="https://fonts.googleapis.com" rel="preconnect"/>
    <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin="anonymous"/>
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
    <link rel="stylesheet" href="../src/css/main.css">
</head>
<body>
    <!-- Шапка будет загружена автоматически -->
    
    <!-- Содержимое страницы -->
    <div class="section">
        <div class="container">
            <h1>Заголовок страницы</h1>
            <p>Содержимое страницы</p>
        </div>
    </div>
    
    <!-- Подключение скриптов -->
    <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=64007488ac2f668174e03bc5" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="https://cdn.prod.website-files.com/64007488ac2f668174e03bc5/js/webflow.schunk.36b8fb49256177c8.js" type="text/javascript"></script>
    <script src="https://cdn.prod.website-files.com/64007488ac2f668174e03bc5/js/webflow.schunk.d67c850d4ca38174.js" type="text/javascript"></script>
    <script src="https://cdn.prod.website-files.com/64007488ac2f668174e03bc5/js/webflow.295b187c.b25158e5f6177ae4.js" type="text/javascript"></script>
    <script src="../src/js/header.js"></script>
    <script src="../src/js/footer.js"></script>
    <script src="../src/js/main.js"></script>
</body>
</html>
```

## Функциональность

### Автоматическое определение путей
Система автоматически определяет правильные пути к файлам в зависимости от расположения страницы (корневая папка или подпапки).

### Автоматическое определение активной страницы
Система автоматически определяет текущую страницу и выделяет соответствующую ссылку в навигации (как в шапке, так и в футере).

### Автоматическое определение стиля шапки
Система автоматически применяет подходящий стиль шапки в зависимости от страницы:
- **Темный стиль** (по умолчанию): для главной страницы и большинства страниц
- **Белый стиль**: для страницы контактов (`/contact`)

### Поддержка всех существующих стилей
Шапка и футер используют все существующие CSS классы и стили Webflow.

### Мобильная навигация
Полная поддержка мобильного меню и всех интерактивных элементов.

## Изменение шапки и футера
Для изменения шапки отредактируйте файл `src/components/header.html`. Для изменения футера отредактируйте файл `src/components/footer.html`. Изменения автоматически применятся на всех страницах.

## Добавление новых стилей
Для добавления нового стиля шапки:
1. Добавьте URL страницы в массив `whiteBackgroundPages` в файле `src/js/header.js`
2. При необходимости добавьте дополнительные CSS классы в функцию `applyHeaderStyle()`

## Требования
- Современный браузер с поддержкой ES6+
- Локальный сервер для корректной работы fetch API 
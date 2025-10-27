// Конфигурация Telegram бота
const TOKEN = '7938942548:AAGVWdhUxgtUbnfwmDziVAihr18qzBAjhQE';
const CHAT_ID = '7938942548'; // Используем ваш ID как CHAT_ID
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

// Функция для отправки сообщения в Telegram
async function sendToTelegram(message) {
    try {
        const response = await fetch(URL_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                parse_mode: 'HTML',
                text: message
            })
        });

        const result = await response.json();
        
        if (result.ok) {
            return { success: true, data: result };
        } else {
            return { success: false, error: result.description };
        }
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// Функция для форматирования сообщения
function formatMessage(formData) {
    const name = formData.get('Name') || 'Не указано';
    const phone = formData.get('Phone') || 'Не указано';
    const company = formData.get('Company') || 'Не указано';
    const email = formData.get('Email') || 'Не указано';
    const message = formData.get('Message') || 'Не указано';
    
    return `📧 <b>Новая заявка с сайта</b>

👤 <b>Имя:</b> ${name}
📱 <b>Телефон:</b> ${phone}
🏢 <b>Организация:</b> ${company}
📧 <b>Email:</b> ${email}
💬 <b>Сообщение:</b> ${message}

⏰ <b>Время отправки:</b> ${new Date().toLocaleString('ru-RU')}`;
}

// Обработчик отправки формы
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('email-form');
    const successMessage = document.querySelector('.success-message');
    const errorMessage = document.querySelector('.error-message');
    const submitButton = form.querySelector('input[type="submit"]');
    
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Показываем состояние загрузки
            submitButton.value = 'Отправляем...';
            submitButton.disabled = true;
            
            // Скрываем предыдущие сообщения
            successMessage.style.display = 'none';
            errorMessage.style.display = 'none';
            
            try {
                // Собираем данные формы
                const formData = new FormData(form);
                
                // Форматируем сообщение
                const message = formatMessage(formData);
                
                // Отправляем в Telegram
                const result = await sendToTelegram(message);
                
                if (result.success) {
                    // Показываем сообщение об успехе
                    successMessage.style.display = 'block';
                    successMessage.querySelector('div').textContent = 'Сообщение успешно отправлено!';
                    
                    // Очищаем форму
                    form.reset();
                    
                    // Прокручиваем к сообщению об успехе
                    successMessage.scrollIntoView({ behavior: 'smooth' });
                } else {
                    // Показываем ошибку
                    errorMessage.style.display = 'block';
                    errorMessage.querySelector('div').textContent = `Ошибка отправки: ${result.error}`;
                    
                    console.error('Telegram API Error:', result.error);
                }
            } catch (error) {
                // Показываем ошибку
                errorMessage.style.display = 'block';
                errorMessage.querySelector('div').textContent = 'Произошла ошибка при отправке формы.';
                
                console.error('Form submission error:', error);
            } finally {
                // Восстанавливаем кнопку
                submitButton.value = 'Отправить';
                submitButton.disabled = false;
            }
        });
    }
}); 
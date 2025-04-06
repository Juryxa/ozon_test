# Тестовое задание Frontend

## Файлы проекта:
* index.html - основной файл разметки
* styles.css - стили для index.html
* script.js - скрипты для кнопок, поля value, кольца прогресса
* progressBlockApi.js - API для управления состоянием блока прогресса

## progressBlockApi:
Создает класс ProgressBlock который принимает:
* containerSelector — CSS-селектор элемента-контейнера круга (например, .progress-circle-container)
* inputSelector — CSS-селектор input-поля с value (например, #valueInput)
* fillSelector - CSS-селектор элемента заполнителя круга (например, .progress-fill)

Выбрасывает ошибку, если один из селекторов не найден на странице.

### Методы:
* show() - Показывает блок круга прогресса

* hide() - Скрывает блок круга прогресса

* startRotation() - Добавляет CSS-анимацию вращения (по часовой стрелке). Требует, чтобы в CSS был класс .rotating с анимацией

* stopRotation() - Останавливает вращение

* getValue(): number - Возвращает текущее значение из input как число (от 0 до 100). Если значение некорректное — возвращает 0

* #validateValue() - Очищает ввод от нечисловых символов и ограничивает ввод значений от 0 до 100. Приватный метод, автоматически вызывается при каждом вводе текста в поле
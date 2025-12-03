# Дизайн-система FAQ Component - KapitalBank

## Цветовая палитра

### Основные цвета

| Цвет | HEX | Использование |
|------|-----|---------------|
| Черный | `#101010` | Основной текст, иконки стрелок |
| Белый | `#FFFFFF` | Фон страницы, фон иконки при hover (основные вопросы) |
| Серый светлый | `#F3F4F6` | Фон активного блока, фон иконки, границы |
| Серый | `#f5f5f5` | Hover состояние кнопок |

**⚠️ ВАЖНО:** Цвета являются основными и не должны изменяться без согласования.

## Типографика

### Шрифт
- **Семейство:** Roboto
- **Источник:** Google Fonts
- **Веса:** 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)

### Размеры шрифтов

#### Desktop
- Заголовок секции: `46px` (Bold 700)
- Текст вопроса: `24px` (SemiBold 600)
- Текст подвопроса: `20px` (SemiBold 600)
- Текст ответа: `18px` (Regular 400)
- Line-height ответа: `1.7`

#### Mobile (768px)
- Заголовок секции: `28px` (Bold 700)
- Текст вопроса: `22px` (SemiBold 600)
- Текст подвопроса: `20px` (SemiBold 600)
- Текст ответа: `16px` (Regular 400)

#### Small Mobile (480px)
- Заголовок секции: `24px` (Bold 700)
- Текст вопроса: `22px` (SemiBold 600)
- Текст подвопроса: `20px` (SemiBold 600)
- Текст ответа: `16px` (Regular 400)

## Компоненты

### 1. FAQ Section (.faq-section)

**Назначение:** Контейнер для всего блока FAQ

**Стили:**
- Ширина: `100%` (динамическая, растягивается на всю ширину экрана)
- Фон: `transparent` (прозрачный)
- Тень: отсутствует
- Border-radius: `0`
- Padding (Desktop): `40px` сверху/снизу, `150px` слева/справа
- Padding (Mobile): `24px` по периметру
- Box-shadow: отсутствует

### 2. FAQ Item (.faq-item)

**Назначение:** Контейнер для одного вопроса и его ответа

**Состояния:**
- **Default:** Прозрачный фон
- **Active:** Фон `#F3F4F6`, скругление `16px`
- **Hover:** Граница предыдущего элемента скрывается

**Стили:**
- Border-radius: `16px`
- Transition: `background-color 0.3s ease`
- Граница снизу: `1px solid #F3F4F6` (с отступами 16px)

### 3. FAQ Question Button (.faq-question)

**Назначение:** Кнопка для открытия/закрытия вопроса

**Размеры:**
- Min-height: `80px` (Desktop), `72px` (Mobile)
- Padding: `0 16px` (Desktop), `12px` (Mobile)

**Состояния:**
- **Default:** Прозрачный фон
- **Hover:** Фон `#f5f5f5`, иконка белая
- **Active:** Фон прозрачный (наследует от .faq-item.active)
- **Closed (Mobile):** Фон прозрачный (явно сброшен после закрытия)

**Типографика:**
- Font-size: `18px` (Desktop), `16px` (Mobile)
- Font-weight: `500` (Medium)
- Line-height: `32px` (Mobile)

### 4. Question Text (.question-text)

**Назначение:** Текст вопроса

**Стили:**
- Font-size: `24px` (Desktop), `22px` (Mobile)
- Font-weight: `600` (SemiBold)
- Line-height: `28px` (Desktop), `32px` (Mobile)
- Padding: `16px 16px 16px 24px` (Desktop), `0 12px 0 0` (Mobile)
- Color: `#101010`

### 5. FAQ Icon (.faq-icon)

**Назначение:** Иконка стрелки для индикации состояния

**Размеры:**
- Width: `48px`
- Height: `48px`

**Состояния:**
- **Default:** Фон `#F3F4F6`, стрелка вниз
- **Hover (основной вопрос):** Фон `#FFFFFF`
- **Hover (подвопрос):** Фон `#F3F4F6` (не меняется)
- **Active (открыт):** Фон `#FFFFFF` (Desktop), поворот на 180°
- **Closed (закрыт, Mobile):** Фон `#F3F4F6` (возвращается к серому)

**Анимация:**
- Transition: `transform 0.3s ease`

### 6. FAQ Answer (.faq-answer)

**Назначение:** Контейнер для ответа на вопрос

**Стили:**
- Display: `grid`
- Grid-template-rows: `0fr` (закрыт), `1fr` (открыт)
- Padding: `0 48px 0 48px` (Desktop), `0 12px 0 20px` (Mobile)
- Transition: `grid-template-rows 0.3s ease-in-out`

**Анимация:**
- Плавное раскрытие через CSS Grid
- Длительность: `0.3s`

### 7. FAQ Subquestions (.faq-subquestions)

**Назначение:** Контейнер для вложенных подвопросов

**Состояния:**
- **Скрыт:** `opacity: 0`, `max-height: 0`
- **Виден:** `opacity: 1`, `max-height: 5000px`

**Анимация:**
- Transition: `opacity 0.3s ease-in-out, max-height 0.3s ease-in-out`

### 8. FAQ Subitem (.faq-subitem)

**Назначение:** Контейнер для одного подвопроса

**Стили:**
- Аналогично `.faq-item`
- Gap между подвопросами: `0`

### 9. FAQ Subquestion Button (.faq-subquestion)

**Назначение:** Кнопка для открытия/закрытия подвопроса

**Стили:**
- Аналогично `.faq-question`
- Иконка всегда серая (не меняется при hover)

### 10. Subquestion Text (.subquestion-text)

**Назначение:** Текст подвопроса

**Стили:**
- Font-size: `20px`
- Font-weight: `600` (SemiBold)
- Line-height: `28px`
- Padding: `16px 16px 16px 24px` (Desktop), `0 12px 0 0` (Mobile)

## Spacing (Отступы)

### Desktop
- Секция: `48px` padding
- Вопрос: `0 16px` padding
- Текст вопроса: `16px 16px 16px 24px` padding
- Ответ: `0 48px 24px 48px` padding (открыт)
- Gap между вопросами: `4px`

### Mobile
- Секция: `32px 24px` padding (768px), `24px 16px` (480px)
- Вопрос: `12px` padding
- Текст вопроса: `0 12px 0 0` padding
- Ответ: `0 12px 12px 20px` padding (открыт)
- Подвопрос ответ: `0 12px 0 20px` padding

## Border Radius

- Секция FAQ: `12px` (Desktop), `8px` (Mobile 480px)
- Элемент вопроса: `16px`
- Иконка: `24px` (круглая)

## Тени

- Секция FAQ: `0 2px 8px rgba(0, 0, 0, 0.08)`

## Анимации

### Длительности
- Основные переходы: `0.3s`
- Тип: `ease-in-out` или `ease`

### Свойства
- `grid-template-rows` - для раскрытия ответов
- `opacity` - для появления подвопросов
- `max-height` - для появления подвопросов
- `transform` - для вращения иконок
- `background-color` - для изменения фона
- `margin-bottom` - для отступа текста в подвопросах

## Иконки

### Стрелка вниз
- Размер: `48x48px`
- ViewBox: `0 0 48 48`
- Фон: `#F3F4F6` (круглый)
- Стрелка: `#101010`
- Path: `M18 21L24 27L30 21`

## Breakpoints

- Desktop: динамическая ширина (100% экрана)
- Tablet: `768px - 1200px` (переходная зона)
- Mobile: `480px - 768px`
- Small Mobile: `< 480px`

---

*Версия дизайн-системы: 1.0*


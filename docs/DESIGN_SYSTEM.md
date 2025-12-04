# Дизайн-система FAQ Component - KapitalBank

## Цветовая палитра

| Цвет | HEX | Использование |
|------|-----|---------------|
| Черный | `#101010` | Основной текст, иконки стрелок |
| Белый | `#FFFFFF` | Фон страницы, фон иконки при hover/active |
| Серый светлый | `#F3F4F6` | Фон активного блока, фон иконки, границы |
| Серый | `#f5f5f5` | Hover состояние кнопок |

**⚠️ ВАЖНО:** Цвета являются основными и не должны изменяться без согласования.

## Типографика

### Шрифт
- **Семейство:** Roboto (Google Fonts)
- **Веса:** 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)

### Размеры шрифтов

**Desktop:**
- Заголовок секции: `46px` (Bold 700)
- Текст вопроса: `24px` (SemiBold 600)
- Текст подвопроса: `20px` (SemiBold 600)
- Текст ответа: `18px` (Regular 400)
- Line-height ответа: `1.7`

**Mobile (≤768px):**
- Заголовок секции: `28px` (Bold 700)
- Текст вопроса: `22px` (SemiBold 600)
- Текст подвопроса: `20px` (SemiBold 600)
- Текст ответа: `16px` (Regular 400)

**Small Mobile (≤480px):**
- Заголовок секции: `24px` (Bold 700)
- Текст вопроса: `22px` (SemiBold 600)
- Текст подвопроса: `20px` (SemiBold 600)
- Текст ответа: `16px` (Regular 400)

## Компоненты

### FAQ Section (.faq-section)

**Назначение:** Контейнер для всего блока FAQ

**Стили:**
- Ширина: `100%` (динамическая)
- Фон: `transparent`
- Padding (Desktop): `40px` сверху/снизу, `150px` слева/справа
- Padding (Mobile): `24px` по периметру
- Border-radius: `0`
- Box-shadow: отсутствует

### FAQ Item (.faq-item)

**Назначение:** Контейнер для одного вопроса и его ответа

**Состояния:**
- **Default:** Прозрачный фон
- **Active:** Фон `#F3F4F6`, скругление `16px`
- **Hover:** Граница предыдущего элемента скрывается

**Стили:**
- Border-radius: `16px`
- Transition: `background-color 0.3s ease`
- Граница снизу: `1px solid #F3F4F6` (с отступами 16px)

### FAQ Question Button (.faq-question)

**Назначение:** Кнопка для открытия/закрытия вопроса

**Размеры:**
- Min-height: `80px` (Desktop), `72px` (Mobile)
- Padding: `0 16px` (Desktop), `12px` (Mobile)
- Border-radius: `16px`

**Состояния:**
- **Default:** Прозрачный фон
- **Hover:** Фон `#f5f5f5`, иконка белая
- **Active:** Фон прозрачный (наследует от .faq-item.active)
- **Closed (Mobile):** Фон прозрачный, иконка серая

### Question Text (.question-text)

**Стили:**
- Font-size: `24px` (Desktop), `22px` (Mobile)
- Font-weight: `600` (SemiBold)
- Line-height: `28px` (Desktop), `32px` (Mobile)
- Padding: `16px 16px 16px 24px` (Desktop), `0 12px 0 0` (Mobile)
- Color: `#101010`

### FAQ Icon (.faq-icon)

**Назначение:** Иконка стрелки для индикации состояния

**Размеры:**
- Width: `48px`
- Height: `48px`

**Состояния:**
- **Default:** Фон `#F3F4F6`, стрелка вниз
- **Hover (основной вопрос):** Фон `#FFFFFF`
- **Hover (подвопрос):** Фон `#F3F4F6` (не меняется)
- **Active (открыт):** Фон `#FFFFFF` (Desktop), поворот на 180°
- **Closed (Mobile):** Фон `#F3F4F6`

**Анимация:**
- Transition: `transform 0.3s ease`
- Поворот: `180deg` при открытии

### FAQ Answer (.faq-answer)

**Назначение:** Контейнер для ответа на вопрос

**Стили:**
- Display: `grid`
- Grid-template-rows: `0fr` (закрыт), `1fr` (открыт)
- Padding: `0 48px 0 48px` (Desktop), `0 12px 0 20px` (Mobile)
- Transition: `grid-template-rows 0.3s ease-in-out`

### FAQ Subquestions (.faq-subquestions)

**Назначение:** Контейнер для вложенных подвопросов

**Состояния:**
- **Скрыт:** `opacity: 0`, `max-height: 0`
- **Виден:** `opacity: 1`, `max-height: 5000px`

**Анимация:**
- Transition: `opacity 0.3s ease-in-out, max-height 0.3s ease-in-out`

## Spacing System

### Отступы

**Desktop:**
- Секция: `40px` вертикально, `150px` горизонтально
- Вопрос: `0 16px`
- Ответ: `0 48px 24px 48px`
- Текст вопроса: `16px 16px 16px 24px`

**Mobile:**
- Секция: `24px` по периметру
- Вопрос: `12px`
- Ответ: `0 12px 12px 20px`
- Текст вопроса: `0 12px 0 0`

### Gap

- Между вопросами: `4px` (белый отступ)

## Анимации

### Transitions

- Раскрытие/закрытие ответов: `0.3s ease-in-out`
- Вращение иконки: `0.3s ease`
- Смена фона: `0.3s ease`
- Границы: `0.2s ease`

### Keyframes

**fadeIn:**
- От: `opacity: 0`, `translateY(-10px)`
- До: `opacity: 1`, `translateY(0)`
- Длительность: `0.3s ease`

## Breakpoints

- **Desktop:** динамическая ширина (100% экрана)
- **Tablet:** `768px - 1200px` (переходная зона)
- **Mobile:** `480px - 768px`
- **Small Mobile:** `< 480px`

---

*Версия дизайн-системы: 1.0*

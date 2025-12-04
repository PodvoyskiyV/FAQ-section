# Спецификация для Figma - FAQ Component KapitalBank

Этот документ содержит все необходимые данные для воссоздания компонента FAQ в Figma.

## Цветовая палитра

Создайте следующие цвета в Figma:

| Название | HEX | Тип |
|----------|-----|-----|
| Black | `#101010` | Solid |
| White | `#FFFFFF` | Solid |
| Gray Light | `#F3F4F6` | Solid |
| Gray | `#f5f5f5` | Solid |

## Типографика

### Текстовые стили

**Desktop:**
- **FAQ Title:** Roboto Bold, 46px, #101010
- **Question Text:** Roboto SemiBold, 24px, #101010, Line-height: 28px
- **Subquestion Text:** Roboto SemiBold, 20px, #101010, Line-height: 28px
- **Answer Text:** Roboto Regular, 18px, #101010, Line-height: 1.7

**Mobile (≤768px):**
- **FAQ Title:** Roboto Bold, 28px, #101010
- **Question Text:** Roboto SemiBold, 22px, #101010, Line-height: 32px
- **Subquestion Text:** Roboto SemiBold, 20px, #101010, Line-height: 28px
- **Answer Text:** Roboto Regular, 16px, #101010

**Small Mobile (≤480px):**
- **FAQ Title:** Roboto Bold, 24px, #101010
- **Question Text:** Roboto SemiBold, 22px, #101010, Line-height: 32px
- **Subquestion Text:** Roboto SemiBold, 20px, #101010, Line-height: 28px
- **Answer Text:** Roboto Regular, 16px, #101010

## Компоненты

### 1. FAQ Section

**Размеры:**
- Width: 100% (Auto Layout)
- Padding: 40px 150px (Desktop), 24px (Mobile)

**Стили:**
- Background: Transparent
- Border-radius: 0
- Shadow: отсутствует

**Auto Layout:**
- Direction: Vertical
- Alignment: Stretch
- Gap: 40px (Desktop), 32px (Mobile)

### 2. FAQ Item

**Размеры:**
- Width: 100% (Fill container)
- Min-height: 80px (Desktop), 72px (Mobile)
- Border-radius: 16px

**Состояния (Component Variants):**

**Default (Закрыт):**
- Background: Transparent
- Border-bottom: 1px solid #F3F4F6 (с отступами 16px)

**Active (Открыт):**
- Background: #F3F4F6
- Border-bottom: отсутствует

**Hover:**
- Background кнопки: #f5f5f5

### 3. FAQ Question Button

**Размеры:**
- Width: 100% (Fill container)
- Height: 80px (Desktop), 72px (Mobile)
- Padding: 0 16px (Desktop), 12px (Mobile)
- Border-radius: 16px

**Auto Layout:**
- Direction: Horizontal
- Alignment: Center
- Justify: Space between
- Gap: 16px

**Состояния:**
- Default: Transparent background
- Hover: #f5f5f5 background
- Active: Transparent background (наследует от родителя)

### 4. Question Text

**Стили:**
- Font: Roboto SemiBold
- Size: 24px (Desktop), 22px (Mobile)
- Color: #101010
- Line-height: 28px (Desktop), 32px (Mobile)
- Padding: 16px 16px 16px 24px (Desktop), 0 12px 0 0 (Mobile)

### 5. FAQ Icon

**Размеры:**
- Width: 48px
- Height: 48px
- Border-radius: 24px (круг)

**Состояния:**

**Default:**
- Background: #F3F4F6
- Стрелка: #101010, направлена вниз

**Hover (основной вопрос):**
- Background: #FFFFFF
- Стрелка: #101010

**Active (открыт):**
- Background: #FFFFFF
- Стрелка: #101010, повернута на 180°

**SVG Path для стрелки:**
```
M18 21L24 27L30 21
```
- Stroke: #101010
- Stroke-width: 2
- Stroke-linecap: round
- Stroke-linejoin: round

### 6. FAQ Answer

**Размеры:**
- Width: 100% (Fill container)
- Padding: 0 48px 24px 48px (Desktop), 0 12px 12px 20px (Mobile)

**Стили:**
- Font: Roboto Regular
- Size: 18px (Desktop), 16px (Mobile)
- Color: #101010
- Line-height: 1.7 (Desktop)

### 7. FAQ Subquestions Container

**Размеры:**
- Width: 100% (Fill container)
- Gap: 0

**Auto Layout:**
- Direction: Vertical
- Alignment: Stretch
- Gap: 0

### 8. FAQ Subitem

**Размеры:**
- Width: 100% (Fill container)
- Min-height: 80px (Desktop), 72px (Mobile)
- Border-radius: 16px

**Состояния:**

**Default:**
- Background: Transparent

**Active:**
- Background: #F3F4F6

### 9. FAQ Subquestion Button

**Размеры:**
- Width: 100% (Fill container)
- Height: 80px (Desktop), 72px (Mobile)
- Padding: 0 16px (Desktop), 12px (Mobile)
- Border-radius: 16px

**Auto Layout:**
- Direction: Horizontal
- Alignment: Center
- Justify: Space between

### 10. Subquestion Text

**Стили:**
- Font: Roboto SemiBold
- Size: 20px
- Color: #101010
- Line-height: 28px
- Padding: 16px 16px 16px 24px (Desktop), 0 12px 0 0 (Mobile)

### 11. FAQ Subanswer

**Размеры:**
- Width: 100% (Fill container)
- Padding: 0 48px 0 48px (Desktop), 0 12px 0 20px (Mobile)

**Стили:**
- Font: Roboto Regular
- Size: 18px (Desktop), 16px (Mobile)
- Color: #101010
- Margin-bottom: 24px (Desktop), 12px (Mobile) при активном состоянии

## Создание компонентов в Figma

### Шаг 1: Создание цветов

1. Откройте панель Design System
2. Создайте цветовые стили для всех цветов из палитры

### Шаг 2: Создание текстовых стилей

1. Создайте текстовые стили для всех размеров и весов
2. Используйте шрифт Roboto из Google Fonts

### Шаг 3: Создание иконки стрелки

1. Создайте Frame 48x48px
2. Добавьте круглый фон #F3F4F6
3. Создайте стрелку используя Path: `M18 21L24 27L30 21`
4. Stroke: #101010, width: 2px

### Шаг 4: Создание компонентов

1. **FAQ Item (Default):**
   - Frame с Auto Layout (Vertical)
   - Background: Transparent
   - Border-radius: 16px
   - Добавьте границу снизу с отступами

2. **FAQ Item (Active):**
   - Скопируйте Default
   - Background: #F3F4F6
   - Уберите границу

3. **FAQ Question Button:**
   - Frame с Auto Layout (Horizontal)
   - Добавьте Question Text и FAQ Icon
   - Создайте варианты: Default, Hover, Active

4. **FAQ Answer:**
   - Frame с текстом ответа
   - Настройте padding

5. **FAQ Subquestions:**
   - Frame с Auto Layout (Vertical)
   - Gap: 0

6. **FAQ Subitem:**
   - Аналогично FAQ Item, но с меньшими размерами

### Шаг 5: Создание вариантов

Используйте Component Variants для создания состояний:
- Default / Active
- Desktop / Mobile
- Closed / Open

### Шаг 6: Настройка Auto Layout

Для всех компонентов используйте Auto Layout:
- Правильные padding и gap
- Alignment: Stretch для вертикальных
- Justify: Space between для горизонтальных

## Фреймы для разных разрешений

Создайте следующие фреймы:

- **Desktop:** динамическая ширина (например, 1440px для примера)
- **Tablet:** 768px width
- **Mobile:** 480px width
- **Small Mobile:** 375px width

## Инструкция по созданию в Figma

1. Создайте цветовую палитру (см. раздел "Цветовая палитра")
2. Создайте текстовые стили (см. раздел "Типографика")
3. Создайте компонент иконки стрелки
4. Создайте базовый компонент FAQ Item
5. Создайте варианты состояний (Default, Active, Hover)
6. Создайте компонент FAQ Question Button
7. Создайте компонент FAQ Answer
8. Соберите полный компонент FAQ Section
9. Создайте варианты для Desktop и Mobile
10. Протестируйте компоненты на разных разрешениях

---

*Версия спецификации: 1.0*

# Спецификация для Figma - FAQ Component

Этот документ содержит все необходимые данные для воссоздания компонента FAQ в Figma.

## Структура компонентов

### 1. FAQ Section (Основной контейнер)

**Размеры:**
- Max-width: 1200px
- Padding: 48px (Desktop), 32px 24px (Tablet), 24px 16px (Mobile)

**Стили:**
- Background: #FFFFFF
- Border-radius: 12px (Desktop), 8px (Mobile 480px)
- Shadow: 0 2px 8px rgba(0, 0, 0, 0.08)

### 2. FAQ Title (Заголовок)

**Текст:**
- Content: "Частые вопросы"
- Font: Roboto Bold
- Size: 46px (Desktop), 28px (Tablet), 24px (Mobile)
- Color: #101010
- Line-height: Auto
- Margin-bottom: 40px (Desktop), 32px (Tablet), 24px (Mobile)

### 3. FAQ Item (Элемент вопроса)

**Размеры:**
- Width: 100%
- Min-height: 80px (Desktop), 72px (Mobile)
- Border-radius: 16px
- Gap между элементами: 4px

**Состояния:**

#### Default (Закрыт)
- Background: Transparent
- Border-bottom: 1px solid #F3F4F6 (с отступами 16px слева/справа)

#### Active (Открыт)
- Background: #F3F4F6
- Border-bottom: скрыта у предыдущего элемента

#### Hover
- Background кнопки: #f5f5f5
- Border-bottom предыдущего элемента: скрыта

### 4. FAQ Question Button (Кнопка вопроса)

**Размеры:**
- Width: 100%
- Min-height: 80px (Desktop), 72px (Mobile)
- Padding: 0 16px (Desktop), 12px (Mobile)
- Border-radius: 16px

**Состояния:**

#### Default
- Background: Transparent
- Text color: #101010
- Icon background: #F3F4F6
- Icon arrow: #101010, направлена вниз

#### Hover
- Background: #f5f5f5
- Icon background: #FFFFFF (для основных вопросов)
- Icon background: #F3F4F6 (для подвопросов - не меняется)

#### Active
- Background: Transparent (наследует от .faq-item.active)
- Icon: повернута на 180° (стрелка вверх)

### 5. Question Text (Текст вопроса)

**Стили:**
- Font: Roboto SemiBold (600)
- Size: 24px (Desktop), 22px (Mobile)
- Line-height: 28px (Desktop), 32px (Mobile)
- Color: #101010
- Padding: 16px 16px 16px 24px (Desktop), 0 12px 0 0 (Mobile)

### 6. FAQ Icon (Иконка стрелки)

**Размеры:**
- Width: 48px
- Height: 48px
- Border-radius: 24px (круглая)

**Элементы:**
- Background circle: #F3F4F6 (Default), #FFFFFF (Hover основных вопросов)
- Arrow path: M18 21L24 27L30 21
- Arrow color: #101010
- Arrow stroke-width: 2px
- Arrow stroke-linecap: round
- Arrow stroke-linejoin: round

**Анимация:**
- При открытии: поворот на 180° вокруг центра

### 7. FAQ Answer (Ответ)

**Размеры:**
- Padding: 0 48px 0 48px (Desktop закрыт), 0 48px 24px 48px (Desktop открыт)
- Padding: 0 12px 0 20px (Mobile закрыт), 0 12px 12px 20px (Mobile открыт)

**Состояния:**
- Закрыт: высота 0, overflow: hidden
- Открыт: высота auto, контент виден

### 8. Answer Text (Текст ответа)

**Стили:**
- Font: Roboto Regular (400)
- Size: 18px (Desktop), 16px (Mobile)
- Line-height: 1.7
- Color: #101010

### 9. FAQ Subquestions (Контейнер подвопросов)

**Размеры:**
- Gap: 0px
- Margin-top: 0px

**Состояния:**
- Скрыт: opacity 0, max-height 0
- Виден: opacity 1, max-height auto

### 10. FAQ Subitem (Элемент подвопроса)

**Размеры:**
- Аналогично FAQ Item
- Border-radius: 16px

**Состояния:**
- Default: Background transparent
- Active: Background #F3F4F6

### 11. FAQ Subquestion Button (Кнопка подвопроса)

**Стили:**
- Аналогично FAQ Question Button
- Icon всегда серая (#F3F4F6) при hover

### 12. Subquestion Text (Текст подвопроса)

**Стили:**
- Font: Roboto SemiBold (600)
- Size: 20px
- Line-height: 28px
- Color: #101010
- Padding: 16px 16px 16px 24px (Desktop), 0 12px 0 0 (Mobile)

### 13. FAQ Subanswer (Ответ подвопроса)

**Стили:**
- Аналогично FAQ Answer
- Padding: 0 48px 0 48px (Desktop), 0 12px 0 20px (Mobile)

## Цветовая палитра для Figma

Создайте следующие цвета в Figma:

1. **Black Primary**
   - HEX: #101010
   - RGB: 16, 16, 16

2. **White**
   - HEX: #FFFFFF
   - RGB: 255, 255, 255

3. **Gray Light**
   - HEX: #F3F4F6
   - RGB: 243, 244, 246

4. **Gray**
   - HEX: #f5f5f5
   - RGB: 245, 245, 245

5. **Shadow**
   - HEX: rgba(0, 0, 0, 0.08)
   - RGB: 0, 0, 0, Opacity: 8%

## Типографика для Figma

Создайте текстовые стили:

1. **FAQ Title / Desktop**
   - Font: Roboto
   - Weight: 700 (Bold)
   - Size: 46px
   - Color: #101010

2. **FAQ Title / Tablet**
   - Font: Roboto
   - Weight: 700 (Bold)
   - Size: 28px
   - Color: #101010

3. **FAQ Title / Mobile**
   - Font: Roboto
   - Weight: 700 (Bold)
   - Size: 24px
   - Color: #101010

4. **Question Text / Desktop**
   - Font: Roboto
   - Weight: 600 (SemiBold)
   - Size: 24px
   - Line-height: 28px
   - Color: #101010

5. **Question Text / Mobile**
   - Font: Roboto
   - Weight: 600 (SemiBold)
   - Size: 22px
   - Line-height: 32px
   - Color: #101010

6. **Subquestion Text**
   - Font: Roboto
   - Weight: 600 (SemiBold)
   - Size: 20px
   - Line-height: 28px
   - Color: #101010

7. **Answer Text / Desktop**
   - Font: Roboto
   - Weight: 400 (Regular)
   - Size: 18px
   - Line-height: 1.7 (30.6px)
   - Color: #101010

8. **Answer Text / Mobile**
   - Font: Roboto
   - Weight: 400 (Regular)
   - Size: 16px
   - Line-height: 1.7 (27.2px)
   - Color: #101010

## Компоненты для создания в Figma

### Auto Layout настройки

1. **FAQ Section**
   - Direction: Vertical
   - Padding: 48px (Desktop)
   - Gap: 0px
   - Alignment: Stretch

2. **FAQ List**
   - Direction: Vertical
   - Padding: 0px
   - Gap: 4px
   - Alignment: Stretch

3. **FAQ Item**
   - Direction: Vertical
   - Padding: 0px
   - Gap: 0px
   - Alignment: Stretch
   - Corner radius: 16px

4. **FAQ Question Button**
   - Direction: Horizontal
   - Padding: 0 16px (Desktop), 12px (Mobile)
   - Gap: 0px
   - Alignment: Center
   - Min-height: 80px (Desktop), 72px (Mobile)
   - Corner radius: 16px

5. **FAQ Answer**
   - Direction: Vertical
   - Padding: 0 48px 0 48px (Desktop), 0 12px 0 20px (Mobile)
   - Gap: 0px
   - Alignment: Stretch

## Варианты компонентов

Создайте следующие варианты:

### FAQ Item
- Default (закрыт)
- Active (открыт)
- Hover

### FAQ Question Button
- Default
- Hover
- Active

### FAQ Icon
- Default (стрелка вниз, серый фон)
- Hover Main (белый фон)
- Hover Sub (серый фон, не меняется)
- Active (стрелка вверх, повернута 180°)

### FAQ Subitem
- Default (закрыт)
- Active (открыт)

## Breakpoints

Создайте следующие фреймы:

- **Desktop:** 1200px width
- **Tablet:** 768px width
- **Mobile:** 480px width

## Инструкция по созданию в Figma

1. Создайте цветовую палитру (см. раздел "Цветовая палитра")
2. Создайте текстовые стили (см. раздел "Типографика")
3. Создайте компонент FAQ Icon с вариантами
4. Создайте компонент FAQ Question Button с вариантами
5. Создайте компонент FAQ Item с вариантами состояний
6. Создайте компонент FAQ Subitem
7. Соберите все в Auto Layout контейнеры
8. Создайте фреймы для разных breakpoints
9. Настройте Constraints для адаптивности

## Анимации (для прототипирования)

В Figma можно настроить следующие переходы:

1. **Открытие вопроса:**
   - Smart Animate
   - Duration: 300ms
   - Easing: Ease In and Out

2. **Hover эффекты:**
   - Instant
   - Изменение фона

3. **Вращение иконки:**
   - Smart Animate
   - Duration: 300ms
   - Easing: Ease

---

*Версия спецификации для Figma: 1.0*


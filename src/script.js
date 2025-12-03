document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    const faqQuestions = document.querySelectorAll('.faq-question');
    const faqSubQuestions = document.querySelectorAll('.faq-subquestion');

    function updateBorders() {
        // Сначала убираем все классы hide-border
        faqItems.forEach((item) => {
            item.classList.remove('hide-border');
        });
        
        // Затем для каждого элемента, который hover или active, скрываем границу у предыдущего
        faqItems.forEach((item) => {
            const isHovered = item.matches(':hover');
            const isActive = item.classList.contains('active');
            const prevItem = item.previousElementSibling;
            
            if (prevItem && (isHovered || isActive)) {
                prevItem.classList.add('hide-border');
            }
        });
    }

    // Универсальная функция для обработки кликов
    function handleQuestionClick(element, containerClass, stopPropagation = false) {
        return function(e) {
            if (stopPropagation) e.stopPropagation();
            
            const container = this.closest(containerClass);
            const isExpanded = this.getAttribute('aria-expanded') === 'true';

            if (isExpanded) {
                container.classList.remove('active');
                this.setAttribute('aria-expanded', 'false');
            } else {
                container.classList.add('active');
                this.setAttribute('aria-expanded', 'true');
            }
            
            if (!stopPropagation) updateBorders();
        };
    }

    // Универсальная функция для обработки клавиатуры
    function handleKeydown(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    }

    // Обработка основных вопросов
    faqQuestions.forEach((question) => {
        question.addEventListener('click', handleQuestionClick(question, '.faq-item', false));
        question.addEventListener('keydown', handleKeydown);
    });

    // Обработка подвопросов
    faqSubQuestions.forEach((subQuestion) => {
        subQuestion.addEventListener('click', handleQuestionClick(subQuestion, '.faq-subitem', true));
        subQuestion.addEventListener('keydown', handleKeydown);
    });

    // Обработка hover для всех элементов
    faqItems.forEach((item) => {
        item.addEventListener('mouseenter', updateBorders);
        item.addEventListener('mouseleave', updateBorders);
    });
});


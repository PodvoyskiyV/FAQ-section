document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    const faqQuestions = document.querySelectorAll('.faq-question');
    const faqSubQuestions = document.querySelectorAll('.faq-subquestion');

    function updateBorders() {
        faqItems.forEach((item) => {
            const nextItem = item.nextElementSibling;
            
            if (nextItem) {
                const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
                const nextIsHovered = !isTouchDevice && nextItem.matches(':hover');
                const nextIsActive = nextItem.classList.contains('active');
                
                if (nextIsHovered || nextIsActive) {
                    item.classList.add('hide-border');
                } else {
                    item.classList.remove('hide-border');
                }
            } else {
                item.classList.remove('hide-border');
            }
        });
        
        requestAnimationFrame(() => {
            faqItems.forEach((item) => {
                void item.offsetHeight;
            });
        });
    }

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
            
            if (!stopPropagation) {
                requestAnimationFrame(() => {
                    updateBorders();
                    setTimeout(() => updateBorders(), 50);
                    setTimeout(() => updateBorders(), 200);
                });
            }
        };
    }

    function handleKeydown(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    }

    faqQuestions.forEach((question) => {
        question.addEventListener('click', handleQuestionClick(question, '.faq-item', false));
        question.addEventListener('keydown', handleKeydown);
    });

    faqSubQuestions.forEach((subQuestion) => {
        subQuestion.addEventListener('click', handleQuestionClick(subQuestion, '.faq-subitem', true));
        subQuestion.addEventListener('keydown', handleKeydown);
    });

    faqItems.forEach((item) => {
        item.addEventListener('mouseenter', updateBorders);
        item.addEventListener('mouseleave', updateBorders);
    });
    
    updateBorders();
});


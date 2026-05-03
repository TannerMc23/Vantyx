// FAQ Accordion — Vantyx
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all
        faqItems.forEach(i => {
            i.classList.remove('active');
            i.querySelector('.faq-answer').style.maxHeight = null;
        });

        // Open clicked if it wasn't active
        if (!isActive) {
            item.classList.add('active');
            const answer = item.querySelector('.faq-answer');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});
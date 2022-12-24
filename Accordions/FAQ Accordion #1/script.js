const faqBox = document.querySelectorAll('.faq-box');

faqBox.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    });
});
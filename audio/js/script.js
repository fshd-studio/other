const titles = document.querySelectorAll('.accordion-title');

titles.forEach(title => {
    title.addEventListener('click', () => {
        const content = title.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
            title.classList.remove('is-open');
        } else {
            content.style.display = 'block';
            title.classList.add('is-open');
        }
    });
});

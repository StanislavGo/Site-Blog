const accardion = document.querySelector('.accordion');
const titles = accardion.querySelectorAll('.accordion_title');

titles.forEach.call(titles, function(title){
    title.addEventListener('click', function() {
        const text = title.parentElement.querySelector('.accordion_text');
        title.classList.toggle('accordion_title-active');
        text.classList.toggle('accordion_text-visible');

        if (text.classList.contains('accordion_text-visible')) {
            text.style.maxHeight = text.scrollHeight + 'px';
        } else {
            text.style.maxHeight = null;
        }
    })
});
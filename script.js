const selectElement = (el) => document.querySelector(el)
;

//Open menu on click

selectElement('.fa-bars').addEventListener('click', () => {
    selectElement('.navigation__list').classList.add('active');
});

//Close menu on click

selectElement('.fa-times').addEventListener('click', () => {
    selectElement('.navigation__list').classList.remove('active');
});
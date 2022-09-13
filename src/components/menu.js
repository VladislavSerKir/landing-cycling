const headerElement = document.querySelector('.header');
const headerButton = headerElement.querySelector('.header__button')
const menuButton = headerElement.querySelector('.header__bar');
const headerMenu = headerElement.querySelector('.header__links');
const closeButton = headerElement.querySelector('.header__close-button');
const wrapper = headerElement.querySelector('.wrapper');
const headerContainer = headerElement.querySelector('.header__container');

// разворачивание бургерного меню на мобильном разрешении

menuButton.addEventListener("click", () => {
    closeButton.classList.toggle("header__close-button_visible");
    headerContainer.toggleAttribute("hidden");
    wrapper.toggleAttribute("hidden");
    headerButton.toggleAttribute("hidden")
});

closeButton.addEventListener("click", () => {
    closeButton.classList.toggle("header__close-button_visible");
    headerContainer.toggleAttribute("hidden");
    wrapper.toggleAttribute("hidden");
    headerMenu.toggleAttribute('hidden');
    headerButton.toggleAttribute("hidden")
});

// Разворачивание меню на 652px

window.addEventListener('resize', function (event) {
    if (event.target.innerWidth > 652 && Array.from(closeButton.classList).includes('header__close-button_visible')) {
        closeButton.classList.toggle("header__close-button_visible");
        headerContainer.toggleAttribute("hidden");
        wrapper.toggleAttribute("hidden");
        headerButton.toggleAttribute("hidden")
    }
}, true);
import lightThemeSwitcherImage from '../images/light-theme-switcher.png';
import darkThemeSwitcherImage from '../images/dark-theme-switcher.png';
import { leftSwitcher, rightSwitcher, lightTrackSwitcherLeft, lightTrackSwitcherRight, darkTrackSwitcherLeft, darkTrackSwitcherRight } from './track-switcher';
import { closeButtonLight, closeButtonDark, headerButtonLight, headerButtonDark } from './constants';
import { headerButton } from './menu';

const body = document.querySelector('.body');
const footerElement = body.querySelector('.footer');
const headerElement = body.querySelector('.header');
const headerCloseImage = body.querySelector('.header__close-image')
const footerCopyright = footerElement.querySelector('.footer__copyright');
const footerInputEmail = footerElement.querySelector('.footer__input-email');
const switcherButton = body.querySelectorAll('.theme-switcher');
const themeTextTogglerGeneral = Array.from(body.querySelectorAll('.theme-text-toggler-general'));
const themeTextTogglerSecondary = Array.from(body.querySelectorAll('.theme-text-toggler-secondary'));
const themeSwitcherImageBlock = body.querySelectorAll('.footer__button-image');
const bikesSelect = body.querySelector('.bikes__select');

headerCloseImage.src = closeButtonLight;
headerButton.src = headerButtonLight;

themeSwitcherImageBlock.forEach(item => {
    item.src = lightThemeSwitcherImage;
    item.classList.add('theme-switcher');
})

switcherButton.forEach(item => {
    item.addEventListener('click', changeTheme);
})

function changeTheme(event) {
    if (Array.from(event.target.classList).includes('theme-switcher')) {

        // переключение на темную

        themeSwitcherImageBlock.forEach(item => {
            item.src = darkThemeSwitcherImage;
            item.classList.toggle('theme-switcher');
        });
        themeTextTogglerGeneral.forEach(element => {
            element.classList.toggle('theme-text-general-white')
        });
        themeTextTogglerSecondary.forEach(element => {
            element.classList.toggle('theme-text-secondary')
        });
        leftSwitcher.src = darkTrackSwitcherLeft;
        rightSwitcher.src = darkTrackSwitcherRight;

        body.classList.toggle('body_theme_dark');
        headerElement.classList.toggle('header_theme_dark');
        footerElement.classList.toggle('footer_theme_dark');
        footerCopyright.classList.toggle('footer__copyright_theme_dark');
        bikesSelect.classList.toggle('bikes__select_theme_dark');
        footerInputEmail.classList.toggle('footer__input-email_theme_dark');
        headerCloseImage.src = closeButtonDark;
        headerButton.src = headerButtonDark;
    } else {

        // переключение на светлую

        themeSwitcherImageBlock.forEach(item => {
            item.src = lightThemeSwitcherImage;
            item.classList.toggle('theme-switcher');
        });
        themeTextTogglerGeneral.forEach(element => {
            element.classList.toggle('theme-text-general-white')
        });
        themeTextTogglerSecondary.forEach(element => {
            element.classList.toggle('theme-text-secondary')
        });
        leftSwitcher.src = lightTrackSwitcherLeft;
        rightSwitcher.src = lightTrackSwitcherRight;
        body.classList.toggle('body_theme_dark');
        headerElement.classList.toggle('header_theme_dark');
        footerElement.classList.toggle('footer_theme_dark');
        footerCopyright.classList.toggle('footer__copyright_theme_dark');
        bikesSelect.classList.toggle('bikes__select_theme_dark');
        footerInputEmail.classList.toggle('footer__input-email_theme_dark');
        headerCloseImage.src = closeButtonLight;
        headerButton.src = headerButtonLight;
    }
}
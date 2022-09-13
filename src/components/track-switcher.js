import { tracksTrack1, tracksTrack2, tracksGravel1, tracksGravel2, tracksTT1, tracksTT2, tracksTrackBike1, tracksTrackBike2, tracksTrackBike3, tracksGravelBike1, tracksGravelBike2, tracksGravelBike3, tracksTTBike1, tracksTTBike2, tracksTTBike3, lightTrackSwitcherLeft, lightTrackSwitcherRight, darkTrackSwitcherLeft, darkTrackSwitcherRight, tracksData } from './constants'
export { lightTrackSwitcherLeft, lightTrackSwitcherRight, darkTrackSwitcherLeft, darkTrackSwitcherRight }

export const tracksElement = document.querySelector('.tracks');
export const bikesElement = document.querySelector('.bikes');
export const trackButton = bikesElement.querySelector('#track');
export const gravelButton = bikesElement.querySelector('#gravel');
export const ttButton = bikesElement.querySelector('#TT');
export const leftSwitcher = tracksElement.querySelector('.track-switcher-left');
const leftSwitcherButton = tracksElement.querySelector('#left');
export const rightSwitcher = tracksElement.querySelector('.track-switcher-right');
const rightSwitcherButton = tracksElement.querySelector('#right');
const tracksTitle = tracksElement.querySelector('.tracks__title');
const tracksDescription = tracksElement.querySelector('.tracks__description');
const tracksFirstImage = tracksElement.querySelector('.tracks__first-image');
const tracksSecondImage = tracksElement.querySelector('.tracks__second-image');
const bikesFirstImage = bikesElement.querySelector('.first-bike');
const bikesFirstText = bikesElement.querySelector('.first-bike-text');
const bikesSecondImage = bikesElement.querySelector('.second-bike');
const bikesSecondText = bikesElement.querySelector('.second-bike-text');
const bikesThirdImage = bikesElement.querySelector('.third-bike');
const bikesThirdText = bikesElement.querySelector('.third-bike-text');

leftSwitcher.src = lightTrackSwitcherLeft;
rightSwitcher.src = lightTrackSwitcherRight;
tracksFirstImage.src = tracksTrack1;
tracksSecondImage.src = tracksTrack2;
bikesFirstImage.src = tracksTrackBike1;
bikesSecondImage.src = tracksTrackBike2;
bikesThirdImage.src = tracksTrackBike3;

let current = 0;

[trackButton, gravelButton, ttButton].forEach((button) => {
    button.addEventListener('click', (event) => {
        tracksData.forEach(item => {
            if (Object.keys(item)[0] === event.target.id) {
                current = tracksData.indexOf(item);
                changeContent(item[event.target.id]);
            }
        })
    })
})

function changeContent(data) {
    tracksTitle.textContent = data.title;
    tracksDescription.textContent = data.description;
    tracksFirstImage.src = data.locations.firstLocation;
    tracksSecondImage.src = data.locations.secondLocation;
    bikesFirstImage.src = data.bikes.firstBike.image;
    bikesFirstText.textContent = data.bikes.firstBike.description;
    bikesSecondImage.src = data.bikes.secondBike.image;
    bikesSecondText.textContent = data.bikes.secondBike.description;
    bikesThirdImage.src = data.bikes.thirdBike.image;
    bikesThirdText.textContent = data.bikes.thirdBike.description;
}

[leftSwitcherButton, rightSwitcherButton].forEach((button) => {
    button.addEventListener('click', (event) => {
        if (event.target.classList.value === 'track-switcher-left') {
            current -= 1;
            current < 0 ? current = 2 : null;
        } else {
            current += 1;
            current > 2 ? current = 0 : null;
        }
        changeContent(tracksData[current][Object.keys(tracksData[current])[0]]);
    })
})
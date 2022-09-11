import lightTrackSwitcherLeft from '../images/light-track-switcher-left.png';
import lightTrackSwitcherRight from '../images/light-track-switcher-right.png';
import darkTrackSwitcherLeft from '../images/dark-track-switcher-left.png';
import darkTrackSwitcherRight from '../images/dark-track-switcher-right.png';

import tracksTrack1 from '../images/tracks-track-labeled-1.png';
import tracksTrack2 from '../images/tracks-track.png';

import tracksTrackBike1 from '../images/tracks-track-bike-1.png';
import tracksTrackBike2 from '../images/tracks-track-bike-2.png';
import tracksTrackBike3 from '../images/tracks-track-bike-3.png';


export { lightTrackSwitcherLeft, lightTrackSwitcherRight, darkTrackSwitcherLeft, darkTrackSwitcherRight }

export const tracksElement = document.querySelector('.tracks');
export const bikesElement = document.querySelector('.bikes');
export const leftSwitcher = tracksElement.querySelector('.track-switcher-left');
export const rightSwitcher = tracksElement.querySelector('.track-switcher-right');
const tracksFirstImage = tracksElement.querySelector('.tracks__first-image');
const tracksSecondImage = tracksElement.querySelector('.tracks__second-image');

const bikesFirstImage = bikesElement.querySelector('.first-bike');
const bikesSecondImage = bikesElement.querySelector('.second-bike');
const bikesThirdImage = bikesElement.querySelector('.third-bike');

bikesFirstImage.src = tracksTrackBike1;
bikesSecondImage.src = tracksTrackBike2;
bikesThirdImage.src = tracksTrackBike3;

leftSwitcher.src = lightTrackSwitcherLeft;
rightSwitcher.src = lightTrackSwitcherRight;
tracksFirstImage.src = tracksTrack1;
tracksSecondImage.src = tracksTrack2;

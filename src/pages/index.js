import './index.scss';

import '../components/validate';
import '../components/theme-switcher';
import '../components/track-switcher';
import '../components/menu';

import introductionImage from '../images/introduction-image.jpg';
import introductionBike from '../images/bike-fix.png';
import descriptionImage from '../images/description-image.jpg';
import trainingImage from '../images/training-image.jpg';

const introductionSection = document.querySelector('.introduction');

const introductionImageBlock = introductionSection.querySelector('.introduction__image');
const introductionBikeBlock = introductionSection.querySelector('.introduction__bike-image');
introductionImageBlock.src = introductionImage;
introductionBikeBlock.src = introductionBike;

const descriptionSection = document.querySelector('.description');
const descriptionImageBlock = descriptionSection.querySelector('.description__image');
descriptionImageBlock.src = descriptionImage;

const trainingSection = document.querySelector('.training');
const trainingImageBlock = trainingSection.querySelector('.training__image');
trainingImageBlock.src = trainingImage;
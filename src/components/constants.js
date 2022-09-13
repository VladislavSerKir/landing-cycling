import lightTrackSwitcherLeft from '../images/light-track-switcher-left.png';
import lightTrackSwitcherRight from '../images/light-track-switcher-right.png';
import darkTrackSwitcherLeft from '../images/dark-track-switcher-left.png';
import darkTrackSwitcherRight from '../images/dark-track-switcher-right.png';

//Изображения групп трасс

import tracksTrack1 from '../images/tracks-track-labeled-1.png';
import tracksTrack2 from '../images/tracks-track.png';
import tracksGravel1 from '../images/tracks-gravel-labeled-1.png';
import tracksGravel2 from '../images/tracks-gravel.png';
import tracksTT1 from '../images/tracks-tt-labeled-1.png';
import tracksTT2 from '../images/tracks-tt.png';

//Изображения групп велосипедов

import tracksTrackBike1 from '../images/tracks-track-bike-1.png';
import tracksTrackBike2 from '../images/tracks-track-bike-2.png';
import tracksTrackBike3 from '../images/tracks-track-bike-3.png';
import tracksGravelBike1 from '../images/tracks-gravel-bike-1.png';
import tracksGravelBike2 from '../images/tracks-gravel-bike-2.png';
import tracksGravelBike3 from '../images/tracks-gravel-bike-3.png';
import tracksTTBike1 from '../images/tracks-tt-bike-1.png';
import tracksTTBike2 from '../images/tracks-tt-bike-2.png';
import tracksTTBike3 from '../images/tracks-tt-bike-3.png';

//Объект по которому рендеримся

const tracksData = [{
    track: {
        title: 'Шоссе',
        description: 'На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно.',
        locations: {
            firstLocation: tracksTrack1,
            secondLocation: tracksTrack2
        },
        bikes: {
            firstBike: {
                image: tracksTrackBike1,
                description: 'Cervelo Caledonia-5'
            },
            secondBike: {
                image: tracksTrackBike2,
                description: 'Cannondale Systemsix Himod'
            },
            thirdBike: {
                image: tracksTrackBike3,
                description: 'Trek Domane SL-7'
            }
        }
    }
},
{
    gravel: {
        title: 'Грэвел',
        description: 'Грэвел похож на шоссейный велосипед, но конструкция рамы немного отличается, и на нём стоят более широкие покрышки, всё для того чтобы проехать по лёгкому бездорожью.',
        locations: {
            firstLocation: tracksGravel1,
            secondLocation: tracksGravel2
        },
        bikes: {
            firstBike: {
                image: tracksGravelBike1,
                description: 'Cervelo Aspero GRX 810'
            },
            secondBike: {
                image: tracksGravelBike2,
                description: 'Specialized S-Works Diverge'
            },
            thirdBike: {
                image: tracksGravelBike3,
                description: 'Cannondale Topstone Lefty 3'
            }
        }
    }
},
{
    TT: {
        title: 'ТТ',
        description: 'ТТ — это велосипед для триатлона или раздельного старта, гооняют на таком велике только по равнинному асфальту, велик очень быстрые и аэродинамичный.',
        locations: {
            firstLocation: tracksTT1,
            secondLocation: tracksTT2
        },
        bikes: {
            firstBike: {
                image: tracksTTBike1,
                description: 'Specialized S-Works Shiv'
            },
            secondBike: {
                image: tracksTTBike2,
                description: 'BMC Timemachine 01 ONE'
            },
            thirdBike: {
                image: tracksTTBike3,
                description: 'Cervelo P-Series'
            }
        }
    }
}
];

export { tracksTrack1, tracksTrack2, tracksGravel1, tracksGravel2, tracksTT1, tracksTT2, tracksTrackBike1, tracksTrackBike2, tracksTrackBike3, tracksGravelBike1, tracksGravelBike2, tracksGravelBike3, tracksTTBike1, tracksTTBike2, tracksTTBike3, lightTrackSwitcherLeft, lightTrackSwitcherRight, darkTrackSwitcherLeft, darkTrackSwitcherRight, tracksData }
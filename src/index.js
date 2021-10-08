import './index.sass';

if ( window.outerWidth >= 1024 ) {
    import('./styles/MediaQueryLaptop.sass');
}

if ( window.outerWidth >= 768 ) {
    import('./styles/MediaQuery/TiposTablet.sass');
}

if ( document.querySelector('.Servicios') ) {
    import('./scripts/IMG_Servicios');
}


import { Calendi } from './scripts/Calendly'
if (document.querySelector('.Calendi')) {
    import('./styles/AgendarCita.sass');

    Calendi();
}

if (document.querySelector('.carousel__elements')) {
    import('./styles/QuienesSomos.sass');
    import('./scripts/Carrousel').then((Carrousel) => Carrousel.Carrousel() )
}

if (document.querySelectorAll('.Brands__img').length) {
    import('./scripts/Marcas').then((eventListener) => eventListener.eventListener() )
}

if (document.querySelectorAll('.Types__card').length)  {
    import('./scripts/Tipos').then((animation) => animation.animation() )
}

if (document.querySelector(".menu__container")) {
    import('./scripts/menu').then((menuEvent) => menuEvent.menuEvent() )
}
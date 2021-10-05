import './index.sass';

/** IMÁGENES PARA LAS MARCAS */
import AKT from './assets/Brands/Akt-motos-Color.svg';
import RoyalEnfield from './assets/Brands/Royal-Enfield-Color.svg';
import GrupoUMA from './assets/Brands/Grupo-UMA-Color.png';

/** IMÁGENES PARA LOS TIPOS */
import Motos from './assets/TypesMotorcycles/Motos.svg';
import Cuatrimotos from './assets/TypesMotorcycles/Cuatrimotos.svg';
import ThreeWheels from './assets/TypesMotorcycles/Three-Wheels.svg';

/** IMÁGENES PARA MOBILE */
import VentaDeRepuestos from './assets/Backgrounds/VentaDeRepuestos.png';
import Mantenimiento from './assets/Backgrounds/Mantenimiento.png';
import PuestaPunto from './assets/Backgrounds/PuestaPunto.png';
import Lavadero from './assets/Backgrounds/Lavadero.png';
import Revisiones from './assets/Backgrounds/Revisiones.png';
import Pintura from './assets/Backgrounds/Pintura.png';

/** IMÁGENES PARA TAMAÑO MAYOR */
import VentaDeRepuestosG from './assets/Backgrounds/VentaDeRepuestosG.png';
import MantenimientoG from './assets/Backgrounds/MantenimientoG.png';
import PuestaPuntoG from './assets/Backgrounds/PuestaPuntoG.png';
import LavaderoG from './assets/Backgrounds/LavaderoG.png';
import RevisionesG from './assets/Backgrounds/RevisionesG.png';
import PinturaG from './assets/Backgrounds/PinturaG.png';

if (document.querySelectorAll('.BtnServicio').length) {
    const Botones = document.querySelectorAll('.BtnServicio')
    Botones.forEach(button => button.addEventListener('click', () => { window.location = `/AgendarCita.html?servicio=${button.getAttribute('id')}` }))
}

if (document.querySelector('.Calendi')) {
    import('./styles/AgendarCita.sass');
    import('./scripts/Calendly').then((Calendi) => Calendi.Calendi() )
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

if (document.querySelectorAll('.Types__card').length)  {
    import('./scripts/Tipos').then((animation) => animation.animation() )
}

if (document.querySelector(".menu__container")) {
    import('./scripts/menu').then((menuEvent) => menuEvent.menuEvent() )
}
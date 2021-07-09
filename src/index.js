import './index.sass';
import './styles/AgendarCita.sass';
import './styles/QuienesSomos.sass';
console.log("COMPILADO TAMBIÉN CORRECTAMENTE!");

//'########:::::'###:::::'######::'##:::'##::'######:::'########:::'#######::'##::::'##:'##::: ##:'########:::'######::
// ##.... ##:::'## ##:::'##... ##: ##::'##::'##... ##:: ##.... ##:'##.... ##: ##:::: ##: ###:: ##: ##.... ##:'##... ##:
// ##:::: ##::'##:. ##:: ##:::..:: ##:'##::: ##:::..::: ##:::: ##: ##:::: ##: ##:::: ##: ####: ##: ##:::: ##: ##:::..::
// ########::'##:::. ##: ##::::::: #####:::: ##::'####: ########:: ##:::: ##: ##:::: ##: ## ## ##: ##:::: ##:. ######::
// ##.... ##: #########: ##::::::: ##. ##::: ##::: ##:: ##.. ##::: ##:::: ##: ##:::: ##: ##. ####: ##:::: ##::..... ##:
// ##:::: ##: ##.... ##: ##::: ##: ##:. ##:: ##::: ##:: ##::. ##:: ##:::: ##: ##:::: ##: ##:. ###: ##:::: ##:'##::: ##:
// ########:: ##:::: ##:. ######:: ##::. ##:. ######::: ##:::. ##:. #######::. #######:: ##::. ##: ########::. ######::
//........:::..:::::..:::......:::..::::..:::......::::..:::::..:::.......::::.......:::..::::..::........::::......:::

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

/**CODIGO CAROUSEL QUIENES SOMOS */
if (document.querySelector('.carousel__elements')) {
    window.addEventListener('load', function(){
        new Glider(document.querySelector('.carousel__elements'),{
            slidesToShow: 1,
            dots: '.carousel__indicators',
            arrows: {
                prev: '.carousel__return',
                next: '.carousel__forward'
            }
        });    
    });
}

/* CÓDIGO ANIMACIÓN INDEX -> MARCAS */
const brands_img = document.querySelectorAll('.Brands__img');
const windowSize = (window.innerHeight/2);
let brands_positions=[];

window.addEventListener('scroll', ()=>{
    brands_positions[0]=brands_img[1].getBoundingClientRect().bottom;
    brands_positions[1]=brands_img[1].getBoundingClientRect().top;

    if(windowSize > brands_positions[1]){
        brands_img[0].classList.add('FadeColor');
        brands_img[1].classList.add('FadeColor');
        brands_img[2].classList.add('FadeColor');
    }else{
        brands_img[0].classList.remove('FadeColor');
        brands_img[1].classList.remove('FadeColor');
        brands_img[2].classList.remove('FadeColor');
    }
    if(windowSize/2 > brands_positions[0]){
        brands_img[0].classList.remove('FadeColor');
        brands_img[1].classList.remove('FadeColor');
        brands_img[2].classList.remove('FadeColor');
    }
})
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

//::::::'##::::'###::::'##::::'##::::'###:::::'######:::'######::'########::'####:'########::'########:
//:::::: ##:::'## ##::: ##:::: ##:::'## ##:::'##... ##:'##... ##: ##.... ##:. ##:: ##.... ##:... ##..::
//:::::: ##::'##:. ##:: ##:::: ##::'##:. ##:: ##:::..:: ##:::..:: ##:::: ##:: ##:: ##:::: ##:::: ##::::
//:::::: ##:'##:::. ##: ##:::: ##:'##:::. ##:. ######:: ##::::::: ########::: ##:: ########::::: ##::::
//'##::: ##: #########:. ##:: ##:: #########::..... ##: ##::::::: ##.. ##:::: ##:: ##.....:::::: ##::::
// ##::: ##: ##.... ##::. ## ##::: ##.... ##:'##::: ##: ##::: ##: ##::. ##::: ##:: ##::::::::::: ##::::
//. ######:: ##:::: ##:::. ###:::: ##:::: ##:. ######::. ######:: ##:::. ##:'####: ##::::::::::: ##::::
//:......:::..:::::..:::::...:::::..:::::..:::......::::......:::..:::::..::....::..::::::::::::..:::::

if (document.querySelectorAll('.BtnServicio').length) {
    const Botones = document.querySelectorAll('.BtnServicio')
    Botones.forEach(button => button.addEventListener('click', () => { window.location = `/AgendarCita?servicio=${button.getAttribute('id')}` }))
}
import {Calendly} from './scripts/Calendly';
Calendly();

import {Carrousel} from './scripts/Carrousel';
Carrousel();

import {EventListener} from './scripts/Marcas';
EventListener();

//import {menuEvent} from './scripts/menu';
//menuEvent();

const menu_container = document.querySelector(".menu__container");
const menu_button = document.querySelector(".menu__button > button");
const menu = document.querySelector(".menu");
console.log(menu_button);
menu_button.addEventListener("click", function(){
    console.log("Está entrando");
    menu_button.classList.toggle("close__button");
    if (menu__button.classlist.contains("close__button")) {                    
        menu_container.style.flexDirection = "column-reverse";
        menu_container.style.justifyContent = "flex-start";
        menu.style.display = "flex"
    } else {
        menu_container.style.flexDirection = "column";
        menu_container.style.justifyContent = "flex-end";
        menu.style.display = "none"

    }
});



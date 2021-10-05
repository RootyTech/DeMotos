export function menuEvent(){
        const menu_container = document.querySelector(".menu__container");
        const menu_button = document.querySelector(".menu__button");
        const menu = document.querySelector(".menu");
        const modal = document.querySelector(".modal");
        const bodyDocument = document.querySelector("body");
        const x = window.matchMedia("(max-width: 1023px)");

        if (x.matches) {
            
            const activateMenu = ()=>{
                menu_button.classList.toggle("close-button");
                menu_container.classList.toggle("is-active");
                modal.classList.toggle("modal-active");
                if(menu_container.classList.contains("is-active")){
                    bodyDocument.style.overflowY = "hidden"
                }else{
                    bodyDocument.style.overflowY = "scroll"
                }    
                if(menu_container.style.transitionDuration === ""){
                    menu_container.style.transitionDuration = "1s";
                }
            }
    
            const closeMenuOutside = (e)=>{
                if(e.target != menu_button && e.target != menu_button.firstElementChild){
                    menu_button.classList.toggle("close-button");
                    menu_container.classList.toggle("is-active");
                    modal.classList.toggle("modal-active");
                    if(menu_container.classList.contains("is-active")){
                        bodyDocument.style.overflowY = "hidden";
                    }else{
                        bodyDocument.style.overflowY = "scroll";
                    }
                }
            }
    
            menu_button.addEventListener("click", activateMenu);
            menu_container.addEventListener("click", closeMenuOutside);
        }else{
            const BotonesMenu = document.querySelectorAll('.menu__link');

            const Paginas = {
                '': () => BotonesMenu[0].classList.add('active'),
                'index.html': () => BotonesMenu[0].classList.add('active'),
                'QuienesSomos.html': () => BotonesMenu[1].classList.add('active'),
                'index.html#maps': () => BotonesMenu[0].classList.add('active')
            }
            

            const PaginaActual = window.location.href.split("/")[window.location.href.split("/").length-1];
            Paginas[PaginaActual]();
        }
}
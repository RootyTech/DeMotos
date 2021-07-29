export function menuEvent(){
    if (document.querySelector(".menu__container")) {
        const menu_container = document.querySelector(".menu__container");
        const menu_button = document.querySelector(".menu__button");
        const modal = document.querySelector(".modal");
        const bodyDocument = document.querySelector("body");

        

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

    }
}
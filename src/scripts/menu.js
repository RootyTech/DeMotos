export function menuEvent(){
    if (document.querySelector(".menu__container")) {
        const menu_container = document.querySelector(".menu__container");
        const menu_button = document.querySelector(".menu__button > button");
        const menu = document.querySelector(".menu");
        console.log(menu_button);
        menu_container.addEventListener("click", function(){
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
    }
}
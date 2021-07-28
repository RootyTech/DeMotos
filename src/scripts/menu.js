export function menuEvent(){
    if (document.querySelector(".menu__container")) {
        const menu_container = document.querySelector(".menu__container");
        const menu_button = document.querySelector(".menu__button");
        const menu = document.querySelector(".menu");
        

        menu_button.addEventListener("click", function(){
            menu_button.classList.toggle("close__button");
            menu_container.classList.toggle("is-active");
            menu.classList.toggle("is-active");
            menu.style.transition = "transform .7s";
        });
    }
}
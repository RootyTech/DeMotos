export const animation = () => {
    if (document.querySelectorAll('.Types__card').length) {
        const x = window.matchMedia("(max-width: 1023px)");
        const types_card = document.querySelectorAll('.Types__card');
        const activators = document.querySelectorAll('.activator');
        const time = 2000;
        let count = 0;
        let index = 0;
        
        if(x.matches){
            activators.forEach(activator => {
                activator.addEventListener("click", function(){
                    types_card[0].classList.remove('AnimationCard');
                    types_card[0].firstElementChild.classList.remove('AnimationImg');
                    types_card[0].lastElementChild.classList.remove('AnimationSubtitle');
                    types_card[1].classList.remove('AnimationCard');
                    types_card[1].firstElementChild.classList.remove('AnimationImg');
                    types_card[1].lastElementChild.classList.remove('AnimationSubtitle');
                    types_card[2].classList.remove('AnimationCard');
                    types_card[2].firstElementChild.classList.remove('AnimationImg');
                    types_card[2].lastElementChild.classList.remove('AnimationSubtitle');
                    let card = activator.parentElement;
                    card.classList.add('AnimationCard');
                    card.firstElementChild.classList.add('AnimationImg');
                    card.lastElementChild.classList.add('AnimationSubtitle');
                })
            });

            function handleIntersection (entries) {
                if(count == 1){
                    let interval = window.setInterval(() => {
                        activators[index].click();
                        index++;
                        if(index == 3) {
                            index = 0;
                        }
                    }, time);
                    count++;
                }else{
                    count++;
                }
            }

            const typesObserver = new IntersectionObserver(handleIntersection, 
                {
                threshold: 0
            });
            typesObserver.observe(types_card[0]);
        }
    }
};
export const Carrousel = () => {
    if (document.querySelector('.carousel__elements')) {
        return window.addEventListener('load', function(){
            console.log("EventListener ocurrió");
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
}
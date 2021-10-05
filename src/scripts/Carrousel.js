export const Carrousel = () => {
        return window.addEventListener('load', function(){
            console.log("EventListener ocurrió");
            new Glider(document.querySelector('.carousel__elements'),{
                slidesToShow: 1,
                dots: '.carousel__indicators',
                arrows: {
                    prev: '.carousel__return',
                    next: '.carousel__forward'
                },
                rewind: true,
                responsive: [
                    {
                      // screens greater than >= 775px
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 2,
                        // Set to auto and provide item width to adjust to viewport
                    }
                }]
            });    
        });
}
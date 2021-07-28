const brands_img = document.querySelectorAll('.Brands__img');
const windowSize = (window.innerHeight/2);
let brands_positions=[];

export const eventListener = () => {
    if (document.querySelectorAll('.Brands__img').length) {
        return window.addEventListener('scroll', ()=>{
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
    }
};
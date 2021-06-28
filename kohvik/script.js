

const swiper = new Swiper('.swiper-container', {
    // Optional parameters

    loop: true,

    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // autoHeight: true, 
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
    slidesPerView: 1,
    spaceBetween: 10,
    // freeMode: true,

    autoplay: {
        delay: 2000,
        // stopOnLastSlide: true,
        disableOnInteraction: true,
    },
    speed: 1900,
    effect: 'fade',
});









/* Добовляем в переменную anchors псевдомассив с ссылками в headere
где есть решетки*/
let anchors = document.querySelectorAll('a[href*="#"]');

/* Перебираем псевдомассив */
for (anchor of anchors) {
    /* Если есть элемент то */
    if (anchor) {
        /* При нажатии на него запускается функция */
        anchor.addEventListener('click', function(e) {
            /* Сначала сбрасывает стандартные функции браузера */
            e.preventDefault();

            anchorId = this.getAttribute('href');
            document.querySelector(anchorId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
}




/* меню бургер */
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu');

if(iconMenu){
    iconMenu.addEventListener("click",function(e){
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
  
}
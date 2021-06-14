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
    speed: 2900,
    effect: 'fade',
});
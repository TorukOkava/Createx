var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
        nextEl: ".custom-button-next",
        prevEl: ".custom-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});
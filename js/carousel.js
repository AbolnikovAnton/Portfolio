$(document).ready(function () {
    $('.carousel').carousel();

    setInterval(function () {
        $('.carousel').carousel('next');
    }, 2500);
});

$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true,
});




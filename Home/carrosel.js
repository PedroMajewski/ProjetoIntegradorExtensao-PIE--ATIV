$(document).ready(function(){
    if ($(window).width() < 768) { 
        $('.portifolio').slick({ 
            slidesToShow: 1, 
            slidesToScroll: 1, 
            autoplay: true, 
            autoplaySpeed: 2000 
        });
    }
});
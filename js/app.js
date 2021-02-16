$(document).ready(function(){
    $('.slider').slick({
        loop: true,
        autoplay: true,
        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        dotsClass: 'dots'
    });

    // $('.owl-carousel').owlCarousel({

    // });
    $('.hamburger').click(()=>{
        $('.mobile-nav').addClass('show');
        $('.hamburger').css("visibility", "hidden");

    });

    $('.times').click(()=>{
        $('.mobile-nav').removeClass('show');
        $('.hamburger').css("visibility", "visible");
    });
});


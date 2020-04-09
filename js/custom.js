//counter
$(function () {
    $('.count').counterUp({
        delay: 100,
        time: 6000
    });
    //slick
    $('.warp').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2500,
        nextArrow: '.right_arrow',
        prevArrow: '.left_arrow'
    });
    //bact to top
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
    //preloder
    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });
//Strickymenu
    $(window).on('scroll', function(event) {    
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
        $(".navigation").removeClass("sticky");
    } else{
        $(".navigation").addClass("sticky");
    }
});

});
    //    SmoothScroll
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 300
    });
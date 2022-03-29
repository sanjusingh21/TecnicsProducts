$('.owl-carousel').owlCarousel({
    loop: true,
    nav: false,
    center: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        767: {
            items: 2,
        },
        1000: {
            items: 3,
            // nav: true,
            // loop: false
        }
    }
});


// sticky header
$(window).scroll(function () {
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();
    if (scroll >= 500) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});


$(document).ready(function () {

    // for animations
    window.sr = ScrollReveal();
    sr.reveal('.reveal', { origin: 'bottom', delay: 200, duration: 2000, distance: '50px', opacity: 0, reset: true });
    sr.reveal('.reveal1', { origin: 'bottom', delay: 300, duration: 2000, distance: '100px', opacity: 0, reset: true });

    // for menu open and close
    $("#menu_bars").click(() => {
        $(".menu").slideToggle();
        $(".overlay").toggleClass("show");
        $("body").toggleClass("propogateOverflow");

    });
    $(".overlay").click(() => {
        $(".overlay").removeClass("show");
        $("body").removeClass("propogateOverflow");
        $(".menu").slideUp();
    });

});







$(function() {

    var burger = $('.burger'), nav = $('.nav'), navAndBurger = $('.burger, .nav'), body = $('body');

    burger.on('click', function() {
        navAndBurger.toggleClass('active');
        nav.fadeToggle(200);
        body.toggleClass('lock');
    });

    function mediaEvents(e) {
        if(e < 992) {
            $(nav).fadeOut(200)
        }
        else {
            $(nav).fadeIn(200)
        }
    }
    mediaEvents($(window).width());
    $(window).resize(function() {
        mediaEvents($(this).width());
        
    })


});


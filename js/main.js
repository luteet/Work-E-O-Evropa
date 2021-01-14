$(function() {

    var burger = $('.burger'), nav = $('.nav'), navAndBurger = $('.burger, .nav'), body = $('body');

    burger.on('click', function() {
        navAndBurger.toggleClass('active');
        body.toggleClass('lock');
    });


    
    function mediaEvents(e) {

        if(e > 992) {
            nav.css('transition', 'all 0s ease-in-out')
        }
        else if(e < 992) {
            nav.css('transition', 'all 0.2s ease-in-out')
        }

    }
    mediaEvents($(window).width());
    $(window).resize(function() {
        mediaEvents($(this).width());
        
    })


});


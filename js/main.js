$(function() {

    var burger = $('.burger'), nav = $('.nav'), navAndBurger = $('.burger, .nav'), body = $('body');

    burger.on('click', function() {
        navAndBurger.toggleClass('active');
        nav.fadeToggle(200);
        body.toggleClass('lock');
    });

});


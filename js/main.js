$(function() {

    var burger = $('.burger'), nav = $('.header__nav'), navAndBurger = $('.burger, .header__nav'), body = $('body'),
    
    header = $('.header');

    burger.on('click', function() {
        navAndBurger.toggleClass('active');
        body.toggleClass('lock');
    });


    var headerHeight = $(header).height();
    function mediaEvents(e) {
        headerHeight = $(header).height();
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

    $('.last-vacancies__slider').slick({
        slidesToShow: 3,
        prevArrow: '<button type="button" class="slick-prev"><svg class="arrow-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 25 15" xml:space="preserve"><path d="M25,7.5c0-0.6-0.6-1.1-1.3-1.1H4.4l5.1-4.4c0.5-0.4,0.5-1.2,0-1.6c-0.5-0.4-1.3-0.4-1.8,0L0.4,6.7c-0.5,0.4-0.5,1.2,0,1.6 l7.2,6.4C7.9,14.9,8.2,15,8.5,15c0.3,0,0.7-0.1,0.9-0.3c0.5-0.4,0.5-1.2,0-1.6L4.4,8.6h19.3C24.4,8.6,25,8.1,25,7.5z"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="arrow-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 25 15" xml:space="preserve"><path d="M1.3,8.6h19.3l-5.1,4.4c-0.5,0.4-0.5,1.2,0,1.6c0.3,0.2,0.6,0.3,0.9,0.3c0.3,0,0.7-0.1,0.9-0.3l7.2-6.4 c0.5-0.4,0.5-1.2,0-1.6l-7.2-6.4c-0.5-0.4-1.3-0.4-1.8,0c-0.5,0.4-0.5,1.2,0,1.6l5.1,4.4H1.3C0.6,6.4,0,6.9,0,7.5 C0,8.1,0.6,8.6,1.3,8.6z"/></svg></button>',
        dots: true,
        responsive: [
            {
              breakpoint: 1150,
              settings: {
                slidesToShow: 2
              }
            },
            {
                breakpoint: 769,
                settings: {
                  slidesToShow: 1
                }
              },
          ]
    })



    function hHeader(settings) {

        let header = settings.elemName,
            distance = settings.distance,
            scrollPrev = 0, ifHeaderTopClass, ifHeaderTopDistance,
            scrollDown = distance,
            distanceHide = settings.distanceHide,
            distanceShow = settings.distanceShow,
            scrolled = $(window).scrollTop(),
            scrollDownCheck = false,
            scrollTop = 0,
            scrollTopCheck = false,
            scrollToTop = false,
            scrollToDown = false;


            scrollDown = distanceHide;

            ifHeaderTopClass = settings.ifHeaderTop[0];
            ifHeaderTopDistance = settings.ifHeaderTop[1];

            var headerHeight = $(header).height();


        function ifHeaderTop() {
            if (scrolled <= ifHeaderTopDistance) {
                header.addClass(ifHeaderTopClass);
            }
            else if (scrolled > ifHeaderTopDistance) {
                header.removeClass(ifHeaderTopClass);
            }
        }

        ifHeaderTop();

        if (typeof settings.loaded == 'string') {
            let classLoaded = settings.loaded;
            header.addClass(classLoaded);
        }
        else if (settings.loaded == true && typeof settings.loaded == 'boolean') {
            header.addClass('loaded');
        }
        
        $(window).resize(function () {
            mediaEvents();
            
            //widthWindow = $(window).width();
            /* ($(this).width() < 1920) ? widthWindow = $(window).width() : widthWindow = 1920; */
        });
        function btnToTop() {
            if (scrolled < 150) {
                $('.btn-to-top').addClass('hide');
            }
        }
        btnToTop();

        $(window).scroll(function () {
            scrolled = $(window).scrollTop();
            if (scrolled == 0) {
                $(header).removeClass(settings.classToHide);
                scrollTopCheck = true;
            }
            if (scrolled == Math.trunc(body.height() - $(window).height())) {
                $('.btn-to-top').removeClass(settings.classToHide);
            }
            ifHeaderTop();
            btnToTop();
            
            if (scrolled > 100 && scrolled > scrollPrev) {
                if (scrollToDown == false) {
                    scrollToTop = false;
                    scrollDown = scrolled + distanceHide;
                    scrollDownCheck = false;
                    scrollToDown = true;
                }

            } else if (scrollToTop == false) {

                scrollToDown = false;
                scrollTop = scrolled - distanceShow;
                scrollTopCheck = false;
                scrollToTop = true;
            }

            scrollPrev = scrolled;
            if (scrolled >= scrollDown && scrollDownCheck == false) {
                // hide elem
                $(header).addClass(settings.classToHide);
                $('.btn-to-top').addClass(settings.classToHide);
                scrollDownCheck = true;
            }
            if (scrollTop >= scrolled && scrollTopCheck == false) {
                // show elem
                $(header).removeClass(settings.classToHide);
                $('.btn-to-top').removeClass(settings.classToHide);
                scrollTopCheck = true;
            }
            
            if (scrolled >= ($('.wrapper').height() - 100 - $(window).height())) {
                $('.btn-to-top').removeClass(settings.classToHide);
            }   

            let activeHeaderOnMouse = false;
            body.on('mousemove', function(e) {
                if(e.clientY <= (headerHeight + 15) && header.hasClass('hide') && activeHeaderOnMouse == false) {
                    activeHeaderOnMouse = true;
                    $(header).removeClass(settings.classToHide);
                    scrollDown = scrolled + distanceHide;
                    scrollDownCheck = false;
                    
                }
            })

        });
        setTimeout(function () {
            $(header).fadeIn(200)
        }, 400)

    }

    hHeader({
        elemName: $(header),
        classToHide: 'hide',
        distanceHide: 200,
        distanceShow: 100,
        ifHeaderTop: ['top', 150],
        classAnchorForTop: true
    });



});


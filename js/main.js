$(function () {

    //document.documentElement.style.setProperty('--pagebackground', 'firebrick');
    //$('html').css('--pagebackground', 'black');
    //customSelect('select');

    $('.filter-btn-toggle-fixed').on('click', function() {
        $('.list-vacancies__filter-btn-toggle').click();
        
    });
    
    

    /* $('.list-vacancies__list').masonry({
        // options
        itemSelector: '.list-vacancies__list--item',
        columnWidth: 5,
        

      }); */



    /* function setLocation(curLoc){
        try {
          history.pushState(null, null, curLoc);
          return;
        } catch(e) {}
        location.hash = '#' + curLoc;
    } */




    //let appenderCheck;

    var burger = $('.burger'), nav = $('.header__nav'), navAndBurger = $('.burger, .header__nav'), body = $('body'),

        header = $('.header'), HtmlBody = $('html, body');

    function menuSettings (args) {
        if(args.type == 'toggle') {
            args.elemsActive.toggleClass('active');
            args.body.toggleClass('lock');
        }
        if(args.type == 'remove') {
            
            args.elemsActive.css('transition', 'all 0s ease-in-out').removeClass('active').css('transition', 'all 0.2s ease-in-out');
            args.body.removeClass('lock');
        }
        
    }

    burger.on('click', function () {
        menuSettings ({
            elemsActive: navAndBurger,
            body: body,

            type: 'toggle'

        })
    });

    //$(".filter").sticky({topSpacing:0});
    let idSub, prevFilterSelect, thisFilterSubBlock;
    $('.filter-args-select__opener').on('click', function () {
        let list = $(this).next('.filter-args-select__list'), thisElem = $(this);
        list.slideToggle().addClass('active');
        body.on('click', function (e) {
            if (thisElem.parents('.filter-args-select').has(e.target).length == 0) {
                list.removeClass('active').slideUp();
            }

        });
    });

    $('.filter-args-select__option').on('click', function () {
        let value = $(this).data('value'), name = $(this).text(), selected_list = $(this).parents('.filter-args-select__list').prevAll('.filter-args-select-selected-list');


        if ($(this).data('id-sub')) {
            $(selected_list).append(`<li class="filter-args-select-selected-list__option animate__fadeInUp ${value}"><input type="hidden" name="${value}" value="${value}"><span class="filter-args-select__option-name"><button type="button" class="filter-args-select__option-close-btn" data-value="${value}" data-id-sub="${value}">✖</button>${name}</span></li>`);
            let idSub = $(this).data('id-sub');
            $(`[data-for="${idSub}"]`).fadeIn(200);
        } else {
            $(selected_list).append(`<li class="filter-args-select-selected-list__option animate__fadeInUp ${value}"><input type="hidden" name="${value}" value="${value}"><span class="filter-args-select__option-name"><button type="button" class="filter-args-select__option-close-btn" data-value="${value}">✖</button>${name}</span></li>`);
        }


        $(this).fadeOut(200)//.addClass('selected');

    });

    /* $('.custom-select-option').on('click', function() {
        
            
        
    }); */


    /* let filterArgsCloseBtnBoolen = false;
    body.on('click', function (e) {
        
        if ($(e.target).hasClass('filter-args-select__option-close-btn') && filterArgsCloseBtnBoolen == false) {
            filterArgsCloseBtnBoolen = true;
            $('[data-value="' + $(e.target).data('value') + '"]').fadeIn(200).removeClass('selected');
            if ($(e.target).data('id-sub')) {
                let idSub = $(e.target).data('id-sub');
                $(`[data-for="${idSub}"]`).fadeOut(200);//.find('.filter-args-select-selected-list li').remove();
            }
            //$(e.target).parents('.filter-args-select-selected-list__option.' + $(e.target).data('value') + '');
            $('.filter-args-select-selected-list__option.' + $(e.target).data('value') + '').remove();

            setTimeout(function () {
                filterArgsCloseBtnBoolen = false;
            }, 200)
        }

        if ($(e.target).hasClass('custom-select-option')) {
            setTimeout(function () {
                $.each($($(e.target).parents('.custom-select-container').find('.filter-select option')), function () {

                    if ($(this).prop('selected')) {
                        console.log($(this).attr('value'));
                        if ($(this).data('id-sub')) {

                            idSub = $(this).data('id-sub');
                            thisFilterSubBlock = $(`[data-for="${idSub}"]`);
                            thisFilterSubBlock.appendTo($('.filter-sub-list'));
                            $('.filter-sub-list').css('display', 'inline-flex');
                            $(`.filter-sub-list .filter-sub-block[data-for="${idSub}"]`).css('display', 'inline-flex');

                            setTimeout(function () {

                                $(`.filter-sub-list .filter-sub-block[data-for="${idSub}"]`).css('visibility', 'visible').css('opacity', '1');

                            }, 200);


                        } else if (thisFilterSubBlock) {
                            thisFilterSubBlock.css('visibility', 'hidden').css('opacity', '0');
                            setTimeout(function () {
                                thisFilterSubBlock.css('display', 'none').appendTo($('.filter-not-active'));
                                $('.filter-sub-list').css('display', 'none');
                            }, 200)
                        }
                    }

                });
            }, 200);

        }

    }); */
    /* $('.filter-args-select__option-close-btn').on('click', function() {
        $(this).parents('.filter-args-select-selected-list__option').html('');
    }); */

    //let countSelectLabel = 10, selectLabel = $('.select-label');
    /* for(let i = $(selectLabel).length; i > 0; i--) {
        $(selectLabel[i]).css('z-index', i);
    } */
    /* $($('.filter-form .select-label').get().reverse()).each(function() {
        $(this).css('z-index', countSelectLabel++);
    }) */
    let itemLast, btnSumbmit = $($('.filter-btn.filter-btn-submit.btn')[0]).text(), btnFilter = $('.list-vacancies__filter-btn-toggle').text();

    function lengthItemsInfo() {
        let lengthItemsInfo = $('.list-vacancies__filter-result').find('.filter-result--item').length;
        if(lengthItemsInfo) {
            $('.filter-btn.filter-btn-submit.btn, .list-vacancies__filter-btn-toggle').html(`${btnSumbmit} (${lengthItemsInfo})`);
            $('.list-vacancies__filter-btn-toggle').html(`${btnFilter} (${lengthItemsInfo})`);
        } else {
            $('.filter-btn.filter-btn-submit.btn').html(btnSumbmit);
            $('.list-vacancies__filter-btn-toggle').html(btnFilter);
        }
        
    }

    function resultItemHtml(obj) {
        return `<span class="filter-result--item" data-name="${obj.name}" data-value="${obj.value}"><button class="filter-result--item-btn" data-before="✖"></button>${obj.text}<span>`;
    }

    function filterResultIf(item, ifitem, obj, init) {
        let localObj
        if(item.prop('checked') && init == 'init' && obj.value != 'all') {
            
            $('.list-vacancies__filter-result').append(resultItemHtml(obj)).fadeOut(0).fadeIn(0);
            
        }
        if(item.prop('checked')) {
            
            
            ifitem.fadeOut();

            if(obj.hasSub) {
                $.each(item.parents('.sub-li').find('.filter-sub-check-box'), function() {
                    localObj = {
                        name: $(this).attr('name'),
                        value: $(this).attr('value'),
                    }
                    if($(this).prop('checked')) {
                        $(`[data-name="${localObj.name}"][data-value="${localObj.value}"]`).fadeOut();
                    }

                });
            }

            setTimeout(function() {
                ifitem.remove();
            }, 300)

        }
        if(!item.prop('checked') && ifitem.length == 0 && init != 'init' && init != 'hide' && obj.value != 'all') {
            
            $('.list-vacancies__filter-result').append(resultItemHtml(obj));

            itemLast = $('.filter-result--item');

            $(itemLast[itemLast.length - 1]).fadeOut(0).fadeIn();

            if(obj.hasSub) {
                $.each(item.parents('.sub-li').find('.filter-sub-check-box'), function() {
                    localObj = {
                        name: $(this).attr('name'),
                        value: $(this).attr('value'),
                    }
                    if($(this).prop('checked')) {
                        $(`[data-name="${localObj.name}"][data-value="${localObj.value}"]`).fadeIn();
                    }

                });
            }


        } else if(!item.prop('checked') && init != 'init' && init != 'hide' && obj.value != 'all') {
            
            ifitem.fadeOut();
            setTimeout(function() {
                ifitem.remove();
                
                $('.list-vacancies__filter-result').append(resultItemHtml(obj)).fadeOut(0).fadeIn();
                

            }, 300)
            
        } else if(init != 'init' && init != 'hide') {
            ifitem.fadeOut();
            setTimeout(function() {
                ifitem.remove();
            }, 300)
        
        }

        setTimeout(function() {
            lengthItemsInfo();
        }, 300);
        
        
        
    }
    let prevItem;
    function filterResult(init, place) {

        if(init == 'init') {
            check_box_check = false;
            $.each(place, function () {
                let item = $(this), ifitem;
                let obj = {
                    value: $(item[0]).attr('value'),
                    name: $(item[0]).attr('name'),
                    text: $(this).parent().find('.filter-check-box-text').text(),
                }
                ifitem = $('.filter-result').find(`[data-name="${obj.name}"]`);

                
                filterResultIf(item, ifitem, obj, 'init');

            });
        } else {

            check_box_check = true;
            
            
            let item = init.find('.check-box'), ifitem;

            let obj = {
                value: $(item[0]).attr('value'),
                name: $(item[0]).attr('name'),
                hasSub: false,
                text: init.find('.filter-check-box-text').text(),
            }
                ifitem = $('.filter-result').find(`[data-name="${obj.name}"]`);
                
                if(item.parents('.label-have-sub').hasClass('label-have-sub')) obj.hasSub = true;
                
                if(prevItem) {
                    
                    if(prevItem.attr('name') != item.attr('name') || prevItem.attr('value') != item.attr('value') && item.attr('type') == 'radio') {
                        
                        filterResultIf(item, ifitem, obj, '');
                    } else if(item.attr('type') != 'radio') {
                        filterResultIf(item, ifitem, obj, '');
                    }
                    
                } else {
                    filterResultIf(item, ifitem, obj, '');
                }
                
                
                prevItem = item;
                setTimeout(function() {
                    check_box_check = false;
                }, 200);
        }
        /* lengthItems = '';
        lengthItems = $($('.filter-btn.filter-btn-submit.btn')[0]).text() + ' ' + $('.list-vacancies__filter-result').find('.filter-result--item').length + '+';
        console.log($('.list-vacancies__filter-result').find('.filter-result--item').length) */
        

    }
    

    let check_box_check = false;
    filterResult('init', $('.check-box'));
    
    $('.check-box-label, .label-sub').on('click', function() {
        if(check_box_check == false) {
            /* if($(this).hasClass('label-sub')) {
                filterResult('init', $(this).find('.filter-sub-check-box'));
            } */
            filterResult($(this));
            lengthItemsInfo();
        }
    });

    $.each($('.label-have-sub'), function () {
        if ($($(this).find('.filter-check-box')).prop('checked')) {

            $(this).parents('li').find('.filter-block__sub-list').fadeIn();
        } else {
            $(this).parents('li').find('.filter-block__sub-list').fadeOut();

        }
    })
    //let label_have_sub = false;

    $.each($('.label-have-sub'), function () {
        if ($($(this).find('.filter-check-box')).prop('checked')) {
            $(this).addClass('active').parents('.sub-li').addClass('active');
            if ($(this).parents('.sub-li').find('.filter-block__sub-list li').length >= 9 && $(this).parents('.sub-li').hasClass('active')) {
                $(this).parents('.sub-li').find('.filter-more-list-toggle').removeClass('_hidden');
            }
        }
        /* if($(this).parents('.sub-li').find('.filter-block__sub-list li').length >= 9) {
            $(this).parents('.sub-li').find('.filter-more-list-toggle').removeClass('_hidden');
        } */

    });

    $('.label-have-sub').on('click', function () {

        if ($($(this).find('.filter-check-box')).prop('checked')) {

            if ($(this).parents('.sub-li').find('.filter-block__sub-list li').length >= 9) {
                $(this).parents('.sub-li').find('.filter-more-list-toggle').removeClass('_hidden');
            }

            $(this).addClass('active').parents('.sub-li').addClass('active');

            $.each($($(this).parents('li').find('.filter-block__sub-list .check-box')), function () {
                $(this).removeAttr('disabled', 'disabled');
            });

            $(this).parents('li').find('.filter-block__sub-list').fadeIn(0);

        } else {

            $(this).removeClass('active').parents('.sub-li').removeClass('active').find('.filter-more-list-toggle').addClass('_hidden');

            $.each($($(this).parents('li').find('.filter-block__sub-list .check-box')), function () {
                $(this).attr('disabled', 'disabled');
            });

            $(this).parents('li').find('.filter-block__sub-list').fadeOut(0);

        }

    })





    /* if(body.data('name-page') == $('.header__nav-menu-link').data('name-page')) {
        $(this).addClass('active');
    } */

    var /* headerHeight = $(header).height(), */ filterEventCheck = ($(window).width() > 1100) ? false : true;

    /* var arrayItems = [];
    $.each($('.list-vacancies__list--item'), function() {
        arrayItems.push($(this));
    }); */
    
    function mediaEvents(e) {

        //headerHeight = $(header).height();

        
        
        //console.log(arrayItems);

        if (e > 1100 && filterEventCheck == false) {
            filterEventCheck = true;
            
            $('.filter').removeClass('active');
            menuSettings ({
                elemsActive: navAndBurger,
                body: body,
    
                type: 'remove'
    
            })
            $('.list-vacancies__filter-btn-toggle').removeClass('active');

            
        }
        else if (e < 1100 && filterEventCheck == true) {
            filterEventCheck = false;
            $('.filter-wrapper').removeClass('wow');

            $('.filter-match').addClass('active').appendTo($('.filter-nav-block._fixed-version'));

        }
        if (e > 992) {
            menuSettings ({
                elemsActive: navAndBurger,
                body: body,
    
                type: 'remove'
    
            })
            nav.css('transition', 'all 0s ease-in-out')
        }
        else if (e < 992) {

            nav.css('transition', 'all 0.2s ease-in-out')
        }

    }
    mediaEvents($(window).width());
    $(window).resize(function () {
        mediaEvents($(this).width());


    })


    /* $('.list-vacancies__list--item').on("DOMNodeInserted", function (event) {

    }); */


    //indexerItems($('.list-vacancies__list--item'));

    /* function apppenderToColumns(args) {
        
        let
        column = $(args.column),
        items = args.elem,
        

        mediaValArr = args.media,
        
        mediaVal;
        

        for(let x = 0; x <= mediaValArr.length; x++) {
                    
            if((mediaValArr[x] >= widthScreen && (mediaValArr[x+1] <= widthScreen || mediaValArr[x+1] == undefined)) || (mediaValArr[x] == -1 && mediaValArr[x+1] <= widthScreen)) {
                
                if(appenderCheck != mediaValArr[x]) {
                    appenderCheck = mediaValArr[x];

                    for (let i = 0, j = 0; i <= items.length; i++, j++) {
                
                        if(j == $(column).length - x) {
                            j = 0;
                        }

                        $(items[i]).appendTo($(column[j]));
                        
                    }
                }

            }
        }
        

    } */


    $('.btn-to-top').on('click', function () {
        HtmlBody.animate({
            scrollTop: 0
        }, 1000);
    })


    /* $('.last-vacancies__slider').slick({
        slidesToShow: 3,
        prevArrow: '<button type="button" class="slick-prev"><svg class="arrow-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 25 15" xml:space="preserve"><path d="M25,7.5c0-0.6-0.6-1.1-1.3-1.1H4.4l5.1-4.4c0.5-0.4,0.5-1.2,0-1.6c-0.5-0.4-1.3-0.4-1.8,0L0.4,6.7c-0.5,0.4-0.5,1.2,0,1.6 l7.2,6.4C7.9,14.9,8.2,15,8.5,15c0.3,0,0.7-0.1,0.9-0.3c0.5-0.4,0.5-1.2,0-1.6L4.4,8.6h19.3C24.4,8.6,25,8.1,25,7.5z"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="arrow-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 25 15" xml:space="preserve"><path d="M1.3,8.6h19.3l-5.1,4.4c-0.5,0.4-0.5,1.2,0,1.6c0.3,0.2,0.6,0.3,0.9,0.3c0.3,0,0.7-0.1,0.9-0.3l7.2-6.4 c0.5-0.4,0.5-1.2,0-1.6l-7.2-6.4c-0.5-0.4-1.3-0.4-1.8,0c-0.5,0.4-0.5,1.2,0,1.6l5.1,4.4H1.3C0.6,6.4,0,6.9,0,7.5 C0,8.1,0.6,8.6,1.3,8.6z"/></svg></button>',
        dots: true,
        adaptiveHeight: true,
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
    }) */

    

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
            //filterOffsetTop = $('.filter').offset().top;
            //widthWindow = $(window).width();
            /* ($(this).width() < 1920) ? widthWindow = $(window).width() : widthWindow = 1920; */
        });
        function btnToTop() {
            if (scrolled < 150) {
                $('.btn-to-top').addClass('hide');
            }
        }
        btnToTop();
        let toggleFixedCheck = $('.filter-btn-toggle-fixed').length;
        $(window).scroll(function () {

            if(toggleFixedCheck && $(this).width() <= 1100) {
                ($('.list-vacancies__filter-btn-toggle').offset().top <= (header.offset().top - 100)) ? $('.filter-btn-toggle-fixed').addClass('_active') : $('.filter-btn-toggle-fixed').removeClass('_active')
            }

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

            /* if(!header.hasClass('hide') && $('.sticky-wrapper').hasClass('is-sticky')) {
                
                $('.filter').addClass('_is-sticky').css('transition', 'transform .25s ease-in-out').css('transform', `translate(0px, ${headerHeight}px)`);
            }
            else if(header.hasClass('hide') && $('.sticky-wrapper').hasClass('is-sticky')) {
                $('.filter').addClass('_is-sticky').css('transition', 'transform .15s ease-in-out').css('transform', `translate(0px, ${0}px)`);
            }
            else {
                $('.filter').removeClass('_is-sticky').css('transition', 'transform .1s ease-in-out').css('transform', `translate(0px 0px)`);
            } */


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
                
                if(toggleFixedCheck) $('.filter-btn-toggle-fixed').addClass(settings.classToHide);
                
                //$('.filter').css('transform', `translate(0px, 0px)`);
                scrollDownCheck = true;
            }
            if (scrollTop >= scrolled && scrollTopCheck == false) {
                // show elem
                $(header).removeClass(settings.classToHide);
                $('.btn-to-top').removeClass(settings.classToHide);
                if(toggleFixedCheck) $('.filter-btn-toggle-fixed').removeClass(settings.classToHide);
                //$('.filter').css('transform', `translate(0px, ${headerHeight}px)`);
                scrollTopCheck = true;
            }

            if (scrolled >= ($('.wrapper').height() - 100 - $(window).height())) {
                $('.btn-to-top').removeClass(settings.classToHide);
            }

            let activeHeaderOnMouse = false;
            body.on('mousemove', function (e) {
                if (e.clientY <= 15 && header.hasClass('hide') && activeHeaderOnMouse == false) {
                    activeHeaderOnMouse = true;
                    $(header).removeClass(settings.classToHide);
                    scrollDown = scrolled + distanceHide;
                    scrollDownCheck = false;
                    /* if($('.sticky-wrapper').hasClass('is-sticky')) {
                
                        $('.filter').addClass('_is-sticky').css('transition', 'transform .25s ease-in-out').css('transform', `translate(0px, ${headerHeight}px)`);
                    } */
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

    
    
    $(document).ready(function() {
        if(!$('.wow').hasClass('.list-vacancies__item')) $('.wow').addClass('animate__fadeInUp');
    })

    body.on('click', function (e) {
        if($(e.target).hasClass('filter-result--item-btn')) {
            let value = $(e.target).parent().data('value'), name = $(e.target).parent().data('name');
            $(e.target).parent().fadeOut(200)
            setTimeout(function() {
                $(e.target).parent().remove();
                lengthItemsInfo();
            },300);
            $(`[value="${value}"]`).prop({checked: false}).parent('.label-have-sub').removeClass('active').parent('.sub-li').removeClass('active').find('.filter-block__sub-list').css('display', 'none').next('.filter-more-list-toggle').addClass('_hidden');
            $(`[name="${name}"][value="all"]`).prop({checked: true});
            
        }
        if ($(e.target).hasClass('filter-more-list-toggle')) {

            $(e.target).toggleClass('active');
            if ($(e.target).hasClass('active')) {
                $(e.target).html($(e.target).data('not-active')).prev('.filter-block__sub-list').addClass('active');
            } else {
                $(e.target).html($(e.target).data('active')).prev('.filter-block__sub-list').removeClass('active');
            }

        }
    });

    $('.check-box-label, .label-sub').on('click', function () {
        if (filterEventCheck == true) {

            //$('.filter-match').fadeOut(200).removeClass('active');
            //$('.filter-match').fadeIn(200).addClass('active');

            if ($(this).hasClass('label-sub')) {
                $('.filter-match').appendTo($(this).parents('.sub-li').find('.label-have-sub')).removeClass('hide').addClass('active');


            } else {
                $('.filter-match').appendTo($(this).parent('li')).removeClass('hide').addClass('active');

            }



            body.on('click', function (e) {

                if ($('.filter-match').parents('.filter-block__list').has(e.target).length == 0) {
                    $('.filter-match').removeClass('active').addClass('hide');//.fadeOut(200);
                }




            });


        }
    });


    $.each($('.btn-scroll'), function () {
        if ($($(this).data('href')).hasClass('section-scroll')) {
            $(this).attr('href', $(this).data('href')).removeData('href');
        }

    })

    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">Фото #%curr%</a> не може завантажитись.',
            titleSrc: function (item) {
                return item.el.attr('title');
            }
        }
    });


    /* let start_scroll = false;
    $('.btn-scroll').on('click', function (e) {
        if (!$(this).data('href')) {
            e.preventDefault()
        }
        navAndBurger.removeClass('active');
        HtmlBody.removeClass('lock').css('margin-right', '0px');
        if (start_scroll == false) {
            start_scroll = true;

            let scrollName = $(this).attr('href'), scrollElem = $(scrollName), scrollTop = scrollElem.offset().top;

            HtmlBody.animate({
                scrollTop: scrollTop,
            }, 1500);

            setTimeout(function () {
                start_scroll = false;
            }, 1500);
        }
    }) */



    /* $('.check-box-label, .label-sub').on('click', function () {
        if (filterEventCheck == true) {
            $('.filter-match').fadeIn(200).addClass('active');
            
        }
    }); */

    $('.filter-btn-submit').on('click', function () {
        $('.filter-form').submit();
    });
    $('.filter-btn-reset').on('click', function () {
        $('.filter-form')[0].reset();
    });

    let btnToTopHideCheck;
    $('.list-vacancies__filter-btn-toggle').on('click', function () {
        btnToTopHideCheck = $('.btn-to-top').hasClass('hide');
        body.toggleClass('lock');
        $('.filter').toggleClass('active');
        $('.filter-close-btn').toggleClass('_show');
        $('.filter-nav-block').toggleClass('active');

        if(!btnToTopHideCheck) $('.btn-to-top').addClass('hide');
        

    });

    $('.filter-close-btn').on('click', function () {
        body.removeClass('lock');
        $('.filter').removeClass('active');
        $('.filter-close-btn').removeClass('_show');
        $('.filter-nav-block').removeClass('active');

        if(!btnToTopHideCheck) $('.btn-to-top').removeClass('hide');
        
    });

    /* $('.filter-close-btn').on('click', function () {
        $('.list-vacancies__filter-btn-toggle').removeClass('active');
        $('.filter').slideUp(200).removeClass('active');
    }); */



    /*  $('.custom-select-option').on('click', function() {
         console.log($('[value="' + $(this).attr('data-value') + '"]'));
         $('.select-args').append('<span><input type="hidden" name="' + $(this).attr('data-value') + '" value="' + $(this).attr('data-value') + '">' + $(this).attr('data-value') + '</span>');
         $(this).addClass('selected');
     });
 
     $('#mySelect').on('click', function() {
         $.each($('#mySelect option'), function() {
             if($(this).prop('selected')) {
                 //console.log($(this));
             }
         });
     }); */
     
     
    


    new WOW(
        {
            mobile: false,       // default
        }).init();


        


});


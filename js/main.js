jQuery(document).on('ready', function ($) {
    "use strict";

    /*--------------------------
        SCROLLSPY ACTIVE
    ---------------------------*/
    $('body').scrollspy({
        target: '.bs-example-js-navbar-scrollspy',
        offset: 65
    });


    /*--------------------------
        STICKY MAINMENU
    ---------------------------*/
    $("#mainmenu-area").sticky({
        topSpacing: 0
    });


    /*--------------------------
        SMOOTH SCROLL
    ----------------------------*/
    $(".push-menu-and-content").niceScroll({
        cursorwidth: "10px"
    });


    /*---------------------------
        HOME TYPE TEXT
    ----------------------------*/
    //etat par defaut en Fr
    $('.type-text').typeIt({
        strings: ['Site Web', 'CV', 'Portfolio'],
        breakLines: false,
        autoStart: true,
        cursor: false,
        loop: true,
        speed: 250
    });


    /*--------------------------
        on change de language detected
    ---------------------------*/
    $(".current_lang .lang .lang-txt").on('DOMSubtreeModified', function () {

        if ($('#cvbtn').text() == 'Télècharger CV') {            
            $('.type-text').typeIt({
                strings: ['Site Web', 'CV', 'Portfolio'],
                breakLines: false,
                autoStart: true,
                cursor: false,
                loop: true,
                speed: 250
            });
        } else if ($('#cvbtn').text() == 'Download CV') {
            $('.type-text').typeIt({
                strings: ['Website', 'CV', 'Portfolio'],
                breakLines: false,
                autoStart: true,
                cursor: false,
                loop: true,
                speed: 250
            });
        } else {
            $('.type-text').typeIt({
                strings: ['موقع انترنت', 'السيرة الذاتية'],
                breakLines: false,
                autoStart: true,
                cursor: false,
                loop: true,
                speed: 250
            });
        }
    });


    /*--------------------------
        translate CV To FR, An & AR
    ---------------------------*/

    $('#urlCV').hover(
        function () { // mouseenter
            if ($('#cvbtn').text() == 'Télècharger CV') {
                document.getElementById("urlCV").href = "https://docs.google.com/viewer?url=https://rochdiarafa.github.io/CV/Rachid-Arafa-CV-FR.pdf";
            }
            else if ($('#cvbtn').text() == 'Download CV') {
                document.getElementById("urlCV").href = "https://docs.google.com/viewer?url=https://rochdiarafa.github.io/CV/Rachid-Arafa-CV-EN.pdf";
            } else {
                document.getElementById("urlCV").href = "https://docs.google.com/viewer?url=https://rochdiarafa.github.io/CV/Rachid-Arafa-CV-AR.pdf";
            }
        },
        function () { // mouseleave

        });

        /*--------------------------
        change url linkedIn To FR, An & AR
    ---------------------------*/

    $('#urlLinkedIn').hover(
        function () { // mouseenter
            if ($('#cvbtn').text() == 'Télècharger CV') {
                document.getElementById("urlLinkedIn").href = "https://www.linkedin.com/in/rachid-arafa/?locale=fr_FR";
            }
            else if ($('#cvbtn').text() == 'Download CV') {
                document.getElementById("urlLinkedIn").href = "https://www.linkedin.com/in/rachid-arafa/?locale=en_US";
            } else {
                document.getElementById("urlLinkedIn").href = "https://www.linkedin.com/in/rachid-arafa/?locale=ar_AE";
            }
        },
        function () { // mouseleave

        });    

    /*--------------------------
        PUSH MENU OPEN COLOSE
    ---------------------------*/
    var $content = $('.push-menu-and-content');
    $('.push-menu-open-button').on('click', function () {
        $content.addClass('menu-open');
    });
    $('.push-menu-close').on('click', function () {
        $content.removeClass('menu-open');
    });


    /*---------------------------
        SMOOTH SCROLL
    -----------------------------*/
    $('ul#nav li a[href^="#"], .push-menu ul li a, a.navbar-brand,a.scrolltotop,.call-to-action a,.home-button a').on('click', function (event) {
        var id = $(this).attr("href");
        var offset = 40;
        var target = $(id).offset().top - offset;
        $('html, body').animate({
            scrollTop: target
        }, 1500, "easeInOutExpo");
        event.preventDefault();
    });


    /*----------------------------
        SCROLL TO TOP
    ------------------------------*/
    $(window).on("scroll", function () {
        var $totalHeight = $(window).scrollTop();
        var $scrollToTop = $(".scrolltotop");
        if ($totalHeight > 300) {
            $scrollToTop.fadeIn();
        } else {
            $scrollToTop.fadeOut();
        }
        if ($totalHeight + $(window).height() === $(document).height()) {
            $scrollToTop.css("bottom", "90px");
        } else {
            $scrollToTop.css("bottom", "20px");
        }


        // scroll and fade header text
        var scrollPosition = jQuery(this).scrollTop();
        jQuery('.welcome-text').css({
            'margin-top': -(scrollPosition / 4) + "px",
            'opacity': 1 - (scrollPosition / 400)
        });
    });


    /*---------------------------
        SKILL PROGRESSBAR
    -----------------------------*/
    jQuery('.skillbar').each(function () {
        jQuery(this).appear(function () {
            jQuery(this).find('.count-bar').animate({
                width: jQuery(this).attr('data-percent')
            }, 3000);
            var percent = jQuery(this).attr('data-percent');
            jQuery(this).find('.count').html('<span>' + percent + '</span>');
        });
    });


    /*---------------------------
        GALLERY SLIDER
    -----------------------------*/
    $('.gallary-slider').owlCarousel({
        merge: true,
        smartSpeed: 1000,
        loop: true,
        nav: true,
        navText: ['<i class="icofont icofont-bubble-left"></i>', '<i class="icofont icofont-bubble-right"></i>'],
        autoplay: false,
        autoplayTimeout: 2000,
        margin: 30,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });


    /*------------------------------
        PORTFOLIO IMAGE POPUP
    -------------------------------*/
    $('.gallery-popup').magnificPopup({
        type: 'image',
        removalDelay: 500, //delay removal by X to allow out-animation
        callbacks: {
            beforeOpen: function () {
                // just a hack that adds mfp-anim class to markup 
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        gallery: {
            enabled: true
        },
        closeOnContentClick: true,
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });


    /*--------------------------
        ACTIVE WOW JS
    ----------------------------*/
    new WOW().init();

}(jQuery));



jQuery(window).on('load', function () {
    "use strict";
    /*--------------------------
        PRE LOADER
    ----------------------------*/
    $(".preeloader").fadeOut(1000);
});
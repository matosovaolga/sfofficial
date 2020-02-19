(function ($) {
    "use strict";
    var main_wind = $(window);
    var wWidth = $(window).width();

    jQuery(document).ready(function ($) {
        
        //-----stuck navigation------
        jQuery(".menuzord").menuzord({
            
            align: "left",
            trigger: "click",
            effect: "slide",
            indicatorFirstLevel: '<i class="fa fa-angle-down"></i>',
            indicatorSecondLevel: '<i class="ion-ios-plus-outline"></i>'
        });


    }); //---document-ready-----


    //------nice select-------
    $('select').niceSelect();


    //---------venobox--------
    $('.venobox').venobox();

    //-----------newsleter subscribe-6 height measure-------------
    var cContentHeight = $(".app_newsletter .subscribe_form").height();
    $(".app_newsletter .subscirbe_img").css("height", cContentHeight);

    
    //-----------contact form class add for css3 effect-------------
    $(".abinput_group>input, .abinput_group>textarea").on("click", function () {
        $(this).parent().addClass("input_effect");
    });

    //--------------------testimonial carousel---------------------
    $(".t_carousel7").owlCarousel({
        items: 2,
        loop: true,
        dots: false,
        nav: true,
        margin: 140,
        autoplay: true,
        stagePadding: 50,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        smartSpeed: 1200,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                margin: 10,
                stagePadding: 0
            },
            480: {
                items: 1,
            },
            992: {
                items: 2,
            }
        }
    });

    //--------------------testimonial carousel---------------------
    $(".screenshot_carousel").owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        autoplay: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        smartSpeed: 1200,
    });





}(jQuery));

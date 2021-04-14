$(".menu-btn").click(function(){
    $(".menu-btn").hide();
    $("#menu-btn-close").show();
    $(".wrapper").show();
    $('html, body').css({
        overflow: 'hidden',
        height: '100%'
    });
});

$("#menu-btn-close").click(function(){
    $("#menu-btn-close").hide();
    $(".menu-btn").show();
    $(".wrapper").hide();
    $('html, body').css({
        overflow: 'auto',
        height: '100%'
    });
});

$(".wrapper a").click(function(){
    $("#menu-btn-close").hide();
    $(".menu-btn").show();
    $(".wrapper").hide()
    $('html, body').css({
        overflow: 'auto',
        height: '100%'
    })
});

// Home Section 
$('#home-carousel').owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    loop: true,
    dots: true,
    items:1,
    responsive:{
    // display resolution
        0:{
            items: 1, 
        },
        485: {
            items: 1,
        },
        728: {
            items: 1,
        },
        960: {
            items: 1,
        },
        1200: {
            items: 1,
        }
    }
});

// Gallery section 
$('#gallery-carousel').owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    loop: true,
    items:1,
    nav: true,
    dots: true,
    responsive:{
    // display resolution
        0:{
            items: 1, 
            dots: false,
        },
        485: {
            items: 1,
        },
        728: {
            items: 1,
        },
        960: {
            items: 1,
        },
        1200: {
            items: 1,
        }
    }
});

// Feature section 
$('#feature-carousel').owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    loop: true,
    items:2,
    nav: true,
    dots: true,
    responsive:{
    // display resolution
        0:{
            items: 1, 
            dots: false,
        },
        485: {
            items: 1,
        },
        728: {
            items: 1,
        },
        960: {
            items: 2,
        },
        1200: {
            items: 2,
        }
    }
});



$( window ).on( "load", function() {
    mainNav();
    $(window).scroll(function() {
        mainNav();
    });
    function mainNav() {
        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (top){
        $('.navbar').start().animate({
            "opacity": "1",
            "top": "0",
        });
        }
	}
     });
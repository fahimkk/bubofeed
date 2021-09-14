// Home Section 
$('#home-carousel').owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 2000,
    smartSpeed:1500,
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
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    loop: true,
    items:1,
    nav: true,
    dots: true,
    smartSpeed:500,
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

var scroll = window.requestAnimationFrame ||
            function(callback){ window.setTimeout(callback, 1000/60)};

const callback = function(entries) {
  entries.forEach(entry => {
    entry.target.classList.toggle("is-visible");
  });
};

const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll(".show-on-scroll");
targets.forEach(function(target) {
  observer.observe(target);
});

$( window ).on( "load", function() {
    mainNav();
    $(window).scroll(function() {
        mainNav();
    });
    function mainNav() {
        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (top > 40) {
            $('.navbar').css('background-color', '#44D7F5')
            $('.nav-link').css('color', 'white')
        }
        else {
            $('.navbar').css('background-color', '')
            $('.nav-link').css('color', 'white')
        }
	}
     });


const controller = new ScrollMagic.Controller();

var tl = TweenMax.to('#privacy-img', 0.5, {
        rotation: 5,
        ease: Power4.easeInOut
    });

const scene = new ScrollMagic.Scene({
  triggerElement: ".privacy",
            triggerHook: 0.7,
            duration: '100%'
}).setTween(tl)
.addTo(controller);



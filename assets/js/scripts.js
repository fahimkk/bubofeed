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

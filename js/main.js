const prevSliderBtn = '<div class="slider__nav-btn slider__nav-btn--prev">'
    + '<svg class="slider__nav-icon slider__nav-icon--prev"><use xlink:href="#arrow-big" /></svg>'
    + '</div>'

const nextSliderBtn = '<div class="slider__nav-btn slider__nav-btn--next">'
+ '<svg class="slider__nav-icon slider__nav-icon--next"><use xlink:href="#arrow-big" /></svg>'
+ '</div>'


function mobileMenu() {
    const toggler = document.querySelectorAll('.js-menu-togler');

    toggler.forEach(btn => {
        btn.addEventListener('click', toggleMenu);
    });


    function toggleMenu(e) {
        const menu = document.querySelector('.js--menu');

        menu.classList.toggle('menu--open');
    }
}

function sliderGamesInit() {
    const slider = $('.js-slider-games');

    const settingMobile = {
        arrows: true,
        Infinity: false,
        prevArrow: prevSliderBtn,
        nextArrow: nextSliderBtn,
        rows: 3,
        slidesPerRow: 1,
        mobileFirst: true,
        fade: true,
        responsive: [
            {
                breakpoint: 991,
                settings: "unslick"
            }
        ]
    }

    const settingDesktop = {
        arrows: true,
        Infinity: false,
        prevArrow: prevSliderBtn,
        nextArrow: nextSliderBtn,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 991,
                settings: "unslick"
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
        ]
    }

    function initSlider() {
        if (window.innerWidth >= 991) {
            slider.slick(settingDesktop);
        } else {
            slider.slick(settingMobile);
        }
    }

    initSlider();

    slider.on('destroy', initSlider);
}

function sliderLifeInit() {
    const slider = $('.js-slider-life');

    slider.slick({
        arrows: true,
        Infinity: true,
        fade: true,
        prevArrow: prevSliderBtn,
        nextArrow: nextSliderBtn,
        draggable: false,
        swipeToSlide: false,
        touchMove: false,
    })
}

function sliderSeasideScoopInit() {
    const slider = $('.js-seaside-scoop-slider');

    slider.slick({
        arrows: true,
        Infinity: true,
        fade: true,
        prevArrow: prevSliderBtn,
        nextArrow: nextSliderBtn,
        draggable: false,
        swipeToSlide: false,
        touchMove: false,
    })
}

function footerAccordiont() {
    if (window.innerWidth <= 768) {
        const acoordionTitle = $('.js-accordion-title');
    
        acoordionTitle.on('click', function() {
            $(this).parent().toggleClass('open');
        })
    } else {
        acoordionTitle.off('click');
    }
}

function init() {
    mobileMenu();
    sliderGamesInit();
    sliderLifeInit();
    sliderSeasideScoopInit();
    footerAccordiont();

    $(window).on('resize', footerAccordiont)
}


document.addEventListener('DOMContentLoaded', init, false);
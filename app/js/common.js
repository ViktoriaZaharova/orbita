$('.special-offers-slider').slick({
    slidesToShow: 2,
    asNavFor: '.special-offers-preview-slider',
    appendArrows: '.special-offers-slider__nav',
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
        '\t viewBox="0 0 490.787 490.787" style="enable-background:new 0 0 490.787 490.787;" xml:space="preserve">\n' +
        '<path  d="M362.671,490.787c-2.831,0.005-5.548-1.115-7.552-3.115L120.452,253.006\n' +
        '\tc-4.164-4.165-4.164-10.917,0-15.083L355.119,3.256c4.093-4.237,10.845-4.354,15.083-0.262c4.237,4.093,4.354,10.845,0.262,15.083\n' +
        '\tc-0.086,0.089-0.173,0.176-0.262,0.262L143.087,245.454l227.136,227.115c4.171,4.16,4.179,10.914,0.019,15.085\n' +
        '\tC368.236,489.664,365.511,490.792,362.671,490.787z"/>\n' +
        '<path d="M362.671,490.787c-2.831,0.005-5.548-1.115-7.552-3.115L120.452,253.006c-4.164-4.165-4.164-10.917,0-15.083L355.119,3.256\n' +
        '\tc4.093-4.237,10.845-4.354,15.083-0.262c4.237,4.093,4.354,10.845,0.262,15.083c-0.086,0.089-0.173,0.176-0.262,0.262\n' +
        '\tL143.087,245.454l227.136,227.115c4.171,4.16,4.179,10.914,0.019,15.085C368.236,489.664,365.511,490.792,362.671,490.787z"/>\n' +
        '</svg>\n</button>',
    nextArrow: '<button type="button" class="slick-next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
        '\t viewBox="0 0 490.8 490.8" style="enable-background:new 0 0 490.8 490.8;" xml:space="preserve">\n' +
        '<path d="M135.685,3.128c-4.237-4.093-10.99-3.975-15.083,0.262c-3.992,4.134-3.992,10.687,0,14.82\n' +
        '\tl227.115,227.136L120.581,472.461c-4.237,4.093-4.354,10.845-0.262,15.083c4.093,4.237,10.845,4.354,15.083,0.262\n' +
        '\tc0.089-0.086,0.176-0.173,0.262-0.262l234.667-234.667c4.164-4.165,4.164-10.917,0-15.083L135.685,3.128z"/>\n' +
        '<path d="M128.133,490.68c-5.891,0.011-10.675-4.757-10.686-10.648c-0.005-2.84,1.123-5.565,3.134-7.571l227.136-227.115\n' +
        '\tL120.581,18.232c-4.171-4.171-4.171-10.933,0-15.104c4.171-4.171,10.933-4.171,15.104,0l234.667,234.667\n' +
        '\tc4.164,4.165,4.164,10.917,0,15.083L135.685,487.544C133.685,489.551,130.967,490.68,128.133,490.68z"/>\n' +
        '</svg>\n</button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.special-offers-preview-slider').slick({
    slidesToShow: 3,
    asNavFor: '.special-offers-slider',
    arrows: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.gallery-slider').slick({
    slidesToShow: 3,
    infinite: false,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
        '\t viewBox="0 0 490.787 490.787" style="enable-background:new 0 0 490.787 490.787;" xml:space="preserve">\n' +
        '<path d="M362.671,490.787c-2.831,0.005-5.548-1.115-7.552-3.115L120.452,253.006\n' +
        '\tc-4.164-4.165-4.164-10.917,0-15.083L355.119,3.256c4.093-4.237,10.845-4.354,15.083-0.262c4.237,4.093,4.354,10.845,0.262,15.083\n' +
        '\tc-0.086,0.089-0.173,0.176-0.262,0.262L143.087,245.454l227.136,227.115c4.171,4.16,4.179,10.914,0.019,15.085\n' +
        '\tC368.236,489.664,365.511,490.792,362.671,490.787z"/>\n' +
        '<path d="M362.671,490.787c-2.831,0.005-5.548-1.115-7.552-3.115L120.452,253.006c-4.164-4.165-4.164-10.917,0-15.083L355.119,3.256\n' +
        '\tc4.093-4.237,10.845-4.354,15.083-0.262c4.237,4.093,4.354,10.845,0.262,15.083c-0.086,0.089-0.173,0.176-0.262,0.262\n' +
        '\tL143.087,245.454l227.136,227.115c4.171,4.16,4.179,10.914,0.019,15.085C368.236,489.664,365.511,490.792,362.671,490.787z"/>\n' +
        '</svg>\n</button>',
    nextArrow: '<button type="button" class="slick-next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
        '\t viewBox="0 0 490.8 490.8" style="enable-background:new 0 0 490.8 490.8;" xml:space="preserve">\n' +
        '<path d="M135.685,3.128c-4.237-4.093-10.99-3.975-15.083,0.262c-3.992,4.134-3.992,10.687,0,14.82\n' +
        '\tl227.115,227.136L120.581,472.461c-4.237,4.093-4.354,10.845-0.262,15.083c4.093,4.237,10.845,4.354,15.083,0.262\n' +
        '\tc0.089-0.086,0.176-0.173,0.262-0.262l234.667-234.667c4.164-4.165,4.164-10.917,0-15.083L135.685,3.128z"/>\n' +
        '<path d="M128.133,490.68c-5.891,0.011-10.675-4.757-10.686-10.648c-0.005-2.84,1.123-5.565,3.134-7.571l227.136-227.115\n' +
        '\tL120.581,18.232c-4.171-4.171-4.171-10.933,0-15.104c4.171-4.171,10.933-4.171,15.104,0l234.667,234.667\n' +
        '\tc4.164,4.165,4.164,10.917,0,15.083L135.685,487.544C133.685,489.551,130.967,490.68,128.133,490.68z"/>\n' +
        '</svg>\n</button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                variableWidth: false
            }
        }
    ]
});

$('.slider-gallery-preview').slick({
    slidesToShow: 3,
    vertical: true,
    arrows: false,
    focusOnSelect: true,
    asNavFor: '.slider-gallery-max',
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                vertical: false,
            }
        }
    ]
});

$('.slider-gallery-max').slick({
    slidesToShow: 1,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
        '\t viewBox="0 0 490.787 490.787" style="enable-background:new 0 0 490.787 490.787;" xml:space="preserve">\n' +
        '<path d="M362.671,490.787c-2.831,0.005-5.548-1.115-7.552-3.115L120.452,253.006\n' +
        '\tc-4.164-4.165-4.164-10.917,0-15.083L355.119,3.256c4.093-4.237,10.845-4.354,15.083-0.262c4.237,4.093,4.354,10.845,0.262,15.083\n' +
        '\tc-0.086,0.089-0.173,0.176-0.262,0.262L143.087,245.454l227.136,227.115c4.171,4.16,4.179,10.914,0.019,15.085\n' +
        '\tC368.236,489.664,365.511,490.792,362.671,490.787z"/>\n' +
        '<path d="M362.671,490.787c-2.831,0.005-5.548-1.115-7.552-3.115L120.452,253.006c-4.164-4.165-4.164-10.917,0-15.083L355.119,3.256\n' +
        '\tc4.093-4.237,10.845-4.354,15.083-0.262c4.237,4.093,4.354,10.845,0.262,15.083c-0.086,0.089-0.173,0.176-0.262,0.262\n' +
        '\tL143.087,245.454l227.136,227.115c4.171,4.16,4.179,10.914,0.019,15.085C368.236,489.664,365.511,490.792,362.671,490.787z"/>\n' +
        '</svg>\n</button>',
    nextArrow: '<button type="button" class="slick-next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
        '\t viewBox="0 0 490.8 490.8" style="enable-background:new 0 0 490.8 490.8;" xml:space="preserve">\n' +
        '<path d="M135.685,3.128c-4.237-4.093-10.99-3.975-15.083,0.262c-3.992,4.134-3.992,10.687,0,14.82\n' +
        '\tl227.115,227.136L120.581,472.461c-4.237,4.093-4.354,10.845-0.262,15.083c4.093,4.237,10.845,4.354,15.083,0.262\n' +
        '\tc0.089-0.086,0.176-0.173,0.262-0.262l234.667-234.667c4.164-4.165,4.164-10.917,0-15.083L135.685,3.128z"/>\n' +
        '<path d="M128.133,490.68c-5.891,0.011-10.675-4.757-10.686-10.648c-0.005-2.84,1.123-5.565,3.134-7.571l227.136-227.115\n' +
        '\tL120.581,18.232c-4.171-4.171-4.171-10.933,0-15.104c4.171-4.171,10.933-4.171,15.104,0l234.667,234.667\n' +
        '\tc4.164,4.165,4.164,10.917,0,15.083L135.685,487.544C133.685,489.551,130.967,490.68,128.133,490.68z"/>\n' +
        '</svg>\n</button>',
    // asNavFor: '.slider-gallery-preview',
});

// mobile menu
$('.btn-burger').on('click', function () {
   $('.mobile-menu').fadeToggle();
});

$('.btn-close').on("click", function () {
   $('.mobile-menu').fadeOut();
});

// активная ссылка меню
$('.tabs-list li a').each(function () {
    let location = window.location.href;
    let link = this.href;
    if (location === link) {
        $(this).addClass('active');
    }
});
// end

$('.dropdown-btn').on('click', function () {
    $(this).siblings('.dropdown-menu').fadeToggle();
});

svg4everybody();

$('.btn-search-mobile').on('click', function (e) {
    e.preventDefault();
    $('.header .form-search').fadeToggle();
});

$('.btn-view').on('click', function (e) {
    e.preventDefault();
    $(this).addClass('clicked').parent().find('.list-hidden li:hidden').slideDown();
});

$('.go_to').click(function (e) {
    e.preventDefault();
    $('.go_to').removeClass('click');
    $(this).addClass('click');
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
        $('html, body').animate({
            scrollTop: $(scroll_el).offset().top
        }, 500);
    }
    return false;
});


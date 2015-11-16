var $ = require('jquery');
var Slick = require('../../node_modules/slick-carousel/slick/slick');
var FastClick = require('fastclick');


$('[data-slider]').each(function () {

    var $this = $(this);
    var mobile = $this.data('slider-mobile') === false ? {
                    breakpoint: 480,
                    settings: 'unslick'
                } : {
                    breakpoint: 480,
                    settings: {
                        arrows: false
                    }
                };

    $this.slick({
        draggable: false,
        accessibility: false,
        prevArrow:
            '<a class="slick-prev">' +
                '<svg viewBox="0 0 24 24" class="icon icon--large">' +
                    '<use xlink:href="assets/svg/sprite.symbol.svg#arrow-down"></use>' +
                '</svg>' +
            '</a>',
        nextArrow: '<a class="slick-next">' +
                        '<svg viewBox="0 0 24 24" class="icon icon--large">' +
                            '<use xlink:href="assets/svg/sprite.symbol.svg#arrow-down"></use>' +
                        '</svg>' +
                    '</a>',
        responsive: [mobile]
    });
});

$('[data-slider-mobile-more]').each(function () {
    var $this = $(this);

    // Get corresponding Slider Instance
    var sliderId = $this.data('slider-mobile-more');
    var $slider = $('[data-slider="' + sliderId +'"');

    // Add EventListerner and enable FastClick on Nav Button
    // FastClick($this[0]);

    $this.on('click', function () {
        alert('test');
        $slider.addClass('is--opened');
        $this.remove();
    });
});

var $ = require('jquery');
var Slick = require('../../node_modules/slick-carousel/slick/slick');
var Tracking = require('../_tracking/tracking');

$('[data-slider]').each(function () {
    $(this).slick({
        draggable: false,
        accessibility: false,
        adaptiveHeight: true,
        prevArrow:
            '<a class="slick-prev">' +
                '<svg viewBox="0 0 24 24" class="icon icon--large">' +
                    '<use xlink:href="/assets/svg/sprite.symbol.svg#arrow-down"></use>' +
                '</svg>' +
            '</a>',
        nextArrow: '<a class="slick-next">' +
                        '<svg viewBox="0 0 24 24" class="icon icon--large">' +
                            '<use xlink:href="/assets/svg/sprite.symbol.svg#arrow-down"></use>' +
                        '</svg>' +
                    '</a>'
    })
    .on('afterChange', function(event, slick) {
        Tracking.track({
            category: 'Slider',
            action: 'Changed during user action',
            label: 'Current Slide '.concat(slick.currentSlide)
        });
    });
});


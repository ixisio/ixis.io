var $ = require('jquery');
var Slick = require('../../node_modules/slick-carousel/slick/slick');

$('[data-slider]').each(function () {
    $(this).slick({
        draggable: false,
        accessibility: false,
        adaptiveHeight: true,
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
                    '</a>'
    });
});

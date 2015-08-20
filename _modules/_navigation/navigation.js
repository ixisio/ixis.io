var $ = require('jquery');
var FastClick = require('fastclick');

/**
 * Main Navigation Constructor
 */
var Navigation = function() {

    this.options = {
        classNameOpen: 'is-open'
    };

    this.$element = $('.navigation');
    this.$btn = this.$element.find('.navigation__button');

    this._registerEvents();
}

/**
 * Register Events
 * @todo Improve mobile click (tap) event delay (fastclick)
 * @return {void}
 */
Navigation.prototype._registerEvents = function () {

    // Enable FastClick on Nav Button
    FastClick(this.$btn[0]);

    // Register Nav Button Event Listener
    this.$btn.on('click', $.proxy(this._toggleState, this));
};

Navigation.prototype._toggleState = function (event) {
    event.preventDefault();
    event.stopPropagation();

    this.$element.toggleClass(this.options.classNameOpen);
};

Navigation.prototype.open = function () {
    this.$element.addClass(this.options.classNameOpen);
}

Navigation.prototype.close = function () {
    this.$element.removeClass(this.options.classNameOpen);
}

module.exports = Navigation;

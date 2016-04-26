// Event Tracking w/ GA Analytics.js

var $ = require('jquery');

var _track = function (_data) {
    ga('send', {
      hitType: 'event',
      eventCategory: _data.category,
      eventAction: _data.action,
      eventLabel: _data.label
    });
}

var _trackOutboundLink = function (_link) {
    _track({
      category: 'Outbound Link',
      action: 'click',
      eventLabel: _link
    });
}

var _init = function () {
    // Google Analytics
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-72820202-1', 'auto');
    ga('send', 'pageview');

    // Bind delegate events to track targets
    $('body').on('click', '[data-track]', function(event) {
        var $target = $(this);
        var _data = $target.data('track');

        if (_data.category && _data.action) {
            _track(_data);
        } else if (_data.category && $target.attr('href')) {
            _track({
              category: _data.category,
              action: 'internal link clicked',
              eventLabel: $target.attr('href')
            });
        } else if ($target.attr('href')) {
            _trackOutboundLink($target.attr('href'));
        }
    });
}

module.exports = {
    init: _init,
    track: _track
}




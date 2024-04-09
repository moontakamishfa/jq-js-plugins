(function($) {
  $.fn.countdownTimer = function(options) {
    var settings = $.extend({
      time: 60,
      callback: function() {}
    }, options);

    return this.each(function() {
      var $countdown = $(this);
      var intervalId;

      function updateTimer() {
        settings.time--;
        $countdown.text(settings.time);

        if (settings.time === 0) {
          clearInterval(intervalId);
          settings.callback();
        }
      }

      intervalId = setInterval(updateTimer, 1000);
    });
  };
})(jQuery);





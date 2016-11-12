'use strict';

eventsApp.filter('durations',
  function() {
    return function(duration) {
      if (duration < 60) {
        return duration + ' minutes';
      } else if (duration < 120){
        return Math.floor(duration / 60) + ' hour';
      } else {
        return Math.floor(duration / 60) + ' hours';
      }
    }
  }
)

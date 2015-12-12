(function () {
  angular.module('app.song')
    .filter('secondsToTime', secondsToTime);

  function secondsToTime () {
    return function (seconds) {
      return new Date(1970, 0, 1).setSeconds(seconds);
    }
  }
})();

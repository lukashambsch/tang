(function () {
  angular.module('app.song')
    .directive('song', song);

  function song () {
    return {
      restrict: 'E',
      templateUrl: 'app/song/song.html'
    }
  }
})();

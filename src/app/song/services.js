(function () {
  angular.module('app.song')
    .factory('SongFactory', SongFactory);

  function SongFactory ($http) {
    SongFactory.songs = [];

    SongFactory.getSongs = getSongs;

    return SongFactory;

    function getSongs () {
      return $http.get('songs.json').then(function (res) {
        SongFactory.songs = res.data;
      });
    }
  }
})();

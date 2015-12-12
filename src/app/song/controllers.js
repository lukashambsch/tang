(function () {
  angular.module('app.song')
    .controller('SongController', SongController);

  function SongController (SongFactory) {
    var vm = this;

    vm.sort = '+createdAt';
    vm.songs = SongFactory.songs;
    vm.setSort = setSort;
    vm.setFilter = setFilter;

    SongFactory.getSongs().then(function () {
      vm.songs = SongFactory.songs;
    });

    function setSort (sort) {
      vm.search = '';
      vm.sort = sort;
    }

    function setFilter (filter) {
      vm.search = filter;
    }
  }
})();

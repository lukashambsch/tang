(function () {
  angular.module('app.song', ['ui.router'])
    .config(routerConfig);

  function routerConfig ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('browse', {
        url: '/',
        templateUrl: 'app/song/browse.html',
        controller: 'SongController',
        controllerAs: 'vm'
      })
      .state('filter', {
        url: '/filter',
        templateUrl: 'app/song/filter.html',
        controller: 'SongController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }
})();

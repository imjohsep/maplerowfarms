'use strict';

/**
 * @ngdoc overview
 * @name icr-style-guide
 * @description
 * # icr-style-guide
 *
 * Main module of the application.
 */
angular
  .module('icr-style-guide', [
    'ngAnimate',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'hljs'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state ('frame', {
        abstract: true,
        url: '/',
        templateUrl: 'views/frame.html'
      })
      .state ('navigation', {
        abstract: true,
        parent: 'frame',
        templateUrl: 'views/navigation.html'
      })
      .state('home', {
        url: '',
        parent: 'frame',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('resets', {
        url: '',
        parent: 'frame',
        templateUrl: 'views/resets.html'
      })
      .state('layout', {
        url: '',
        parent: 'frame',
        templateUrl: 'views/layout.html'
      })
      .state('svgs', {
        url: '',
        parent: 'frame',
        templateUrl: 'views/svgs.html'
      })
      .state('media-queries', {
        url: '',
        parent: 'frame',
        templateUrl: 'views/media-queries.html'
      })
      .state('structure', {
        url: '',
        parent: 'frame',
        templateUrl: 'views/structure.html'
      });
  }).run(function($rootScope){
  $rootScope.$on('$stateChangeSuccess', function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
});

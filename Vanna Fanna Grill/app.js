angular.module('vfApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {


      $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/homeTemp.html',

      })
      .state('menu', {
        url: '/menu',
        templateUrl:'views/menuTemp.html',

      })
      .state('locations', {
        url: '/locations',
        templateUrl: 'views/locationTemp.html',
        controller: 'mainCtrl',

      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/aboutTemp.html',

      })
      .state('career', {
        url: '/careers',
        templateUrl: 'views/careerTemp.html',

      })
})

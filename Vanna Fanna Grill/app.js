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
        templateUrl: 'locationTemp.html',

      })
      .state('about', {
        url: '/about',
        templateUrl: 'aboutTemp.html',

      })
      .state('career', {
        url: '/careers',
        templateUrl: 'careerTemp.html',

      })
})

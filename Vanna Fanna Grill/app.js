angular.module('vfApp', ['ui.router', 'firebase'])
.constant('fb', {
  url: 'https://vanna-fanna.firebaseio.com/'
})
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

  $urlRouterProvider.otherwise('/');

      $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/homeTemp.html',
        controller: 'mainCtrl',

      })
      .state('menu', {
        url: '/menu',
        templateUrl:'views/menuTemp.html',
        controller: 'mainCtrl',

      })
      .state('locations', {
        url: '/locations',
        templateUrl: 'views/locationTemp.html',
        controller: 'mapCtrl',

      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/aboutTemp.html',
        controller: 'careerCtrl',
        resolve: {
    careerRef: function(careerSrv){
      return careerSrv.getCareers()
    }
  },

      })
      .state('career', {
        url: '/careers',
        templateUrl: 'views/careerTemp.html',
        controller: 'careerCtrl',
        resolve: {
    careerRef: function(careerSrv){
      return careerSrv.getCareers()
    }
    },

  })
})

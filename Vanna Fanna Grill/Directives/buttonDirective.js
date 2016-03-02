angular.module('vfApp')
.directive('buttonDir', function(){
  return {
    templateUrl: 'views/buttonDirTemp.html',
    restrict: 'E',
    // controller: 'buttonCtrl',
    scope: {
      destination: '=',
      butname: '=',
      styleb: '='
    }
  }
})

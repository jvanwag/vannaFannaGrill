angular.module('vfApp').controller('mainCtrl', function($scope, menuSrv, homeSrv){

  $scope.getApps = menuSrv.getAppe();
  $scope.getEntree = menuSrv.getEnt();
  $scope.getDessert = menuSrv.getDess();

  $scope.getScrollingPic = homeSrv.getScrollingPic();

  $scope.picCount = 0;
  $scope.counter = 0;
  $scope.scrollPic = function(arr){
      if($scope.counter < 1) {
        $scope.picCount++;
          $scope.counter++;
        if($scope.picCount <= arr.length-1) {
          return($scope.picCount);
    }
     else{
      $scope.picCount = 0;
      return $scope.picCount;
      }
    }else {
      $scope.counter = 0;
    }

    ;

  }

})

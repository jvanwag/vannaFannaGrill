angular.module('vfApp').controller('careerCtrl', function($scope, careerRef, $firebaseArray){

  $scope.careers = $firebaseArray(careerRef)

  $scope.createCareer = function(name, about, food) {
    $scope.careers.$add({
      name: name,
      about: about,
      food: food,
    });
  };
  $scope.fireEmp = function(obj) {
    var empRef = new Firebase('https://vanna-fanna.firebaseio.com/careers/' + obj.$id);
      empRef.remove();
  }
});

angular.module('vfApp').service('careerSrv', function(fb){
  var firebaseRef = new Firebase('https://vanna-fanna.firebaseio.com/');
  this.getCareers = function(){
    return new Firebase(fb.url + '/careers');
  };
})

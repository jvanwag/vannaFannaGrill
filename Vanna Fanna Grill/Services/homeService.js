angular.module('vfApp').service('homeSrv', function(){

  var pics = ['../img/cheese_crunchy.jpg', '../img/turkey-patty.jpe', '../img/florianopolis.jpg'
];

this.getScrollingPic= function() {
  return pics;
}
})

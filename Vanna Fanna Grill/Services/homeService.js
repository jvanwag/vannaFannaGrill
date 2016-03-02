angular.module('vfApp').service('homeSrv', function(){

  var pics = [
    {
    img: '../img/cheese_crunchy.jpg',
    desc:'World Famous Cheese Crunchies!!'
  },
  {
    img: '../img/kitchen.jpg',
},
{
  img: '../img/florianopolis.jpg',
  desc: "Now open in Brazil!!",
},
{
  img: '../img/kids.jpe',
  desc: "Kids eat free all day, every day!!!!",
},
{
  img: '../img/birthday_party.jpg',
  desc: "Vanna Fanna is great for birthday parties!!!",
  style: "birthday",
},
];

this.getScrollingPic= function() {
  return pics;
}
})

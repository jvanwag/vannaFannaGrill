angular.module('vfApp').service('homeSrv', function(){

  var pics = [
    {
      img: '../img/florianopolis.jpg',
      desc: "Now open in Brazil!!",
    },
  {
    img: '../img/kitchen.jpg',
    desc:'State of the art kitchens!'
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

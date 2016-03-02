angular.module('vfApp').service('menuSrv', function(){
  var appetizer =[
    {
      name: 'Cheese Crunchy',
      desc: 'Cheese cooked until crunchy',
      price: '$1',
      img: '../img/cheese_crunchy.jpg'
    },
    {
      name: 'Turkey Patty',
      desc: 'Turkey patty cooked in a frying pan',
      price: '$2',
      img: '../img/turkey-patty.jpe'
    },
    {
      name: 'Veggie Chips',
      desc: 'Chips made with vegetables',
      price: '$2',
      img: '../img/veggie-chips.jpg',
    },
    {
      name: 'Broccoli with cheese',
      desc: 'Lightly steamed Broccoli topped with cheese',
      price: '$2.50',
      img: '../img/broccoli.jpg'
    },
    {
      name: 'Beans and cheese with chips',
      desc: 'Chips topped with beans and melted cheese',
      price: '$2',
      img: '../img/bean-cheese.jpg'
    },
  ];

  var entree = [
    {
      name: 'Broccoli Braid',
      desc: 'Broccoli, cheese,and chicken covered in a light bread. Served with Ceasar Salad.',
      price: '$6',
      img: '../img/broc-braid.jpe'
    },
    {
      name: 'Flavorless Chicken',
      desc: 'Chicken..',
      price: '$5',
      img: '../img/unflavored_chicken.jpg'
    },
    {
      name: 'Stroganoff',
      desc: 'Ground beef with sauce over white or brown rice. Served with Ceaser Salad.',
      price: '$5',
      img: '../img/stroganoff.jpg'
    },
    {
      name: 'Bean and Cheese Tortilla',
      desc: 'Three delicious bean and cheese tortillas, can be either mini-burritos or tacos. Served with Ceaser Salad.',
      price: '$2',
      img: '../img/bean-tort.jpg'
    },
  ];

  var dessert = [
    {
      name: "Aunt May's Cake",
      desc: 'Our specialty desert! Beware! you will not want any other cake after trying this, served with ice cream.',
      price: '$3',
      img: '../img/chock-cake.jpg'
    },
    {
      name: 'Bundt Cakes',
      desc: "Delicious Bundt Cakes delivered to us directly from 'Nothing Bundt Cakes'",
      price: '$4',
      img: '../img/bundtlets.jpg'
    },
    {
      name: 'Cheesecake',
      desc: 'Cheesecake from Costco',
      price: '$3',
      img: '../img/cheesecake.jpe'
    },
    {
      name: 'Pumpkin Pie',
      desc: 'Homemade pumpkin pie. Served year round!',
      price: '$3',
      img: '../img/pumpkin.jpe'
    },
  ];

this.getAppe = function() {
  return appetizer;
};
this.getEnt = function() {
  return entree;
};
this.getDess = function() {
  return dessert;
}
})

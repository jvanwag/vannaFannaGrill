var cities = [
    {
        city : 'Austin',
        desc : 'Our first location! Serving quality suburban cooking for 25 years!',
        lat : 30.267153,
        long : -97.7430608,
        hours : '8AM-11PM',
        pic : '../img/downtown_Austin.jpg'
    },
    {
        city : 'Provo',
        desc : "Founded in 2010 Vanna Fanna Provo has become one of the area's landmark eateries. Serving the college students of BYU and UVU a taste of home",
        lat : 40.2338438,
        long : -111.6585337,
        hours : '8AM-11PM',
        pic : '../img/Downtown_provo.jpg'
    },
    {
        city : 'Chicago',
        desc : 'After 20 years of cooking in 2011 Master Chef Jon Van Wagenen broke ground on Vanna Fanna Chicago!',
        lat : 41.8819,
        long : -87.6278,
        hours : '8AM-11PM',
        pic : '../img/chicago-skyline.jpg'
    },
    {
        city : 'Sacramento',
        desc : 'Our second location has been feeding the hungry for 9 years now!',
        lat : 38.5815719,
        long : -121.4943996,
        hours : '8AM-11PM',
        pic: '../img/downtown_sacramento.jpg'
    },
    {
        city : 'Washington, D.C.',
        desc : 'After working many years in both our Austin and Sacramento our Master Chefs Lauren Montague and her husband James Montague have blessed the east coast with the suburban taste of Vanna Fanna ',
        lat : 38.8951118,
        long : -77.0363658,
        hours : '8AM-11PM',
        pic: '../img/washingtonDC.jpe'
    },
    {
      city : 'Eugene',
      desc : "Founded in 2013 by Master Chef Jamie Van Wagenen has risen quickly to one of Eugene's finest eating establishments",
      lat : 44.0520691,
      long : -123.0867536,
      hours : '8AM-11PM',
      pic: '../img/eugene.jpg'
    },
    {
      city : 'Florianópolis, Brazil',
      desc : "After successfully opening Vanna Fanna Eugene, Master Chef Jamie took us international!  Presenting Brazil's first taste of American suburban cooking!",
      lat : -27.5969039,
      long : -48.5494544,
      hours : '8AM-11PM',
      pic: '../img/florianopolis.jpg'
    }
];

//Angular App Module and Controller
angular.module('vfApp')
.controller('mapCtrl', function ($scope) {

    var mapOptions = {
        zoom: 4,
        center: new google.maps.LatLng(40.0000, -98.0000),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $scope.markers = [];

    var infoWindow = new google.maps.InfoWindow();

    var createMarker = function (info){

        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.city,
            description: info.desc,
            hour: info.hours,
            pics: info.pic,
        });
        marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';

        google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content + info.hours + info.pic);
            infoWindow.open($scope.map, marker);
        });

        $scope.markers.push(marker);

    }

    for (i = 0; i < cities.length; i++){
        createMarker(cities[i]);
    }

    $scope.openInfoWindow = function(e, selectedMarker){
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
        $scope.picSelector = selectedMarker.pics;
          }

});

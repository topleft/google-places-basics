// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');

    var map = new google.maps.Map(document.getElementById("map-div"),{
      center: {lat:39.393981, lng:-106.016311},
      zoom: 7
    });

    var marker = new google.maps.Marker({
    position: {lat:38.153661, lng:-107.758774},
    map: map
  });

  var infowindow = new google.maps.InfoWindow({
    content: "<div><h4>Colorado Boy</h4><p>Brew Pub in Ridgeway, CO</p></div>"
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

});

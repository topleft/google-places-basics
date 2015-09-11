// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');

    var map = new google.maps.Map(document.getElementById("map-div"),{
      center: {lat:39.393981, lng:-106.016311},
      zoom: 7
    });
});

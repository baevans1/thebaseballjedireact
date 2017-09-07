$(document).ready(function(){
  $("header").html("<nav>" +
        "<h2><a href='#'>MLB</a></h2>" +
        "<h2><a href='#'>Prospect Watch</a></h2>" +
        "<h2><a href='#'>Fantasy Baseball</a></h2>" +
        "<h2><a href='stadiums.html'>Stadiums</a></h2>" +
        // "<p><a href='index.html'>" +
        //     "<img class='nav-img' src='assets/images/fix-logo.png'>" +
        //   "</a>"+ "</p>" +
      "</nav>");
});

function initMap() {
  var busch = {lat: 38.622634,  lng: -90.192840};
  var kauffman = {lat: 39.051655, lng: -94.480389};
  var wrigley = {lat: 41.948414, lng: -87.655343};
  var whitesox = {lat: 41.829914,  lng: -87.633791};
  var miami = {lat: 25.778286, lng: -80.220102};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: busch
  });
  var marker = new google.maps.Marker({
    position: busch,
    map: map
  });
  var marker2 = new google.maps.Marker({
    position: kauffman,
    map: map
  });
  var markera = new google.maps.Marker({
    position: wrigley,
    map: map
  });
  var markerb = new google.maps.Marker({
    position: whitesox,
    map: map
  });
  var marker5 = new google.maps.Marker({
    position: miami,
    map: map
  });

}

// La funcionalidad de tu proyecto
// Initialize affix and add an offset to add affix class on scroll
$('#mainNav').affix({
  offset: {
    top: 100
  }
})

function myMap() {
    var mapCanvas = document.getElementById("mymap");
    var mapOptions = {
        center: new google.maps.LatLng(-10, -78),
        zoom: 3
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}
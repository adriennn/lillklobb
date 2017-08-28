/**
  * @adriennn
  * MIT
  */


var maps = ( function (windown, L) {

  var _map = L.map('map').setView([0, 0], 1),

      // _tiles ={mapbox_outdoor: L.tileLayer('https://api.mapbox.com/v4/adriennn.9da931dd/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYWRyaWVubm4iLCJhIjoiNWQ5ZTEwYzE0MTY5ZjcxYjIyNmExZDA0MGE2MzI2YWEifQ.WGCZQzbVhF87_Z_Yo1aMIQ')},

      _lkb = L.tileLayer('img/layers/map/{z}/{x}/{y}.png', {
        minZoom: 1,
        maxZoom: 6,
        attribution: 'Lillklobb LPK',
        tms: true,
        noWrap: true
      }),

      onClick = function onClick (e) {

        console.log(e);

        var popup = L.popup()
          .setLatLng([e.latlng.lat, e.latlng.lng])
          .setContent('<p>Coordinates<br/>' + 'lat: ' + e.latlng.lat.toString() + '<br/>' +'lng: ' + e.latlng.lng.toString() + '</p>')
          .openOn(_map);

      },

      init = function init () {

        _lkb.addTo(_map);
        maps._map.on('click', onClick);

      };

      return {init: init,
              _map: _map};

}(window, L));

maps.init();

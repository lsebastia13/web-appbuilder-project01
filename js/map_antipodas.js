  var map1;
  var map2;
  require(["esri/map",
      "dojo/domReady!"
    ],
    function(Map) {
      // code to create the map and add a basemap will go here
      // map = new Map("mapDiv", {
      //});

      //Mapa 1
      map1 = new Map("map1", {
        basemap: "topo",
        center: [3, 40],
        zoom: 3
        //    isPanArrows: true
      });
      //Mapa 2
      map2 = new Map("map2", {
        basemap: "terrain",
        // center: [-56.049, 38.485],
        zoom: 3
        //          isPanArrows: true
      });

      map1.on("extent-change", function(change) {
        var center = change.extent.getCenter();
        map2.centerAt(center);
      });

    });

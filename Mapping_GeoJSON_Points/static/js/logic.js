// Create the map object with a center and zoom level
let map = L.map('map', {
    center: [30, 30],
    zoom: 2
});

// We create the tile layer that will be the background of our map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/navigation-night-v1',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map
streets.addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/msshahid21/Mapping_Earthquakes/Mapping_GeoJSON_Points/Mapping_GeoJSON_Points/static/data/majorAirports.json";

// Grabbing our GeoJSON data
d3.json(airportData).then(function(data) {
    console.log(data);

    // Creating a GeoJSON layer with the retrieved data
    L.geoJSON(data, {
        onEachFeature: function(data, layer) {
            layer.bindPopup(`<h2> Airport Code: ${data.properties.faa} </h2> <hr> <h3> Airport Name: ${data.properties.name} </h3>`);
        }
    }).addTo(map);
});
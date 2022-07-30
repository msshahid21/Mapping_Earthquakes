// Create the map object with a center and zoom level
let map = L.map('map', {
    center: [40.7, -94.5],
    zoom: 4
});

// An array containing each city's location, state, and population.
let cityData = cities;

// Loop through the cities array and crete one marker for each city.
cityData.forEach(function(city) {
    L.circleMarker(city.location, {
        radius: city.population/100000,
        color: "orange",
        fillColor: "orange",
        lineweight: 4
    })
    .bindPopup(`<h2> ${city.city}, ${city.state} </h2> <hr> <h3> Population ${city.population.toLocaleString()} </h3>`)
    .addTo(map);
})

// We create the tile layer that will be the background of our map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map
streets.addTo(map);
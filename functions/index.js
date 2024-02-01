const {onRequest} = require("firebase-functions/v2/https");
const {setGlobalOptions} = require("firebase-functions/v2");
const {geocodeRequest} = require("./geocode");
const {placesRequest} = require("./places");

setGlobalOptions({maxInstances: 10});

exports.geocode = onRequest((request, response) => {
  geocodeRequest(request,response)
});

exports.placesNearby = onRequest((request, response) => {
  placesRequest(request,response)
});
const { onRequest } = require("firebase-functions/v2/https");
const { setGlobalOptions } = require("firebase-functions/v2");
const { geocodeRequest } = require("./geocode");
const { placesRequest } = require("./places");
const { payRequest } = require("./pay");

const { Stripe } = require("stripe");
const stripeClient = new Stripe(
  "stripe secret key"
);

setGlobalOptions({ maxInstances: 10 });

exports.geocode = onRequest((request, response) => {
  geocodeRequest(request, response);
});

exports.placesNearby = onRequest((request, response) => {
  placesRequest(request, response);
});

exports.pay = onRequest((request, response) => {
  payRequest(request, response, stripeClient);
});

const request = require('request');

const geocode = (locationStr, callback) => {
  const geocodeApiKey = 'I73WjZUtrHacvmxG60flVrzeqsEmHULZ';
  const url = `http://www.mapquestapi.com/geocoding/v1/address?key=${geocodeApiKey}&location=${locationStr}&maxResults=1`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback ("Couldn't find that location, try a different one!");
    } else {
      callback(undefined, body.results[0].locations[0].latLng);
    }
  })
};

module.exports = geocode;
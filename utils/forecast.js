const request = require('request');

const forecast = (latLngObj, callback) => {
  const weatherApiKey = 'e084c48223bf78ff04bf355894d6253c';
  const url = ` http://api.openweathermap.org/data/2.5/weather?lat=${latLngObj.lat}&lon=${latLngObj.lng}&units=imperial&appid=${weatherApiKey}`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Couldn't fetch a forecast for that location!")
    } else {
      callback(undefined, { body })
    }
  });
};

module.exports = forecast;
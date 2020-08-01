const path = require('path');
const express = require('express');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const app = express();

// Getting port value for Heroku
const port = process.env.PORT || 3000;

// Define Paths for Express
const publicPath = path.join(__dirname,'../public');

app.get('',(req, res)=>{
  res.send('Hello Cruel World!')
});

app.get('/help',(req,res) => {
  res.send('Help Me!')
});

app.get('/weather',(req, res)=>{
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address!"
    })
  } else {
    geocode(req.query.address, (error, latLngObj) => {
      if (error) {
        res.send({ error });
      } else {
        forecast(latLngObj, (error, forecastData) => {
          if (error) {
            res.send({ error });
          } else {
            res.send({ 
              address: req.query.address,
              location: forecastData.body.name,
              forecast: {
                id: forecastData.body.weather[0].id,
                weather: forecastData.body.weather[0].description,
                temp:  Math.round(forecastData.body.main.temp),
                feel: Math.round(forecastData.body.main.feels_like)
              }
            })
          }
        })
      }
    });
  }
})

app.listen(port,()=>{
  console.log(`Server is up on port ${port}`);
});
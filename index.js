const path = require('path');
const express = require('express');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const app = express();

// Getting port value for Heroku
const port = process.env.PORT || 5000;

// Serve static files from React client
const clientPath = 'client/build';
app.use(express.static(path.join(__dirname, clientPath)))

app.get('/api/weather',(req, res)=>{
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

// Fallback to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, clientPath, 'index.html'));
})

app.listen(port,()=>{
  console.log(`Server is up on port ${port}`);
});
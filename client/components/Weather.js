import React, { useState } from 'react';
import Report from './Report';

const Weather = () => {
  const apiBaseUrl = "//localhost:3000/weather/"
  const [weatherInfo, setWeatherInfo] = useState({});
  
  const getWeather = async function (locUrl) {
    try {
      const weatherObj = await fetch(locUrl, { mode: "cors" })
      return weatherObj.json();
    } catch (err) {
      throw new Error(err);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const address = (e.target.location.value);
    const url = apiBaseUrl + `?address=${encodeURI(address)}`;
    console.log('fetching... ' + url);
    getWeather(url).then((data) => {
      setWeatherInfo(data);
    })
  }

  return (
    <div className="app">
      { !!weatherInfo.location && <Report weatherInfo={weatherInfo} /> }
      <form 
        id="weather-form"
        onSubmit={handleSubmit}>
        <label for="location">Location</label>
        <input type="text" id="location" name="location" placeholder="Enter a Location..." />
        <button>Submit!</button>
      </form>
    </div>
  );
}

export default Weather;
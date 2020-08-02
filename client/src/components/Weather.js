import React, { useState } from 'react';
import Report from './Report';

const Weather = () => {
  const [weatherInfo, setWeatherInfo] = useState({});
  
  const getWeather = async function (url) {
    try {
      const weatherObj = await fetch(url)
      return weatherObj.json();
    } catch (err) {
      throw new Error(err);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const address = (e.target.location.value);
    const url = `/api/weather?address=${encodeURI(address)}`;
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
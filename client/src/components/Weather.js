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
    e.target.location.value = '';
    const url = `/api/weather?address=${encodeURI(address)}`;
    getWeather(url).then((data) => {
      setWeatherInfo(data);
    })
  }

  return (
    <div className="applet">
        { !!weatherInfo.location && <Report weatherInfo={weatherInfo} /> }
        { !(!!weatherInfo.location) && <h2 className="report-heading">Get the Weather...</h2>}
      <form 
        id="weather-form"
        onSubmit={handleSubmit}>
        <input type="text" id="location" name="location" placeholder="Enter a Location..." />
        <button>Submit!</button>
      </form>
    </div>
  );
}

export default Weather;

// return (
//   <div>
//     <h1>Weather App</h1>
//     <p>This app is still under construction! The mock-up below is not functional yet</p>
//     <p>This is a weather app that I'm building using an Express.js backend which fetches data from the Open Weather API and renders it using React</p>
//     <p>More details to come...</p>
//     <article className="blog-post">
//       <div className="weather">
//         <i className="wi wi-owm-800"></i>
//         <p className="temp">87° | 65°</p>
//         <p className="report">It's sunny!</p>
//         <form onSubmit={handleSumbit}>
//           <input
//             type="text"
//             name="location"
//             placeholder="Enter a Location..." />
//         </form>
//         {formSubmitted && <p className="report">Form submitted!</p>}
//       </div>
//     </article>
//   </div>
// );

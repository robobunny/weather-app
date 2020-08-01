import React from 'react';

const Report = (props) => (
  <div className="report">
    <h2>{`Weather in ${props.weatherInfo.location}:`}</h2>
    <p>{`Conditions: ${props.weatherInfo.forecast.weather}`}</p>
    <p>{`Temperature: ${props.weatherInfo.forecast.temp}°F, feels like ${props.weatherInfo.forecast.feel}°`}</p>
  </div>
)
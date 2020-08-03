import React from 'react';

const Report = (props) => (
  <div className="report">
    <h2 className="report-heading">{`Weather in ${props.weatherInfo.location}:`}</h2>
    <i className={`wi wi-owm-${props.weatherInfo.forecast.id}`}></i>
    <p id="conditions">{`${props.weatherInfo.forecast.weather}`}</p>
    <div className="temps">
      <p id="temp">{`${props.weatherInfo.forecast.temp}°F`}</p>
      <p id="feels">{`(feels like ${props.weatherInfo.forecast.feel}°)`}</p>
    </div>
  </div>
)

export default Report;
import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastOneDay(props) {
  function maxTemp() {
  return Math.round(props.data.main.temp_max);
    
  }
  function minTemp() {
    return Math.round(props.data.main.temp_min);
  }
    
  function day() {
    const date = new Date(props.data.dt_txt);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
    return days[date.getDay()];
  }
  return (
    <div className="ForecastOneDay">
      <div className="Forecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="Forecast-temperatures">
        <span className="Forecast-max-temp">{maxTemp()}°</span>
        <span className="Forecast-min-temp">{minTemp()}°</span>
      </div>
    </div>
  );
}

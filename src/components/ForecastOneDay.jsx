import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastOneDay({data}) {
    function maxTemp(){
        let temp = Math.round(data.temp.max);
        return `${temp}°`;
    }
    function minTemp(){
        let temp = Math.round(data.temp.min);
        return `${temp}°`
    }
    function day(){
        let date = new Date(data.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Thu", "Wed", "Thur", "Fri", "Sat"];

        return days[day];
    }
    return (
      <div className="ForecastOneDay">
        <div className="Forecast-day">{day()}</div>
        <WeatherIcon code={data.weather[0].icon} size={36} />
        <div className="Forecast-temperatures">
          <span className="Forecast-max-temp">
            {maxTemp()}
          </span>
          <span className="Forecast-min-temp">
            {minTemp()}
          </span>
        </div>
      </div>
    );
}
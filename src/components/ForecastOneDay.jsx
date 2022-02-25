import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastOneDay(props) {

    function maxTemp(){
        let temp = Math.round(props.data.temp.max);
        return `${temp}°`;
    }
    function minTemp(){
        let temp = Math.round(props.data.temp.min);
        return `${temp}°`
    }
    function day(){
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Thu", "Wed", "Thur", "Fri", "Sat"];

        return days[day];
    }
    return (
      <div className="ForecastOneDay">
        <div className="Forecast-day">{day()}</div>
        <WeatherIcon code={props.data.weather[0].icon} size={36} />
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
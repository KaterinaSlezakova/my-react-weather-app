//import React from "react";
import "./DailyForecast.css";

import WeatherIcon from "./WeatherIcon";

export default function DailyForecast() {
  return (
    <div className="DailyForecast">
      <div className="container">
        <div className="row">
          <div className="col Forecast-days">
            <div className="Forecast-day">Mon</div>
            <WeatherIcon code={"01d"} size={36}/>
            <div className="Forecast-temperatures">
              <span className="Forecast-max-temp">10°</span>
              <span className="Forecast-min-temp">3°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

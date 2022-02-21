import React, { useState } from "react";
import "./DailyForecast.css";
import axios from "axios"
import WeatherIcon from "./WeatherIcon";
import { icon } from "@fortawesome/fontawesome-svg-core";

export default function DailyForecast() {
  const [ForecastData, setForecastData] = useState({ loaded:false });
  function handleResponse(response) {
    setForecastData({
      loaded: true,
      day: response.data.temp.day,
      icon: response.data.weather[0].icon,
    });
    console.log(response);
  }

  const apiKey = "2fe472309e4eca35c3771be7be704291";
  let lat = "52.520008";
  let lon = "13.404954";
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
  if (ForecastData.loaded) {
    return (
      <div className="DailyForecast">
        <div className="container">
          <div className="row">
            <div className="col Forecast-days">
              <div className="Forecast-day">{ForecastData.day}</div>
              <WeatherIcon code={ForecastData.icon} size={36} />
              <div className="Forecast-temperatures">
                <span className="Forecast-max-temp">10°</span>
                <span className="Forecast-min-temp">3°</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return "loading..";
  }
}

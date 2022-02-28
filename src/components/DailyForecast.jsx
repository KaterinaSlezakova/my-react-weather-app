import React, { useState } from "react";
import "./DailyForecast.css";
import axios from "axios";
import ForecastOneDay from "./ForecastOneDay";

export default function DailyForecast({coordinates}) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);



  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    //({
    //loaded: true,
    // tempMax: response.data.daily[0].temp.max,
    //tempMin: response.data.daily[0].temp.min,
    // day: response.data.daily[0].dt,
    //icon: response.data.daily[0].weather[0].icon,
    //});
  }
  function searchData() {
    let apiKey = "d329e1092b2b890a54f6b260b16bfdbe";
    let latitude = coordinates.lat;
    let longitude = coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="DailyForecast">
        <div className="container">
          <div className="row">
            {forecast.map(function (dailyForecast, index) {
              if (index < 6) {
                return (
                  <div className="col Forecast-days" key={index}>
                    <ForecastOneDay data={dailyForecast} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    );
  } else {
    searchData();
    return null;
  }
}

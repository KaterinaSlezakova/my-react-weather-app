import React, { useState, useEffect } from "react";
import "./DailyForecast.css";
import axios from "axios";
import ForecastOneDay from "./ForecastOneDay";

export default function DailyForecast({ coordinates }) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  useEffect(() => {
    setLoaded(false);
  }, [coordinates]);

  function searchData() {
    let apiKey = "c1237133a9907d473e77d2b6b0072a61";
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

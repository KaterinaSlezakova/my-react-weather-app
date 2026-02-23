import React, { useState, useEffect } from "react";
import "./DailyForecast.css";
import axios from "axios";
import ForecastOneDay from "../ForecastOneDay";

export default function DailyForecast({ coordinates }) {
  const apiKey = process.env.REACT_APP_WEATHER_KEY;
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function searchData() {
    let latitude = coordinates.lat;
    let longitude = coordinates.lon;
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    console.log (apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="DailyForecast">
        <div className="container">
          <div className="row">
            {forecast.map(function (dailyForecast, index) {
              if (index < 4) {
                return (
                  <div
                    className="col Forecast-days d-flex justify-content-center"
                    key={index}
                  >
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

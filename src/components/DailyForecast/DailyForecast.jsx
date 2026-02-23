import React, { useState, useEffect } from "react";
import "./DailyForecast.css";
import axios from "axios";
import ForecastOneDay from "../ForecastOneDay";

export default function DailyForecast({ coordinates }) {
  const apiKey = process.env.REACT_APP_WEATHER_KEY;
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
      if (!coordinates) return;

    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl)
      .then(handleResponse)
      .catch(() => {
        setError("Missing weather data.");
      });

  }, [coordinates, apiKey]);
//setLoaded(false);
 // }, [coordinates]);

  function handleResponse(response) {
    const dailyData = response.data.list.filter(item => item.dt_txt.includes("12:00:00"));
  //console.log(dailyData);

    setForecast(dailyData);
  }
if (error) {
    return <div className="DailyForecast">{error}</div>;
  }
  if (!forecast) {

    return <div className="DailyForecast">Loading...</div>;
  }

  if (forecast) {
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
  } 
}

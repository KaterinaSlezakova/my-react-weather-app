import React, { useState } from "react";
import "./DailyForecast.css";
import axios from "axios";
import ForecastOneDay from "./ForecastOneDay";

export default function DailyForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response);
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

  if (loaded) {
    return (
      <div className="DailyForecast">
        <div className="container">
          <div className="row">
              <div className="col Forecast-days" >
                    <ForecastOneDay data={forecast[0]} />
                  </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "c1237133a9907d473e77d2b6b0072a61";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}

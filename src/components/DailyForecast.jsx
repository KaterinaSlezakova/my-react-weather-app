import React, { useState } from "react";
import "./DailyForecast.css";
import axios from "axios";
import ForecastOneDay from "./ForecastOneDay";

export default function DailyForecast({ coordinates }) {

  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
     setLoaded(true); 
    setForecast(response.data.daily);
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
            <div className="col Forecast-days">
              <ForecastOneDay data={forecast[0]} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "375b17b86a7f9a868e0d0a3ab5fe16bd";
    let lat = coordinates.lat;
    let lon = coordinates.lon;
    
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
   
    return "Loading";
  }
}

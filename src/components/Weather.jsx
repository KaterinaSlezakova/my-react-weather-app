import React, { useState } from "react";
import Form from "./Form";
import Overview from "./Overview";
import CurrentTemp from "./CurrentTemp";
import CurrentWeatherCon from "./CurrentWeatherCon";
import Spotify from "./Spotify";
import axios from "axios";
import { BallTriangle } from "react-loader-spinner";

import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ loaded: false });

  function handleResponse(response) {
  
    setWeatherData({
      loaded: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      time: new Date(response.data.dt * 1000),
      
    });
  }
  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <Form />
        <div className="row">
          <div className="col-4">
            <CurrentTemp
              temperature={weatherData.temperature}
              icon={weatherData.iconUrl}
              description={weatherData.description}
            />
          </div>
          <div className="col-3">
            <CurrentWeatherCon
              wind={weatherData.wind}
              humidity={weatherData.humidity}
            />
          </div>
          <div className="col-4 text-end">
            <Overview
              city={weatherData.city}
              description={weatherData.description}
              time={weatherData.time}
            />
          </div>
          <Spotify />
        </div>
      </div>
    );
  } else {
    const apiKey = "375b17b86a7f9a868e0d0a3ab5fe16bd";
    let city = "Paris";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
      <div>
        <BallTriangle color="#0B5ED7" height={80} width={80} />
      </div>
    );
  }
}

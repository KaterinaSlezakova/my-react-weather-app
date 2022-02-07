import React, { useState } from "react";
import Form from "./Form";
import Overview from "./Overview";
import CurrentTemp from "./CurrentTemp";
import CurrentWeatherCon from "./CurrentWeatherCon";
import axios from "axios";
import { BallTriangle } from "react-loader-spinner";

import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ loaded:"false" });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      loaded: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      date:"Sunday 21:00"
    })
  }
  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <Form />
        <div className="row">
          <div className="col-4">
            <CurrentTemp
              temperature={weatherData.temperature}
              icon={weatherData.icon}
              description={weatherData.description}
            />
          </div>
          <div className="col-3">
            <CurrentWeatherCon
              wind={weatherData.wind}
              rain={weatherData.humidity}
            />
          </div>
          <div className="col-5 text-end">
            <Overview
              city={weatherData.city}
              description={weatherData.description}
              date={weatherData.date}
            />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `2fe472309e4eca35c3771be7be704291`;
    let city = "Tokyo";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
      <div>
        <BallTriangle color="#0B5ED7" height={80} width={80} />
      </div>
    );
  }
}

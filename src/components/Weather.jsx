import React, { useState } from "react";
import Overview from "./Overview";
import CurrentTemp from "./CurrentTemp";
import Details from "./Details";
import axios from "axios";
import { BallTriangle } from "react-loader-spinner";

import "./Weather.css";

export default function Weather({ defaultCity }) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(defaultCity);

  function handleSubmit(e) {
    e.preventDefault();
    search(city);
  }
  function handleCityChange(e) {
    setCity(e.target.value);
  }
  function search() {
    const apiKey = "375b17b86a7f9a868e0d0a3ab5fe16bd";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

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
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
    });
  }
  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                onChange={handleCityChange}
                type="search"
                placeholder="Search a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-4">
            <CurrentTemp
              temperature={weatherData.temperature}
              icon={weatherData.iconUrl}
              description={weatherData.description}
            />
          </div>
          <div className="col-3">
            <Details
              wind={weatherData.wind}
              humidity={weatherData.humidity}
              sunrise={weatherData.sunrise}
              sunset={weatherData.sunset}
            />
          </div>
          <div className="col-4 text-end">
            <Overview
              city={weatherData.city}
              description={weatherData.description}
              time={weatherData.time}
            />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return (
      <div>
        <BallTriangle color="#0B5ED7" height={80} width={80} />
      </div>
    );
  }
}

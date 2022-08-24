import React, { useState } from "react";
import axios from "axios";
import { BallTriangle } from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";
import DailyForecast from "../DailyForecast/DailyForecast";
import Form from "../Form";

import "./Weather.css";

export default function Weather({ defaultCity }) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(defaultCity);

  const handleCurrentPositionCityResponse = (response) => {
    setWeatherData({
      loaded: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      time: new Date(response.data.dt * 1000),
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
      country: response.data.sys.country,
    });
  };

  const handlePosition = (position) => {
    let lon = position.coords.longitude;
    let lat = position.coords.latitude;
    let apiKey = "c1237133a9907d473e77d2b6b0072a61";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleCurrentPositionCityResponse);
  };

  const getCurrentPosition = (e) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition(handlePosition);
  };

  function handleSubmit(e) {
    e.preventDefault();
    search(city);
  }
  function handleCityChange(e) {
    setCity(e.target.value);
  }
  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      time: new Date(response.data.dt * 1000),
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
      country: response.data.sys.country,
    });
  }

  function search() {
    const apiKey = "c1237133a9907d473e77d2b6b0072a61";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <Form
          handleCityChange={handleCityChange}
          handleSubmit={handleSubmit}
          getCurrentPosition={getCurrentPosition}
        />
        <WeatherInfo data={weatherData} />
        <DailyForecast coordinates={weatherData.coordinates} />
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

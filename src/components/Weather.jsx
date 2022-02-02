import React, { useState } from "react";
import Form from "./Form";
import Overview from "./Overview";
import CurrentTemp from "./CurrentTemp";
import CurrentWeatherCon from "./CurrentWeatherCon";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <Form />
        <div className="row">
          <div className="col-4">
            <CurrentTemp temperature={temperature} />
          </div>
          <div className="col-3">
            <CurrentWeatherCon />
          </div>
          <div className="col-5 text-end">
            <Overview />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `2fe472309e4eca35c3771be7be704291`;
    let city = "Slavkov u Brna";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "loading...";
  }
}

import React, { useState } from "react";

export default function WeatherTemperature({ celsius }) {
  const [unit, setUnit] = useState("celsius");

  function fahrenheit(){
    return celsius * 1.8 + 32;
  }

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  return (
    <div className="WeatherTemperature">
      <div className="temperature">
        <span className="tempValue">
          {unit === "celsius" ? Math.round(celsius) : Math.round(fahrenheit())}
        </span>
        <span className="units">
          <span>
            <a href="/" onClick={convertToCelsius}>
              °C
            </a>
          </span>{" "}
          |{" "}
          <span>
            <a href="/" onClick={convertToFahrenheit}>
              °F
            </a>
          </span>
        </span>
      </div>
    </div>
  );
}

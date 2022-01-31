import React from "react";
import Form from "./Form";
import Overview from "./Overview";
import CurrentTemp from "./CurrentTemp";
import CurrentWeatherCon from "./CurrentWeatherCon";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <Form />
      <div className="row">
        <div className="col-3">
          <CurrentTemp />
        </div>
        <div className="col-3">
          <CurrentWeatherCon />
        </div>
        <div className="col-6">
          <Overview />
        </div>
      </div>
    </div>
  );
}

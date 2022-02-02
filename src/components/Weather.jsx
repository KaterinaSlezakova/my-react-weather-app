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
        <div className="col-4">
          <CurrentTemp />
        </div>
        <div className="col-4">
          <CurrentWeatherCon />
        </div>
        <div className="col-4 text-end">
          <Overview />
        </div>
      </div>
    </div>
  );
}

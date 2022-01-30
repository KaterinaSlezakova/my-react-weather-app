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
      <Overview />
      <div className="row">
        <div className="col-6">
         <CurrentTemp />
        </div>
        <div className="col-6">
          <CurrentWeatherCon />
        </div>
      </div>
    </div>
  );
}

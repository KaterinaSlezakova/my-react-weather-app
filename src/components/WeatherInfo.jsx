import React from "react";
import Overview from "./Overview";
import CurrentTemp from "./CurrentTemp";
import Details from "./Details";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6 text-center">
          <CurrentTemp
            temperature={props.data.temperature}
            icon={props.data.icon}
            description={props.data.description}
          />
        </div>
        <div className="col-6 text-end">
          <Overview
            city={props.data.city}
            description={props.data.description}
            time={props.data.time}
          />
        </div>
      </div>
      <div>
        <Details
          wind={props.data.wind}
          humidity={props.data.humidity}
          sunrise={props.data.sunrise}
          sunset={props.data.sunset}
        />
      </div>
    </div>
  );
}

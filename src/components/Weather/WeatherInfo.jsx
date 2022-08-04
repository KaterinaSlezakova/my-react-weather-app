import React from "react";
import Overview from "../Overview/Overview";
import CurrentTemp from "../CurretTemp/CurrentTemp";
// import Details from "../Details/Details";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-8 text-start">
          <Overview
            city={props.data.city}
            description={props.data.description}
            time={props.data.time}
          />
        </div>
        <div className="col-4 text-end">
          <CurrentTemp
            temperature={props.data.temperature}
            icon={props.data.icon}
            description={props.data.description}
          />
        </div>
      </div>
      {/* <div>
        <Details
          wind={props.data.wind}
          humidity={props.data.humidity}
          sunrise={props.data.sunrise}
          sunset={props.data.sunset}
        />
      </div> */}
    </div>
  );
}

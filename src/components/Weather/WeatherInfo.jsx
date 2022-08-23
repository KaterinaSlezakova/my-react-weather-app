import React, { useState } from "react";
import Overview from "../Overview/Overview";
import CurrentTemp from "../CurretTemp/CurrentTemp";
import Details from "../Details/Details";

export default function WeatherInfo(props) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6 text-start">
          <Overview
            city={props.data.city}
            country={props.data.country}
            description={props.data.description}
            time={props.data.time}
          />
        </div>
        <div className="col-6">
          <CurrentTemp
            temperature={props.data.temperature}
            icon={props.data.icon}
            description={props.data.description}
          />
        </div>
      </div>
      <button
        className="btn btn-light btn-sm details"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide details..." : "More details..."}
      </button>
      {showDetails && (
        <Details
          wind={props.data.wind}
          humidity={props.data.humidity}
          sunrise={props.data.sunrise}
          sunset={props.data.sunset}
        />
      )}
    </div>
  );
}

import React from "react";
import FormattedDate from "../FormattedDate";
import "./Overview.css";

export default function Overview({ country, city, time, description }) {
  return (
    <div className="Overview">
      <h3>
        {city}, <span>{country}</span>
      </h3>

      <ul>
        <li>
          <FormattedDate time={time} />
        </li>
        <li className="text-capitalize">{description}</li>
      </ul>
    </div>
  );
}

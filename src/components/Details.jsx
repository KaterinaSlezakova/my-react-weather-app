import "./Details.css";

export default function Details(props) {
  let sunriseHours = props.sunrise.getHours();
  let sunriseMinutes = props.sunrise.getMinutes();

  let sunsetHours = props.sunset.getHours();
  let sunsetMinutes = props.sunset.getMinutes();

 

  return (
    <div className="Details">
      <ul>
        <li>Humidity: {props.humidity} %</li>
        <li>Wind: {Math.round(props.wind)} km/h</li>
      </ul>
      <ul>
        <li>
          Sunrise: {sunriseHours < 10 ? `0${sunriseHours}` : sunriseHours}:
          {sunriseMinutes < 10 ? `0${sunriseMinutes}` : sunriseMinutes}
        </li>
        <li>
          Sunset: {sunsetHours < 10 ? `0${sunsetHours}` : sunsetHours}:
          {sunsetMinutes < 10 ? `0${sunsetMinutes}` : sunsetMinutes}
        </li>
      </ul>
    </div>
  );
}

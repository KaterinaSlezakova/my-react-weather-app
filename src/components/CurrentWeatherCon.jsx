
import "./CurrentWeatherCon.css";

export default function CurrentWeatherCon(props) {
  return (
    <div className="CurrentWeatherCon">
      <ul>
        <li>Humidity: {props.humidity} %</li>
        <li>Wind: {Math.round(props.wind)} km/h</li>
      </ul>
    </div>
  );
}

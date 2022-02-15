import "./CurrentTemp.css";
import WeatherIcon from "./WeatherIcon";

export default function CurrentTemp(props) {
  return (
    <div className="CurrentTemp">
      <WeatherIcon code={props.icon} />
      <div className="temperature">
        <span className="tempValue">{Math.round(props.temperature)}</span>
        <span className="units">
          <span className="celsious">°C </span>|
          <span className="fahrenheit"> °F</span>
        </span>
      </div>
    </div>
  );
}

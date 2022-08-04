import "./CurrentTemp.css";
import WeatherIcon from "../WeatherIcon";
import WeatherTemperature from "../WeatherTemperature";

export default function CurrentTemp(props) {
  return (
    <div className="CurrentTemp">
      <WeatherTemperature celsius={props.temperature} />
      <WeatherIcon code={props.icon} size={80} />
    </div>
  );
}

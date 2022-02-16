import "./CurrentTemp.css";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function CurrentTemp(props) {
  return (
    <div className="CurrentTemp">
      <WeatherIcon code={props.icon} />
      <WeatherTemperature celsius={props.temperature} />
    </div>
  );
}

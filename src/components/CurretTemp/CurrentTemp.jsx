import "./CurrentTemp.css";
import WeatherIcon from "../WeatherIcon";
import WeatherTemperature from "../WeatherTemperature";

export default function CurrentTemp(props) {
  return (
    <div className="CurrentTemp">
      <div className="row">
        <div className="col-4">
          <WeatherIcon code={props.icon} size={80} />
        </div>
        <div className="col-8 d-flex align-items-center">
          <WeatherTemperature celsius={props.temperature} />
        </div>
      </div>
    </div>
  );
}

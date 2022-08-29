import "./CurrentTemp.css";
import WeatherIcon from "../WeatherIcon";
import WeatherTemperature from "../WeatherTemperature";

export default function CurrentTemp(props) {
  return (
    <div className="CurrentTemp">
      <div className="row container">
        <div className="col-12 d-inline-flex justify-content-start">
          <ul>
            <li>
              <WeatherIcon code={props.icon} size={80} />
            </li>
            <li>
              <WeatherTemperature celsius={props.temperature} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import "./CurrentTemp.css";

export default function CurrentTemp(props) {
  return (
    <div className="CurrentTemp">
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
        alt="mostly cloudy"
      />
      <div className="temperature">
        <span className="currentTemp">{Math.round(props.temperature)}</span>
        <span className="units">
          <span className="celsious">°C </span>|
          <span className="fahrenheit"> °F</span>
        </span>
      </div>
    </div>
  );
}

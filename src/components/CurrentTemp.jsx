import "./CurrentTemp.css";

export default function CurrentTemp() {
  return (
    <div className="CurrentTemp">
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
        alt="mostly cloudy"
      />
      <span className="temp">6</span>
      <span className="values">
        <span className="celsious">°C </span>|
        <span className="fahrenheit"> °F</span>
      </span>
    </div>
  );
}

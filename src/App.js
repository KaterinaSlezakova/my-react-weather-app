import "./App.css";
import Weather from "./components/Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather application</h1>
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/kslezakova/"
            target="_blank"
            rel="noreferrer"
          >
            Katerina Slezakova
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/KaterinaSlezakova/my-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            opened-sourced on GitHub
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}

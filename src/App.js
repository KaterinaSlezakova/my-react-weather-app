import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Weather from "./components/Weather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function App() {
  return (
    <div className="App">
      <div className="base-background"></div>
      <div className="background-primary-section"></div>
      <div className="background-secondary-section"></div>
      <div className="container">
        <Weather defaultCity="Berlin" />
        <footer>
          Coded by{" "}
          <a
            href="https://www.linkedin.com/in/kslezakova/"
            target="_blank"
            rel="noreferrer"
          >
            Katerina Slezakova <FontAwesomeIcon icon={faLinkedin} />
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/KaterinaSlezakova/my-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open sourced on <FontAwesomeIcon icon={faGithub} />
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}

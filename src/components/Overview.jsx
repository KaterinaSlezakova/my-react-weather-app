
import "./Overview.css";

export default function Overview(props) {
  return (
    <div className="Overview">
      <h3>{props.city}</h3>
      <ul>
        <li>{props.date}</li>
        <li className="text-capitalize">{props.description}</li>
      </ul>
    </div>
  );
}

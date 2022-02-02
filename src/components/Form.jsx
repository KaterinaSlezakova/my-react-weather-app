

import "./Form.css";

export default function Form() {
  return (
    <div className="Form">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Search a city.."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100" />
          </div>
        </div>
      </form>
    </div>
  );
}

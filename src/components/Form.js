import React from "react";
import { FaSearch, FaLocationArrow } from "react-icons/fa";

const Form = ({ handleCityChange, handleSubmit, getCurrentPosition }) => {
  return (
    <div className="Form">
      <form>
        <div className="row">
          <div className="col-8">
            <input
              onChange={handleCityChange}
              type="search"
              placeholder="Search a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-1">
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleSubmit}
            >
              <FaSearch />
            </button>
          </div>
          <div className="col-1">
            <button
              className="btn btn-warning"
              type="button"
              onClick={getCurrentPosition}
            >
              <FaLocationArrow />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Form;

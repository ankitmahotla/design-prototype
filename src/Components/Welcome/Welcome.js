import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.styles.css";

function Welcome() {
  return (
    <div className="body">
      <h1>Welcome!</h1>

      <div className="box1">
        <div className="content">
          <h2>Apply as a patient</h2>
          <Link to='/patient' className="button1" >
            Add Report
          </Link>
          <br /> <br />
          <div className="form-check form-switch">
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Allow Access to Doctor</label>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;

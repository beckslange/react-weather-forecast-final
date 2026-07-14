import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control form-control-lg"
              required
              autoFocus
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary btn-lg w-100"
            />
          </div>
        </div>
      </form>

      <h1 className="city-name">New York</h1>
      <ul className="list-unstyled">Monday 07:00</ul>

      <div className="row">
        <div className="col-6">
          <div className="d-flex align-items-center">
            <img
              src="https://www.gstatic.com/weather/conditions/v1/svg/mostly_cloudy_day_light.svg"
              alt="weather-description"
              className="weather-icon me-2"
            />
            <span className="current-temp">97</span>
            <span className="unit ms-1">°F</span>
          </div>
        </div>

        <div className="col-6 mt-2">
          <div className="conditions">
            <ul className="list-unstyled">
              <li>Clear Sky</li>
              <li>Humidity</li>
              <li>Wind</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

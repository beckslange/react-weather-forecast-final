import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input type="search" placeholder="Enter a city..." required autoFocus />
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>
      <h1>City Name</h1>
      <ul className="list-unstyled">Monday 07:00</ul>
      <img
        src="https://www.gstatic.com/weather/conditions/v1/svg/mostly_cloudy_day_light.svg"
        alt="weather-icon"
      />
      97°F
      <ul className="list-unstyled">
        <li>Clear Sky</li>
        <li>Humidity</li>
        <li>Wind</li>
      </ul>
    </div>
  );
}

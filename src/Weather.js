import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.min.css";
import useWeatherInfo from "./useWeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const { weatherData, city, searchCity, updateCity } = useWeatherInfo(
    props.defaultCity
  );

  function handleSubmit(event) {
    event.preventDefault();
    searchCity(city);
  }

  if (weatherData === null) {
    searchCity(props.defaultCity);

    return <p>Loading...</p>;
  }

  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <div className="row g-2">
          <div className=" col-12 col-sm-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control form-control-lg"
              required
              autoFocus
              value={city}
              onChange={updateCity}
            />
          </div>

          <div className="col-12 col-sm-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary btn-lg w-100"
            />
          </div>
        </div>
      </form>

      <h1 className="city-name">{weatherData.city}</h1>

      <ul className="list-unstyled">
        <li>{weatherData.time}</li>
      </ul>

      <div className="row mt-4 align-items-center">
        <div className="col-12 col-sm-6">
          <div className="d-flex align-items-center justify-content-center justify-content-sm-start">
            <img
              src={weatherData.iconURL}
              alt={weatherData.description}
              className="weather-icon me-2"
            />

            <div className="temperature-container">
              <span className="current-temp">{weatherData.temperature}</span>

              <span className="unit ms-1">°F</span>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 mt-3 mt-sm-0">
          <div className="conditions">
            <ul className="list-unstyled text-center text-sm-start mb-0">
              <li>{weatherData.description}</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} mph</li>
            </ul>
          </div>
        </div>
      </div>

      <WeatherForecast city={weatherData.city} />
    </div>
  );
}

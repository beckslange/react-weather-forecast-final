import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setForecast(null);

    let apiKey = "tfo33b89af42954f2d60430a801e1b3c";

    let apiURL = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=imperial`;

    axios.get(apiURL).then(function (response) {
      setForecast(response.data.daily);
    });
  }, [props.city]);

  if (forecast === null) {
    return <p className="forecast-loading">Loading forecast...</p>;
  }

  return (
    <div className="WeatherForecast mt-4">
      <div className="row row-cols-5 text-center">
        {forecast.slice(0, 5).map(function (dailyForecast) {
          return (
            <div className="col" key={dailyForecast.time}>
              <WeatherForecastDay data={dailyForecast} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

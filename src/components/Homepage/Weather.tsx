import React from "react";
import { IWeather } from "../../types";

const Weather: React.FC<{ weather: IWeather; city: string }> = ({
  weather,
  city,
}) => {
  return (
    <div className="weather">
      <div className="weather__icon">
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
          alt={weather.weather[0]?.main}
        />
      </div>
      <h3 className="weather__city">{city}</h3>
      <h1 className="weather__temp">{weather.main.temp.toFixed()}°</h1>
      <p className="weather__condition">{weather.weather[0]?.main}</p>
    </div>
  );
};

export default Weather;

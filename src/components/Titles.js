import React from "react";

const Weather = () => {
  return (
    <div className="container-fluid">
      <h1>Current Weather</h1>
      <p>
        Enter city and country or select from one of the cities below to find
        out current weather conditions. Source code:{" "}
        <a
          href="https://github.com/duynghia-123/react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub repo
        </a>
      </p>
      <p>
        <a
          href="https://openweathermap.org/api"
          target="_blank"
          rel="noopener noreferrer"
        >
          openweathermap.org/api
        </a>
      </p>
    </div>
  );
};

export default Weather;

import React, { useState, useEffect } from "react";

import WeatherHeader from "./WeatherHeader";
import WeatherStats from "./WeatherStats";
import ForecastCard from "./ForecastCard";
import SearchCity from "./SearchCity";
import WeatherFooter from "./WeatherFooter";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=17.38&longitude=78.48&current_weather=true"
      );

      const data = await response.json();

      setWeather(data.current_weather);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div className="weather-page">
      <div className="weather-card">

        <WeatherHeader />

        <SearchCity />

        <h2>📍 Hyderabad</h2>

        <div className="temp">
          {weather.temperature}°C
        </div>

        <WeatherStats weather={weather} />

        <ForecastCard />

        <button
          className="refresh-btn"
          onClick={fetchWeather}
        >
          🔄 Refresh
        </button>

        <WeatherFooter />

      </div>
    </div>
  );
}

export default Weather;
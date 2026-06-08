import React, { useState, useEffect } from "react";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [isCelsius, setIsCelsius] = useState(true);
  const [time, setTime] = useState(new Date());

  const fetchWeather = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=17.38&longitude=78.48&current_weather=true"
      );

      if (!response.ok) {
        throw new Error("Unable to fetch weather data");
      }

      const data = await response.json();

      setWeather(data.current_weather);
      setError("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();

    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <h2>Loading Weather...</h2>
      </div>
    );
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  const temperature = isCelsius
    ? weather.temperature
    : (weather.temperature * 9) / 5 + 32;

  return (
    <div className={darkMode ? "weather-page dark" : "weather-page"}>
      <div className="weather-card">

        <div className="top-buttons">
          <button
            className="theme-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </button>

          <button
            className="theme-btn"
            onClick={() => setIsCelsius(!isCelsius)}
          >
            {isCelsius ? "°F" : "°C"}
          </button>
        </div>

        <h1>⛅ Weather Dashboard</h1>

        <h3>📍 Hyderabad</h3>

        <p className="clock">
          🕒 {time.toLocaleTimeString()}
        </p>

        <div className="status">
          ☀ Clear Sky
        </div>

        <div className="temp">
          {temperature.toFixed(1)}
          {isCelsius ? "°C" : "°F"}
        </div>

        <div className="weather-grid">

          <div className="info-card">
            <h4>💨 Wind Speed</h4>
            <p>{weather.windspeed} km/h</p>
          </div>

          <div className="info-card">
            <h4>🧭 Direction</h4>
            <p>{weather.winddirection}°</p>
          </div>

          <div className="info-card">
            <h4>⏰ Updated</h4>
            <p>{weather.time}</p>
          </div>

          <div className="info-card">
            <h4>💧 Humidity</h4>
            <p>65%</p>
          </div>

          <div className="info-card">
            <h4>🌅 Sunrise</h4>
            <p>5:42 AM</p>
          </div>

          <div className="info-card">
            <h4>🌇 Sunset</h4>
            <p>6:48 PM</p>
          </div>

        </div>

        <div className="forecast">
          <h3>📅 Weekly Forecast</h3>

          <div className="forecast-row">
            <div>Mon ☀️ 32°</div>
            <div>Tue 🌤️ 30°</div>
            <div>Wed 🌧️ 28°</div>
            <div>Thu ☁️ 29°</div>
            <div>Fri ☀️ 33°</div>
          </div>
        </div>

        <button
          className="refresh-btn"
          onClick={fetchWeather}
        >
          🔄 Refresh Weather
        </button>

      </div>
    </div>
  );
}

export default Weather;
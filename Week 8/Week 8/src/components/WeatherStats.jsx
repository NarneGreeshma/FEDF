function WeatherStats({ weather }) {
  return (
    <div className="weather-grid">
      <div className="info-card">
        <h4>🌡 Temperature</h4>
        <p>{weather.temperature} °C</p>
      </div>

      <div className="info-card">
        <h4>💨 Wind Speed</h4>
        <p>{weather.windspeed} km/h</p>
      </div>

      <div className="info-card">
        <h4>🧭 Direction</h4>
        <p>{weather.winddirection}°</p>
      </div>
    </div>
  );
}

export default WeatherStats;
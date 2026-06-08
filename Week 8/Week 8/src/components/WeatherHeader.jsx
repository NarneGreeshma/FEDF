function WeatherHeader() {
  const today = new Date().toDateString();

  return (
    <div className="header">
      <h1>🌤 Weather Dashboard</h1>
      <p>{today}</p>
    </div>
  );
}

export default WeatherHeader;
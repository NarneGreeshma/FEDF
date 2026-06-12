import BookingForm from "./components/BookingForm";

function App() {
  const airlineName =
    import.meta.env.VITE_AIRLINE_NAME;

  return (
    <div className="app">

      <div className="airline-card">

        <h1>{airlineName}</h1>

        <p className="subtitle">
          Fly Smarter. Fly Faster.
        </p>

        <BookingForm />

      </div>

    </div>
  );
}

export default App;
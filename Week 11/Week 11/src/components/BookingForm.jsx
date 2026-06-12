import { useState } from "react";

function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [message, setMessage] = useState("");

  const cities = [
    "Delhi (DEL)",
    "Mumbai (BOM)",
    "Hyderabad (HYD)",
    "Bengaluru (BLR)",
    "Chennai (MAA)",
    "Kolkata (CCU)",
    "Pune (PNQ)",
    "Ahmedabad (AMD)",
    "Goa (GOI)",
    "Kochi (COK)",
    "Vijayawada (VGA)",
    "Visakhapatnam (VTZ)",
    "Tirupati (TIR)"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage(`
✈ TICKET CONFIRMED

Passenger: ${name}

Route: ${source} → ${destination}

Date: ${travelDate}

Passengers: ${passengers}
`);

    setName("");
    setEmail("");
    setPhone("");
    setSource("");
    setDestination("");
    setTravelDate("");
    setPassengers(1);
  };

  return (
    <>
      <form
        className="booking-form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Passenger Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          required
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value)
          }
          required
        />

        <select
          value={source}
          onChange={(e) =>
            setSource(e.target.value)
          }
          required
        >
          <option value="">
            Select Source City
          </option>

          {cities.map((city) => (
            <option
              key={city}
              value={city}
            >
              {city}
            </option>
          ))}
        </select>

        <select
          value={destination}
          onChange={(e) =>
            setDestination(e.target.value)
          }
          required
        >
          <option value="">
            Select Destination City
          </option>

          {cities.map((city) => (
            <option
              key={city}
              value={city}
            >
              {city}
            </option>
          ))}
        </select>

        <input
          type="date"
          value={travelDate}
          onChange={(e) =>
            setTravelDate(e.target.value)
          }
          required
        />

        <select
          value={passengers}
          onChange={(e) =>
            setPassengers(e.target.value)
          }
        >
          <option value="1">
            1 Passenger
          </option>
          <option value="2">
            2 Passengers
          </option>
          <option value="3">
            3 Passengers
          </option>
          <option value="4">
            4 Passengers
          </option>
        </select>

        {[...Array(Number(passengers))]
          .map((_, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Passenger ${index + 1} Name`}
              required
            />
          ))}

        <button type="submit">
          ✈ Book Flight
        </button>
      </form>

      {message && (
        <div className="ticket-card">
          <h3>{message}</h3>
        </div>
      )}
    </>
  );
}

export default BookingForm;
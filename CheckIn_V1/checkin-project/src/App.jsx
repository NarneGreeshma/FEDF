import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Dashboard from "./pages/Dashboard";
import TicketBooking from "./pages/TicketBooking";
import Flights from "./pages/Flights";
import SeatSelection from "./pages/SeatSelection";
import PassengerDetails from "./pages/PassengerDetails";
import Meals from "./pages/Meals";
import Baggage from "./pages/Baggage";
import Payment from "./pages/Payment";
import Confirmation from "./pages/Confirmation";
import BoardingPass from "./pages/boardingPass";

import Features from "./pages/Features";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/ticket-booking" element={<TicketBooking />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/seat-selection" element={<SeatSelection />} />
        <Route path="/passenger-details" element={<PassengerDetails />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/baggage" element={<Baggage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/boarding-pass" element={<BoardingPass />} />

        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />

      </Routes>
    </BrowserRouter>
  );
}
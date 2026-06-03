import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <div className="px-6 lg:px-20 py-16">

        <h1 className="text-5xl font-bold text-center mb-4">
          Passenger Dashboard
        </h1>

        <p className="text-center text-slate-400 mb-12">
          Welcome to SkyBoard Airlines
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <Link to="/ticket-booking">
            <div className="bg-slate-900 p-8 rounded-3xl border border-cyan-500 hover:scale-105 transition cursor-pointer">
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">
                Flight Booking
              </h2>
              <p>
                Search and book domestic or international flights.
              </p>
            </div>
          </Link>

          <Link to="/seat-selection">
            <div className="bg-slate-900 p-8 rounded-3xl border border-cyan-500 hover:scale-105 transition cursor-pointer">
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">
                Seat Selection
              </h2>
              <p>
                Choose your preferred seat before check-in.
              </p>
            </div>
          </Link>

          <Link to="/meals">
            <div className="bg-slate-900 p-8 rounded-3xl border border-cyan-500 hover:scale-105 transition cursor-pointer">
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">
                Meal Preferences
              </h2>
              <p>
                Select vegetarian, non-vegetarian or special meals.
              </p>
            </div>
          </Link>

          <Link to="/baggage">
            <div className="bg-slate-900 p-8 rounded-3xl border border-cyan-500 hover:scale-105 transition cursor-pointer">
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">
                Baggage Services
              </h2>
              <p>
                Purchase additional baggage allowance.
              </p>
            </div>
          </Link>

          <Link to="/boarding-pass">
            <div className="bg-slate-900 p-8 rounded-3xl border border-cyan-500 hover:scale-105 transition cursor-pointer">
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">
                Boarding Pass
              </h2>
              <p>
                Generate and download digital boarding passes.
              </p>
            </div>
          </Link>

          <Link to="/admin">
            <div className="bg-slate-900 p-8 rounded-3xl border border-cyan-500 hover:scale-105 transition cursor-pointer">
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">
                Admin Panel
              </h2>
              <p>
                Manage passengers, flights and reports.
              </p>
            </div>
          </Link>

        </div>

      </div>

    </div>
  );
}
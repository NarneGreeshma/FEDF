import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
      <div className="min-h-screen bg-black/60">

        <Navbar />

        <div className="flex flex-col items-center justify-center min-h-[85vh] px-6 text-center">

          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            SkyBoard
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Next-Generation Airline Passenger Check-In Platform
          </h2>

          <p className="max-w-4xl text-xl text-gray-200 mb-12">
            Experience seamless airline passenger services including
            flight booking, seat selection, meal preferences,
            baggage management, digital boarding passes,
            secure payment processing, and airport check-in.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <Link to="/login">
              <button className="w-64 bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 rounded-2xl text-lg transition">
                Passenger Login
              </button>
            </Link>

            <Link to="/signup">
              <button className="w-64 border-2 border-white hover:bg-white hover:text-black font-bold py-4 rounded-2xl text-lg transition">
                Create Account
              </button>
            </Link>

            <Link to="/dashboard">
              <button className="w-64 bg-green-500 hover:bg-green-400 text-black font-bold py-4 rounded-2xl text-lg transition">
                Dashboard
              </button>
            </Link>

            <Link to="/ticket-booking">
              <button className="w-64 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 rounded-2xl text-lg transition">
                Book Flight
              </button>
            </Link>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">

            <Link to="/seat-selection">
              <div className="bg-slate-900/70 p-6 rounded-2xl border border-cyan-500">
                <h3 className="text-2xl font-bold mb-2">
                  Seat Selection
                </h3>
                <p>Select your preferred seats.</p>
              </div>
            </Link>

            <Link to="/meals">
              <div className="bg-slate-900/70 p-6 rounded-2xl border border-cyan-500">
                <h3 className="text-2xl font-bold mb-2">
                  Meal Preferences
                </h3>
                <p>Choose meals for every passenger.</p>
              </div>
            </Link>

            <Link to="/boarding-pass">
              <div className="bg-slate-900/70 p-6 rounded-2xl border border-cyan-500">
                <h3 className="text-2xl font-bold mb-2">
                  Boarding Pass
                </h3>
                <p>Generate and download digital passes.</p>
              </div>
            </Link>

          </div>

        </div>
      </div>
    </div>
  );
}
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

export default function Home() {

  const navigate = useNavigate()

  return (

    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <section className="grid lg:grid-cols-2 gap-12 items-center px-6 lg:px-20 py-20">

        <div>

          <p className="uppercase tracking-[5px] text-cyan-400 text-sm mb-4">
            Next Generation Airline Platform
          </p>

          <h1 className="text-6xl font-bold leading-tight mb-6">
            Airline Check-In & Boarding System
          </h1>

          <p className="text-slate-300 text-lg leading-8 mb-10">
            Book flight tickets, verify passengers,
            select meals, add baggage,
            and generate QR boarding passes.
          </p>

          <div className="flex flex-wrap gap-6">

            <button
              onClick={() =>
                navigate('/ticket-booking')
              }
              className="bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 rounded-2xl font-semibold"
            >
              Book Flight Ticket
            </button>

            <button
              onClick={() =>
                navigate('/login')
              }
              className="bg-white hover:bg-slate-200 text-black px-8 py-4 rounded-2xl font-semibold"
            >
              Existing Passenger
            </button>

          </div>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10">

          <h2 className="text-4xl font-bold text-cyan-400 mb-8">
            Passenger Services
          </h2>

          <div className="grid grid-cols-2 gap-5">

            <div className="bg-slate-800 p-6 rounded-2xl">
              QR Boarding
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl">
              Seat Selection
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl">
              Meal Preferences
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl">
              Baggage Add-ons
            </div>

          </div>

        </div>

      </section>

    </div>
  )
}
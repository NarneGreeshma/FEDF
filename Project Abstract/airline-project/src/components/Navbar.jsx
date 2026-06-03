import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 lg:px-16 py-5 bg-slate-950 border-b border-slate-800 text-white">
      <div>
        <h1 className="text-4xl font-bold text-cyan-400">
          SkyBoard
        </h1>
        <p className="text-slate-400 text-sm">
          Airline Check-In Platform
        </p>
      </div>

      <div className="flex gap-6 text-sm">
        <Link to="/">Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/flights">Flights</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </nav>
  )
}
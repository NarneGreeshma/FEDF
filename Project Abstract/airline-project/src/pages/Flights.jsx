import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

export default function Flights({
  passenger,
  setPassenger,
}) {

  const navigate = useNavigate()

  const flights = [

    {
      id: 'AI203',
      route: 'Hyderabad → Delhi',
      time: '08:45 AM',
      gate: 'B12',
      status: 'On Time',
    },

    {
      id: 'IN782',
      route: 'Chennai → Mumbai',
      time: '11:30 AM',
      gate: 'A04',
      status: 'Boarding Soon',
    },

    {
      id: 'SG551',
      route: 'Bangalore → Kolkata',
      time: '01:15 PM',
      gate: 'C22',
      status: 'Delayed',
    },

    {
      id: 'UK990',
      route: 'Delhi → Dubai',
      time: '03:40 PM',
      gate: 'D18',
      status: 'On Time',
    },

    {
      id: 'AI441',
      route: 'Mumbai → Singapore',
      time: '05:20 PM',
      gate: 'E09',
      status: 'Check-In Open',
    },

    {
      id: '6E602',
      route: 'Pune → Hyderabad',
      time: '07:10 PM',
      gate: 'B07',
      status: 'Boarding Soon',
    },

    {
      id: 'QF101',
      route: 'Delhi → Sydney',
      time: '09:30 PM',
      gate: 'F11',
      status: 'International',
    },

  ]

  const selectFlight = (flight) => {

    setPassenger({
      ...passenger,
      flight: flight.id,
    })

    navigate('/meals')
  }

  return (

    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <div className="px-6 lg:px-20 py-20">

        <div className="flex justify-between items-center mb-14">

          <div>

            <h1 className="text-5xl font-bold mb-3">
              Flight Schedule
            </h1>

            <p className="text-slate-400">
              Select your flight for check-in
            </p>

          </div>

        </div>

        <div className="space-y-8">

          {flights.map((flight, index) => (

            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col lg:flex-row justify-between items-center gap-8"
            >

              <div>

                <h2 className="text-3xl font-bold text-cyan-400 mb-3">
                  {flight.id}
                </h2>

                <p className="text-xl">
                  {flight.route}
                </p>

              </div>

              <div>

                <p className="text-slate-400">
                  Departure
                </p>

                <h3 className="text-2xl font-bold">
                  {flight.time}
                </h3>

              </div>

              <div>

                <p className="text-slate-400">
                  Gate
                </p>

                <h3 className="text-2xl font-bold">
                  {flight.gate}
                </h3>

              </div>

              <div>

                <p className="text-slate-400">
                  Status
                </p>

                <h3 className="text-2xl font-bold text-green-400">
                  {flight.status}
                </h3>

              </div>

              <button
                onClick={() =>
                  selectFlight(flight)
                }
                className="bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 rounded-2xl font-semibold"
              >
                Select Flight
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}
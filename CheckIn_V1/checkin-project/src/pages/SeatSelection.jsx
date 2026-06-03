import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

export default function SeatSelection() {

  const navigate = useNavigate()

  const rows = [
    ['A1', 'A2', '', 'A3', 'A4'],
    ['B1', 'B2', '', 'B3', 'B4'],
    ['C1', 'C2', '', 'C3', 'C4'],
    ['D1', 'D2', '', 'D3', 'D4'],
    ['E1', 'E2', '', 'E3', 'E4'],
    ['F1', 'F2', '', 'F3', 'F4'],
    ['G1', 'G2', '', 'G3', 'G4'],
    ['H1', 'H2', '', 'H3', 'H4'],
  ]

  const handleSeat = (seat) => {

    const bookingData =
      JSON.parse(
        localStorage.getItem('bookingData')
      ) || {}

    bookingData.seat = seat

    localStorage.setItem(
      'bookingData',
      JSON.stringify(bookingData)
    )

    navigate('/baggage')
  }

  return (

    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <div className="px-6 lg:px-20 py-20">

        <h1 className="text-5xl font-bold text-center mb-4">
          Seat Selection
        </h1>

        <p className="text-center text-slate-400 mb-14">
          Choose your preferred aircraft seat
        </p>

        <div className="max-w-4xl mx-auto">

          <div className="bg-slate-900 border border-slate-800 rounded-[60px] p-10 relative overflow-hidden">

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-52 h-24 bg-cyan-500/20 rounded-b-full"></div>

            <div className="space-y-5 mt-10">

              {rows.map((row, rowIndex) => (

                <div
                  key={rowIndex}
                  className="grid grid-cols-5 gap-4 items-center"
                >

                  {row.map((seat, seatIndex) => (

                    seat === '' ? (

                      <div key={seatIndex}></div>

                    ) : (

                      <button
                        key={seatIndex}
                        onClick={() =>
                          handleSeat(seat)
                        }
                        className="bg-slate-800 hover:bg-cyan-500 hover:text-black border border-slate-700 rounded-2xl py-5 text-lg font-semibold transition"
                      >
                        {seat}
                      </button>

                    )

                  ))}

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </div>

  )
}
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { QRCodeCanvas } from 'qrcode.react'

export default function TicketBooking() {

  const navigate = useNavigate()

  const [step, setStep] = useState(1)

  const [selectedFlight, setSelectedFlight] =
    useState('')

  const [selectedSeats, setSelectedSeats] =
    useState([])

  const [passengerNames, setPassengerNames] =
    useState([])

  const [paymentMethod, setPaymentMethod] =
    useState('')

  const [paymentStarted, setPaymentStarted] =
    useState(false)

  const [paymentSuccess, setPaymentSuccess] =
    useState(false)

  const [timer, setTimer] = useState(60)

  const [bookingData, setBookingData] =
    useState(null)

  const flights = [

    {
      id: 'AI203',
      route: 'Hyderabad → Delhi',
      price: 4500,
    },

    {
      id: 'IN782',
      route: 'Chennai → Mumbai',
      price: 5200,
    },

    {
      id: 'UK990',
      route: 'Delhi → Dubai',
      price: 12000,
    },

  ]

  const seats = [

    ['A1', 'A2', '', 'A3', 'A4'],

    ['B1', 'B2', '', 'B3', 'B4'],

    ['C1', 'C2', '', 'C3', 'C4'],

    ['D1', 'D2', '', 'D3', 'D4'],

  ]

  const selectedFlightData =
    flights.find(
      (f) => f.id === selectedFlight
    )

  const totalPrice =

    selectedFlightData
      ? selectedSeats.length *
        selectedFlightData.price
      : 0

  const toggleSeat = (seat) => {

    if (selectedSeats.includes(seat)) {

      setSelectedSeats(

        selectedSeats.filter(
          (s) => s !== seat
        )

      )
    }

    else {

      setSelectedSeats([
        ...selectedSeats,
        seat,
      ])
    }
  }

  const handlePassengerName = (
    index,
    value
  ) => {

    const updated = [
      ...passengerNames,
    ]

    updated[index] = value

    setPassengerNames(updated)
  }

  const startPayment = () => {

    const bookingId =

      'SKY' +

      Math.floor(
        100000 + Math.random() * 900000
      )

    const data = {

      passengers: passengerNames,

      flight: selectedFlight,

      seats: selectedSeats,

      bookingId,

    }

    localStorage.setItem(
      'bookingData',
      JSON.stringify(data)
    )

    setBookingData(data)

    setPaymentStarted(true)

    setTimeout(() => {

      setPaymentSuccess(true)

    }, 5000)
  }

  useEffect(() => {

    let interval

    if (
      paymentStarted &&
      timer > 0 &&
      !paymentSuccess
    ) {

      interval = setInterval(() => {

        setTimer((prev) => prev - 1)

      }, 1000)
    }

    return () => clearInterval(interval)

  }, [paymentStarted, timer, paymentSuccess])

  return (

    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <div className="px-6 lg:px-20 py-20">

        <div className="max-w-6xl mx-auto bg-slate-900 rounded-3xl p-10">

          <h1 className="text-5xl font-bold text-center mb-12">
            Flight Ticket Booking
          </h1>

          {step === 1 && (

            <div className="grid md:grid-cols-3 gap-6">

              {flights.map((flight) => (

                <div
                  key={flight.id}
                  onClick={() => {

                    setSelectedFlight(
                      flight.id
                    )

                    setStep(2)
                  }}
                  className="cursor-pointer bg-slate-800 border border-slate-700 rounded-3xl p-8 hover:border-cyan-400"
                >

                  <h2 className="text-3xl font-bold text-cyan-400 mb-4">
                    {flight.id}
                  </h2>

                  <p className="mb-4">
                    {flight.route}
                  </p>

                  <p>
                    ₹ {flight.price}
                  </p>

                </div>

              ))}

            </div>

          )}

          {step === 2 && (

            <div>

              <h2 className="text-4xl font-bold text-center mb-10">
                Select Seats
              </h2>

              <div className="bg-slate-950 rounded-[50px] p-10">

                <div className="space-y-5">

                  {seats.map((row, rowIndex) => (

                    <div
                      key={rowIndex}
                      className="grid grid-cols-5 gap-4"
                    >

                      {row.map((seat, seatIndex) => (

                        seat === '' ? (

                          <div
                            key={seatIndex}
                          ></div>

                        ) : (

                          <button
                            key={seatIndex}
                            onClick={() =>
                              toggleSeat(seat)
                            }
                            className={`py-4 rounded-2xl font-bold ${
                              selectedSeats.includes(
                                seat
                              )
                                ? 'bg-cyan-500 text-black'
                                : 'bg-slate-800'
                            }`}
                          >
                            {seat}
                          </button>

                        )

                      ))}

                    </div>

                  ))}

                </div>

              </div>

              <div className="text-center mt-10">

                <button
                  onClick={() => setStep(3)}
                  className="bg-cyan-500 text-black px-10 py-4 rounded-2xl"
                >
                  Continue
                </button>

              </div>

            </div>

          )}

          {step === 3 && (

            <div className="max-w-xl mx-auto">

              <h2 className="text-4xl font-bold text-center mb-10">
                Passenger Details
              </h2>

              <div className="space-y-6">

                {selectedSeats.map(
                  (seat, index) => (

                    <input
                      key={index}
                      type="text"
                      placeholder={`Passenger ${index + 1} Name`}
                      onChange={(e) =>
                        handlePassengerName(
                          index,
                          e.target.value
                        )
                      }
                      className="w-full p-4 rounded-2xl bg-slate-800"
                    />

                  )
                )}

              </div>

              <p className="text-2xl text-center mt-10 mb-8">
                Total Price:
                {' '}
                ₹ {totalPrice}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">

                <button
                  onClick={() =>
                    setPaymentMethod('upi')
                  }
                  className={`p-4 rounded-2xl ${
                    paymentMethod === 'upi'
                      ? 'bg-cyan-500 text-black'
                      : 'bg-slate-800'
                  }`}
                >
                  UPI Payment
                </button>

                <button
                  onClick={() =>
                    setPaymentMethod('card')
                  }
                  className={`p-4 rounded-2xl ${
                    paymentMethod === 'card'
                      ? 'bg-cyan-500 text-black'
                      : 'bg-slate-800'
                  }`}
                >
                  Card Payment
                </button>

              </div>

              {paymentMethod === 'upi' && (

                <div className="flex justify-center mb-8">

                  <QRCodeCanvas
                    value="upi://pay?pa=skyboard@upi"
                    size={240}
                  />

                </div>

              )}

              {paymentMethod === 'card' && (

                <div className="space-y-4 mb-8">

                  <input
                    type="text"
                    placeholder="Card Number"
                    className="w-full p-4 rounded-2xl bg-slate-800"
                  />

                  <div className="grid grid-cols-2 gap-4">

                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full p-4 rounded-2xl bg-slate-800"
                    />

                    <input
                      type="password"
                      placeholder="CVV"
                      className="w-full p-4 rounded-2xl bg-slate-800"
                    />

                  </div>

                </div>

              )}

              {!paymentStarted && paymentMethod && (

                <button
                  onClick={startPayment}
                  className="w-full bg-cyan-500 text-black py-4 rounded-2xl font-semibold"
                >
                  Pay & Confirm Ticket
                </button>

              )}

              {paymentStarted && !paymentSuccess && (

                <div className="text-center mt-10">

                  <p className="text-2xl mb-4">
                    Processing Payment...
                  </p>

                  <p className="text-cyan-400">
                    Timer:
                    {' '}
                    {timer}s
                  </p>

                </div>

              )}

              {paymentSuccess && bookingData && (

                <div className="mt-10 bg-green-500 text-black rounded-3xl p-8 text-center">

                  <h2 className="text-4xl font-bold mb-5">
                    Ticket Confirmed
                  </h2>

                  <p className="mb-3">
                    Unique ID:
                    {' '}
                    {bookingData.bookingId}
                  </p>

                  <button
                    onClick={() =>
                      navigate('/boarding')
                    }
                    className="mt-6 bg-black text-white px-10 py-4 rounded-2xl"
                  >
                    View Boarding Pass
                  </button>

                </div>

              )}

            </div>

          )}

        </div>

      </div>

    </div>
  )
}
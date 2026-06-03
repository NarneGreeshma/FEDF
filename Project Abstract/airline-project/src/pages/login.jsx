import Navbar from '../components/Navbar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {

  const navigate = useNavigate()

  const [bookingId, setBookingId] =
    useState('')

  const [message, setMessage] =
    useState('')

  const verifyBooking = () => {

    const storedBooking = JSON.parse(
      localStorage.getItem('bookingData')
    )

    if (!storedBooking) {

      setMessage(
        'No Booking Data Found'
      )

      return
    }

    const enteredId =
      bookingId.trim().toUpperCase()

    const storedId =
      storedBooking.bookingId
        .trim()
        .toUpperCase()

    if (enteredId === storedId) {

      setMessage(

        `WELCOME BACK
BOOKING VERIFIED SUCCESSFULLY`

      )

      setTimeout(() => {

        navigate('/meals')

      }, 2000)
    }

    else {

      setMessage(
        'INVALID BOOKING ID'
      )
    }
  }

  const downloadBoardingPass = () => {

    navigate('/boarding')
  }

  return (

    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <div className="flex justify-center items-center py-20 px-6">

        <div className="bg-slate-900 rounded-3xl p-10 w-full max-w-lg">

          <h1 className="text-5xl font-bold text-center mb-10">
            Existing Passenger
          </h1>

          <input
            type="text"
            placeholder="Enter Unique Booking ID"
            value={bookingId}
            onChange={(e) =>
              setBookingId(e.target.value)
            }
            className="w-full p-4 rounded-2xl bg-slate-800 mb-6"
          />

          <button
            onClick={verifyBooking}
            className="w-full bg-cyan-500 text-black py-4 rounded-2xl font-semibold"
          >
            Verify Booking
          </button>

          <button
            onClick={downloadBoardingPass}
            className="w-full mt-5 bg-white text-black py-4 rounded-2xl font-semibold"
          >
            Download Boarding Pass
          </button>

          {message && (

            <div className="mt-8 bg-green-500 text-black rounded-2xl p-6 text-center font-bold whitespace-pre-line">

              {message}

            </div>

          )}

        </div>

      </div>

    </div>
  )
}
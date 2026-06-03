import Navbar from '../components/Navbar'
import { useState, useRef } from 'react'
import { QRCodeCanvas } from 'qrcode.react'
import html2canvas from 'html2canvas'

export default function BoardingPass() {

  const bookingData =
    JSON.parse(
      localStorage.getItem('bookingData')
    ) || {
      bookingId: 'SKY123456',
      flight: 'AI203',
      passengers: ['Greeshma'],
      seats: ['A1'],
      meals: ['Veg Meal'],
    }

  const [currentIndex, setCurrentIndex] =
    useState(0)

  const boardingRef = useRef(null)

  const passenger =
    bookingData?.passengers?.[currentIndex] ||
    'Passenger'

  const seat =
    bookingData?.seats?.[currentIndex] ||
    'A1'

  const meal =
    bookingData?.meals?.[currentIndex] ||
    'Standard Meal'

  const downloadBoardingPass =
    async () => {

      try {

        const canvas =
          await html2canvas(
            boardingRef.current,
            {
              scale: 2,
              useCORS: true,
            }
          )

        const image =
          canvas.toDataURL(
            'image/png'
          )

        const link =
          document.createElement('a')

        link.href = image

        link.download =
          `${passenger}_BoardingPass.png`

        document.body.appendChild(link)

        link.click()

        document.body.removeChild(link)

      }

      catch (error) {

        console.log(error)

        alert(
          'Failed to download boarding pass'
        )
      }
    }

  return (

    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <div className="px-6 lg:px-20 py-20">

        <h1 className="text-5xl font-bold text-center mb-12">
          Digital Boarding Pass
        </h1>

        <div
          ref={boardingRef}
          className="max-w-4xl mx-auto bg-slate-900 border border-cyan-500 rounded-3xl p-10"
        >

          <div className="flex flex-col lg:flex-row justify-between items-center gap-10">

            <div>

              <h2 className="text-4xl font-bold text-cyan-400 mb-6">
                SkyBoard Airlines
              </h2>

              <div className="space-y-4 text-xl">

                <p>
                  <strong>
                    Passenger:
                  </strong>{' '}
                  {passenger}
                </p>

                <p>
                  <strong>
                    Flight:
                  </strong>{' '}
                  {bookingData.flight}
                </p>

                <p>
                  <strong>
                    Seat:
                  </strong>{' '}
                  {seat}
                </p>

                <p>
                  <strong>
                    Meal:
                  </strong>{' '}
                  {meal}
                </p>

                <p>
                  <strong>
                    Gate:
                  </strong>{' '}
                  B12
                </p>

                <p>
                  <strong>
                    Booking ID:
                  </strong>{' '}
                  {bookingData.bookingId}
                </p>

              </div>

            </div>

            <div className="text-center">

              <QRCodeCanvas
                value={`
Passenger:${passenger}
Flight:${bookingData.flight}
Seat:${seat}
BookingID:${bookingData.bookingId}
`}
                size={220}
              />

              <p className="mt-4 text-slate-400">
                Scan for verification
              </p>

            </div>

          </div>

        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-10">

          {currentIndex > 0 && (

            <button
              onClick={() =>
                setCurrentIndex(
                  currentIndex - 1
                )
              }
              className="bg-white text-black px-8 py-4 rounded-2xl"
            >
              Previous
            </button>

          )}

          {currentIndex <
            bookingData.passengers.length - 1 && (

            <button
              onClick={() =>
                setCurrentIndex(
                  currentIndex + 1
                )
              }
              className="bg-cyan-500 text-black px-8 py-4 rounded-2xl"
            >
              Next Boarding Pass
            </button>

          )}

          <button
            onClick={downloadBoardingPass}
            className="bg-green-500 text-black px-8 py-4 rounded-2xl font-semibold"
          >
            Download Boarding Pass
          </button>

        </div>

      </div>

    </div>

  )
}
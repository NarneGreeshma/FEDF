import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { QRCodeCanvas } from 'qrcode.react'

export default function Baggage({
  passenger,
  setPassenger,
}) {

  const navigate = useNavigate()

  const [selectedBag, setSelectedBag] = useState('')
  const [showPayment, setShowPayment] = useState(false)

  const [paymentMethod, setPaymentMethod] =
    useState('')

  const [processing, setProcessing] =
    useState(false)

  const [paymentSuccess, setPaymentSuccess] =
    useState(false)

  const [timer, setTimer] = useState(60)

  const [cardNumber, setCardNumber] =
    useState('')

  const baggageOptions = [
    {
      weight: 'None',
      price: 0,
    },
    {
      weight: '15 KG',
      price: 1200,
    },
    {
      weight: '20 KG',
      price: 1800,
    },
    {
      weight: '25 KG',
      price: 2500,
    },
  ]

  useEffect(() => {

    let interval

    if (processing && timer > 0) {

      interval = setInterval(() => {

        setTimer((prev) => prev - 1)

      }, 1000)
    }

    return () => clearInterval(interval)

  }, [processing, timer])

  const handlePayment = () => {

    setProcessing(true)

    setTimeout(() => {

      setProcessing(false)

      setPaymentSuccess(true)

      setPassenger({
        ...passenger,
        baggage: selectedBag.weight,
        payment: selectedBag.price,
      })

    }, 5000)
  }

  const goToBoarding = () => {

    navigate('/boarding')
  }

  return (

    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <div className="px-6 lg:px-20 py-20">

        <h1 className="text-5xl font-bold text-center mb-4">
          Extra Baggage
        </h1>

        <p className="text-center text-slate-400 mb-12">
          Select baggage option
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {baggageOptions.map((bag, index) => (

            <div
              key={index}
              onClick={() => {

                setSelectedBag(bag)

                if (bag.price > 0) {
                  setShowPayment(true)
                }

                else {

                  setPassenger({
                    ...passenger,
                    baggage: 'None',
                    payment: 0,
                  })

                  navigate('/boarding')
                }

              }}
              className={`cursor-pointer rounded-3xl p-8 border transition ${
                selectedBag.weight === bag.weight
                  ? 'bg-cyan-500 text-black border-cyan-400'
                  : 'bg-slate-900 border-slate-800 hover:border-cyan-400'
              }`}
            >

              <h2 className="text-3xl font-bold mb-3">
                {bag.weight}
              </h2>

              <p className="text-lg">
                ₹ {bag.price}
              </p>

            </div>

          ))}

        </div>

        {showPayment && !paymentSuccess && (

          <div className="max-w-3xl mx-auto mt-14 bg-slate-900 border border-cyan-500 rounded-3xl p-10">

            <h2 className="text-3xl font-bold mb-8 text-center text-cyan-400">
              Payment Gateway
            </h2>

            <div className="flex gap-4 justify-center mb-8">

              <button
                onClick={() =>
                  setPaymentMethod('card')
                }
                className={`px-6 py-3 rounded-2xl ${
                  paymentMethod === 'card'
                    ? 'bg-cyan-500 text-black'
                    : 'bg-slate-800'
                }`}
              >
                Credit / Debit Card
              </button>

              <button
                onClick={() =>
                  setPaymentMethod('upi')
                }
                className={`px-6 py-3 rounded-2xl ${
                  paymentMethod === 'upi'
                    ? 'bg-cyan-500 text-black'
                    : 'bg-slate-800'
                }`}
              >
                UPI Payment
              </button>

            </div>

            {paymentMethod === 'card' && (

              <div className="space-y-6">

                <input
                  type="text"
                  placeholder="Card Holder Name"
                  className="w-full p-4 rounded-2xl bg-slate-800 border border-slate-700"
                />

                <input
                  type="text"
                  placeholder="Card Number"
                  value={cardNumber}
                  onChange={(e) =>
                    setCardNumber(e.target.value)
                  }
                  className="w-full p-4 rounded-2xl bg-slate-800 border border-slate-700"
                />

                <div className="grid grid-cols-2 gap-4">

                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full p-4 rounded-2xl bg-slate-800 border border-slate-700"
                  />

                  <input
                    type="password"
                    placeholder="CVV"
                    className="w-full p-4 rounded-2xl bg-slate-800 border border-slate-700"
                  />

                </div>

              </div>

            )}

            {paymentMethod === 'upi' && (

              <div className="flex flex-col items-center">

                <QRCodeCanvas
                  value="upi://pay?pa=skyboard@upi"
                  size={220}
                  bgColor="#ffffff"
                  fgColor="#000000"
                />

                <p className="mt-5 text-slate-400">
                  Scan QR using any UPI app
                </p>

              </div>

            )}

            {!processing && (

              <button
                onClick={handlePayment}
                className="w-full mt-10 bg-cyan-500 hover:bg-cyan-400 text-black py-4 rounded-2xl font-semibold"
              >
                Pay ₹ {selectedBag.price}
              </button>

            )}

            {processing && (

              <div className="mt-10 text-center">

                <div className="w-full bg-slate-800 rounded-full h-5 overflow-hidden">

                  <div
                    className="bg-cyan-500 h-5"
                    style={{
                      width: `${(60 - timer) * 1.67}%`,
                    }}
                  ></div>

                </div>

                <p className="mt-5 text-lg">
                  Processing Payment...
                </p>

                <p className="text-cyan-400 mt-2">
                  Time Remaining: {timer}s
                </p>

              </div>

            )}

          </div>

        )}

        {paymentSuccess && (

          <div className="max-w-3xl mx-auto mt-14 bg-slate-900 border border-green-500 rounded-3xl p-10 text-center">

            <img
              src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
              alt="success"
              className="w-28 mx-auto mb-6"
            />

            <h2 className="text-4xl font-bold text-green-400 mb-6">
              Payment Confirmed
            </h2>

            <div className="bg-slate-800 rounded-3xl p-8 text-left space-y-4">

              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                Payment Receipt
              </h3>

              <p>
                <strong>Passenger:</strong>
                {' '}
                {passenger.name}
              </p>

              <p>
                <strong>Baggage:</strong>
                {' '}
                {selectedBag.weight}
              </p>

              <p>
                <strong>Amount Paid:</strong>
                {' '}
                ₹ {selectedBag.price}
              </p>

              <p>
                <strong>Payment Method:</strong>
                {' '}
                {paymentMethod.toUpperCase()}
              </p>

              {paymentMethod === 'card' && (

                <p>
                  <strong>Card:</strong>
                  {' '}
                  **** **** ****
                  {' '}
                  {cardNumber.slice(-4)}
                </p>

              )}

              <p>
                <strong>Status:</strong>
                {' '}
                Successful
              </p>

            </div>

            <button
              onClick={goToBoarding}
              className="mt-10 bg-cyan-500 hover:bg-cyan-400 text-black px-10 py-4 rounded-2xl font-semibold"
            >
              Continue to Boarding Pass
            </button>

          </div>

        )}

      </div>

    </div>
  )
}
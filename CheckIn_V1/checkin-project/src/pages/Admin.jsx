import Navbar from '../components/Navbar'
import { useState } from 'react'
import * as XLSX from 'xlsx'
import { saveAs } from 'file-saver'

export default function Admin() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const passengers = [
    {
      name: 'Rahul Sharma',
      flight: 'AI203',
      seat: 'A1',
      meal: 'Vegetarian Meal',
      baggage: '20 KG',
    },
    {
      name: 'Sneha Reddy',
      flight: 'IN782',
      seat: 'B2',
      meal: 'Kids Meal',
      baggage: '15 KG',
    },
    {
      name: 'Arjun Mehta',
      flight: 'AI203',
      seat: 'A3',
      meal: 'Non-Vegetarian Meal',
      baggage: '25 KG',
    },
  ]

  const handleLogin = () => {

    if (
      username === 'admin' &&
      password === '1234'
    ) {
      setLoggedIn(true)
    }

    else {
      alert('Invalid Credentials')
    }
  }

  const downloadExcel = () => {

    const worksheet =
      XLSX.utils.json_to_sheet(passengers)

    const workbook =
      XLSX.utils.book_new()

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      'Passengers'
    )

    const excelBuffer = XLSX.write(
      workbook,
      {
        bookType: 'xlsx',
        type: 'array',
      }
    )

    const fileData = new Blob(
      [excelBuffer],
      {
        type:
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8',
      }
    )

    saveAs(
      fileData,
      'Passenger_List.xlsx'
    )
  }

  if (!loggedIn) {

    return (

      <div className="min-h-screen bg-slate-950 text-white">

        <Navbar />

        <div className="flex justify-center items-center py-24 px-6">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 w-full max-w-md">

            <h1 className="text-4xl font-bold text-center mb-10">
              Admin Login
            </h1>

            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
              className="w-full p-4 rounded-2xl bg-slate-800 border border-slate-700 mb-6"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full p-4 rounded-2xl bg-slate-800 border border-slate-700 mb-8"
            />

            <button
              onClick={handleLogin}
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-black py-4 rounded-2xl font-semibold"
            >
              Login
            </button>

            <p className="text-slate-400 text-sm mt-6 text-center">
              Demo Login → admin / 1234
            </p>

          </div>

        </div>

      </div>
    )
  }

  return (

    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <div className="px-6 lg:px-20 py-20">

        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12">

          <h1 className="text-5xl font-bold">
            Admin Dashboard
          </h1>

          <button
            onClick={downloadExcel}
            className="bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 rounded-2xl font-semibold"
          >
            Download Passenger Excel
          </button>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">

          <div className="grid grid-cols-5 bg-cyan-500 text-black font-bold p-5">

            <p>Name</p>
            <p>Flight</p>
            <p>Seat</p>
            <p>Meal</p>
            <p>Baggage</p>

          </div>

          {passengers.map((passenger, index) => (

            <div
              key={index}
              className="grid grid-cols-5 p-5 border-t border-slate-800"
            >

              <p>{passenger.name}</p>
              <p>{passenger.flight}</p>
              <p>{passenger.seat}</p>
              <p>{passenger.meal}</p>
              <p>{passenger.baggage}</p>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}
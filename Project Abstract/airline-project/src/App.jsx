import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Home from './pages/Home'
import Login from './pages/Login'
import TicketBooking from './pages/TicketBooking'
import Meals from './pages/Meals'
import SeatSelection from './pages/SeatSelection'
import Baggage from './pages/Baggage'
import BoardingPass from './pages/BoardingPass'
import Features from './pages/Features'
import Contact from './pages/Contact'
import Admin from './pages/Admin'

export default function App() {

  const [passenger, setPassenger] =
    useState({

      name: '',
      flight: '',
      seat: '',
      meal: '',
      baggage: '',
      bookingId: '',

    })

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/ticket-booking"
          element={
            <TicketBooking
              passenger={passenger}
              setPassenger={setPassenger}
            />
          }
        />

        <Route
          path="/login"
          element={
            <Login
              passenger={passenger}
            />
          }
        />

        <Route
          path="/meals"
          element={
            <Meals
              passenger={passenger}
              setPassenger={setPassenger}
            />
          }
        />

        <Route
          path="/seat"
          element={
            <SeatSelection
              passenger={passenger}
              setPassenger={setPassenger}
            />
          }
        />

        <Route
          path="/baggage"
          element={
            <Baggage
              passenger={passenger}
              setPassenger={setPassenger}
            />
          }
        />

        <Route
          path="/boarding"
          element={
            <BoardingPass
              passenger={passenger}
            />
          }
        />

        <Route
          path="/features"
          element={<Features />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/admin"
          element={<Admin />}
        />

      </Routes>

    </BrowserRouter>
  )
}
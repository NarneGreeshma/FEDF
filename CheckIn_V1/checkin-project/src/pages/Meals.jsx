import Navbar from '../components/Navbar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Meals() {

  const navigate = useNavigate()

  const bookingData =
    JSON.parse(
      localStorage.getItem('bookingData')
    ) || {
      passengers: ['Greeshma']
    }

  const [currentPassenger, setCurrentPassenger] =
    useState(0)

  const [selectedMeals, setSelectedMeals] =
    useState([])

  const meals = [

    'Vegetarian Meal',

    'Non-Vegetarian Meal',

    'Vegan Meal',

    'Kids Meal',

    'Low Calorie Meal',

  ]

  const selectMeal = (meal) => {

    const updatedMeals = [
      ...selectedMeals,
    ]

    updatedMeals[currentPassenger] = meal

    setSelectedMeals(updatedMeals)

    if (
      currentPassenger <
      bookingData.passengers.length - 1
    ) {

      setCurrentPassenger(
        currentPassenger + 1
      )
    }

    else {

      const updatedBooking = {

        ...bookingData,

        meals: updatedMeals,

      }

      localStorage.setItem(
        'bookingData',
        JSON.stringify(updatedBooking)
      )

      navigate('/baggage')
    }
  }

  return (

    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <div className="px-6 lg:px-20 py-20">

        <div className="max-w-5xl mx-auto">

          <h1 className="text-5xl font-bold text-center mb-5">
            Meal Preferences
          </h1>

          <p className="text-center text-slate-400 mb-14 text-xl">

            Select meal for{' '}

            <span className="text-cyan-400 font-bold">

              {
                bookingData?.passengers?.[
                  currentPassenger
                ] || 'Passenger'
              }

            </span>

          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {meals.map((meal, index) => (

              <div
                key={index}
                onClick={() =>
                  selectMeal(meal)
                }
                className="cursor-pointer bg-slate-900 hover:border-cyan-400 border border-slate-700 rounded-3xl p-8 transition"
              >

                <h2 className="text-2xl font-bold text-cyan-400 mb-4">
                  {meal}
                </h2>

                <p className="text-slate-400">
                  Premium airline meal option
                </p>

              </div>

            ))}

          </div>

          <div className="text-center mt-14">

            <p className="text-xl text-slate-400">

              Passenger{' '}
              {currentPassenger + 1}
              {' '}of{' '}
              {
                bookingData?.passengers?.length || 1
              }

            </p>

          </div>

        </div>

      </div>

    </div>
  )
}
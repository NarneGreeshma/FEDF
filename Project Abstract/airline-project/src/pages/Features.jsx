import Navbar from '../components/Navbar'

export default function Features() {
  const features = [
    'Passenger Verification',
    'Seat Selection',
    'Meal Preferences',
    'QR Boarding Pass',
    'Baggage Add-ons',
    'Notifications',
    'Multi-Passenger Support',
    'Admin Dashboard',
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="px-6 lg:px-20 py-20">
        <h1 className="text-5xl font-bold mb-12 text-center">
          Platform Features
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6"
            >
              <div className="w-14 h-14 bg-cyan-500/20 text-cyan-400 rounded-2xl flex items-center justify-center font-bold mb-5">
                {index + 1}
              </div>

              <h2 className="text-xl font-bold mb-3">{item}</h2>

              <p className="text-slate-400 leading-7 text-sm">
                Modern airline service feature for improved passenger
                experience.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
import Navbar from '../components/Navbar'

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="px-6 lg:px-20 py-20">
        <h1 className="text-5xl font-bold mb-10 text-center">
          Contact Us
        </h1>

        <div className="max-w-3xl mx-auto bg-slate-900 p-8 rounded-3xl border border-slate-800">
          <div className="mb-6">
            <label className="block mb-2">Name</label>

            <input
              type="text"
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2">Email</label>

            <input
              type="email"
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2">Message</label>

            <textarea
              rows="5"
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700"
            ></textarea>
          </div>

          <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-black py-4 rounded-2xl font-semibold">
            Send Message
          </button>
        </div>
      </div>
    </div>
  )
}
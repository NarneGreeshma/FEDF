import Navbar from "../components/Navbar";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import plane from "../assets/plane.png";

export default function Signup() {

  const navigate =
    useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [message, setMessage] =
    useState("");

  const handleSignup = () => {

    const userData = {
      name,
      email,
      password,
    };

    localStorage.setItem(
      "userAccount",
      JSON.stringify(userData)
    );

    setMessage(
      "Account Created Successfully"
    );

    setTimeout(() => {

      setMessage("");

      navigate("/login");

    }, 10000);
  };

  return (

    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage:
"url('https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?q=80&w=2070&auto=format&fit=crop')",
      }}
    >

      <div className="min-h-screen bg-black/70">

        <Navbar />

        <div className="flex justify-center items-center py-24 px-6">

          <div className="bg-slate-900/80 border border-cyan-500 rounded-3xl p-12 w-full max-w-lg backdrop-blur-md">

            <h1 className="text-5xl font-bold text-center mb-10">

              Create Account

            </h1>

            <div className="space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                className="w-full p-5 rounded-2xl bg-slate-800 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="w-full p-5 rounded-2xl bg-slate-800 outline-none"
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                className="w-full p-5 rounded-2xl bg-slate-800 outline-none"
              />

              <button
                onClick={handleSignup}
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-black py-5 rounded-2xl text-xl font-bold transition"
              >

                Register

              </button>

            </div>

          </div>

        </div>

        {message && (

          <div className="plane-popup-wrapper">

            <img
              src={plane}
              alt="plane"
              className="plane-image"
            />

            <button
              className="close-btn"
              onClick={() =>
                setMessage("")
              }
            >
              ×
            </button>

            <div className="plane-text">

              <h1>

                {message}

              </h1>

              <p>

                Welcome {name}

              </p>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}
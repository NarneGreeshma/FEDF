import Navbar from "../components/Navbar";
import { useState } from "react";

import plane from "../assets/plane.png";

export default function Login() {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [message, setMessage] =
    useState("");

  const handleLogin = () => {

    const savedUser =
      JSON.parse(
        localStorage.getItem(
          "userAccount"
        )
      );

    if (!savedUser) {

      setMessage(
        "No Account Found"
      );

      return;
    }

    if (
      email === savedUser.email &&
      password === savedUser.password
    ) {

      setMessage(
        "Login Successful"
      );
    }

    else {

      setMessage(
        "Invalid Email or Password"
      );
    }
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

              Passenger Login

            </h1>

            <div className="space-y-6">

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
                onClick={handleLogin}
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-black py-5 rounded-2xl text-xl font-bold transition"
              >

                Login

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

                Welcome {

                  JSON.parse(
                    localStorage.getItem(
                      "userAccount"
                    )
                  )?.name

                }

              </p>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

const IncentivesProviderSignup = () => {
  
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [pageState, setPageState] = useState("form"); // form, loading, success

  const router = useRouter();

  const handleRegister = (e: any) => {
    e.preventDefault();
    console.log({
      username,
      email,
      password,
    });
    setPageState("loading");
    
    // Show loading state for 2 seconds then success state
    setTimeout(() => {
      setPageState("success");
    }, 2000);
  };

  

  return (
    <div className="flex max-w-md min-h-screen bg-gray-100 flex-col text-black">
      <header className="flex items-center justify-between px-4 py-4 bg-white">
        <Image src="/images/logo.png" alt="Logo" width={80} height={50} />
        <button className="text-3xl">☰</button>
      </header>

      <div className="flex justify-center mt-1 pt-3 pb-1 bg-white">
        <span>
            <h1 className="text-3xl font-bold">Create Account</h1>
        </span>
      </div>
      <p className="text-lg bg-white flex justify-center text-black-500 mb-6 pt-1 pb-3">Signup to get started</p>

    <div>

      <div className="flex justify-center p-4">
        <img
          src="/images/incentives/incentives-providers-signup.png"
          alt="Registration illustration"
          className="max-w-xs h-40 rounded-2xl mx-5"
        />
      </div>

      <div className="m-2 bg-white">

        <form onSubmit={handleRegister} className="p-4 space-y-6">
              {/* Username */}
              <div className="mb-4">
                <label htmlFor="username" className="block text-md font-medium text-black-500 mb-1">
                </label>
                <input
                  id="username"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full rounded-lg bg-white border border-gray-400 p-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              {/* Email Address */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-md font-medium text-black-500 mb-1">
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg bg-white border border-gray-400 p-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              {/* Password */}
              <div className="mb-4">
                <label htmlFor="password" className="block text-md font-medium text-black-500 mb-1">
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg bg-white border border-gray-400 p-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="p-4 mt-2 mb-4">
                <button
                type="submit"
                className="mt-4 w-full rounded-3xl bg-blue-600 px-4 py-3 font-semibold text-lg text-white hover:bg-blue-700 cursor-pointer focus:outline-none"
                onClick={handleRegister}
                >
                    Register
                </button>
              </div>
               
        </form>

        <div className="flex items-center w-full p-2" role="separator" aria-orientation="horizontal">
            <div className="flex-1 h-px bg-gray-300" aria-hidden />
            <span className="text-s mx-2 text-black-500">OR</span>
            <div className="flex-1 h-px bg-gray-300" aria-hidden />
        </div> 

        <div>
            <div className="p-4 mt-2">
                <button
                type="button"
                className="flex w-full p-4 space-x-2 border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    <img
                    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                    alt="Google logo"
                    className="w-6 h-6"
                    />
                    <span className="text-md font-medium text-gray-700">Signup with Google</span>
                </button>
            </div>

            <div className="p-4 mb-4">
                <button
                type="button"
                className="flex w-full p-4 space-x-2 border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    <div className="flex items-center justify-center mr-2 bg-white">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#4e80c0ff"
                        className="w-7 h-7"
                        style={{width: "30px", height: "30px", borderRadius: "50%"}}
                        >
                        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0
                        23.406.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413
                        c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24
                        l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.31h3.587l-.467
                        3.622h-3.12V24h6.116C23.406 24 24 23.406 24
                        22.675V1.325C24 .593 23.406 0 22.675 0z"/>
                        </svg>
                    </div>

                    <span className="text-md font-medium text-gray-700">Signup with Facebook</span>
                </button>
            </div>
        </div>

      </div>

      
      </div>
    </div>
  );
};

export default IncentivesProviderSignup;

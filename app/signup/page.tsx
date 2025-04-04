// app/signup/page.tsx (App Router)
"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function SignUpPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Handle sign-up logic here (e.g., call API)
    console.log({ username, email, password });
  };

  return (
    <div className="flex max-w-md min-h-screen flex-col bg-gray-50">
      {/* Top Nav (Mobile menu icon, brand, etc.) */}
      <header className="flex items-center justify-between px-4 py-4 shadow-sm bg-white">
        <Image 
            src="/images/logo.png"
            alt="Logo"
            width={80}
            height={50}
        />
        <button className="block text-gray-600 md:hidden" aria-label="Menu">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M4 5h16M4 12h16M4 19h16" />
          </svg>
        </button>
      </header>

      {/* Main content container */}
      <main className="flex flex-1 flex-col items-center justify-center">
        {/* Card container */}
        <div className="w-full max-w-md rounded-lg bg-white shadow-md text-center">
          <h2 className="mb-2 text-2xl font-semibold text-gray-800">
            Create Account
          </h2>
          <p className="mb-6 text-sm text-gray-500">Signup to get started</p>

          <div className="flex-row justify-center bg-gray-100 p-4">
            <Image
              src="/images/signup_page_logo.png"
              alt="Signup Page Logo"
              width={170}
              height={100}
              className="text-center mb-4 item-center ml-auto mr-auto"
            />

            <div className="bg-white rounded-lg shadow-md mb-4 pb-4">
              <form onSubmit={handleSubmit} className="space-y-4 p-8">
                <div>
                  <input
                    id="username"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="mt-1 w-full text-black rounded border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1 w-full text-black rounded border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="mt-1 w-full text-black rounded border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 w-full rounded-2xl bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 focus:outline-none"
                >
                  Register
                </button>
              </form>

              {/* Divider / or */}
              <div className="my-6 flex items-center">
                <hr className="w-full border-gray-300" />
                <span className="mx-2 text-gray-400">OR</span>
                <hr className="w-full border-gray-300" />
              </div>

              {/* Social Logins */}
              <div className="flex flex-col space-y-3 p-8">
                <button className="flex items-center justify-center rounded border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 48 48">
                    <path
                      fill="#EA4335"
                      d="M24 9.5c3.94 0 7.09 1.62 9.26 3l6.86-6.86C35.31 2.76 29.86.5 24 .5 14.94.5 7.17 5.73 3.24 13.04l7.91 6.13C13.14 12.23 18.22 9.5 24 9.5z"
                    />
                    <path
                      fill="#4285F4"
                      d="M46.145 24.5c0-1.34-.12-2.63-.34-3.89H24v7.38h12.44c-.54 2.8-2.15 5.16-4.59 6.77l7.26 5.63c4.25-3.93 6.7-9.72 6.7-15.89z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M11.15 28.17a8.46 8.46 0 01-.45-2.67c0-.93.16-1.83.44-2.67l-7.91-6.13C2.27 19.41 1.5 21.64 1.5 24c0 2.36.77 4.59 2.23 6.63l7.42-5.54z"
                    />
                    <path
                      fill="#34A853"
                      d="M24 46.5c6.22 0 11.45-2.07 15.27-5.63l-7.26-5.63c-2.03 1.37-4.63 2.17-8.01 2.17-5.78 0-10.66-3.73-12.41-8.89l-7.91 6.13C6.82 42.23 14.59 46.5 24 46.5z"
                    />
                    <path fill="none" d="M0 0h48v48H0z" />
                  </svg>
                  Sign up with Google
                </button>

                <button className="flex items-center justify-center rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.525 0h-21.05C.662 0 0 .662 0 1.475v21.05C0 23.338.662 24 1.475 24h11.337v-9.294H9.845v-3.622h2.967V8.414c0-2.937 1.793-4.537 4.415-4.537 1.256 0 2.336.093 2.647.135v3.069h-1.818c-1.428 0-1.703.678-1.703 1.674v2.192h3.406l-.444 3.622h-2.962V24h5.814C23.338 24 24 23.338 24 22.525v-21.05C24 .662 23.338 0 22.525 0"
                    />
                  </svg>
                  Sign up with Facebook
                </button>
              </div>

              {/* Footer: login link */}
              <p className="mt-6 text-center text-sm text-gray-500">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SetPreferencePage() {
  const [value, setValue] = useState("");
    return (
        <div className="flex max-w-md min-h-screen flex-col bg-gray-50">
          <header className="shadow-sm bg-white">
            <div className="flex items-center justify-between px-4 py-4">
              <Image 
                src="/images/logo.png"
                alt="Dreamline Logo"
                width={80}
                height={50}
              />
              {/* <button className="block text-gray-600 md:hidden" aria-label="Menu">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M4 5h16M4 12h16M4 19h16" />
                </svg>
              </button> */}
              <button className="text-3xl">☰</button>
            </div>
            <div className="flex items-center px-4 py-2 bg-white">
              <Link href="/signup" className="mr-1 ml-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
              </Link>
              <h1 className="flex-1 text-xl font-bold text-center text-black">Set Preference</h1>
            </div>
          </header>
            <main className="flex flex-1 flex-col items-center text-black">
            <div className="w-full p-4">
            {/* Form */}
            <form className="space-y-6">
              {/* Types of project */}
              <div className="w-full mt-15">
                <label className="block mb-2 font-medium">
                  Set types of project to bid on
                </label>
                <div className="relative">
                  <select value={value} onChange={(e) => setValue(e.target.value)}
                        className={`w-full border rounded-lg p-3 appearance-none pr-10 transition-colors
                        ${value === "" ? "text-gray-500" : "text-gray-700"}`}
                  >
                    <option>Types of projects</option>
                    <option>Fixed price contracts</option>
                    <option>Time and material agreement</option>
                  </select>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-lg font-bold text-gray-700">
                  ▼
                  </span>
                </div>
              </div>

              {/* Mode of communication */}
              <div>
                <label className="block mb-2 font-medium">
                  Mode of communication
                </label>
                <div className="relative">
                    <select value={value} onChange={(e) => setValue(e.target.value)}
                          className={`w-full border rounded-lg p-3 appearance-none pr-10 transition-colors
                          ${value === "" ? "text-gray-500" : "text-gray-700"}`}
                    >
                    <option>Select</option>
                    <option>Email</option>
                    <option>Phone call</option>
                  </select>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-lg font-bold text-gray-700">
                    ▼
                  </span>
                </div>
              </div>

              {/* Add team members */}
              <div>
                <label className="block mb-2 font-medium">Add teams members</label>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Invite by Email.."
                    className="flex-1 border rounded-lg p-3"
                  />
                  <button
                    type="button"
                    className="bg-gray-200 text-blue-600 font-bold px-4 rounded-lg"
                  >
                    Invite
                  </button>
                </div>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-full mt-15 font-semibold"
              >
                Submit
              </button>
            </form>
        </div>
          </main>
        </div>
    );
}
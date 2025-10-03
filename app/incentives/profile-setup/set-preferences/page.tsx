"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";

export default function ProfileSetupSetPreferences() {
  const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
  "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
  "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York",
  "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
  "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
  "West Virginia", "Wisconsin", "Wyoming",
  ];

  const PROPERTIES = [
    "Option 1", "Option 2", "Option 3", "Option 4", 
    "Option 5",
  ];

  const COMMUNICATION = [
    "Email", "Text", "Call",
  ];

  const [properties, setProperties] = useState("");
  const [communication, setCommunication] = useState("");
  const [teamMemberInvite, setTeamMemberInvite] = useState("");
  const [state, setState] = useState("");
  
  
  const [pageState, setPageState] = useState("form"); // form, loading, success

  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log({
      properties,
      communication,
      teamMemberInvite,
      state,
    });
    setPageState("loading");
    
    // Show loading state for 2 seconds then success state
    setTimeout(() => {
      setPageState("success");
    }, 2000);
  };

  return (
    <div className="flex max-w-md min-h-screen flex-col">
      <header className="flex items-center justify-between px-4 py-4 shadow-sm bg-white">
        <Image 
        src="/images/logo.png"
        alt="Dreamline Logo"
        width={80}
        height={50}
        />
        <button className="text-3xl">☰</button>
      </header>

      <main className="flex flex-1 flex-col text-black">
        {pageState === "form" && (
          <div className="w-full p-4 bg-gray-50">
            <div className="flex mb-4">
              <Link href="/signup" className="mr-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <span className="ml-18">
                <h1 className="text-xl font-bold">Set Your Preference</h1>
              </span>
              
            </div>
            <p className="text-md flex justify-center text-gray-600 mb-6">Set your preference for personalized experience</p>
            <div className="bg-gray-50">
            <form onSubmit={handleSubmit} className="p-4 space-y-6">

              {/* Types of Properties */}
              <div className="mb-4">
                
                <label htmlFor="properties" className="block text-md text-black-500 mb-1">
                    Set types of eligible properties to review
                </label>
                      <select
                        id="properties"
                        value={properties}
                        onChange={(e) => setProperties(e.target.value)}
                        className="w-full bg-white rounded-lg border border-gray-400 p-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      >
                      <option value="">Types of projects</option>
                      {PROPERTIES.map((properties) => (
                      <option key={properties} value={properties}>
                      {properties}
                      </option>
                      ))}
                      </select>
                    
               </div>


               {/* Mode of Communication */}
              <div className="mb-4">
               
                <label htmlFor="communication" className="block text-md text-black-500 mb-1">
                    Mode of communication
                </label>
                      <select
                        id="communication"
                        value={communication}
                        onChange={(e) => setCommunication(e.target.value)}
                        className="w-full bg-white rounded-lg border border-gray-400 p-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      >
                      <option value="">Select</option>
                      {COMMUNICATION.map((communication) => (
                      <option key={communication} value={communication}>
                      {communication}
                      </option>
                      ))}
                      </select>
              </div>


              {/* Add team members */}

              <div className="mb-4">
                <label className="block text-md font-medium text-black-500 mb-1">
                  Add team members
                </label>
                <div className="space-y-4">
                    
                    <span>
                      <input
                      id="teamMember"
                      type="text"
                      name="teamMember"
                      placeholder="Invite by Email"
                      value={teamMemberInvite}
                      onChange={(e) => setTeamMemberInvite(e.target.value)}
                      className="w-70 bg-white rounded-lg border border-gray-400 p-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    </span>
                    <span>
                        <button className="ml-6 w-20 p-3 rounded-lg bg-blue-100 font-semibold text-blue-500 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Invite</button>
                    </span>
                </div>
              </div>


              {/* State */}
              <div className="mb-4">
                    <label htmlFor="state" className="block text-md text-black-500 mb-1">
                        State
                    </label>
                      <select
                        id="state"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className="w-full bg-white rounded-lg border border-gray-400 p-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      >
                      <option value="">Select state</option>
                      {US_STATES.map((state) => (
                      <option key={state} value={state}>
                      {state}
                      </option>
                      ))}
                      </select>
                </div>


              {/* Buttons */}
              <div className="pt-6">
                {/* Submit Button */}
                <button
                  type="submit"
                  className="mb-4 w-full rounded-full bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>

            </form>
            </div>
          </div>
        )}

        {pageState === "loading" && (
          <div className="flex flex-1 flex-col items-center justify-center p-4">
            <div className="w-full max-w-md rounded-lg bg-white shadow-md p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 relative">
                  <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
                  <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 animate-spin"></div>
                </div>
              </div>
              <h2 className="text-xl font-bold mb-2">
                Almost There! Finalizing Your Profile
              </h2>
              <p className="text-gray-600">
                Setting up your profile, almost done!
              </p>
            </div>
          </div>
        )}

        {pageState === "success" && (
          <div className="flex flex-1 flex-col items-center justify-center p-4">
            <div className="w-full max-w-md rounded-lg bg-white shadow-md p-8 text-center">
              <h2 className="text-xl font-bold mb-6">
                Your profile is set!
              </h2>
              
              <div className="flex justify-center space-x-4">
                {/* <Link
                  href="/contractor/profile-view"
                  className="px-6 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  View
                </Link> */}
                <Link
                  href="/incentives/profile-setup/incentive-provider-role"
                  className="px-6 py-2 bg-blue-600 text-white font-medium rounded-full border border-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Next
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
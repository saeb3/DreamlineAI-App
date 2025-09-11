"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";

const RegistrationForm = () => {

  const [organisationName, setOrganisationName] = useState("");
  const [region, setRegion] = useState("");
  const [certification, setCertification] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  
  const [pageState, setPageState] = useState("form"); // form, loading, success

  const router = useRouter();


  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log({
      organisationName,
      region,
      certification,
      phone,
      email,
      password,
      address,
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
        <button className="block text-gray-600 md:hidden" aria-label="Menu">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M4 5h16M4 12h16M4 19h16" />
          </svg>
        </button>
      </header>

      <main className="flex flex-1 flex-col text-black">
        {pageState === "form" && (
          <div className="w-full">
            <div className="flex p-4">
              <Link href="/signup" className="mr-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <span className="ml-27">
                <h1 className="text-2xl font-bold">Registration</h1>
              </span>
              
            </div>
            <p className="text-md flex justify-center text-black-500 mb-1">Please fill the form below</p>

            <div className="w-full bg-gray-50 py-4">
                <form onSubmit={handleSubmit} className="p-4 space-y-6">

                <div className="p-4 bg-gray-300 rounded-xl">
                    <h1><b>Organisation Information</b> (Required)</h1>

                    {/* Name of organisation */}
                    <label htmlFor="organisationName" className="block text-md font-medium text-black-500 mb-1">
                    </label>
                    <input
                    id="organisationName"
                    type="text"
                    placeholder="Name of organisation"
                    value={organisationName}
                    onChange={(e) => setOrganisationName(e.target.value)}
                    className="my-1 w-full rounded-lg bg-white border border-gray-400 p-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />

                {/* Region */}
                <label htmlFor="region" className="block text-md font-medium text-black-500 mb-1">
                </label>
                <input
                    id="region"
                    type="text"
                    placeholder="Region"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="my-1 w-full rounded-lg bg-white border border-gray-400 p-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />

                {/* Add certification */}
                <label htmlFor="certification" className="block text-md font-medium text-black-500 mb-1">
                </label>
                <input
                  id="certification"
                  type="text"
                  placeholder="Add certification"
                  value={certification}
                  onChange={(e) => setCertification(e.target.value)}
                  className="my-1 w-full rounded-lg bg-white border border-gray-400 p-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                </div>



                <div className="p-4 bg-gray-300 rounded-xl">
                    <h1><b>Contact Information</b></h1>

                    {/* Phone number */}
                    <label htmlFor="phoneNumber" className="block text-md font-medium text-black-500 mb-1">
                    </label>
                    <input
                    id="phoneNumber"
                    type="number"
                    min="1000000000"
                    max="9999999999"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="my-1 w-full rounded-lg bg-white border border-gray-400 p-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />

                {/* Email Address */}
                <label htmlFor="emailAddress" className="block text-md font-medium text-black-500 mb-1">
                </label>
                <input
                    id="emailAddress"
                    type="text"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="my-1 w-full rounded-lg bg-white border border-gray-400 p-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />

                {/* Password */}
                <label htmlFor="password" className="block text-md font-medium text-black-500 mb-1">
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="my-1 w-full rounded-lg bg-white border border-gray-400 p-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />

                {/* Address */}
                <label htmlFor="address" className="block text-md font-medium text-black-500 mb-1">
                </label>
                <input
                  id="address"
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="my-1 w-full rounded-lg bg-white border border-gray-400 p-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />

                <div className="flex relative mt-1">
                    <input type="checkbox" 
                className="mt-1 w-4 h-4 rounded border-gray-300" 
                required />

                <span className="mx-2 text-gray-700">
                    I agree to the
                    <a href="#" className="text-blue-500">Terms</a> &
                    <a href="#" className="text-blue-500"> Privacy Policy</a>
                </span>
                </div>
                
                </div>



              {/* Signup Button */}
              <div className="pt-6">
                {/* Submit Button */}
                <button
                  type="submit"
                  className="mb-4 w-full rounded-full bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  SIGN UP
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
};

export default RegistrationForm;
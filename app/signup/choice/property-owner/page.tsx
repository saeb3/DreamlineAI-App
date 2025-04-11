"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import Image from "next/image";

const PropertyOwnerChoice = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const router = useRouter();

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex max-w-md min-h-screen flex-col bg-gray-50 text-black">
      <header className="flex items-center justify-between px-4 py-4 shadow-sm bg-white">
        <Image src="/images/logo.png" alt="Logo" width={80} height={50} />
        <button className="text-3xl">☰</button>
      </header>

      <div className="flex items-center p-4">
        <span className="text-xl mr-4 hover:cursor-pointer" onClick={() => router.back()}>
          <Image
            src="/images/signup/back_arrow.png"
            alt="Signup Page Logo"
            width={30}
            height={30}
          />
        </span>
        <h1 className="text-xl text-black font-bold">
          What brings you to dreamlineAi ?
        </h1>
      </div>

      <div className="p-4 bg-gray-50 text-black">
        <div className="relative flex items-center justify-between">
          <div className="absolute h-0.5 w-full bg-gray-200">
            <div className="h-full bg-blue-500 w-2/3"></div>
          </div>

          <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white">
            ✓
          </div>

          <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white">
            ✓
          </div>

          <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-gray-200"></div>
        </div>

        <div className="flex justify-between mt-2 text-sm">
          <div className="w-24 text-center">Confirmation Email</div>
          <div className="w-24 text-center">Login successful</div>
          <div className="w-24 text-center text-gray-400">Choose your role</div>
        </div>
      </div>

      <div className="flex justify-center p-4">
        <img
          src="/images/signup_page_logo.png"
          alt="Registration illustration"
          className="max-w-xs"
        />
      </div>

      <div className="p-4 space-y-4">
        <div
          className={`flex items-center justify-between p-4 border rounded-lg bg-white cursor-pointer ${
            selectedOption === "home" ? "border-blue-500" : "border-gray-200"
          }`}
          onClick={() => handleOptionClick("home")}
        >
          <div className="flex items-center">
            <span className="mr-4 text-xl">
              <Image
                src="/images/signup/home_vector.png"
                alt="Home Icon"
                width={24}
                height={24}
              />
            </span>
            <span>Residential home owner</span>
          </div>
          <div
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
              selectedOption === "home" ? "border-blue-500" : "border-gray-300"
            }`}
          >
            {selectedOption === "home" && (
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            )}
          </div>
        </div>

        <div
          className={`flex items-center justify-between p-4 border rounded-lg bg-white cursor-pointer ${
            selectedOption === "incentives"
              ? "border-blue-500"
              : "border-gray-200"
          }`}
          onClick={() => handleOptionClick("incentives")}
        >
          <div className="flex items-center">
            <span className="mr-4 text-xl">
            <Image
                src="/images/signup/landlord_vector.png"
                alt="Home Icon"
                width={24}
                height={24}
              />
            </span>
            <span>Landlord or Commercial property owner</span>
          </div>
          <div
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
              selectedOption === "incentives"
                ? "border-blue-500"
                : "border-gray-300"
            }`}
          >
            {selectedOption === "incentives" && (
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            )}
          </div>
        </div>

        <div
          className={`flex items-center justify-between p-4 border rounded-lg bg-white cursor-pointer ${
            selectedOption === "contractor"
              ? "border-blue-500"
              : "border-gray-200"
          }`}
          onClick={() => handleOptionClick("contractor")}
        >
          <div className="flex items-center">
            <span className="mr-4 text-xl">
              <Image
                src="/images/signup/rental_vector.png"
                alt="Home Icon"
                width={24}
                height={24}
              />
            </span>
            <span>Rental</span>
          </div>
          <div
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
              selectedOption === "contractor"
                ? "border-blue-500"
                : "border-gray-300"
            }`}
          >
            {selectedOption === "contractor" && (
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            )}
          </div>
        </div>
      </div>

      <div className="p-4 mt-auto">
        <button
          type="submit"
          className="mt-4 w-full rounded-2xl bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 cursor-pointer focus:outline-none"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PropertyOwnerChoice;

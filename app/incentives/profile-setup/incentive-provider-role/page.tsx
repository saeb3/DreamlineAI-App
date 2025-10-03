"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

const IncetiveProviderRole = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const router = useRouter();

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
  };

  const handleNext = (e: any) => {
    e.preventDefault();
    if (selectedOption === "business-owner") {
      router.push("/incentives/profile-setup/set-preferences");
    } else if (selectedOption === "government-officials") {
      router.push("/incentives/profile-setup/set-preferences");
    } else if (selectedOption === "financial-institution") {
      router.push("/incentives/profile-setup/set-preferences");
    }
  };

  useEffect(() => {
      const handleKeyDown = (e: any) => {
        if (e.key === "Enter" && selectedOption) {
          handleNext(e);
        }
      };
  
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, [selectedOption]);

  return (
    <div className="flex max-w-md min-h-screen bg-gray-50 flex-col text-black">
      <header className="flex items-center justify-between px-4 py-4 shadow-sm bg-white">
        <Image 
        src="/images/logo.png"
        alt="Dreamline Logo"
        width={80}
        height={50}
        />
        <button className="text-3xl">☰</button>
      </header>

      <div className="flex items-center p-4 bg-white">
        <span
          className="text-xl mr-4 hover:cursor-pointer"
          onClick={() => router.back()}
        >
          <Image
            src="/images/signup/back_arrow.png"
            alt="Signup Page Logo"
            width={30}
            height={30}
          />
        </span>
        <span className="ml-18">
            <h1 className="text-xl font-bold">Choose Your Role</h1>
        </span>
      </div>
      <p className="text-md bg-white flex justify-center text-black-500 mb-6">Choose your role as an incentive provider.</p>

    <div>

      <div className="flex justify-center p-5">
        <img
          src="/images/incentives/incentive-provider-role.png"
          alt="Registration illustration"
          className="max-w-xs h-50 rounded-xl my-5 mx-5"
        />
      </div>

      <div className="p-4 space-y-4">
        <div
          className={`flex items-center justify-between p-4 border rounded-lg bg-white cursor-pointer ${
            selectedOption === "business-owner"
              ? "border-blue-500"
              : "border-gray-200"
          }`}
          onClick={() => handleOptionClick("business-owner")}
        >
          <div className="flex items-center">
            <span className="mr-4 text-xl">
              <Image
                src="/images/signup/business_vector.png"
                alt="Home Icon"
                width={24}
                height={24}
              />
            </span>
            <span>Business Owners</span>
          </div>
          <div
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
              selectedOption === "business-owner"
                ? "border-blue-500"
                : "border-gray-300"
            }`}
          >
            {selectedOption === "business-owner" && (
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            )}
          </div>
        </div>

        <div
          className={`flex items-center justify-between p-4 border rounded-lg bg-white cursor-pointer ${
            selectedOption === "government-officials"
              ? "border-blue-500"
              : "border-gray-200"
          }`}
          onClick={() => handleOptionClick("government-officials")}
        >
          <div className="flex items-center">
            <span className="mr-4 text-xl">
              <Image
                src="/images/signup/government_vector.png"
                alt="Home Icon"
                width={24}
                height={24}
              />
            </span>
            <span>I'm here to deploy government-officials</span>
          </div>
          <div
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
              selectedOption === "government-officials"
                ? "border-blue-500"
                : "border-gray-300"
            }`}
          >
            {selectedOption === "government-officials" && (
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            )}
          </div>
        </div>

        <div
          className={`flex items-center justify-between p-4 border rounded-lg bg-white cursor-pointer ${
            selectedOption === "financial-institution"
              ? "border-blue-500"
              : "border-gray-200"
          }`}
          onClick={() => handleOptionClick("financial-institution")}
        >
          <div className="flex items-center">
            <span className="mr-4 text-xl">
              <Image
                src="/images/signup/financial_vector.png"
                alt="Home Icon"
                width={24}
                height={24}
              />
            </span>
            <span>I'm a financial-institution</span>
          </div>
          <div
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
              selectedOption === "financial-institution"
                ? "border-blue-500"
                : "border-gray-300"
            }`}
          >
            {selectedOption === "financial-institution" && (
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            )}
          </div>
        </div>
      </div>

      <div className="p-4 mt-auto">
        <button
          type="submit"
          className="mt-4 w-full rounded-2xl bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 cursor-pointer focus:outline-none"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
      </div>
    </div>
  );
};

export default IncetiveProviderRole;

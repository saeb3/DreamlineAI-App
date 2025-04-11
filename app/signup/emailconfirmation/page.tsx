"use client";

import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";

const EmailConfirmation = () => {
  const [code, setCode] = useState("");
  const router = useRouter();

  const handleCodeChange = (e: any) => {
    console.log("Code changed:", e.target.value);
    setCode(e.target.value);
  };

  const handleNext = (e: any) => {
    console.log("Code entered:", code);
    router.push(`/signup/choice`);
  };

  return (
    <div className="flex max-w-md min-h-screen flex-col bg-gray-50 text-black">
      <header className="flex justify-between items-center p-4 bg-white">
        <Image src="/images/logo.png" alt="Logo" width={80} height={50} />
        <button className="text-3xl">☰</button>
      </header>

      <div className="flex items-center justify-between p-4">
        <span className="text-xl mr-4 hover:cursor-pointer" onClick={() => router.back()}>
          <Image
            src="/images/signup/back_arrow.png"
            alt="Signup Page Logo"
            width={30}
            height={30}
          />
        </span>
        <h1 className="text-xl font-bold flex-grow text-center">
          Email Confirmation
        </h1>
        <div className="w-6"></div> {/* Empty div for spacing balance */}
      </div>

      <div className="p-4 bg-gray-50">
        <div className="relative flex items-center justify-between">
          <div className="absolute h-0.5 w-full bg-gray-200">
            <div className="h-full bg-blue-500 w-1/3"></div>
          </div>

          <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white">
            ✓
          </div>

          <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-blue-500"></div>

          <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-gray-200"></div>
        </div>

        <div className="flex justify-between mt-2 text-sm">
          <div className="w-24 text-center">Create username</div>
          <div className="w-32 text-center text-blue-500">
            Confirmation Email
          </div>
          <div className="w-24 text-center text-gray-400">Login successful</div>
        </div>
      </div>

      <div className="flex justify-center p-6">
        <img
          src="/images/signup_page_logo.png"
          alt="Email Confirmation"
          className="h-24 w-24"
        />
      </div>

      <div className="px-4 pt-6">
        <h2 className="text-2xl font-bold">Let's confirm it's you!</h2>
        <p className="mt-4 text-gray-800">
          Enter the security code sent to your email, please check your spam
          folder if it's not in your inbox.
        </p>
      </div>

      <div className="p-4 mt-4">
        <input
          type="text"
          placeholder="Enter Code"
          value={code}
          onChange={handleCodeChange}
          className="w-full p-4 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="p-4 mt-auto" onClick={handleNext}>
        <button
          type="submit"
          className="mt-4 w-full rounded-2xl bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 cursor-pointer focus:outline-none"
        >
          Next
        </button>
      </div>

      <div className="text-center p-4">
        <button className="text-black underline">Resend code</button>
      </div>
    </div>
  );
};

export default EmailConfirmation;

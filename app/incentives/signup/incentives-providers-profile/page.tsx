"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";

const SignupIncentivesProvidersProfile = () => {
  
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push("#")
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

      <main className="flex flex-1 flex-col bg-gray-50 text-black">
          <div className="w-full">
            <div className="mx-3 mt-8 p-4 bg-white shadow-md rounded-3xl">
                <div className="w-full py-4">
                    <div className="flex justify-center p-4">
                        <img
                        src="/images/incentives/incentives-providers-profile.png"
                        alt="Incentives providers profile illustration"
                        className="w-full h-50 rounded-2xl mx-5"
                        />
                    </div>
                </div>
                <p className="text-center text-2xl"><b>Complete your profile</b></p>
                <br></br>
                <p className="text-md text-center">Answer a couple of questions to complete and set up your 
                    profile. It would take a few minutes.
                </p>

                {/* Finish Setup Button */}
                    <div className="pt-6 px-4 pb-4">
                        <button
                        type="button"
                        onClick={handleSubmit}
                        className="mb-4 w-full rounded-full bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Finish Setup
                        </button>
                    </div>
            </div>
          </div>
        

        

        
      </main>
    </div>
  );
};

export default SignupIncentivesProvidersProfile;
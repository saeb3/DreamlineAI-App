"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";

const SignupEmailConfirmation = () => {
  
  const router = useRouter();

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

      <main className="flex flex-1 flex-col bg-gray-50 text-black">
          <div className="w-full">
            <div className="bg-white">
              <div className="flex p-4">
              <Link href="/signup" className="mr-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <span className="ml-20">
                <h1 className="text-2xl font-bold">Email Verification</h1>
              </span>
            </div>
            <p className="text-center text-md">Your email has been verified</p>
            </div>
            
            
          
            <div className="w-full py-4">
                <div className="mt-5 flex justify-center p-4">
                    <img
                    src="/images/incentives/email-confirmation.png"
                    alt="Email verification illustration"
                    className="w-85 h-100 rounded-2xl mx-5"
                    />
                </div>
                
            </div>

            {/* Next Button */}
              <div className="mt-15 pt-6 px-4 pb-4">
                <button
                  type="button"
                  className="mb-4 w-full rounded-full bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Next
                </button>
              </div>
            
          </div>
        

        

        
      </main>
    </div>
  );
};

export default SignupEmailConfirmation;
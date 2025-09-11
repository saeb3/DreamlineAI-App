"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";

const SignupEmailVerification = () => {
  
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

      <main className="p-4 flex flex-1 flex-col text-black bg-gray-50">
          <div className="w-full">
            <div className="flex pb-4">
              <Link href="/signup" className="mr-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <span className="ml-25">
                <h1 className="text-2xl font-bold">Verify Email</h1>
              </span>
              
            </div>
            

            <div className="w-full py-4">
                <div className="mt-25 flex justify-center">
                    <img
                    src="/images/incentives/email-verification.png"
                    alt="Email verification illustration"
                    className="w-29 h-20 rounded-2xl mx-5"
                    />
                </div>
                <div className="mt-10 flex justify-center">
                    <div>
                        <p className="text-center text-lg">
                            <b>Verify your email address</b>
                        </p>
                        <p className="mt-1 text-center text-md">
                            Please click the button below to 
                            confirm your email address and activate
                            your account
                        </p>
                    </div>
                </div>
                
            </div>

            {/* Next Button */}
              <div className="mt-15 pt-6">
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

export default SignupEmailVerification;
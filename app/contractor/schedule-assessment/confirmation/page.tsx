"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function ConfirmationPage() {
  const router = useRouter();

  const handleBackToDashboard = () => {
    router.push("/dashboard");
  };

  return (
    <div className="flex max-w-md min-h-screen flex-col bg-gray-50">
          <header className="flex items-center justify-between px-4 py-4 shadow-sm bg-white">
            <div className="flex items-center">
              <Image 
                src="/images/logo.png"
                alt="Dreamline Logo"
                width={120}
                height={40}
              />
            </div>
            <button className="block text-gray-600" aria-label="Menu">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </header>

      <main className="flex flex-1 flex-col items-center px-4">
        <div className="w-full max-w-md rounded-lg bg-white shadow-md text-center mt-6">
          <div className="flex justify-center p-6">
            <div className="relative h-40 w-40">
              <Image
                src="/images/contractor/confirmation.png"
                alt="Celebration"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>

        <div className="w-full text-left mt-6">
          <h1 className="text-2xl font-bold text-gray-800">Congratulations Matthew!</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mt-2">You are scheduled.</h2>
          <p className="mt-6 text-md text-gray-700">
            An email will be sent to you with the details of your assessment.
          </p>
        </div>

        <div className="w-full max-w-md rounded-2xl bg-white shadow-md p-6 mt-8 text-black">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Energy Assessment</h3>
          
          <div className="flex items-center mb-4">
            <div className="mr-4">
              <svg className="h-8 w-8 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <span className="text-md">Thursday, October 17, 2024</span>
          </div>
          
          <div className="flex items-center">
            <div className="mr-4">
              <svg className="h-8 w-8 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <span className="text-md">2pm, Eastern Time - US & Canada</span>
          </div>
        </div>

        <button
          onClick={handleBackToDashboard}
          className="mt-4 w-full rounded-2xl bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 cursor-pointer focus:outline-none"
        >
          Back to dashboard
        </button>

      </main>
    </div>
  );
}
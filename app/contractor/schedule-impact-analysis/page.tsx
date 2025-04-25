"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ScheduleImpactPage() {
  const router = useRouter();

  const handleBookSchedule = () => {
    // Handle booking logic
    console.log("Booking schedule");
    router.push("/contractor/schedule-assessment");
  };

  return (
    <div className="flex max-w-md min-h-screen flex-col bg-gray-50">
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

      <main className="flex flex-1 flex-col p-4">
        <div className="bg-white rounded-3xl shadow-sm p-6 flex flex-col items-center">
          {/* Illustration */}
          <div className="max-w-xs my-8">
            <Image
              src="/images/contractor/schedule-impact-analysis-image.png"
              alt="Schedule Illustration"
              width={200}
              height={150}
              className="w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className="w-full text-left text-black">
            <h1 className="text-3xl font-bold mb-6">
              Schedule an impact analysis
            </h1>

            <p className="text-gray-700 mb-8">
              This schedule ensures that contractors are aware of the necessary
              assessments to be conducted, their timelines, and how the results
              will influence project planning and execution.
            </p>

            <button
              onClick={handleBookSchedule}
              className="mt-4 w-full rounded-2xl bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 cursor-pointer focus:outline-none"
            >
              Book Schedule
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

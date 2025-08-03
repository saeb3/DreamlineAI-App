"use client";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const AssessmentReminder = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-white px-4 py-4 flex items-center justify-between shadow-sm">
        <div className="text-xl font-bold text-blue-600">
          <span className="text-3xl text-blue-500 font-bold">D</span>reamline
        </div>
        <button className="text-3xl">☰</button>
      </header>

      {/* Main card */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl mt-6 p-6">
        {/* Heading */}
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 mb-4">
          Your energy assessment is coming up!
        </h1>
        <p className="text-gray-700 font-medium mb-6">
          You’re all set! Your energy assessment is scheduled to take place on:
        </p>

        {/* Details */}
        <div className="border border-gray-200 rounded-2xl p-4 mb-6">
          <div className="flex items-center space-x-3 mb-2">
            <Image
              src="/images/calendar-regular-1.png"
              alt="Calendar icon"
              width={21}
              height={24}
            />
            <span className="text-sm font-medium text-gray-800">
              Thursday, October 17
            </span>
          </div>
          <div className="flex items-center space-x-3 mb-4">
            <Image
              src="/images/clock.png"
              alt="clock.png"
              width={21}
              height={24}
            />
            <span className="text-sm font-medium text-gray-800">
              2pm, Eastern Time – US & Canada
            </span>
          </div>
          <a
            href="#"
            className="text-blue-600 font-medium text-sm hover:underline"
          >
            Click here
          </a>{" "}
          <span className="text-sm">to reschedule</span>
        </div>

        {/* Illustration (optional if using a main image) */}
        <div className="my-6">
          <img
            src="/images/assessment-illustration.png"
            alt="Assessment illustration"
            className="w-full h-auto rounded-xl"
          />
        </div>

        {/* Checklist */}
        <div className="mt-6 text-gray-800">
          <h3 className="font-bold text-lg mb-4">Here’s what to expect:</h3>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
            <li className="line-through text-gray-400">
              Choose a convenient time slot.
            </li>
            <li className="font-semibold text-black">
              Meet with a professional at your home for an assessment.
            </li>
            <li>Review your personalized report.</li>
            <li>Discover incentives tailored to your home.</li>
            <li>Schedule your upgrades with confidence.</li>
          </ol>
        </div>

        {/* Support */}
        <div className="mt-6 text-sm text-gray-500">
          Questions? Contact support at{" "}
          <a
            href="mailto:Rose@dreamlineai.org"
            className="text-blue-600 hover:underline"
          >
            Rose@dreamlineai.org
          </a>
        </div>
      </div>
    </div>
  );
};

export default AssessmentReminder;

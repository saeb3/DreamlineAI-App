"use client";
import React from "react";
import Image from "next/image";
import WidgetContainer from "../components/Widget/WidgetContainer";

const AssessmentReminder = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-black">
      {/* Shared Company Header */}
      <header className="flex items-center justify-between px-4 py-4 shadow-sm bg-white">
        <Image src="/images/logo.png" alt="Logo" width={80} height={50} />
        <button className="text-3xl">☰</button>
      </header>

      {/* Reuse consistent container style */}
      <WidgetContainer>
        {/* Heading */}
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
          Your energy assessment is coming up!
        </h1>
        <p className="text-gray-700 text-sm font-medium">
          You’re all set! Your energy assessment is scheduled to take place on:
        </p>

        {/* Date + Time block with original icons */}
        <div className="border border-gray-200 rounded-2xl p-4">
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
              alt="Clock icon"
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

        {/* Illustration */}
        <div className="flex justify-center my-4">
          <Image
            src="/images/illustration-rec.png"
            alt="Assessment illustration"
            width={260}
            height={180}
          />
        </div>

        {/* Checklist */}
        <div>
          <h3 className="font-bold text-lg mb-2">Here’s what to expect:</h3>
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
        <div className="text-sm text-gray-500 mt-4">
          Questions? Contact support at{" "}
          <a
            href="mailto:Rose@dreamlineai.org"
            className="text-blue-600 hover:underline"
          >
            Rose@dreamlineai.org
          </a>
        </div>
      </WidgetContainer>
    </div>
  );
};

export default AssessmentReminder;

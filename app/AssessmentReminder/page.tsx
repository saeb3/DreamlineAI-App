"use client";
import React from "react";
import Image from "next/image";
import WidgetContainer from "@/app/components/Widget/WidgetContainer";

const AssessmentReminder = () => {
  return (
    <div className="flex max-w-md min-h-screen flex-col bg-gray-50 text-black">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 shadow-sm bg-white">
        <Image src="/images/logo.png" alt="Logo" width={80} height={50} />
        <button className="text-3xl">☰</button>
      </header>

      <WidgetContainer>
        {/* Inner content matching the design */}
        <div className="flex flex-col w-full p-6">
          <h1 className="text-2xl font-bold mb-4 text-black">
            Your energy assessment is coming up!
          </h1>
          <p className="text-base text-gray-700 mb-6">
            You're all set! Your energy assessment is scheduled to take place
            on:
          </p>

          {/* Date and Time */}
          <div className="flex items-center space-x-3 mb-3">
            <Image
              src="/images/calendar-regular-1.png"
              alt="Calendar icon"
              width={20}
              height={20}
            />
            <span className="text-base font-medium text-black">
              Thursday, October 17
            </span>
          </div>
          <div className="flex items-center space-x-3 mb-4">
            <Image
              src="/images/clock.png"
              alt="Clock icon"
              width={20}
              height={20}
            />
            <span className="text-base font-medium text-black">
              2pm, Eastern Time - US & Canada
            </span>
          </div>

          {/* Reschedule link */}
          <p className="mb-6">
            <a href="#" className="text-blue-500 font-medium hover:underline">
              Click here
            </a>{" "}
            <span className="text-black">to reschedule</span>
          </p>

          {/* Illustration */}
          <div className="flex justify-center mb-8">
            <Image
              src="/images/illustration-rec.png"
              alt="Assessment illustration"
              width={280}
              height={200}
            />
          </div>

          {/* What to expect section */}
          <h2 className="font-bold text-lg mb-4 text-black">
            Here's what to expect:
          </h2>
          <ol className="list-decimal list-inside space-y-3 text-base mb-6">
            <li className="line-through text-gray-400">
              Choose a convenient time slot.
            </li>
            <li className="font-semibold text-black">
              Meet with a professional at your home for an assessment.
            </li>
            <li className="text-black">Review your personalized report.</li>
            <li className="text-black">
              Discover incentives tailored to your home.
            </li>
            <li className="text-black">
              Schedule your upgrades with confidence.
            </li>
          </ol>

          {/* Contact support */}
          <p className="text-base text-black">
            Questions? Contact support at{" "}
            <a
              href="mailto:Rose@dreamlineai.org"
              className="text-blue-500 hover:underline font-medium"
            >
              Rose@dreamlineai.org
            </a>
          </p>
        </div>
      </WidgetContainer>
    </div>
  );
};

export default AssessmentReminder;

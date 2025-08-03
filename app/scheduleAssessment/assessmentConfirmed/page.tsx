"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import WidgetContainer from "@/app/components/Widget/WidgetContainer";

function Page() {
  const router = useRouter();

  const handleGoToReminder = () => {
    router.push("/AssessmentReminder"); // Make sure this route exists
  };

  return (
    <div className="flex max-w-md min-h-screen flex-col bg-gray-50 text-black">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 shadow-sm bg-white">
        <Image src="/images/logo.png" alt="Logo" width={80} height={50} />
        <button className="text-3xl">☰</button>
      </header>

      {/* Main Content */}
      <div className="flex flex-col rounded-lg w-full max-w-lg mx-auto">
        <div className="p-6 items-center justify-center flex flex-col gap-2">
          <h1 className="text-2xl font-bold mb-2">
            Congratulations Sarah! You are scheduled.
          </h1>
          <p>
            An email will be sent to you with the details of your assessment.
          </p>

          <WidgetContainer>
            <p className="font-bold">Energy Assessment</p>
            <div className="flex flex-col">
              <p>Date</p>
              <p>Time</p>
            </div>
          </WidgetContainer>

          <button
            className="bg-[#0070E0] rounded-4xl text-white p-2 text-[18px] cursor-pointer w-full"
            onClick={handleGoToReminder}
          >
            Back to dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;

"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const PropertyOwnerReport = () => {
  return (
    <div className="flex max-w-md min-h-screen flex-col bg-gray-50 text-black">
        {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 shadow-sm bg-white">
        <Image src="/images/logo.png" alt="Logo" width={80} height={50} />
        <button className="text-3xl">☰</button>
      </header>

      {/* Top image */}
      <div className="p-4 flex-col">
        <Image className="img-fluid rounded-2xl border border-light"
            src="/images/contractor/task/report-coming-soon.png" 
            alt="Example from the web" 
            width={500} height={500}
        />
      </div>

      {/* Main body */}
      <div className="p-4 flex-col">
        <h1 className="text-2xl text-black font-bold pb-3">Your home report is coming soon.</h1>
        <p className="text-md">
            Your energy assessment was completed on Thursday, October 17.  
        </p>
        <p className="text-md">
            Check back soon and keep an eye on your email to review your personalized report and unlock incentives.  
        </p>
      </div>

      

      <div className="p-4 flex-col">
        <h3 className="text-xl text-black font-bold">Here's what to expect:</h3>
            <ol>
                <li><p className="text-gray-500 text-md"><s><b>1.</b> Choose a convenient time slot.</s></p></li>
                <li><p className="text-gray-500 text-md"><s><b>2.</b> Meet with a professional at your home for an assessment.</s></p></li>
                <li><p className="text-md"><b>3. Review your personalized report.</b></p></li>
                <li><p className="text-md"><b>4.</b> Discover incentives tailored to your home.</p></li>
                <li><p className="text-md"><b>5.</b> Schedule your upgrades with confidence.</p></li>
            </ol>
      </div>

      <div className="p-4 flex-col">
        <h2 className="text-black font-bold">Questions? Contact support at</h2>
            <p className="text-blue-500 font-bold">Rose@dreamlineai.org</p>
      </div>
    </div>
  );
};

export default PropertyOwnerReport;

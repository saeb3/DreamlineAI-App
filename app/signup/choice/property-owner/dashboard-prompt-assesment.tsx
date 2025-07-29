"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const ScheduleAssessment = () => {
  const router = useRouter();

  const handleSchedule = () => {
    console.log("Scheduling assessment");
  };

  return (
    <div className="flex max-w-md min-h-screen flex-col bg-gray-50 text-black">
      <header className="flex items-center justify-between px-4 py-4 shadow-sm bg-white">
        <Image src="/images/logo.png" alt="Logo" width={80} height={50} />
        <button className="text-3xl">☰</button>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center p-6">
      
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm mx-auto">
       
          <div className="flex justify-center mb-6">
            <div className="relative">
              
              <div className="absolute inset-0 grid grid-cols-4 gap-2 opacity-20">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="bg-gray-200 rounded aspect-square"></div>
                ))}
              </div>
              

              <div className="absolute top-2 left-8 w-4 h-4 bg-yellow-400 rounded"></div>
              <div className="absolute top-8 right-4 w-4 h-4 bg-yellow-400 rounded"></div>
              
           
              <div className="relative z-10 flex flex-col items-center pt-8">
            
                <div className="w-12 h-12 bg-gray-700 rounded-full mb-2"></div>
                
                <div className="w-16 h-20 bg-green-500 rounded-lg flex items-center justify-center mb-2">
                  <div className="w-6 h-6 bg-yellow-400 rounded"></div>
                </div>
                
                <div className="absolute top-16 -left-4 w-8 h-3 bg-green-500 rounded-full transform rotate-12"></div>
                <div className="absolute top-16 -right-4 w-8 h-3 bg-green-500 rounded-full transform -rotate-12"></div>
                
                <div className="flex gap-1">
                  <div className="w-3 h-12 bg-gray-800 rounded-full"></div>
                  <div className="w-3 h-12 bg-gray-800 rounded-full"></div>
                </div>
              </div>
              
              
              <div className="absolute bottom-0 left-2">
                <div className="w-6 h-6 bg-green-300 rounded-full transform rotate-45"></div>
              </div>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 text-center mb-4">
            Schedule your Energy Assessment
          </h1>

          <p className="text-gray-600 text-center mb-8 leading-relaxed">
            Discover personalized home upgrades! Schedule your energy assessment now to unlock incentives perfectly customized to your home.
          </p>

          <button
            onClick={handleSchedule}
            className="w-full bg-blue-600 text-white rounded-full py-4 font-semibold text-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Schedule
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleAssessment;
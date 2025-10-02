"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Bell, Search, ChevronLeft } from "lucide-react";

export default function EmptyStateDashboard() {

  return (
    <div className="max-w-md min-h-screen flex flex-col bg-gray-50">
        {/* Header */}
        <header className="flex items-center justify-between px-4 py-3 shadow-sm bg-white">
            <Image src="/images/logo.png" alt="Dreamline Logo" width={120} height={40} />
            <button className="text-3xl">☰</button>
        </header>
        
        <div className="h-3 bg-gray-50"></div>
        {/* Greeting */}
        <div className="px-4 py-4 bg-white">
            <div className="flex items-start space-x-3">
                <button className="mt-1">
                    <ChevronLeft className="w-6 h-6 text-gray-700" strokeWidth={2.5} />
                </button>
                <div>
                    <h1 className="text-xl font-bold text-gray-900 flex items-center">
                    Hello Sarah! 
                    <span className="ml-2 text-xl">👋</span>
                    </h1>
                </div>
            </div>
            <p className="text-gray-500 text-left text-sm mt-2">Welcome to your Dashboard.</p>
        </div>
    
        {/* Search + Notification */}
        <div className="flex items-center px-4 py-3 space-x-3 bg-white">
            <div className="flex items-center flex-1 bg-50 rounded-full border border-gray-200 px-4 py-3">
            <Search className="w-5 h-5 text-gray-700" strokeWidth={2.5} />
            <input
                type="text"
                placeholder=""
                className="w-full ml-3 bg-transparent text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
            />
            </div>
            <button className="p-3 rounded-full bg-gray-50 border border-gray-200">
            <Bell className="w-5 h-5 text-gray-700" strokeWidth={2} />
            </button>
        </div>

        <div className="h-3 bg-gray-50"></div>

        {/* Categories */}
        <div className="px-4 py-6 bg-white">
            <h2 className="text-gray-900 font-semibold text-lg mb-4">Categories</h2>
            <div className="flex space-x-3">
            <button className="px-8 py-2.5 bg-gray-100 rounded-full text-sm font-medium text-gray-800">
                Manage Incentives
            </button>
            <button className="px-8 py-2.5 bg-gray-100 rounded-full text-sm font-medium text-gray-800">
                Applications
            </button>
            </div>
        </div>
        </div>
  );
}
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Bell, User, Settings, Shield, Folder, Users, LogOut, Sliders, AlertTriangle, HelpCircle, ChevronRight } from "lucide-react";


export default function SettingSection() {
    return (
        <div className="min-h-screen bg-gray-100 w-full p-7 space-y-6">
            {/* First Group */}
            <div className="bg-white rounded-2xl p-2 shadow">
                <button className="flex items-center justify-between w-full py-4 px-1">
                <span className="flex items-center space-x-2">
                    <User className="w-5 h-5" strokeWidth={2.5} />
                    <span>Profile</span>
                </span>
                <ChevronRight className="w-5 h-5" strokeWidth={2} />
                </button>

                <button className="flex items-center justify-between w-full py-4 px-1">
                <span className="flex items-center space-x-3">
                    <Sliders className="w-5 h-5" strokeWidth={2.5} />
                    <span>Preference</span>
                </span>
                <ChevronRight className="w-5 h-5" strokeWidth={2} />
                </button>

                <div className="flex items-center justify-between w-full py-4 px-1">
                <span className="flex items-center space-x-3">
                    <Bell className="w-5 h-5" strokeWidth={2.5} />
                    <span>Notification</span>
                </span>
                {/* Toggle */}
                <label className="inline-flex relative items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-checked:bg-blue-500 rounded-full transition-colors"></div>
                    <div className="absolute w-5 h-5 bg-white rounded-full shadow transition-transform top-0.5 left-0.5 peer-checked:translate-x-5"></div>
                </label>
                </div>

                <button className="flex items-center justify-between w-full py-4 px-1">
                <span className="flex items-center space-x-3">
                    <Users className="w-5 h-5" strokeWidth={2.5} />
                    <span>Manage teams</span>
                </span>
                <ChevronRight className="w-5 h-5" strokeWidth={2} />
                </button>
            </div>

            {/* Account Heading */}
            <h2 className="text-lg font-bold px-2">Account</h2>

            {/* Second Group */}
            <div className="bg-white rounded-2xl p-2 shadow">
                <button className="flex items-center justify-between w-full py-4 px-1">
                <span className="flex items-center space-x-3">
                    <Settings className="w-5 h-5" strokeWidth={2.5} />
                    <span>Account settings</span>
                </span>
                <ChevronRight className="w-5 h-5" strokeWidth={2} />
                </button>

                <button className="flex items-center justify-between w-full py-4 px-1">
                <span className="flex items-center space-x-3">
                    <Folder className="w-5 h-5" strokeWidth={2.5} />
                    <span>Privacy settings</span>
                </span>
                <ChevronRight className="w-5 h-5" strokeWidth={2} />
                </button>

                <button className="flex items-center justify-between w-full py-4 px-1">
                <span className="flex items-center space-x-3">
                    <AlertTriangle className="w-5 h-5" strokeWidth={2.5} />
                    <span>Safety & Reporting</span>
                </span>
                <ChevronRight className="w-5 h-5" strokeWidth={2} />
                </button>

                <button className="flex items-center justify-between w-full py-4 px-1">
                <span className="flex items-center space-x-3">
                    <HelpCircle className="w-5 h-5" strokeWidth={2.5} />
                    <span>Rose DreamlineAI</span>
                </span>
                <ChevronRight className="w-5 h-5" strokeWidth={2} />
                </button>

                <button className="flex items-center justify-between w-full py-4 px-1 text-600">
                <span className="flex items-center space-x-3">
                    <LogOut className="w-5 h-5" strokeWidth={2.5} />
                    <span>Log out</span>
                </span>
                </button>
            </div>
        </div>
    );
}
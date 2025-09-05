"use client";

import React, { useState } from "react";
import {
    Search,
    Menu,
    X,
    MapPin,
    Star,
    Bell,
    Pin,
    Heart,
    MessageSquare,
    ChevronDown,
    ChevronRight,
  } from "lucide-react";
  
export default function ProjectSection() {

    const [showFilters, setShowFilters] = useState(false);
    const tabs = ["Task", "Projects", "Materials", "Settings"];
    const projects = [
        {
        id: 1,
        title: "Triple-Pane Windows",
        status: "In process",
        description: "Scheduled Consultation In process",
        image: "/api/placeholder/150/100",
        },
    ];

    const bids = [
        {
        id: 1,
        title: "Home Renovation and re...",
        company: "Jona Properties",
        rating: 4,
        tags: ["Roofing", "Land", "Transport"],
        location: "Stockholm | 10Södergun | 2343",
        image: "/api/placeholder/150/100",
        beforeAfter: ["/api/placeholder/150/100", "/api/placeholder/150/100"],
        },
    ];

    const applications = [
        {
        id: 1,
        title: "Home Grants",
        description: "Home Energy Efficiency Grant",
        status: "Pending",
        icon: "",
        },
    ];

    return (
        
        <div className="w-full bg-white min-h-screen">
            {/* Welcome Section */}
            <div className="mb-2 px-3 p-2 mt-4">
                <h1 className="text-2xl font-semibold text-gray-800 mb-1">
                    Hello Mattew! 👋
                </h1>
                <p className="text-gray-600 text-sm">Welcome to your Dashboard.</p>
            </div>

            <div className="flex items-center gap-3 mb-4 px-3 p-2">
                {/* Search Bar */}
                <div className="relative flex-[10]">
                    <Search
                        className="absolute left-1.5 top-1/2 -translate-y-1/2 text-gray-500"
                        size={22} 
                    />
                    <input
                    type="text"
                    placeholder="Browse projects.."
                    className="placeholder-gray-500 w-full pl-8 pr-4 py-3 border border-gray-200 rounded-full text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                {/* Profile Circle */}
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-blue-500 font-bold cursor-pointer">
                    M
                </div>
                {/* Notification Bell with Badge */}
                <div className="relative w-8 h-8 flex items-center rounded-full bg-gray-100 justify-center">
                    <Bell size={22} className="text-gray-700 cursor-pointer" />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                    3
                    </span>
                </div>
            </div>

            {/* Filters */}
            <div className="flex items-center px-3 p-2">
                <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center space-x-1 text-gray-600 text-sm"
                >
                <span>Filters |</span>
                <ChevronDown className="w-4 h-4 text-black" />
                </button>
            </div>

            {/* Pinned Post */}
            <div className="bg-gray-100 pt-2 pb-7 px-3 ml-0 mr-0 mb-1">
                <div className="border border-gray-300 rounded-lg p-2 flex items-center justify-between bg-white w-full max-w-md mx-auto">
                    {/* Left side: Pin icon + text */}
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50">
                            <Pin className="w-4 h-4 text-gray-800" />
                        </div>
                        <span className="text-sm text-gray-800 font-medium">Pinned post</span>
                    </div>
                    {/* Right side: Cancel button */}
                    <button className="flex items-center space-x-1 text-red-500 text-sm bg-red-50 px-3 py-1 rounded-full">
                    <span>Cancel</span>
                    <X className="w-4 h-4" />
                    </button>
                </div>
            </div>
            
            {/* Manage Bids Section */}
            <div className="px-3 p-2">
                {/* Section Header */}
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-800">Manage Bids</h2>
                    <button className="text-blue-500 text-sm flex items-center space-x-1">
                    <span className="font-semibold">See All</span>
                    <ChevronRight className="w-4 h-4" />
                    </button>
                </div>

                {bids.map((bid) => (
                    <div
                    key={bid.id}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-4 shadow-sm"
                    >
                    {/* Image Section */}
                    <div className="relative">
                        <img
                        src="/images/Dashboard/Frame 1000003005.jpg"
                        alt="Project"
                        className="w-full h-48 object-cover"
                        />
                        {/* Checkbox */}
                        {/* <div className="absolute top-0 right-4 square-full p-2 shadow-lg">
                            <input
                                type="checkbox"
                                className="w-8 h-8 accent-green-400 cursor-pointer"
                            />
                        </div> */}

                        {/* Tick Mark Icon */}
                        <div
                        className="absolute top-0 right-5 bg-green-500 text-white square-full p-2 shadow-lg"
                        >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-3">
                        {/* Title + Icons */}
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-gray-900 text-base truncate max-w-[220px]">
                                {bid.title}
                            </h3>
                            
                            <div className="flex items-center space-x-2">
                                <button type="button" className="w-8 h-8 flex items-center justify-center border-gray-300 hover:bg-gray-100">
                                    <MessageSquare className="w-6 h-6 text-gray-600" />
                                </button>
                                <button type="button" className="w-8 h-8 flex items-center justify-center border-gray-300 hover:bg-gray-100">
                                    <Heart className="w-6 h-6 text-gray-600" />
                                </button>
                            </div>
                        </div>

                        {/* Company + Rating */}
                        <div className="flex items-center space-x-2 mb-2">
                            <img
                                src="/images/Dashboard/Person Image.png" // replace with avatar if available
                                alt="Company"
                                className="w-6 h-6 rounded-full"
                            />
                            <span className="text-sm font-medium text-gray-700">{bid.company}</span>
                            <div className="flex items-center">
                                {[...Array(4)].map((_, i) => (
                                <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                    i < 3 ? "text-yellow-400 fill-current" : "text-gray-300"
                                    }`}
                                />
                                ))}
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-2">
                        {bid.tags.map((tag, index) => (
                            <span
                            key={tag}
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                                index === 0
                                ? "bg-blue-100 text-blue-600"
                                : index === 1
                                ? "bg-pink-100 text-pink-600"
                                : "bg-purple-100 text-purple-600"
                            }`}
                            >
                            {tag}
                            </span>
                        ))}
                        </div>

                        {/* Location + Button */}
                        <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-500 text-xs">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span>{bid.location}</span>
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                            See More
                        </button>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
            
            <div className="w-full h-8 bg-gray-100"></div>
            {/* Approved Projects Section */}
            <div className="mb-1 px-3 p-2">
                <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold text-gray-800">Approved Projects</h2>
                <button className="text-blue-500 text-sm flex items-center space-x-1">
                    <span>See All</span>
                    <ChevronRight className="w-4 h-4" />
                </button>
                </div>

                {projects.map((project) => (
                <div
                    key={project.id}
                    className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center space-x-3"
                >
                    <div className="w-8 h-8">
                        {/* <div className="w-4 h-4 bg-blue-500 rounded"></div> */}
                        <img
                            src="/images/Dashboard/Key Image.jpg"
                            alt="Key"
                            className="w-8 h-8 object-cover"
                        />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-gray-800 text-sm">
                            {project.title}
                        </h3>
                        <p className="text-gray-600 text-xs">{project.description}</p>
                    </div>
                        <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs">
                        {project.status}
                    </span>
                </div>
                ))}
            </div>

            
            <div className="w-full h-8 bg-gray-100"></div>
            {/* Explore Bid Section */}
            <div className="px-3 p-2">
                <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Explore Bid</h2>
                <button className="text-blue-500 text-sm flex items-center space-x-1">
                    <span className="font-semibold">See All</span>
                    <ChevronRight className="w-4 h-4" />
                </button>
                </div>

                {bids.map((bid) => (
                <div
                    key={`explore-${bid.id}`}
                    className="bg-white rounded-lg overflow-hidden mb-4"
                >
                    {/* Image Section */}
                    <div className="relative">
                        <img
                        src="/images/Dashboard/Frame 1000003005.jpg"
                        alt="Project"
                        className="w-full h-48 object-cover"
                        />
                        {/* Checkbox */}
                        {/* <div className="absolute top-0 right-4 square-full p-2 shadow-lg">
                            <input
                                type="checkbox"
                                className="w-8 h-8 accent-green-400 cursor-pointer"
                            />
                        </div> */}

                        {/* Tick Mark Icon */}
                        <div
                        className="absolute top-0 right-5 bg-green-500 text-white square-full p-2 shadow-lg"
                        >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        </div>
                    </div>
                            
                    <div className="flex items-center justify-between mb-2 mt-4">
                            <h3 className="font-semibold text-gray-900 text-base truncate max-w-[220px]">
                                {bid.title}
                            </h3>
                        <div className="flex items-center space-x-2">
                            <button type="button" className="w-8 h-8 flex items-center justify-center border-gray-300 hover:bg-gray-100">
                                <MessageSquare className="w-6 h-6 text-gray-600" />
                            </button>
                            <button type="button" className="w-8 h-8 flex items-center justify-center border-gray-300 hover:bg-gray-100">
                                <Heart className="w-6 h-6 text-gray-600" />
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center space-x-2 mb-2">
                        <img
                            src="/images/Dashboard/Person Image.png" // replace with avatar if available
                            alt="Company"
                            className="w-6 h-6 rounded-full"
                        />
                        <span className="text-sm font-medium text-gray-700">{bid.company}</span>
                        <div className="flex items-center">
                            {[...Array(4)].map((_, i) => (
                            <Star
                                key={i}
                                className={`w-4 h-4 ${
                                i < 3 ? "text-yellow-400 fill-current" : "text-gray-300"
                                }`}
                            />
                            ))}
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-2">
                        {bid.tags.map((tag, index) => (
                            <span
                            key={tag}
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                                index === 0
                                ? "bg-blue-100 text-blue-600"
                                : index === 1
                                ? "bg-pink-100 text-pink-600"
                                : "bg-purple-100 text-purple-600"
                            }`}
                            >
                            {tag}
                            </span>
                        ))}
                    </div>

                    {/* Location + Button */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-500 text-xs">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span>{bid.location}</span>
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                            See More
                        </button>
                    </div>
                </div>
                ))}
            </div>
            
            <div className="w-full h-8 bg-gray-100"></div>
            {/* My Application Section */}
            <div className="mb-6 px-3 p-2">
                <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                    My Application
                </h2>
                <button className="text-blue-500 text-sm flex items-center space-x-1">
                    <span>See All</span>
                    <ChevronRight className="w-4 h-4" />
                </button>
                </div>

                {applications.map((app) => (
                <div
                    key={app.id}
                    className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center space-x-3"
                >
                    {/* <div className="text-2xl">{app.icon}</div> */}
                    <div className="w-10 h-10 flex items-center justify-center">
                        <img
                            src="/images/Dashboard/Home Grants image.jpg"
                            alt="Application Icon"
                            className="w-8 h-8 object-contain"
                        />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-gray-800 text-sm">{app.title}</h3>
                        <p className="text-gray-600 text-xs">{app.description}</p>
                    </div>
                    <span className="bg-red-50 text-red-500 px-2 py-1 rounded text-xs">
                        {app.status}
                    </span>
                </div>
                ))}
            </div>
            <div className="w-full h-10 bg-gray-100"></div>
        </div>
    );
}
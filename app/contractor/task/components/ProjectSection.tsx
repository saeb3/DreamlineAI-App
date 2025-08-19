"use client";

import React, { useState } from "react";
import {
    Search,
    Menu,
    X,
    MapPin,
    Star,
    Heart,
    MessageCircle,
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
        location: "Stockholm | Södergun | 2343",
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
        icon: "🏠",
        },
    ];

    return (
        
        <div className="max-w-md mx-auto bg-white min-h-screen p-4">
            {/* Welcome Section */}
            <div className="mb-6">
                <h1 className="text-xl font-semibold text-gray-800 mb-1">
                Hello Mattew! 👋
                </h1>
                <p className="text-gray-600 text-sm">Welcome to your Dashboard.</p>
            </div>

            {/* Search Bar */}
            <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                type="text"
                placeholder="Browse projects"
                className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">
                    M
                </span>
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">!</span>
                </div>
                </div>
            </div>

            {/* Filters */}
            <div className="flex items-center mb-4">
                <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-1 text-gray-600 text-sm"
                >
                <span>Filters</span>
                <ChevronDown className="w-4 h-4" />
                </button>
            </div>

            {/* Pinned Post */}
            <div className="bg-pink-50 border border-pink-200 rounded-lg p-3 mb-6 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-pink-400 rounded"></div>
                <span className="text-sm text-gray-700">Pinned post</span>
                </div>
                <button className="flex items-center space-x-1 text-red-500 text-sm">
                <span>Cancel</span>
                <X className="w-4 h-4" />
                </button>
            </div>

            {/* Manage Bids Section */}
            <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Manage Bids</h2>
                <button className="text-blue-500 text-sm flex items-center space-x-1">
                    <span>See All</span>
                    <ChevronRight className="w-4 h-4" />
                </button>
                </div>

                {bids.map((bid) => (
                <div
                    key={bid.id}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-4"
                >
                    <div className="flex">
                    <div className="relative">
                        <img
                        src={bid.beforeAfter[0]}
                        alt="Before"
                        className="w-24 h-24 object-cover"
                        />
                        <div className="absolute top-2 right-2 bg-green-500 rounded-full p-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                    </div>
                    <img
                        src={bid.beforeAfter[1]}
                        alt="After"
                        className="w-24 h-24 object-cover"
                    />
                    </div>

                    <div className="p-3">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-gray-800 text-sm">
                        {bid.title}
                        </h3>
                        <div className="flex items-center space-x-2">
                        <MessageCircle className="w-4 h-4 text-gray-400" />
                        <Heart className="w-4 h-4 text-gray-400" />
                        </div>
                    </div>

                    <div className="flex items-center space-x-2 mb-2">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">J</span>
                        </div>
                        <span className="text-sm text-gray-700">{bid.company}</span>
                        <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <Star
                            key={i}
                            className={`w-3 h-3 ${
                                i < bid.rating
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                            />
                        ))}
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-2">
                        {bid.tags.map((tag, index) => (
                        <span
                            key={tag}
                            className={`px-2 py-1 rounded text-xs ${
                            index === 0
                                ? "bg-pink-100 text-pink-600"
                                : index === 1
                                ? "bg-orange-100 text-orange-600"
                                : "bg-purple-100 text-purple-600"
                            }`}
                        >
                            {tag}
                        </span>
                        ))}
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1 text-gray-500 text-xs">
                        <MapPin className="w-3 h-3" />
                        <span>{bid.location}</span>
                        </div>
                        <button className="bg-blue-500 text-white px-3 py-1 rounded text-xs">
                        See More
                        </button>
                    </div>
                    </div>
                </div>
                ))}
            </div>

            {/* My Projects Section */}
            <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-800">My Projects</h2>
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
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                    </div>
                    <div className="flex-1">
                    <h3 className="font-medium text-gray-800 text-sm">
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

            {/* Explore Bid Section */}
            <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Explore Bid</h2>
                <button className="text-blue-500 text-sm flex items-center space-x-1">
                    <span>See All</span>
                    <ChevronRight className="w-4 h-4" />
                </button>
                </div>

                {bids.map((bid) => (
                <div
                    key={`explore-${bid.id}`}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-4"
                >
                    <div className="flex">
                    <div className="relative">
                        <img
                        src={bid.beforeAfter[0]}
                        alt="Before"
                        className="w-24 h-24 object-cover"
                        />
                        <div className="absolute top-2 right-2 bg-green-500 rounded-full p-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                    </div>
                    <img
                        src={bid.beforeAfter[1]}
                        alt="After"
                        className="w-24 h-24 object-cover"
                    />
                    </div>

                    <div className="p-3">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-gray-800 text-sm">
                        {bid.title}
                        </h3>
                        <div className="flex items-center space-x-2">
                        <MessageCircle className="w-4 h-4 text-gray-400" />
                        <Heart className="w-4 h-4 text-gray-400" />
                        </div>
                    </div>

                    <div className="flex items-center space-x-2 mb-2">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">J</span>
                        </div>
                        <span className="text-sm text-gray-700">{bid.company}</span>
                        <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <Star
                            key={i}
                            className={`w-3 h-3 ${
                                i < bid.rating
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                            />
                        ))}
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-2">
                        {bid.tags.map((tag, index) => (
                        <span
                            key={tag}
                            className={`px-2 py-1 rounded text-xs ${
                            index === 0
                                ? "bg-pink-100 text-pink-600"
                                : index === 1
                                ? "bg-orange-100 text-orange-600"
                                : "bg-purple-100 text-purple-600"
                            }`}
                        >
                            {tag}
                        </span>
                        ))}
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1 text-gray-500 text-xs">
                        <MapPin className="w-3 h-3" />
                        <span>{bid.location}</span>
                        </div>
                        <button className="bg-blue-500 text-white px-3 py-1 rounded text-xs">
                        See More
                        </button>
                    </div>
                    </div>
                </div>
                ))}
            </div>

            {/* My Application Section */}
            <div className="mb-6">
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
                    <div className="text-2xl">{app.icon}</div>
                    <div className="flex-1">
                    <h3 className="font-medium text-gray-800 text-sm">{app.title}</h3>
                    <p className="text-gray-600 text-xs">{app.description}</p>
                    </div>
                    <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-xs">
                    {app.status}
                    </span>
                </div>
                ))}
            </div>
        </div>
    );
}
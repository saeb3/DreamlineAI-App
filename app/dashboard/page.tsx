"use client";
import React, { useState } from "react";
import Image from "next/image";

import ScrollNav from "../contractor/task/components/ScrollNav";
import ProjectSection from "../contractor/task/components/ProjectSection";
import TaskSection from "../contractor/task/components/TaskSection";
import { User, HelpCircle, Home, Bell, Search } from "lucide-react";

const DreamlineDashboard = () => {
  const [activeTab, setActiveTab] = useState(null);
  
  return (

    <div className="flex max-w-md min-h-screen flex-col bg-gray-50">

    <div className="max-w-md min-h-screen flex-col bg-gray-50">

        <header className="flex items-center justify-between px-4 py-4 shadow-sm bg-white">
            <Image
                src="/images/logo.png"
                alt="Dreamline Logo"
                width={120}
                height={40}
            />
            <button className="text-3xl">☰</button>
        </header>

        <footer>
              <div className="fixed bottom-0 left-0 w-full max-w-md">
              <div className="bg-white shadow-md border-t flex justify-around items-center py-2">
                {/* Profile */}
                <button className="p-2">
                  <User size={24} />
                </button>
                {/* Help */}
                <button className="p-2">
                  <HelpCircle size={24} />
                </button>
                {/* Home */}
                <button className="p-2">
                  <Home size={24} />
                </button>
                {/* Notifications */}
                <button className="p-2">
                  <Bell size={24} />
                </button>
                {/* Search */}
                <button className="p-2">
                  <Search size={24} />
                </button>
              </div>

          </div>
        </footer>

        {/* Tabs Section */}
      {/* ScrollNav Component */}
      <ScrollNav
        activeTab={activeTab}
        items={[
          { key: "task", label: "Task", active: activeTab === "task", onClick: () => setActiveTab("task") },
          { key: "projects", label: "Projects", active: activeTab === "projects", onClick: () => setActiveTab("projects") },
          { key: "materials", label: "Materials", active: activeTab === "materials", onClick: () => setActiveTab("materials") },
          { key: "settings", label: "Settings", active: activeTab === "settings", onClick: () => setActiveTab("settings") },
        ]}
      />

      {/* Tab Content Section */}
      <div>
        <main className="flex flex-1 flex-col items-center max-w-md mx-auto min-h-screen">
            {activeTab === "task" && <TaskSection />}
            {activeTab === "projects" && <ProjectSection />} 
            {activeTab === "materials" && <div>Materials Content</div>}
            {activeTab === "settings" && <div>Settings Content</div>}
        </main>
      </div>
    </div>

  );
};

export default DreamlineDashboard;

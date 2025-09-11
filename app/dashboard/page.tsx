"use client";
import React, { useState } from "react";
import Image from "next/image";

import ScrollNav from "../contractor/task/components/ScrollNav";
import ProjectSection from "../contractor/task/components/ProjectSection";
import TaskSection from "../contractor/task/components/TaskSection";
import { User, HelpCircle, Home, Bell, Search } from "lucide-react";

const DreamlineDashboard = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  return (
    <div className="max-w-md min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 shadow-sm bg-white">
        <Image
          src="/images/logo.png"
          alt="Dreamline Logo"
          width={120}
          height={40}
        />
        <button className="text-3xl">☰</button>
      </header>

      {/* Tabs Section */}
      <ScrollNav
        activeTab={activeTab}
        items={[
          {
            key: "task",
            label: "Task",
            active: activeTab === "task",
            onClick: () => setActiveTab("task"),
          },
          {
            key: "projects",
            label: "Projects",
            active: activeTab === "projects",
            onClick: () => setActiveTab("projects"),
          },
          {
            key: "materials",
            label: "Materials",
            active: activeTab === "materials",
            onClick: () => setActiveTab("materials"),
          },
          {
            key: "settings",
            label: "Settings",
            active: activeTab === "settings",
            onClick: () => setActiveTab("settings"),
          },
        ]}
      />

      {/* Tab Content Section */}
      <main className="flex flex-1 flex-col max-w-md min-h-screen px-4">
        {activeTab === "task" && <TaskSection />}
        {activeTab === "projects" && <ProjectSection />}
        {activeTab === "materials" && <div>Materials Content</div>}
        {activeTab === "settings" && <div>Settings Content</div>}
      </main>

      {/* Footer */}
      <footer>
        <div className="fixed bottom-0 left-0 w-full max-w-md">
          <div className="bg-white shadow-md border-t flex justify-around items-center py-2">
            <button className="p-2">
              <User size={24} />
            </button>
            <button className="p-2">
              <HelpCircle size={24} />
            </button>
            <button className="p-2">
              <Home size={24} />
            </button>
            <button className="p-2">
              <Bell size={24} />
            </button>
            <button className="p-2">
              <Search size={24} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DreamlineDashboard;

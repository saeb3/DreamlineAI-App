"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ScrollNav, ScrollNavItem } from "@/app/contractor/task/components/ScrollNav";
import { TaskSection, Task, FilterType } from "@/app/contractor/task/components/TaskSection";

export default function TaskPage() {
  const router = useRouter();

  // Manage the currently active tab
  const [activeTab, setActiveTab] = useState<
    "Task" | "Projects" | "Materials" | "Settings" | "Performance" | "Chats"
  >("Task");

  const [filter, setFilter] = useState<FilterType | null>(null);

  // Dummy tasks data
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", title: "Site preparation", status: "Pending" },
    { id: "2", title: "Foundation work", status: "In progress" },
    { id: "3", title: "Framing", status: "Completed" },
    { id: "4", title: "Water", status: "Completed" },
    // … more data
  ]);

  

  // Define navigation items for ScrollNav
  const navItems: ScrollNavItem[] = [
    {
      key: "task",
      label: "Task",
      active: activeTab === "Task",
      onClick: () => setActiveTab("Task"),
    },
    {
      key: "projects",
      label: "Projects",
      active: activeTab === "Projects",
      onClick: () => setActiveTab("Projects"),
    },
    {
      key: "materials",
      label: "Materials",
      active: activeTab === "Materials",
      onClick: () => setActiveTab("Materials"),
    },
    {
      key: "settings",
      label: "Settings",
      active: activeTab === "Settings",
      onClick: () => setActiveTab("Settings"),
    },
    {
      key: "performance",
      label: "Performance",
      active: activeTab === "Performance",
      onClick: () => setActiveTab("Performance"),
    },
    {
      key: "chats",
      label: "Chats",
      active: activeTab === "Chats",
      onClick: () => setActiveTab("Chats"),
    },
  ];

  return (
    <div className="flex max-w-md min-h-screen flex-col bg-gray-50">
      {/* Page header with logo and hamburger menu */}
      <header className="flex items-center justify-between px-4 py-4 shadow-sm bg-white">
        <Image
          src="/images/logo.png"
          alt="Dreamline Logo"
          width={80}
          height={50}
        />
        <button className="block text-gray-600 md:hidden" aria-label="Menu">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M4 5h16M4 12h16M4 19h16" />
          </svg>
        </button>
      </header>

      {/* Scrollable navigation bar */}
      <ScrollNav items={navItems} />

      {/* TaskSection */}
      <TaskSection
        tasks={tasks}
        filter={filter}
        onCreate={() => router.push("/contractor/tasks/new")}
        onFilterChange={setFilter} 
      />

      {/* Next: FooterIcons go here */}
    </div>
  );
}

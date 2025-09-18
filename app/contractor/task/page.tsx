"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ScrollNav, { type ScrollNavItem } from "@/app/contractor/task/components/ScrollNav";
import TaskSection, { type Task, type FilterType } from "@/app/contractor/task/components/TaskSection";
import { CreateTask } from "@/app/contractor/task/components/CreateTask";

export default function TaskPage() {
  const router = useRouter();

  // Manage the currently active tab
  const [activeTab, setActiveTab] = useState<
    "Task" | "Projects" | "Materials" | "Settings" | "Performance" | "Chats"
  >("Task");

  const [filter, setFilter] = useState<FilterType | null>(null);

  // Dummy tasks data
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Site preparation",
      description: "Clear and level construction site.",
      status: "Pending",
      startDate: "2024-08-10",
      endDate: "2024-08-24",
      assignedCount: 2,
      hasFiles: true,
    },
    {
      id: "2",
      title: "Foundation work",
      description: "Excavate and pour concrete foundation.",
      status: "In progress",
      startDate: "2024-08-12",
      endDate: "2024-08-26",
      assignedCount: 3,
      hasFiles: false,
    },
    {
      id: "3",
      title: "Framing",
      description: "Construct frame structure.",
      status: "Completed",
      startDate: "2024-08-05",
      endDate: "2024-08-15",
      assignedCount: 4,
      hasFiles: true,
    },
    {
      id: "4",
      title: "Water",
      description: "Install water pipes.",
      status: "Completed",
      startDate: "2024-08-07",
      endDate: "2024-08-19",
      assignedCount: 1,
      hasFiles: false,
    },
    {
      id: "5",
      title: "Heater",
      description: "Install heater.",
      status: "Overdue",
      startDate: "2024-09-07",
      endDate: "2024-09-19",
      assignedCount: 5,
      hasFiles: false,
    },
  ]);


  // create task open/close
  const [isCreating, setIsCreating] = useState(false);
  const openCreate = () => setIsCreating(true);
  const closeCreate = () => setIsCreating(false);

  // add task + auto-filter to its status
  const addTask = (payload: Omit<Task, "id">) => {
    const id =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

    const newTask: Task = { id, ...payload };
    setTasks((prev) => [newTask, ...prev]);   // prepend
    setFilter(newTask.status);                // <-- show under its status immediately
    closeCreate();
  };
  

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
      <ScrollNav activeTab={activeTab} items={navItems} />

      {/* Content: show ONLY one of these at a time */}
      {isCreating ? (
        <CreateTask onCancel={closeCreate} onSubmit={addTask} />
      ) : (
        <TaskSection
          tasks={tasks}
          filter={filter}
          onCreate={openCreate}     // clicking "Create task" flips to inline form
          onFilterChange={setFilter}
        />
      )}


      {/* Next: FooterIcons go here */}
    </div>
  );
}

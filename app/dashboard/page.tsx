"use client";

import React, { useState } from "react";
import Image from "next/image";
import ScrollNav from "../contractor/task/components/ScrollNav";
import TaskSection, {
  type Task,
  type FilterType,
} from "../contractor/task/components/TaskSection";
import ProjectSection from "../contractor/task/components/ProjectSection";
import { CreateTask } from "../contractor/task/components/CreateTask"; // inline creator
import { User, HelpCircle, Home, Bell, Search } from "lucide-react";
import MaterialsSection from "../contractor/materials/components/MaterialsSection";
import SettingSection from "../contractor/task/components/SettingSection";

export default function DreamlineDashboard() {
  // ⬅️ Start with no tab selected to show the welcome state
  const [activeTab, setActiveTab] =
    useState<"task" | "projects" | "materials" | "settings" | null>(null);

  // Task state for the Task tab
  const [filter, setFilter] = useState<FilterType | null>(null);
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", title: "Site preparation", description: "Clear and level construction site.", status: "Pending", startDate: "2024-08-10", endDate: "2024-08-24", assignedCount: 2, hasFiles: true },
    { id: "2", title: "Foundation work", description: "Excavate and pour concrete foundation.", status: "In progress", startDate: "2024-08-12", endDate: "2024-08-26", assignedCount: 3, hasFiles: false },
    { id: "3", title: "Framing", description: "Construct frame structure.", status: "Completed", startDate: "2024-08-05", endDate: "2024-08-15", assignedCount: 4, hasFiles: true },
    { id: "4", title: "Water", description: "Install water pipes.", status: "Completed", startDate: "2024-08-07", endDate: "2024-08-19", assignedCount: 1, hasFiles: false },
    { id: "5", title: "Heater", description: "Install heater.", status: "Overdue", startDate: "2024-09-07", endDate: "2024-09-19", assignedCount: 5, hasFiles: false },
  ]);

  // Swap Task list <-> inline Create form
  const [isCreating, setIsCreating] = useState(false);
  const startCreate = () => setIsCreating(true);
  const cancelCreate = () => setIsCreating(false);

  const addTask = (payload: Omit<Task, "id">) => {
    const id =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const newTask: Task = { id, ...payload };
    setTasks((prev) => [newTask, ...prev]);
    setFilter(newTask.status); // switch to status after creating
    setIsCreating(false);      // go back to Task list
  };

  // Hide footer only when creating inside Task tab
  const showFooter = !(activeTab === "task" && isCreating);

  return (
    <div className="max-w-md min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 shadow-sm bg-white">
        <Image src="/images/logo.png" alt="Dreamline Logo" width={120} height={40} />
        <button className="text-3xl">☰</button>
      </header>

      {/* Tabs Section */}
      <ScrollNav
        activeTab={activeTab ?? ""} // ⬅️ falsy => welcome image shows
        items={[
          { key: "task", label: "Task", active: activeTab === "task", onClick: () => { setActiveTab("task"); setIsCreating(false); } },
          { key: "projects", label: "Projects", active: activeTab === "projects", onClick: () => { setActiveTab("projects"); setIsCreating(false); } },
          { key: "materials", label: "Materials", active: activeTab === "materials", onClick: () => { setActiveTab("materials"); setIsCreating(false); } },
          { key: "settings", label: "Settings", active: activeTab === "settings", onClick: () => { setActiveTab("settings"); setIsCreating(false); } },
        ]}
      />

      {/* Tab Content Section */}
      <main
        className={`flex flex-1 flex-col max-w-md min-h-screen ${
          showFooter ? "pb-20" : ""
        }`}
      >
        {activeTab === "task" && (
          isCreating ? (
            <CreateTask onCancel={cancelCreate} onSubmit={addTask} />
          ) : (
            <TaskSection
              tasks={tasks}
              filter={filter}
              onCreate={startCreate}      // click shows ONLY the create UI
              onFilterChange={setFilter}
            />
          )
        )}

        {activeTab === "projects" && <ProjectSection />}
        {activeTab === "materials" && <MaterialsSection />}
        {activeTab === "settings" && <SettingSection />}
      </main>

      {/* Footer */}
      {showFooter && (
        <footer>
          <div className="fixed bottom-0 left-0 w-full max-w-md">
            <div className="bg-white shadow-sm border-t border-gray-200 flex justify-around items-center py-2">
              <button className="p-2"><User size={24} /></button>
              <button className="p-2"><HelpCircle size={24} /></button>
              <button className="p-2"><Home size={24} /></button>
              <button className="p-2"><Bell size={24} /></button>
              <button className="p-2"><Search size={24} /></button>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
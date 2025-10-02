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
import FilesEditor from "../contractor/task/components/FilesEditor";
import { User, HelpCircle, Home, Bell, Search, ArrowLeft } from "lucide-react";
import MaterialsSection from "../contractor/materials/components/MaterialsSection";

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

  // Edit flow
  const [isEditing, setIsEditing] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const startEdit = (task: Task) => { setEditingTask(task); setIsEditing(true); };
  const stopEdit = () => { setIsEditing(false); setEditingTask(null); };

  // Materials: whether "Add Material" form is open
  const [isAddingMaterial, setIsAddingMaterial] = useState(false);

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

  const showTabs = 
    !(activeTab === "task" && (isEditing));

  // Hide footer only when creating inside Task tab
  const showFooter =
    !(activeTab === "task" && isCreating) &&
    !(activeTab === "materials" && isAddingMaterial);

  return (
    <div className="max-w-md min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 shadow-sm bg-white">
        <Image src="/images/logo.png" alt="Dreamline Logo" width={120} height={40} />
        <button className="text-3xl">☰</button>
      </header>

      {/* Tabs Section (or Files title bar when editing) */}
       {showTabs ? (
         <ScrollNav
           activeTab={activeTab ?? ""}
           items={[
             { key: "task", label: "Task", active: activeTab === "task", onClick: () => { setActiveTab("task"); setIsCreating(false); setIsEditing(false); } },
             { key: "projects", label: "Projects", active: activeTab === "projects", onClick: () => { setActiveTab("projects"); setIsCreating(false); setIsEditing(false); } },
             { key: "materials", label: "Materials", active: activeTab === "materials", onClick: () => { setActiveTab("materials"); setIsCreating(false); setIsEditing(false); } },
             { key: "settings", label: "Settings", active: activeTab === "settings", onClick: () => { setActiveTab("settings"); setIsCreating(false); setIsEditing(false); } },
           ]}
         />
       ) : (
         // Compact bar in place of tabs during edit (constrained to max-w-md) 
         <div className="w-full bg-white border-gray-2 shadow-sm">
          <div className="max-w-md mx-auto h-11 px-3 flex items-center justify-between">
            <button
              onClick={stopEdit}
              className="p-1 -ml-1 rounded hover:bg-gray-100"
              aria-label="Back"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <h1 className="text-sm font-semibold">Your Files</h1>
            <div className="w-5" /> {/* spacer */}
          </div>
        </div>
        )}

      {/* Tab Content Section */}
      <main
        className={`flex flex-1 flex-col ${
          showFooter
            ? "min-h-[calc(100vh-var(--footer-h))] pb-[calc(env(safe-area-inset-bottom)+var(--footer-h))]"
            : "min-h-screen"
        }`}
     >
        {activeTab === "task" && (
          isEditing && editingTask ? (
            <FilesEditor task={editingTask} onBack={stopEdit} showHeader={false} />
          ) : isCreating ? (
            <CreateTask onCancel={cancelCreate} onSubmit={addTask} />
          ) : (
            <TaskSection
              tasks={tasks}
              filter={filter}
              onCreate={startCreate}
              onFilterChange={setFilter}
              onEdit={startEdit}          // 👈 wire the Edit handler
            />
          )
        )}

        {activeTab === "projects" && <ProjectSection />}
        
        {activeTab === "materials" && (
          <MaterialsSection onFormOpenChange={setIsAddingMaterial} />
        )}

        {activeTab === "settings" && <div>Settings Content</div>}
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

// app/contractor/task/debug/page.tsx
"use client";
import React, { useState } from "react";
import TaskSection, { type Task, type FilterType } from "../components/TaskSection";

const demoTasks: Task[] = [
  { id: "1", title: "Invite contractors", description: "Send welcome email", status: "Completed", startDate: "2025-09-10", endDate: "2025-09-11", assignedCount: 2, hasFiles: true },
  { id: "2", title: "Collect KYC", status: "In progress", startDate: "2025-09-12", endDate: "2025-09-14", assignedCount: 1 },
  { id: "3", title: "Verify licenses", status: "Pending", startDate: "2025-09-15", endDate: "2025-09-18" },
  { id: "4", title: "Upload compliance doc", status: "Overdue", startDate: "2025-09-01", endDate: "2025-09-03", hasFiles: true },
  { id: "5", title: "Schedule kickoff", status: "In progress", startDate: "2025-09-16", endDate: "2025-09-17", assignedCount: 3 },
];

export default function Page() {
  const [filter, setFilter] = useState<FilterType | null>(null);
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-md py-6">
        <TaskSection
          tasks={demoTasks}
          filter={filter}
          onCreate={() => {}}
          onFilterChange={setFilter}
        />
      </div>
    </main>
  );
}

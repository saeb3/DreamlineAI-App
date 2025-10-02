// app/contractor/task/components/TaskSection.tsx
"use client";

import React from "react";
import { TaskHeader } from "./TaskHeader";
import { StatusFilterButton } from "./StatusFilterButton";
import { NoTasksPlaceholder } from "./NoTasksPlaceholder";
import { TaskList } from "./TaskList";

// Filter types corresponding to task statuses
const STATUS_LIST = ["Completed", "In progress", "Pending", "Overdue"] as const;
export type FilterType = typeof STATUS_LIST[number];

// Task data shape
export interface Task {
  id: string;
  title: string;
  description?: string;
  status: FilterType;
  startDate: string; 
  endDate: string;   
  assignedCount?: number;
  hasFiles?: boolean;
}

export interface TaskSectionProps {
  tasks: Task[];
  filter: FilterType | null;   // null indicates no filter (show all tasks)
  onCreate: () => void;
  onFilterChange: (filter: FilterType | null) => void;
  onEdit?: (task: Task) => void;
}

/**
 * TaskSection
 * Renders the task header, filter buttons, and either a task list or a no-tasks placeholder.
 */
export default function TaskSection({
  tasks = [],
  filter,
  onCreate,
  onFilterChange,
  onEdit,
}: TaskSectionProps) {
  // Filter tasks based on selected status
  const filteredTasks = filter ? tasks.filter((task) => task.status === filter) : tasks;
  const noneAtAll = tasks.length === 0;

  // Heading for the list: "<Status> tasks" or "All Task"
  const listTitle = filter ? `${filter} tasks` : "All Tasks";

  return (
    <section className="bg-gray-50 p-4 flex flex-col gap-[32px]">
      <div className="flex flex-col gap-[12px] w-full">
        {/* Header: Create Task Button */}
        <TaskHeader total={tasks.length} onCreate={onCreate} />

        {/* Status Filters */}
        <div className="flex flex-row justify-between gap-3">
          {STATUS_LIST.map((status) => {
            const count = tasks.filter((t) => t.status === status).length;
            const isActive = filter === status;
            const isDisabled = noneAtAll;

            return (
              <StatusFilterButton
                key={status}
                status={status}
                count={count}
                isActive={isActive}
                disabled={isDisabled}
                onClick={() => onFilterChange(isActive ? null : status)}
              />
            );
          })}
        </div>
      </div>

      {/* Task List or No-Tasks Placeholder */}
      {noneAtAll ? (
        <NoTasksPlaceholder />
      ) : (
        <TaskList tasks={filteredTasks} title={listTitle} onEdit={onEdit} />
      )}
    </section>
  );
}

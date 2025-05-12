"use client";

import React from "react";
import Image from "next/image";

// Filter types corresponding to task statuses
export type FilterType = "Completed" | "In progress" | "Pending" | "Overdue";

// Task data shape
export interface Task {
  id: string;
  title: string;
  description?: string;
  status: FilterType;
}

export interface TaskSectionProps {
  tasks: Task[];
  filter: FilterType | null;   // null indicates no filter (show all tasks)
  onCreate: () => void;
  onFilterChange: (filter: FilterType) => void;
}

/**
 * TaskSection
 * Renders the task header, filter buttons, and either a task list or a no-tasks placeholder.
 */
export function TaskSection({
  tasks,
  filter,
  onCreate,
  onFilterChange,
}: TaskSectionProps) {
  // Filter tasks based on selected status
  // Determine which tasks to display: if no filter is selected, show all tasks
  const filteredTasks = filter ? tasks.filter((task) => task.status === filter) : tasks;

  return (
    <section className="bg-gray-50 p-4 flex flex-col gap-[124px] ">
      <div className="flex flex-col gap-[12px] w-full">
        {/* Header: Create Task Button */}
        <div className="flex justify-between items-center w-full">
          <h2 className="font-semibold text-sm leading-[100%] text-black w-[70px] h-[21px]">Total task</h2>
          <button
            type="button"
            onClick={onCreate}
            className="flex items-center p-1 gap-0.5 w-[90px] h-[30px] bg-[#0070E0] text-white text-xs p-1 rounded-lg"
          >
            <span className="text-xl">+</span>
            <span>Create task</span>
          </button>
        </div>

        {/* Status Filters */}
        <div className="flex justify-center gap-[17px] w-full">
          {( ["Completed", "In progress", "Pending", "Overdue"] as FilterType[] ).map(
            (status) => {
              const count = tasks.filter((t) => t.status === status).length;
              const isActive = filter === status;
              const isDisabled = tasks.length === 0;

              return (
                <button
                  key={status}
                  type="button"
                  onClick={() => onFilterChange(status)}
                  disabled={isDisabled}
                  className={`
                    flex flex-col justify-center items-start
                    p-[6px] gap-[4px]
                    w-[84px] h-[72px]
                    border border-[0.5px] border-[#CCCCCC]
                    rounded-[8px]
                    text-xs leading-[18px]
                    ${isActive
                      ? "bg-[#0070E0] text-white"
                      : isDisabled
                        ? "bg-white cursor-not-allowed"
                        : "bg-white text-black hover:bg-gray-100"
                    }
                  `}
                >
                  {/* Icon */}
                  <div className="relative w-[19px] h-[18px] rounded-full overflow-hidden">
                    <Image
                      src={`/images/contractor/task/${
                        status === "Completed"
                          ? "completed.png"
                          : status === "In progress"
                          ? "in-progress.png"
                          : status === "Pending"
                          ? "pending.png"
                          : "overdue.png"
                      }`}
                      alt={`${status} icon`}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  {/* Label */}
                  <span className="font-normal text-[12px] leading-[18px]">
                    {status}
                  </span>

                  {/* Count */}
                  {(() => {
                    const count = tasks.filter((t) => t.status === status).length;
                    return (
                      <span
                        className={`
                          w-[41.09px] h-[15px]
                          text-[10px] leading-[15px] text-center
                          font-poppins font-normal
                          ${count === 0 ? "text-gray-600" : "text-black"}
                        `}
                      >
                        {count} {count > 1 ? "items" : "item"}
                      </span>
                    );
                  })()}

                </button>
              );
            }
          )}
        </div>
      </div>
      {/* Task List or No-Tasks Placeholder */}
      {filteredTasks.length === 0 ? (
        <div className="flex flex-1 justify-center items-center">
          <img
            src="/images/contractor/task/no-task.svg"
            alt="No tasks illustration"
            className="w-[269px] h-[311px]"
          />
        </div>
      ) : (
        <ul className="flex flex-col gap-3">
          {filteredTasks.map((task) => (
            <li
              key={task.id}
              className="p-3 bg-gray-50 border rounded-lg"
            >
              <h4 className="font-medium">{task.title}</h4>
              {task.description && (
                <p className="text-sm text-gray-600">{task.description}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

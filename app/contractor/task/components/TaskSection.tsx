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
  startDate: string; // ex: '2024-08-10'
  endDate: string;   // ex: '2024-08-24'
  assignedCount?: number; 
  hasFiles?: boolean;     
}

export interface TaskSectionProps {
  tasks: Task[];
  filter: FilterType | null;   // null indicates no filter (show all tasks)
  onCreate: () => void;
  onFilterChange: (filter: FilterType | null) => void;
}

/**
 * TaskSection
 * Renders the task header, filter buttons, and either a task list or a no-tasks placeholder.
 */
export default function TaskSection({
  tasks=[],
  filter,
  onCreate,
  onFilterChange,
}: TaskSectionProps) {
  // Filter tasks based on selected status
  // Determine which tasks to display: if no filter is selected, show all tasks
  const filteredTasks = filter ? tasks.filter((task) => task.status === filter) : tasks;
  const noneAtAll = tasks.length === 0;

  return (
    <section className="bg-[#F5F5F5] p-4 flex flex-col gap-[32px] ">
      <div className="flex flex-col gap-[12px] w-full">
        {/* Header: Create Task Button */}
        <TaskHeader total={tasks.length} onCreate={onCreate} />

        {/* Status Filters */}
        <div className="flex justify-between items-center w-full">
          {STATUS_LIST.map(
            (status) => {
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
            }
          )}
        </div>
      </div>
      {/* Task List or No-Tasks Placeholder */}
      {noneAtAll ? (
        <NoTasksPlaceholder />
      ) : (
        <TaskList tasks={filteredTasks} />
      )}
    </section>
  );
}


// export default function TaskSection({
//   tasks = [], // Default value for tasks
//   filter,
//   onCreate,
//   onFilterChange,
// }: TaskSectionProps) {
//   // Filter tasks based on selected status
//   const filteredTasks = filter ? tasks.filter((task) => task.status === filter) : tasks;
//   const noneAtAll = tasks.length === 0;

//   return (
//     <section className="bg-gray-50 p-4 flex flex-col gap-[32px] ">
//       <div className="flex flex-col gap-[12px] w-full">
//         {/* Header: Create Task Button */}
//         <TaskHeader total={tasks.length} onCreate={onCreate} />

//         {/* Status Filters */}
//         <div className="flex justify-center gap-[17px] w-full">
//           {STATUS_LIST.map((status) => {
//             const count = tasks.filter((t) => t.status === status).length;
//             const isActive = filter === status;
//             const isDisabled = noneAtAll;

//             return (
//               <button
//                 key={status}
//                 disabled={isDisabled}
//                 className={`px-4 py-2 rounded ${
//                   isActive ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
//                 }`}
//                 onClick={() => onFilterChange(status)}
//               >
//                 {status} ({count})
//               </button>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

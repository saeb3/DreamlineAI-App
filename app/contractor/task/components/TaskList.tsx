// app/contractor/task/components/TaskList.tsx
"use client";

import React from "react";
import Image from "next/image";
import type { Task } from "./TaskSection";

// Deterministic section order (no external import)
const ORDER = [
  "Completed",
  "In progress",
  "Pending",
  "Overdue",
] as const satisfies readonly Task["status"][];

// Minimal style helpers
const leftBorder = (s: Task["status"]) =>
  s === "Overdue" ? "border-l-[#D53E2A]" : "border-l-[#0070E0]";

const statusText = (s: Task["status"]) =>
   s === "Completed"   ? "text-black"
   : s === "In progress" ? "text-[#163500]"
   : s === "Pending"     ? "text-[#0057A0]"
   :                       "text-[#D53E2A]";

export interface TaskListProps {
  tasks: Task[];
  title?: string;
  onEdit?: (task: Task) => void;
}
export function TaskList({ tasks, title = "All Tasks", onEdit }: TaskListProps) {
  // group by status
  const grouped: Record<Task["status"], Task[]> = {
    Completed: [],
    "In progress": [],
    Pending: [],
    Overdue: [],
  };
  for (const t of tasks) grouped[t.status].push(t);

  return (
    <section className="flex flex-col items-center w-full gap-4">
      {/* All Task header */}
      <div className="w-full px-2">
        <span className="font-poppins font-semibold text-[16px] leading-[24px] text-black">
         {title}
        </span>
      </div>

      {ORDER.map((status) =>
        grouped[status].length ? (
          <div key={status} className="w-full px-2">
            
            {grouped[status].map((task) => (
              <div
                key={task.id}
                className="w-full flex flex-col gap-2 bg-white rounded-md shadow-sm mb-3"
              >
            
                <div className="flex items-center justify-between px-3 pt-3">
                  <span className={`text-[12px] leading-[18px] font-medium ${statusText(task.status)}`}>
                    {task.status}
                  </span>

                  <Image
                    src="/images/contractor/task/more-vertical.png"
                    alt="more"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                </div>

                {/* gray content with colored left border */}
                <div
                  className={[
                    "flex flex-col items-start bg-[#F5F5F5] rounded-xl",
                    "border-l-2 mx-3 px-3 py-3 gap-2",
                    leftBorder(task.status),
                  ].join(" ")}
                >
                  <h4 className="font-poppins font-semibold text-[16px] leading-[24px] text-black w-full">
                    {task.title}
                  </h4>
                  {task.description && (
                    <p className="font-poppins text-[12px] leading-[18px] text-black w-full">
                      {task.description}
                    </p>
                  )}
                </div>

                {/* footer */}
                <div className="flex flex-row items-center px-3 pb-3 pt-2 gap-6">
                  <div className="flex items-center gap-1">
                    <Image
                      src="/images/contractor/task/calendar.png"
                      alt="calendar"
                      width={12}
                      height={12}
                    />
                    <span className="font-poppins text-[10px] leading-[15px] text-black">
                      {task.startDate}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <Image
                      src="/images/contractor/task/users.png"
                      alt="assigned"
                      width={12}
                      height={12}
                    />
                    <span className="font-poppins text-[10px] leading-[15px] text-black">
                      {task.assignedCount ?? 0} Assigned
                    </span>
                  </div>

                  {task.hasFiles ? (
                    <div className="flex items-center gap-1">
                      <Image
                        src="/images/contractor/task/file.png"
                        alt="files"
                        width={18}
                        height={18}
                      />
                      <span className="font-poppins text-[10px] leading-[15px] text-black">
                        Files
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 opacity-0 select-none">
                      <Image src="/images/contractor/task/file.png" alt="" width={18} height={18} />
                      <span className="font-poppins text-[10px] leading-[15px]">Files</span>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => onEdit?.(task)}
                    className="ml-auto inline-flex items-center rounded-full border border-blue-500 px-3 py-[2px] text-[12px] font-medium text-blue-600 hover:bg-blue-50"
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : null
      )}
    </section>
  );
}


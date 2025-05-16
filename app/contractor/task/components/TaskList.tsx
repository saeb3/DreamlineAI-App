"use client";

import React from "react";
import Image from "next/image";
import type { Task } from "./TaskSection"; // Import Task type

// Props for TaskList component
interface TaskListProps {
  tasks: Task[];
}

export function TaskList({ tasks }: TaskListProps) {
  return (
    <section className="flex flex-col items-center w-full px-0 py-0 gap-3">
      {/* All Task Header */}
      <div className="flex flex-row items-center w-full px-0 py-0 mb-3">
        <span className="font-poppins font-semibold text-[16px] leading-[24px] text-black">
          All Task
        </span>
      </div>

      {/* Render each task as a card */}
      {tasks.map((task) => (
        <div
          key={task.id}
          className="w-[366px] flex flex-col gap-2 bg-white rounded-xl shadow-sm mb-2"
        >
          {/* Card Header: Status label and More icon */}
          <div className="flex flex-row justify-between items-center px-3 pt-3">
            {/* Status label with color based on task status */}
            <span
              className={`font-poppins font-normal text-[12px] leading-[18px] ${
                task.status === "Completed"
                  ? "text-black"
                  : task.status === "In progress"
                  ? "text-[#163500]"
                  : task.status === "Pending"
                  ? "text-[#0057A0]"
                  : "text-[#D53E2A]"
              }`}
            >
              {task.status}
            </span>
            {/* More icon (three dots) */}
            <Image
              src="/images/contractor/task/more-vertical.png"
              alt="more"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </div>

          {/* Card Main: Title and description */}
          <div className="flex flex-col items-start bg-[#F5F5F5] rounded-xl border-l-2 border-[#0070E0] mx-3 px-3 py-3 gap-2">
            {/* Task title */}
            <h4 className="font-poppins font-semibold text-[16px] leading-[24px] text-black text-left w-full">
              {task.title}
            </h4>
            {/* Task description (optional) */}
            {task.description && (
              <p className="font-poppins font-normal text-[12px] leading-[18px] text-black text-left w-full">
                {task.description}
              </p>
            )}
          </div>

          {/* Card Footer: Date, assigned count, and files */}
          <div className="flex flex-row items-center px-3 pb-3 pt-2 gap-6">
            {/* Date info */}
            <div className="flex flex-row items-center gap-1">
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
            {/* Assigned count */}
            <div className="flex flex-row items-center gap-1">
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
            {/* File info: Only show if hasFiles is true, otherwise render invisible placeholder to preserve layout */}
            {task.hasFiles ? (
              <div className="flex flex-row items-center gap-1">
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
              // Invisible placeholder for layout
              <div className="flex flex-row items-center gap-1 opacity-0 select-none">
                <Image
                  src="/images/contractor/task/file.png"
                  alt=""
                  width={18}
                  height={18}
                />
                <span className="font-poppins text-[10px] leading-[15px]">Files</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}

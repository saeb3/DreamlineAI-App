// app/contractor/task/components/NoTasksPlaceholder.tsx
"use client";
import React from "react";

export function NoTasksPlaceholder() {
  return (
    <div className="flex flex-1 justify-center items-center">
      <img
        src="/images/contractor/task/no-task.svg"
        alt="No tasks illustration"
        className="w-[269px] h-[311px]"
      />
    </div>
  );
}

// app/contractor/task/components/StatusFilterButton.tsx
"use client";
import React from "react";
import Image from "next/image";
import { FilterType } from "./TaskSection";

interface StatusFilterButtonProps {
  status: FilterType;
  count: number;
  isActive: boolean;
  disabled: boolean;
  onClick: () => void;
}

export function StatusFilterButton({
  status,
  count,
  isActive,
  disabled,
  onClick,
}: StatusFilterButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`
        flex flex-col justify-center items-start
        p-[6px] gap-[4px]
        w-[84px] h-[72px]
        border border-[0.5px] border-[#CCCCCC]
        rounded-[8px]
        text-xs leading-[18px]
        ${isActive
          ? "bg-[#0070E0] text-white"
          : disabled
            ? "bg-white cursor-not-allowed"
            : "bg-white text-black hover:bg-gray-100"
        }
      `}
    >
      {/* Icon */}
      <div className="relative w-[19px] h-[18px] rounded-full overflow-hidden">
        <Image
          src={`/images/contractor/task/${status === "Completed"
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
    </button>
  );
}

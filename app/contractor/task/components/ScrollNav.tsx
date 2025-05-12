"use client";

import React from "react";

export type ScrollNavItem = {
  key: string;           // Unique key for React
  label: string;         // Visible text label
  active: boolean;       // Whether this tab is currently active
  onClick: () => void;   // Handler when this tab is clicked
};

export interface ScrollNavProps {
  items: ScrollNavItem[]; // Array of items to render
}

/**
 * ScrollNav
 * Renders a full-width, horizontally scrollable navigation bar with tabs.
 */
export function ScrollNav({ items }: ScrollNavProps) {
  return (
    <nav
      className={
        `
        w-full               
        flex flex-row items-center
        px-3 py-0 gap-3
        overflow-x-auto
        bg-white border-b border-gray-300
      `}
    >
      {items.map(({ key, label, active, onClick }) => (
        <button
          key={key}
          onClick={onClick}
          className={
            `
            flex items-center justify-center
            py-2 px-1 gap-[10px]
            flex-none w-[100px] ${active ? "h-[45px]" : "h-[37px]"}
            ${active
              ? "border-b-2 border-blue-600 text-blue-600"
              : "bg-white text-black hover:text-gray-800"
            }
          `}
        >
          <span className="font-poppins font-normal text-sm leading-[100%]">
            {label}
          </span>
        </button>
      ))}
    </nav>
  );
}

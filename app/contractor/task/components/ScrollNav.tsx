"use client";

import React from "react";

export type ScrollNavItem = {
  key: string;
  label: string;
  active: boolean;
  onClick: () => void;
};

export interface ScrollNavProps {
  activeTab: string;
  items: ScrollNavItem[];
}

/**
 * ScrollNav
 * Renders a full-width, horizontally scrollable navigation bar with tabs.
 */
export default function ScrollNav({ activeTab, items }: ScrollNavProps) {
  return (
    <div className="relative w-full bg-gray-50">
      {/* Welcome Image */}
      {!activeTab && (
        <img
          src="/images/Dashboard/Frame 1000002715.jpg"
          alt="Dashboard Welcome"
          className="absolute object-contain"
          style={{
            width: "405px",
            height: "372px",
            top: "168px",
            left: "12.5px",
          }}
        />
      )}

      {/* Scrollable Navigation Tabs */}
      <nav className="w-full flex flex-row items-center px-3 gap-3 overflow-x-auto no-scrollbar bg-white border-b border-gray-300">
        {items.map(({ key, label, active, onClick }) => (
          <button
            key={key}
            onClick={onClick}
            className={`
              flex items-center justify-center
              py-2 px-1 flex-none w-[100px]
              ${
                active
                  ? "h-[45px] border-b-2 border-blue-600 text-blue-600"
                  : "h-[37px] text-black hover:text-gray-800"
              }
            `}
          >
            <span className="font-poppins text-sm">{label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

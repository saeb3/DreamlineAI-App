// app/contractor/task/components/CreateTask.tsx
"use client";

import React, { useMemo, useRef, useState } from "react";
import type { Task, FilterType } from "./TaskSection";
import { CalendarDays, Plus, UserRoundPlus, ListChecks } from "lucide-react";

interface CreateTaskProps {
  onCancel: () => void;
  onSubmit: (task: Omit<Task, "id">) => void;
}

function todayISO() {
  const d = new Date();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${m}-${day}`;
}

// Pretty date for right-side label (e.g., "10 Aug 2024")
const fmt = (v: string) =>
  v
    ? new Date(v).toLocaleDateString(undefined, {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "";

// A clickable row with a calendar icon; clicking opens the native date picker.
// The input is invisible but sits on top to capture clicks and open the picker.
function DateRow({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  const openPicker = () => {
    const el = inputRef.current;
    if (!el) return;
    try {
      el.focus();
      // @ts-ignore - showPicker is not in TS DOM typings in some setups
      if (typeof el.showPicker === "function") el.showPicker();
      else el.click();
    } catch {
      el.click();
    }
  };

  return (
    <div className="flex items-center gap-2 h-12">
      {/* calendar icon opens the native picker */}
      <button type="button" onClick={openPicker} className="p-1 -ml-1">
        <CalendarDays className="w-4 h-4 text-gray-600" />
      </button>

      {/* label text */}
      <span className="text-sm font-semibold text-black">{label}</span>

      {/* visually-hidden date input used to trigger the picker */}
      <input
        ref={inputRef}
        type="date"
        aria-label={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="sr-only"
      />
    </div>
  );
}


export function CreateTask({ onCancel, onSubmit }: CreateTaskProps) {
  const defaultDate = useMemo(() => todayISO(), []);
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState(defaultDate);
  const [endDate, setEndDate] = useState(defaultDate);

  // UI-only lists; collapse to assignedCount for Task payload
  const [people, setPeople] = useState<string[]>(["", ""]);
  const [subTasks, setSubTasks] = useState<string[]>(["", ""]);
  const [useSubTasks, setUseSubTasks] = useState(true);

  const [touched, setTouched] = useState(false);

//  const invalid =
//    !title.trim() ||
//    !startDate ||
//    !endDate ||
//    new Date(startDate) > new Date(endDate);

  const invalid = !title.trim();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);

    if (new Date(startDate) > new Date(endDate)) {
        // touched=true will trigger your inline error message
        return;
    }
    if (invalid) return;

    const assignedCount = people.filter((p) => p.trim()).length || undefined;

    onSubmit({
      title: title.trim(),
      status: "In progress" as FilterType, // default; change if needed
      startDate,
      endDate,
      assignedCount,
      hasFiles: false,
      // description?: add if you add a textarea
    });
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 py-4">
      <h3 className="text-xl font-semibold text-black mb-3">New Task</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Card: Task Title + Time (combined) */}
        <div className="rounded-2xl bg-[#ffffff] p-4 space-y-5">
          {/* Task Title */}
          <div>
            <div className="text-sm font-semibold text-gray-700 mb-2">Task Title</div>
            <input
              className="w-full h-12 rounded-2xl border border-black-100 px-4 text-[16px] font-semibold outline-none focus:border-[#0070E0]"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {touched && !title.trim() && (
              <p className="mt-1 text-xs text-red-600">Title is required.</p>
            )}
          </div>

          {/* Time */}
          <div>
            <div className="text-sm font-semibold text-gray-700">Time</div>

            <DateRow label="Starting date" value={startDate} onChange={setStartDate} />

            <DateRow label="End date" value={endDate} onChange={setEndDate} />

            {touched && new Date(startDate) > new Date(endDate) && (
              <p className="text-xs text-red-600">End date must be after start date.</p>
            )}
          </div>
        </div>

        {/* Card: Add People */}
        <div className="rounded-xl bg-[#ffffff] p-4 space-y-3">
          <div className="flex items-center gap-2">
            <UserRoundPlus className="w-4 h-4 text-gray-700" />
            <div className="text-sm font-medium text-gray-700">Add People</div>
          </div>

          {people.map((email, idx) => (
            <input
              key={idx}
              type="email"
              placeholder="Write Email Address.."
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => {
                const next = [...people];
                next[idx] = e.target.value;
                setPeople(next);
              }}
            />
          ))}

          <button
            type="button"
            onClick={() => setPeople((prev) => [...prev, ""])}
            className="inline-flex items-center gap-2 rounded-lg border border-blue-600 px-3 py-2 text-sm text-blue-600 hover:bg-blue-50"
          >
            <Plus className="w-4 h-4" /> Add People
          </button>
        </div>

        {/* Card: Sub Task */}
        <div className="rounded-xl bg-[#ffffff] p-4 space-y-3">
          <div className="flex items-center gap-2">
            <input
              id="use-subtasks"
              type="checkbox"
              checked={useSubTasks}
              onChange={(e) => setUseSubTasks(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300"
            />
            <label htmlFor="use-subtasks" className="text-sm font-medium text-gray-700">
              Sub Task
            </label>
          </div>

          {useSubTasks &&
            subTasks.map((t, idx) => (
              <input
                key={idx}
                placeholder="Write task.."
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                value={t}
                onChange={(e) => {
                  const next = [...subTasks];
                  next[idx] = e.target.value;
                  setSubTasks(next);
                }}
              />
            ))}

          {useSubTasks && (
            <button
              type="button"
              onClick={() => setSubTasks((prev) => [...prev, ""])}
              className="inline-flex items-center gap-2 rounded-lg border border-blue-600 px-3 py-2 text-sm text-blue-600 hover:bg-blue-50"
            >
              <Plus className="w-4 h-4" /> Add sub task
            </button>
          )}
        </div>

        {/* Actions */}
        <div className="pt-2 space-y-3">
          <button
            type="submit"
            disabled={invalid}
            className={`w-full rounded-full px-5 py-3 text-white text-sm font-semibold ${
              invalid ? "bg-blue-400 cursor-not-allowed" : "bg-[#0070E0] hover:bg-blue-600"
            }`}
          >
            Create task
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="w-full rounded-full px-5 py-3 text-sm font-semibold border border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

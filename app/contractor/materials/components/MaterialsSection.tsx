"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { LampCeiling, PanelsTopLeft, Plug, Wrench } from "lucide-react";
import AddMaterial, {
  type MaterialCard,
  type CategoryKey,
} from "./AddMaterial";

// ---- Shared-ish bits (list screen) ---------------------------------------
type StatusKey = "IN_STOCK" | "LOW_STOCK" | "NO_STOCK";

const STATUS: Record<StatusKey, { text: string; color: string; bg: string }> = {
  IN_STOCK: { text: "In stock", color: "text-emerald-600", bg: "bg-emerald-50" },
  LOW_STOCK: { text: "Low Stock", color: "text-amber-600", bg: "bg-amber-50" },
  NO_STOCK: { text: "No Stock", color: "text-rose-600", bg: "bg-rose-50" },
};

const CATEGORIES = [
  { key: "light", label: "Light", icon: LampCeiling },
  { key: "window", label: "Window", icon: PanelsTopLeft },
  { key: "appliance", label: "Appliance", icon: Plug },
  { key: "tools", label: "Tools", icon: Wrench },
] as const;

const CATEGORY_TO_GROUP: Record<CategoryKey, string> = {
  light: "Lighting",
  window: "Window",
  appliance: "Appliance",
  tools: "Tools",
};

const INITIAL_MATERIALS: MaterialCard[] = [
  {
    project: "Home renovation & Construction",
    date: "2024-04-24",
    status: "NO_STOCK",
    group: "Window",
    lines: [
      { qty: 1, title: "Double glass window" },
      { qty: 0, title: "Triple Pane install" },
      { qty: 0, title: "Thermal Window frames" },
    ],
  },
  {
    project: "Home renovation & Construction",
    date: "2024-05-02",
    status: "IN_STOCK",
    group: "Lighting",
    lines: [
      { qty: 10, title: "Triple Pane install" },
      { qty: 10, title: "Thermal Window frames" },
    ],
  },
  {
    project: "Home renovation & Construction",
    date: "2024-05-08",
    status: "IN_STOCK",
    group: "Appliance",
    lines: [
      { qty: 10, title: "Triple Pane install" },
      { qty: 10, title: "Thermal Window frames" },
      { qty: 10, title: "Thermal Window frames" },
      { qty: 10, title: "Thermal Window frames" },
    ],
  },
  {
    project: "Home renovation & Construction",
    date: "2024-05-15",
    status: "LOW_STOCK",
    group: "Window",
    lines: [
      { qty: 10, title: "Triple Pane install" },
      { qty: 10, title: "Thermal Window frames" },
    ],
  },
  {
    project: "Home renovation & Construction",
    date: "2024-05-21",
    status: "IN_STOCK",
    group: "Window",
    lines: [
      { qty: 30, title: "Triple Pane install" },
      { qty: 30, title: "Thermal Window frames" },
    ],
  },
];

const RECENTS_COUNT = 3;
const formatDMY = (iso?: string) =>
  iso ? new Date(iso).toLocaleDateString("en-GB") : "";

// ---- Main component -------------------------------------------------------
export default function MaterialsSection() {
  type Mode = "list" | "form";
  const [mode, setMode] = useState<Mode>("list");

  const [items, setItems] = useState<MaterialCard[]>(INITIAL_MATERIALS);

  const [materialsFilter, setMaterialsFilter] = useState<"all" | "recents">("all");
  const [filterOpen, setFilterOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);
  const [activeProject, setActiveProject] = useState("Active Projects");
  const [category, setCategory] = useState<CategoryKey | null>(null);

  const filterLabel = materialsFilter === "all" ? "All Materials" : "Recents";

  const list = useMemo(() => {
    let arr = [...items];

    if (category) {
      const group = CATEGORY_TO_GROUP[category];
      arr = arr.filter((card) => card.group === group);
    }

    arr.sort(
      (a, b) =>
        (new Date(b.date ?? 0).getTime() || 0) -
        (new Date(a.date ?? 0).getTime() || 0)
    );

    if (materialsFilter === "recents") {
      arr = arr.slice(0, RECENTS_COUNT);
    }

    return arr;
  }, [items, materialsFilter, category, activeProject]);

  const isEmpty = list.length === 0;

  if (mode === "form") {
    return (
      <AddMaterial
        onCancel={() => setMode("list")}
        onSaved={(newCard) => {
          setItems((prev) => [newCard, ...prev]);
          // success overlay handled inside AddMaterial, then it calls onCancel()
        }}
      />
    );
  }

  return (
    <div className="w-full max-w-md mx-auto bg-gray-100 text-gray-900">
      {/* Categories + Add button */}
      <section className="mt-4 bg-white shadow-sm pt-6 pb-1">
        <div className="px-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-black">Categories</h2>
            <button
              className="w-[180px] h-10 rounded-full bg-blue-600 text-white text-lg font-bold hover:bg-sky-500 flex items-center justify-center"
              onClick={() => setMode("form")}
            >
              Add material
            </button>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-4 gap-3 px-4">
          {CATEGORIES.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setCategory(category === key ? null : key)}
              className="flex flex-col items-center justify-center py-3"
              aria-pressed={category === key}
            >
              <div
                className={`w-12 h-12 rounded-full border flex items-center justify-center ${
                  category === key ? "border-blue-500 bg-blue-50" : "border-blue-500 bg-white"
                }`}
              >
                {/* Icons: light black; don’t turn blue */}
                <Icon className="w-6 h-6 text-gray-600" strokeWidth={1.5} />
              </div>
              <span
                className={`mt-2 text-sm ${category === key ? "text-blue-600" : "text-gray-700"}`}
              >
                {label}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Filters Row */}
      <section className="mt-6 px-4">
        <div className="p-1 flex items-center justify-between">
          {/* Left: Materials dropdown */}
          <div className="relative">
            <button
              onClick={() => setFilterOpen((v) => !v)}
              className="text-sm text-gray-700 flex items-center gap-1"
            >
              <span className="font-bold text-lg">{filterLabel}</span>
              {filterOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            {filterOpen && (
              <div className="absolute left-0 mt-2 w-48 rounded-xl bg-white border border-gray-200 shadow-lg overflow-hidden z-10">
                <div className="px-4 py-3 text-sm font-bold">Materials</div>
                <hr className="my-1 mx-4 border-0 border-t border-gray-200" />
                <button
                  className={`block w-full text-left px-4 py-3 text-sm hover:bg-gray-50 ${
                    materialsFilter === "all" ? "text-gray-900" : "text-gray-600"
                  }`}
                  onClick={() => {
                    setMaterialsFilter("all");
                    setFilterOpen(false);
                  }}
                >
                  All materials
                </button>
                <button
                  className={`block w-full text-left px-4 pt-1 pb-3 text-sm hover:bg-gray-50 ${
                    materialsFilter === "recents" ? "text-gray-900" : "text-gray-600"
                  }`}
                  onClick={() => {
                    setMaterialsFilter("recents");
                    setFilterOpen(false);
                  }}
                >
                  Recents
                </button>
              </div>
            )}
          </div>

          {/* Right: Active project */}
          <div className="relative">
            <button
              onClick={() => setProjectOpen((v) => !v)}
              className="text-xs bg-sky-50 text-sky-700 border border-sky-200 rounded-lg px-3 py-2 flex items-center gap-1"
            >
              <span>{activeProject}</span>
              {projectOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {projectOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white border border-gray-200 shadow-lg overflow-hidden z-10">
                <button
                  onClick={() => {
                    setActiveProject("Active Projects");
                    setProjectOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 text-sm hover:bg-gray-50 ${
                    activeProject === "Active Projects" ? "text-gray-900" : "text-gray-600"
                  }`}
                >
                  Active Projects
                </button>

                <button
                  onClick={() => {
                    setActiveProject("Inactive Projects");
                    setProjectOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 text-sm hover:bg-gray-50 ${
                    activeProject === "Inactive Projects" ? "text-gray-900" : "text-gray-600"
                  }`}
                >
                  Inactive Projects
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Cards / Empty State */}
      <section className="mt-3 space-y-4 px-0">
        {isEmpty ? (
          <div className="bg-white pt-6 pb-10 flex flex-col items-center">
            <div className="mt-6 px-6 w-full flex justify-center">
              <Image
                src="/images/Dashboard/Materials/Frame 1000003129.png"
                alt="Nothing Found illustration"
                width={431}
                height={290}
                priority
                className="max-w-full h-auto"
              />
            </div>
            <p className="mt-4 text-lg font-semibold text-gray-900">Nothing Found</p>
          </div>
        ) : (
          <>
            {(() => {
              let lastDate = "";
              return list.map((card, idx) => {
                const showDate = !!card.date && card.date !== lastDate;
                if (showDate) lastDate = card.date!;

                return (
                  <React.Fragment key={idx}>
                    {showDate && (
                      <div className="px-4 py-0 text-sm text-gray-700">
                        {formatDMY(card.date)}
                      </div>
                    )}

                    <article className="bg-white overflow-hidden">
                      <div className="px-4 pt-4 flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900 max-w-[70%] leading-tight">
                          {card.project}
                        </h3>
                        <span
                          className={`text-[11px] px-2 py-1 rounded-full ${STATUS[card.status].bg} ${STATUS[card.status].color} font-medium`}
                        >
                          {STATUS[card.status].text}
                        </span>
                      </div>

                      <div className="m-4 bg-gray-50 p-4 rounded-xl">
                        <p className="text-md text-gray-700 mb-3">{card.group}</p>
                        <div>
                          {card.lines.map((l, i) => (
                            <div key={i} className="py-2 flex items-center gap-3">
                              <div className="w-10 h-5 rounded-md bg-white border border-gray-100 flex items-center justify-center text-xs text-gray-600">
                                {l.qty}
                              </div>
                              <p className="text-sm text-gray-700">{l.title}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </article>
                  </React.Fragment>
                );
              });
            })()}
          </>
        )}
      </section>
    </div>
  );
}

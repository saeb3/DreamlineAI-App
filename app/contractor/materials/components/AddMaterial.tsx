"use client";

import React, { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

// ———————————————————————————————————————
// Config
// ———————————————————————————————————————
const REQUIRE_FIELDS = false; // set to true to enforce validation before showing Success

// ———————————————————————————————————————
// Types & constants (form-only)
// ———————————————————————————————————————
const CATEGORIES = [
  { key: "light", label: "Light" as const },
  { key: "window", label: "Window" as const },
  { key: "appliance", label: "Appliance" as const },
  { key: "tools", label: "Tools" as const },
] as const;

export type CategoryKey = (typeof CATEGORIES)[number]["key"];
export type StatusKey = "IN_STOCK" | "LOW_STOCK" | "NO_STOCK";
export type Line = { qty: number; title: string };
export type MaterialCard = {
  project: string;
  date?: string;
  status: StatusKey;
  group: string;
  lines: Line[];
};

const CATEGORY_TO_GROUP: Record<CategoryKey, string> = {
  light: "Lighting",
  window: "Window",
  appliance: "Appliance",
  tools: "Tools",
};


// Success overlay (via portal)
function SuccessOverlay({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute inset-0 z-50 bg-black/40">
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="w-full max-w-[260px] rounded-2xl bg-white shadow-xl overflow-hidden">
          <div className="px-6 pt-6 pb-5 text-center">
            <div className="mx-auto mb-4 w-28 h-28 sm:w-32 sm:h-32">
              <Image
                src="/images/Dashboard/Materials/success.png"
                alt="Success"
                width={128}
                height={128}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <p className="font-semibold text-lg">Success!</p>
            <p className="text-sm text-gray-600 mt-1">
              Your Dreamline material page has been saved successfully.
            </p>
            <button
              onClick={onClose}
              className="mt-4 mx-auto rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-1 px-6 w-[140px]"
            >
              Homepage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}




// Main Add Material form
type AddFormProps = {
  onCancel: () => void;
  onSaved: (newCard: MaterialCard) => void;
};

export default function AddMaterial({ onCancel, onSaved }: AddFormProps) {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [qtyOpen, setQtyOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [category, setCategory] = useState<CategoryKey | null>(null);
  const [materialName, setMaterialName] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [quantity, setQuantity] = useState<number | null>(null);
  const [totalCost, setTotalCost] = useState("");

  const qtyOptions = [20, 40, 50, 80, 100];

  const canSaveStrict =
    !!category &&
    !!materialName.trim() &&
    !!pickupDate &&
    quantity !== null &&
    !!totalCost.trim();

  const canSave = REQUIRE_FIELDS ? canSaveStrict : true;

  const handleSave = () => {
    // create a minimal item even if fields aren’t all filled (for wiring)
    const group = category ? CATEGORY_TO_GROUP[category] : "Lighting";
    const card: MaterialCard = {
      project: "Home renovation & Construction",
      date: pickupDate || new Date().toISOString().slice(0, 10),
      status: quantity && quantity > 0 ? "IN_STOCK" : "NO_STOCK",
      group,
      lines: [
        {
          qty: quantity ?? 1,
          title: materialName.trim() || "New Material",
        },
      ],
    };

    // notify parent so list updates
    onSaved(card);

    // show success immediately
    setShowSuccess(true);
  };

  return (
    <div className="relative w-full max-w-md mx-auto bg-gray-100 text-gray-900">
      {showSuccess && <SuccessOverlay onClose={onCancel} />}

      {/* hero strip */}
      <div className="relative w-full h-40">
        <Image
          src="/images/Dashboard/Materials/house.png"
          alt="Add Material Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <p className="text-xs tracking-wide font-bold">Welcome To The Add Material Page</p>
          <p className="text-[11px] opacity-90">
            Add recent materials bought and also all material needed for this project
          </p>
        </div>
      </div>

      {/* form */}
      <div className="px-4 pb-2 pt-4 space-y-4">
        {/* Category */}
        <div>
          <label className="block text-xs text-black-600 mb-1">Category</label>
          <div className="relative">
            <button
              onClick={() => setCategoryOpen((v) => !v)}
              className="w-full h-11 rounded-xl border border-gray-200 px-3 text-sm flex items-center justify-between"
            >
              <span className={category ? "text-gray-900" : "text-gray-400"}>
                {category ? CATEGORY_TO_GROUP[category] : "Categories of material"}
              </span>
              {categoryOpen ? <ChevronUp /> : <ChevronDown />}
            </button>

            {categoryOpen && (
              <div className="absolute z-10 mt-2 w-full rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
                <div className="px-4 py-2 text-xs font-semibold text-black-500">Category</div>
                {(CATEGORIES as readonly { key: CategoryKey; label: string }[]).map((c) => (
                  <button
                    key={c.key}
                    onClick={() => {
                      setCategory(c.key);
                      setCategoryOpen(false);
                    }}
                    className="block w-full text-left px-4 py-3 text-sm hover:bg-gray-50"
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Material Name */}
        <div>
          <label className="block text-xs text-black-500 mb-1">Material Name</label>
          <input
            value={materialName}
            onChange={(e) => setMaterialName(e.target.value)}
            placeholder="Write the type of material"
            className="w-full h-11 rounded-xl border border-gray-200 px-3 text-sm"
          />
        </div>

        {/* Pickup date */}
        <div>
          <label className="block text-xs text-black-500 mb-1">Pickup date</label>
          <input
            type="date"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            className="w-full h-11 rounded-xl border border-gray-200 px-3 text-sm"
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-xs text-black-500 mb-1">Quantity of material</label>
          <div className="relative">
            <button
              onClick={() => setQtyOpen((v) => !v)}
              className="w-full h-11 rounded-xl border border-gray-200 px-3 text-sm flex items-center justify-between"
            >
              <span className={quantity !== null ? "text-gray-900" : "text-gray-400"}>
                {quantity !== null ? quantity : "Quantity of material"}
              </span>
              {qtyOpen ? <ChevronUp /> : <ChevronDown />}
            </button>

            {qtyOpen && (
              <div className="absolute z-10 mt-2 w-full rounded-xl border border-gray-200 shadow-lg overflow-hidden">
                <div className="px-4 py-2 text-xs font-semibold text-gray-700">Quantity</div>
                {[20, 40, 50, 80, 100].map((q) => (
                  <button
                    key={q}
                    onClick={() => {
                      setQuantity(q);
                      setQtyOpen(false);
                    }}
                    className="block w-full text-left px-4 py-3 text-sm hover:bg-gray-50"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Total cost */}
        <div>
          <label className="block text-xs text-black-500 mb-1">Total cost($)</label>
          <input
            value={totalCost}
            onChange={(e) => setTotalCost(e.target.value)}
            placeholder="Write the total cost"
            className="w-full h-11 rounded-xl border border-gray-200 px-3 text-sm"
          />
        </div>

        {/* Actions */}
        <div className="pt-8">
          <button
            disabled={!canSave}
            onClick={handleSave}
            className={`w-full h-11 rounded-full text-white font-bold ${
              canSave ? "bg-blue-600 hover:bg-blue-500" : "bg-blue-300 cursor-not-allowed"
            }`}
          >
            Save
          </button>
          <button
            onClick={onCancel}
            className="w-full mt-3 h-11 rounded-full border border-gray-200 text-gray-700 text-sm"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

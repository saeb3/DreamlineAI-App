'use client';

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-gray-100 flex justify-start items-start py-6">
      {/* Phone frame pinned left */}
      <div className="w-[390px] bg-white min-h-[820px] rounded-xl shadow-lg overflow-hidden ml-6">
        {children}
      </div>
    </main>
  );
}

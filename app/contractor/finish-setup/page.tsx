// app/profile-setup/page.tsx (App Router)
"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ProfileSetupPage() {
  const router = useRouter();

  const handleFinishSetup = () => {
    router.push("/contractor/complete-profile");
  };

  return (
    <div className="flex max-w-md min-h-screen flex-col bg-gray-50">
      <header className="flex items-center justify-between px-4 py-4 shadow-sm bg-white">
        <Image src="/images/logo.png" alt="Dreamline" width={150} height={50} />
        <button className="block text-gray-600 md:hidden" aria-label="Menu">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M4 5h16M4 12h16M4 19h16" />
          </svg>
        </button>
      </header>

      <main className="flex flex-1 flex-col items-center p-4 text-black">
        <div className="w-full max-w-md rounded-lg bg-white shadow-md">
          <div className="relative">
            <div className="rounded-t-lg h-56 relative from-blue-900 to-blue-800">
              <Image
                src="/images/contractor/contractor-banner.png"
                alt="Network Background"
                layout="fill"
                objectFit="cover"
                priority
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-3xl font-bold text-white">
                  Ellie & co: contractors
                </h1>
              </div>

              <div className="absolute -bottom-8 left-8 z-10">
                <div className="rounded-full border-4 border-white h-28 w-28">
                  <Image
                    src="/images/contractor/profile-picture.png"
                    alt="Profile"
                    width={112}
                    height={112}
                  />
                </div>
              </div>
            </div>

            <div className="pt-16 px-8 pb-8">
              <h2 className="text-3xl font-bold mb-4">Complete your profile</h2>

              <p className="text-gray-600 mb-12">
                Answer a couple questions to complete your profile and speed up
                the process of applying for incentives. It takes 5 minutes.
              </p>

              <button
                onClick={handleFinishSetup}
                className="mt-4 w-full rounded-2xl bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 cursor-pointer focus:outline-none"
              >
                Finish Setup
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

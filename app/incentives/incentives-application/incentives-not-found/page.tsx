"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";

const IncentivesNotFound = () => {

  const [activeContent, setActiveContent] = useState("home");
  const [value, setValue] = useState("home");
  
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push("#")
  };

  return (
    <div className="flex max-w-md min-h-screen flex-col">
      <header className="flex items-center justify-between px-4 py-4 shadow-sm bg-white">
        <Image 
          src="/images/logo.png"
          alt="Dreamline Logo"
          width={80}
          height={50}
        />
        <button className="text-3xl">☰</button>
      </header>

      <main className="flex flex-1 flex-col bg-gray-50 text-black">
          <div className="w-full bg-white mt-2 flex flex-relative px-4 py-7">
            <a href="/subscription-cancel" style={{textDecorationColor: "gray"}} className="flex items-center text-blue-600 hover:underline text-gray-700">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
            </a>
            <h1 className="text-2xl ml-10"><b>Incentives Applications</b></h1>
          </div>

          <div className="w-full bg-white mt-4 p-4">
            <h1 className="text-lg text-gray-800"><b>Categories</b></h1>
            <br></br>
            <button
              type="button"
              className="mx-2 bg-gray-100 text-gray-600 text-md rounded-full py-2 px-4 font-medium hover:bg-gray-200 transition"
            >
              Manage Incentives
            </button>

            <button
              type="button"
              className="mx-2 bg-blue-100 text-blue-600 text-md rounded-full py-2 px-4 font-medium hover:bg-blue-200 transition"
            >
              Applications
            </button>
          </div>


          <div className="flex relative mx-5 my-5">
            <div className="font-bold"> 
            <select
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="p-3"
            >
              <option value="all-applications">All Applications</option>
              <option value="approved">Approved Applications</option>
              <option value="rejected">Rejected Applications</option>
            </select>
          </div>

          <div className="mx-10 font-bold text-blue-500"> 
            <select
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="p-3"
            >
              <option value="all-applications">Filter</option>
              <option value="all-applications">Relevance</option>
              <option value="approved">Most Recent</option>
            </select>
          </div>
          </div>
        
        <div className="bg-white my-10 mx-15 p-3 shadow-sm rounded-2xl h-110">
            <Image 
                className="p-4 mx-4"
                src="/images/incentives/incentives-not-found.png"
                alt="Incentives Not Found"
                width={300}
                height={350}
            />
            <br></br>
            <h1 className="text-2xl text-center"><b>Nothing Found</b></h1>
            <br></br>
            <h1 className="text-blue-500 text-center text-lg"><a href="#"><u>Go back to homepage</u></a></h1>
        </div>


      </main>
    </div>
  );
};

export default IncentivesNotFound;
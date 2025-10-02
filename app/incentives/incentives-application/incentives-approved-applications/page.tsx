"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";

const IncentivesApprovedApplications = () => {

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
              <option value="all-applications">Approved Applications</option>
              <option value="approved">All Applications</option>
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
          





          <div className="border-l-4 border-blue-500 mx-5 mb-5 bg-white rounded-xl">
            <table>
              <tbody>
                <tr>
                  <td className="py-4 align-top">
                    <Image className="rounded-lg ml-2" src="/images/incentives/incentives-application.png" alt="Logo" width={60} height={60} />
                  </td>
                  <td className="py-4 pr-4 pl-4 align-top">
                    <div className="flex relative"> 
                      <h1 className="text-lg truncate w-60"><b>Triple-pane window Installation</b></h1>
                      <h1 className="text-blue-500 text-md ml-6"><b>$300k</b></h1>
                    </div>
                    <p className="text-green-700 text-md mt-3">Document verified</p>
                    
                    <p className="text-sm mt-3 text-gray-600">Applied 3 days ago . Florida</p>
                    <br></br>
                    <div className="flex justify-between">
                      <div className="flex">
                        <button
                      type="button"
                      className="w-30 mr-1 border border-blue-500 text-blue-600 rounded-full p-1 font-medium hover:bg-gray-100 transition"
                      >
                        Cancel
                      </button>
                      <button
                      type="submit"
                      className="w-30 ml-1 bg-blue-500 text-white rounded-full p-1 font-medium hover:bg-blue-600 transition"
                      >
                        Approve
                      </button>
                      <button
                      className="text-2xl font-bold ml-6"
                      >
                        ⋯
                      </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          
          <div className="border-l-4 border-blue-500 m-5 bg-white rounded-xl">
            <table>
              <tbody>
                <tr>
                  <td className="py-4 align-top">
                    <Image className="rounded-lg ml-2" src="/images/incentives/incentives-application.png" alt="Logo" width={60} height={60} />
                  </td>
                  <td className="py-4 pr-4 pl-4 align-top">
                    <div className="flex relative"> 
                      <h1 className="text-lg truncate w-60"><b>Triple-pane window Installation</b></h1>
                      <h1 className="text-blue-500 text-md ml-6"><b>$300k</b></h1>
                    </div>
                    <p className="text-green-700 text-md mt-3">Document verified</p>
                    
                    <p className="text-sm mt-3 text-gray-600">Submitted 20th Oct, 2024 . North Carolina</p>
                    <br></br>
                    <div className="flex justify-between">
                      <div className="flex">
                        <button
                      type="button"
                      className="w-30 mr-1 border border-blue-500 text-blue-600 rounded-full p-1 font-medium hover:bg-gray-100 transition"
                      >
                        Cancel
                      </button>
                      <button
                      type="submit"
                      className="w-30 ml-1 bg-blue-500 text-white rounded-full p-1 font-medium hover:bg-blue-600 transition"
                      >
                        Approve
                      </button>
                      <button
                      className="text-2xl font-bold ml-6"
                      >
                        ⋯
                      </button>
                      </div>

                      
                      
                      
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>



          <div className="border-l-4 border-blue-500 m-5 bg-white rounded-xl">
            <table>
              <tbody>
                <tr>
                  <td className="py-4 align-top">
                    <Image className="rounded-lg ml-2" src="/images/incentives/incentives-application.png" alt="Logo" width={60} height={60} />
                  </td>
                  <td className="py-4 pr-4 pl-4 align-top">
                    <div className="flex relative"> 
                      <h1 className="text-lg truncate w-60"><b>Triple-pane window Installation</b></h1>
                      <h1 className="text-blue-500 text-md ml-6"><b>$300k</b></h1>
                    </div>
                    <p className="text-green-700 text-md mt-3">Document verified</p>
                    
                    <p className="text-sm mt-3 text-gray-600">Submitted 20th Oct, 2024 . North Carolina</p>
                    <br></br>
                    <div className="flex justify-between">
                      <div className="flex">
                        <button
                      type="button"
                      className="w-30 mr-1 border border-blue-500 text-blue-600 rounded-full p-1 font-medium hover:bg-gray-100 transition"
                      >
                        Cancel
                      </button>
                      <button
                      type="submit"
                      className="w-30 ml-1 bg-blue-500 text-white rounded-full p-1 font-medium hover:bg-blue-600 transition"
                      >
                        Approve
                      </button>
                      <button
                      className="text-2xl font-bold ml-6"
                      >
                        ⋯
                      </button>
                      </div>

                      
                      
                      
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>


          <div className="border-l-4 border-blue-500 m-5 bg-white rounded-xl">
            <table>
              <tbody>
                <tr>
                  <td className="py-4 align-top">
                    <Image className="rounded-lg ml-2" src="/images/incentives/incentives-application.png" alt="Logo" width={60} height={60} />
                  </td>
                  <td className="py-4 pr-4 pl-4 align-top">
                    <div className="flex relative"> 
                      <h1 className="text-lg truncate w-60"><b>Triple-pane window Installation</b></h1>
                      <h1 className="text-blue-500 text-md ml-6"><b>$300k</b></h1>
                    </div>
                    <p className="text-green-700 text-md mt-3">Not verified</p>
                    
                    <p className="text-sm mt-3 text-gray-600">Applied 3 days ago . New York</p>
                    <br></br>
                    <div className="flex justify-between">
                      <div className="flex">
                        <button
                      type="button"
                      className="w-30 mr-1 border border-blue-500 text-blue-600 rounded-full p-1 font-medium hover:bg-gray-100 transition"
                      >
                        Cancel
                      </button>
                      <button
                      type="submit"
                      className="w-30 ml-1 bg-blue-500 text-white rounded-full p-1 font-medium hover:bg-blue-600 transition"
                      >
                        Approve
                      </button>
                      <button
                      className="text-2xl font-bold ml-6"
                      >
                        ⋯
                      </button>
                      </div>

                      
                      
                      
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>



          <div className="border-l-4 border-blue-500 m-5 bg-white rounded-xl">
            <table>
              <tbody>
                <tr>
                  <td className="py-4 align-top">
                    <Image className="rounded-lg ml-2" src="/images/incentives/incentives-application.png" alt="Logo" width={60} height={60} />
                  </td>
                  <td className="py-4 pr-4 pl-4 align-top">
                    <div className="flex relative"> 
                      <h1 className="text-lg truncate w-60"><b>Triple-pane window Installation</b></h1>
                      <h1 className="text-blue-500 text-md ml-6"><b>$300k</b></h1>
                    </div>
                    <p className="text-green-700 text-md mt-3">Document verified</p>
                    
                    <p className="text-sm mt-3 text-gray-600">Submitted 20th Oct, 2024 . North Carolina</p>
                    <br></br>
                    <div className="flex justify-between">
                      <div className="flex">
                        <button
                      type="button"
                      className="w-30 mr-1 border border-blue-500 text-blue-600 rounded-full p-1 font-medium hover:bg-gray-100 transition"
                      >
                        Cancel
                      </button>
                      <button
                      type="submit"
                      className="w-30 ml-1 bg-blue-500 text-white rounded-full p-1 font-medium hover:bg-blue-600 transition"
                      >
                        Approve
                      </button>
                      <button
                      className="text-2xl font-bold ml-6"
                      >
                        ⋯
                      </button>
                      </div>

                      
                      
                      
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>


      </main>
    </div>
  );
};

export default IncentivesApprovedApplications;
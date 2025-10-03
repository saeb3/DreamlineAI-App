"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";

const SignupEmailCode = () => {

  const [emailCode, setEmailCode] = useState("");  
  
  const router = useRouter();

  const handleVerify = (e: any) => {
    e.preventDefault();
    router.push("/incentives/signup/incentives-providers-profile");
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
          <div className="w-full">
            <div className="bg-white">
              <div className="flex p-4">
              <Link href="/signup" className="mr-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <span className="ml-30">
                <h1 className="text-2xl font-bold">Enter code</h1>
              </span>
            </div>
            <p className="text-center text-md">Email code verification</p>
            </div>
            
            
          
            <div className="w-full py-4">
                <div className="mt-5 flex justify-center p-4">
                    <img
                    src="/images/incentives/email-code.png"
                    alt="Email verification illustration"
                    className="w-50 h-70 rounded-2xl mx-5"
                    />
                </div>

                <div className="p-4">
                    <p className="text-lg"><b>Enter the 4-digit verification code sent to your email</b></p>
                    <br></br>
                    <p>Please check your spam folder if it's not in your inbox.</p>
                    <br></br>
                    <form onSubmit={handleVerify}>
                        <input
                        id="code"
                        type="number"
                        min="1000"
                        max="9999"
                        name="code"
                        placeholder="Enter code"
                        value={emailCode}
                        onChange={(e) => setEmailCode(e.target.value)}
                        className="w-full bg-white rounded-lg border border-gray-400 p-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />

                    {/* Verify Button */}
                    <div className="mt-15 pt-6 px-4 pb-4">
                        <button
                        type="button"
                        onClick={handleVerify}
                        className="mb-4 w-full rounded-full bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Verify and Proceed
                        </button>

                        <p className="text-center"><a href="#" className="text-blue-500"><u>Resend a new code</u></a></p>
                    </div>
                    </form>
                    
                </div>
                
            </div>

            
            
          </div>
        

        

        
      </main>
    </div>
  );
};

export default SignupEmailCode;
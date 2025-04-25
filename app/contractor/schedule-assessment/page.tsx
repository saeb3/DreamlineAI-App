"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";

export default function ImpactAnalysisPage() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [timeZone, setTimeZone] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [address, setAddress] = useState({
    street: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: ""
  });

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  
  const calendarDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const calendarPadding = Array.from({ length: firstDayOfMonth }, (_, i) => null);
  
  const handleDateSelect = (day: number) => {
    setSelectedDate(`${currentYear}-${currentMonth + 1}-${day}`);
  };

  const handleTimeSlotSelect = (time: string) => {
    setSelectedTimeSlot(time);
  };

  const handleAddressChange = (field: string, value: string) => {
    setAddress(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      selectedDate,
      selectedTimeSlot,
      timeZone,
      notes,
      address
    });
    router.push("/contractor/schedule-assessment/confirmation");
  };

  return (
    <div className="flex max-w-md min-h-screen flex-col bg-gray-50">
      <header className="flex items-center justify-between px-4 py-4 shadow-sm bg-white">
        <div className="flex items-center">
          <Image 
            src="/images/logo.png"
            alt="Dreamline Logo"
            width={120}
            height={40}
          />
        </div>
        <button className="block text-gray-600" aria-label="Menu">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      <main className="flex flex-1 flex-col px-4 py-6 text-black">
        <div className="bg-white rounded-lg shadow-md mb-6 p-6">
          <h1 className="text-2xl font-bold text-gray-800">Schedule an impact analysis</h1>
          <p className="text-gray-600 mt-2">
            Booking an impact assessment schedule is a crucial step for contractors to ensure that all
            potential environmental, social, and economic impacts of a project are thoroughly evaluated
            before work begins. Here's a step-by-step guide to help you book an impact assessment schedule:
          </p>
          
          <div className="mt-4">
            <Image
              src="/images/contractor/schedule-assessment.png"
              alt="Calendar illustration"
              width={300}
              height={200}
              className="mx-auto"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md mb-6 p-6">
          <h2 className="text-xl font-semibold mb-4">Here's what to expect:</h2>
          
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 bg-blue-100 text-blue-500 rounded flex items-center justify-center mr-3 mt-0.5">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <span>Choose a convenient time slots</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 bg-green-100 text-green-500 rounded flex items-center justify-center mr-3 mt-0.5">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <span>Schedule your upgrades with confidence</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 bg-blue-100 text-blue-500 rounded flex items-center justify-center mr-3 mt-0.5">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" clipRule="evenodd"/>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                </svg>
              </div>
              <span>Determine the scope of project</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 bg-gray-100 text-gray-500 rounded flex items-center justify-center mr-3 mt-0.5">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <span>Contact and request proposal</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 bg-red-100 text-red-500 rounded flex items-center justify-center mr-3 mt-0.5">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <span>Evaluate proposal</span>
            </li>
          </ul>
          
          <div className="mt-4 pt-3 border-t border-gray-200">
            <p className="text-sm">
              <span className="font-medium">Questions? Contact support at </span>
              <a href="mailto:help@dreamline.org" className="text-blue-600">help@dreamline.org</a>
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="bg-white rounded-lg shadow-md mb-6 p-6">
            <h2 className="text-lg font-semibold mb-3">Select a Date:</h2>
            
            <div className="border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between p-3 border-b border-gray-200">
                <button type="button" className="text-gray-600 hover:text-gray-800">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <div className="font-medium">October 2024</div>
                <button type="button" className="text-gray-600 hover:text-gray-800">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              <div className="grid grid-cols-7 gap-0">
                <div className="p-2 text-center text-xs font-medium text-gray-500">S</div>
                <div className="p-2 text-center text-xs font-medium text-gray-500">M</div>
                <div className="p-2 text-center text-xs font-medium text-gray-500">T</div>
                <div className="p-2 text-center text-xs font-medium text-gray-500">W</div>
                <div className="p-2 text-center text-xs font-medium text-gray-500">T</div>
                <div className="p-2 text-center text-xs font-medium text-gray-500">F</div>
                <div className="p-2 text-center text-xs font-medium text-gray-500">S</div>
                
                {calendarPadding.map((_, index) => (
                  <div key={`pad-${index}`} className="p-2 text-center text-sm"></div>
                ))}
                
                {calendarDays.map((day) => (
                  <div 
                    key={`day-${day}`} 
                    className="p-2 text-center text-sm"
                  >
                    <button
                      type="button"
                      onClick={() => handleDateSelect(day)}
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        selectedDate === `${currentYear}-${currentMonth + 1}-${day}`
                          ? 'bg-blue-500 text-white'
                          : day === 5 || day === 17
                          ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {day}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md mb-6 p-6">
            <h2 className="text-lg font-semibold mb-3">Select Timezone:</h2>
            <div className="relative">
              <select
                value={timeZone}
                onChange={(e) => setTimeZone(e.target.value)}
                className="block w-full rounded border border-gray-300 px-3 py-2 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="">Select Time Zone</option>
                <option value="est">Eastern Standard Time (EST)</option>
                <option value="cst">Central Standard Time (CST)</option>
                <option value="mst">Mountain Standard Time (MST)</option>
                <option value="pst">Pacific Standard Time (PST)</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md mb-6 p-6">
            <h2 className="text-lg font-semibold mb-3">Select a Time Slot:</h2>
            <div className="grid grid-cols-2 gap-2 mb-4">
              <button
                type="button"
                onClick={() => handleTimeSlotSelect("11:00 am")}
                className={`rounded-full py-2 text-center text-sm ${
                  selectedTimeSlot === "11:00 am" 
                    ? "bg-blue-500 text-white" 
                    : "border border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                11:00 am
              </button>
              <button
                type="button"
                onClick={() => handleTimeSlotSelect("12:00 pm")}
                className={`rounded-full py-2 text-center text-sm ${
                  selectedTimeSlot === "12:00 pm" 
                    ? "bg-blue-500 text-white" 
                    : "border border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                12:00 pm
              </button>
              <button
                type="button"
                onClick={() => handleTimeSlotSelect("1:00 pm")}
                className={`rounded-full py-2 text-center text-sm ${
                  selectedTimeSlot === "1:00 pm" 
                    ? "bg-blue-500 text-white" 
                    : "border border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                1:00 pm
              </button>
              <button
                type="button"
                onClick={() => handleTimeSlotSelect("2:00 pm")}
                className={`rounded-full py-2 text-center text-sm ${
                  selectedTimeSlot === "2:00 pm" 
                    ? "bg-blue-500 text-white" 
                    : "border border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                2:00 pm
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md mb-6 p-6">
            <h2 className="text-lg font-semibold mb-2">Notes: <span className="font-normal text-sm text-gray-500">(optional)</span></h2>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add any special requests or information about your project"
              className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              rows={4}
            ></textarea>
          </div>

          <div className="bg-white rounded-lg shadow-md mb-6 p-6">
            <h2 className="text-lg font-semibold mb-3">Address:</h2>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="street" className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  id="street"
                  type="text"
                  value={address.street}
                  onChange={(e) => handleAddressChange("street", e.target.value)}
                  placeholder="Street address"
                  className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="addressLine2" className="block text-sm font-medium text-gray-700">Address 2 (Optional)</label>
                <input
                  id="addressLine2"
                  type="text"
                  value={address.addressLine2}
                  onChange={(e) => handleAddressChange("addressLine2", e.target.value)}
                  placeholder="Apartment, Suite, Unit"
                  className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                <input
                  id="city"
                  type="text"
                  value={address.city}
                  onChange={(e) => handleAddressChange("city", e.target.value)}
                  className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                  <div className="relative">
                    <select
                      id="state"
                      value={address.state}
                      onChange={(e) => handleAddressChange("state", e.target.value)}
                      className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    >
                      <option value="">Select State</option>
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      <option value="AZ">Arizona</option>
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="NY">New York</option>
                      <option value="TX">Texas</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">Zip Code</label>
                  <input
                    id="zipCode"
                    type="text"
                    value={address.zipCode}
                    onChange={(e) => handleAddressChange("zipCode", e.target.value)}
                    className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3 mt-6">
            <button
              type="submit"
              className="block w-full rounded-2xl bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit
            </button>
            
            <button
              type="button"
              className="block w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 font-semibold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2"
            >
              Cancel
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
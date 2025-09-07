"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";

export default function ProfileSetupInitialQuestions() {
  const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
  "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
  "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York",
  "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
  "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
  "West Virginia", "Wisconsin", "Wyoming",
  ];

  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [project, setProject] = useState("");
  const [sector, setSector] = useState("");
  const [customGender, setCustomGender] = useState("");
  const [address, setAddress] = useState({
    streetAddress: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: ""
  });
  
  const [pageState, setPageState] = useState("form"); // form, loading, success

  const router = useRouter();

  const handleAddressChange = (e: any) => {
    const { name, value } = e.target;
    setAddress(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCancel = (e: any) => {
    router.push("/signup/choice");
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log({
      dateOfBirth,
      gender: gender === "custom" ? customGender : gender,
      address,
      project,
      sector,
    });
    setPageState("loading");
    
    // Show loading state for 2 seconds then success state
    setTimeout(() => {
      setPageState("success");
    }, 2000);
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
        <button className="block text-gray-600 md:hidden" aria-label="Menu">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M4 5h16M4 12h16M4 19h16" />
          </svg>
        </button>
      </header>

      <main className="flex flex-1 flex-col text-black">
        {pageState === "form" && (
          <div className="w-full p-4">
            <div className="flex mb-4">
              <Link href="/signup" className="mr-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <span className="ml-18">
                <h1 className="text-xl font-bold">Complete your profile</h1>
              </span>
              
            </div>
            <p className="text-md flex justify-center text-gray-600 mb-6">Tell us a little bit about yourself.</p>

            <form onSubmit={handleSubmit} className="p-4 space-y-6 bg-gray-50">
              {/* Date of Birth */}
              <div className="mb-4">
                <label htmlFor="dateOfBirth" className="block text-md font-medium text-black-500 mb-1">
                  <b>1. What's your date of birth?</b>
                </label>
                <input
                  id="dateOfBirth"
                  type="text"
                  placeholder="mm/dd/yyyy"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  className="w-full rounded-lg bg-white border border-gray-400 p-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>


              {/* Gender */}
              <div className="mb-4">
                <p className="block text-md font-medium text-black-500 mb-1">
                  <b>2. What's your gender?</b>
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      id="male"
                      type="radio"
                      name="gender"
                      value="male"
                      checked={gender === "male"}
                      onChange={() => setGender("male")}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border border-gray-400"
                    />
                    <label htmlFor="male" className="ml-2 block text-sm text-black-500">
                      Male
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="female"
                      type="radio"
                      name="gender"
                      value="female"
                      checked={gender === "female"}
                      onChange={() => setGender("female")}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border border-gray-400"
                    />
                    <label htmlFor="female" className="ml-2 block text-sm text-black-500">
                      Female
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="nonBinary"
                      type="radio"
                      name="gender"
                      value="nonBinary"
                      checked={gender === "nonBinary"}
                      onChange={() => setGender("nonBinary")}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border border-gray-400"
                    />
                    <label htmlFor="nonBinary" className="ml-2 block text-sm text-black-500">
                      Non-Binary
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="custom"
                      type="radio"
                      name="gender"
                      value="custom"
                      checked={gender === "custom"}
                      onChange={() => setGender("custom")}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border border-gray-400"
                    />
                    <label htmlFor="custom" className="ml-2 block text-sm text-black-500">
                      Prefer to self-describe:
                    </label>
                    {gender === "custom" && (
                      <input
                        type="text"
                        value={customGender}
                        onChange={(e) => setCustomGender(e.target.value)}
                        className="ml-2 w-48 rounded border-gray-300 px-2 py-1 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    )}
                  </div>
                  <div className="flex items-center">
                    <input
                      id="preferNotToSay"
                      type="radio"
                      name="gender"
                      value="preferNotToSay"
                      checked={gender === "preferNotToSay"}
                      onChange={() => setGender("preferNotToSay")}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border border-gray-400"
                    />
                    <label htmlFor="preferNotToSay" className="ml-2 block text-sm text-black-500">
                      Prefer not to say
                    </label>
                  </div>
                </div>
              </div>


              {/* Address */}
              <div>
                <label className="block text-md font-medium text-black-500 mb-1">
                  <b>3. What's your address?</b>
                </label>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="streetAddress" className="block text-sm text-black-500 mb-1">
                      Address
                    </label>
                    <input
                      id="streetAddress"
                      type="text"
                      name="streetAddress"
                      placeholder="Street address"
                      value={address.streetAddress}
                      onChange={handleAddressChange}
                      className="w-full bg-white rounded-lg border border-gray-400 p-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="addressLine2" className="block text-sm text-black-500 mb-1">
                      Address 2 (Optional)
                    </label>
                    <input
                      id="addressLine2"
                      type="text"
                      name="addressLine2"
                      placeholder="Apartment, Suite, Unit"
                      value={address.addressLine2}
                      onChange={handleAddressChange}
                      className="w-full bg-white rounded-lg border border-gray-400 p-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm text-black-500 mb-1">
                      City
                    </label>
                    <input
                      id="city"
                      type="text"
                      name="city"
                      value={address.city}
                      onChange={handleAddressChange}
                      className="w-full bg-white rounded-lg border border-gray-400 p-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="state" className="block text-sm text-black-500 mb-1">
                        State
                      </label>
                      <select
                        id="state"
                        value={address.state}
                        onChange={handleAddressChange}
                        className="w-full bg-white rounded-lg border border-gray-400 p-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      >
                      <option value="">Select state</option>
                      {US_STATES.map((state) => (
                      <option key={state} value={state}>
                      {state}
                      </option>
                      ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="zipCode" className="block text-sm text-black-500 mb-1">
                        Zip Code
                      </label>
                      <input
                        id="zipCode"
                        type="text"
                        name="zipCode"
                        value={address.zipCode}
                        onChange={handleAddressChange}
                        className="w-full bg-white rounded-lg border border-gray-400 p-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>


              {/* Type of Projects */}
              <div className="mb-4">
                <p className="block text-md font-medium text-black-500">
                  <b>4. Which type of projects are you interested in 
                  deploying incentives for your organization?</b>
                </p>
                <p className="block text-sm font-medium text-black-500 mb-1">
                    Click all that apply, don't worry you can change your answers 
                    later.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      id="option1"
                      type="radio"
                      name="project"
                      value="option1"
                      checked={project === "option1"}
                      onChange={() => setProject("option1")}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border border-gray-400"
                    />
                    <label htmlFor="option1" className="ml-2 block text-sm text-black-500">
                      Lorem ipsum
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="option2"
                      type="radio"
                      name="project"
                      value="option2"
                      checked={project === "option2"}
                      onChange={() => setProject("option2")}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border border-gray-400"
                    />
                    <label htmlFor="option2" className="ml-2 block text-sm text-black-500">
                      Lorem ipsum
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="option3"
                      type="radio"
                      name="project"
                      value="option3"
                      checked={project === "option3"}
                      onChange={() => setProject("option3")}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border border-gray-400"
                    />
                    <label htmlFor="option3" className="ml-2 block text-sm text-black-500">
                      Lorem ipsum
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="option4"
                      type="radio"
                      name="project"
                      value="option4"
                      checked={project === "option4"}
                      onChange={() => setProject("option4")}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border border-gray-400"
                    />
                    <label htmlFor="option4" className="ml-2 block text-sm text-black-500">
                      Lorem ipsum
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="option5"
                      type="radio"
                      name="project"
                      value="option5"
                      checked={project === "option5"}
                      onChange={() => setProject("option5")}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border border-gray-400"
                    />
                    <label htmlFor="option5" className="ml-2 block text-sm text-black-500">
                      Lorem ipsum
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="option6"
                      type="radio"
                      name="project"
                      value="option6"
                      checked={project === "option6"}
                      onChange={() => setProject("option6")}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border border-gray-400"
                    />
                    <label htmlFor="option6" className="ml-2 block text-sm text-black-500">
                      Lorem ipsum
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="notSure"
                      type="radio"
                      name="project"
                      value="notSure"
                      checked={project === "notSure"}
                      onChange={() => setProject("notSure")}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border border-gray-400"
                    />
                    <label htmlFor="notSure" className="ml-2 block text-sm text-black-500">
                      Not sure
                    </label>
                  </div>
                </div>
              </div>


              {/* Sector */}
              <div className="mb-4">
                <p className="block text-md font-medium text-black-500 mb-1">
                  <b>5. Which sector best describes your organization? 
                  Please select the sector that best describes your 
                  situation:</b>
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      id="government"
                      type="radio"
                      name="sector"
                      value="government"
                      checked={sector === "government"}
                      onChange={() => setSector("government")}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border border-gray-400"
                    />
                    <label htmlFor="government" className="ml-2 block text-sm text-black-500">
                      Government
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="financial"
                      type="radio"
                      name="sector"
                      value="financial"
                      checked={sector === "financial"}
                      onChange={() => setSector("financial")}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border border-gray-400"
                    />
                    <label htmlFor="financial" className="ml-2 block text-sm text-black-500">
                      Financial Institution
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="business"
                      type="radio"
                      name="sector"
                      value="business"
                      checked={sector === "business"}
                      onChange={() => setSector("business")}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border border-gray-400"
                    />
                    <label htmlFor="business" className="ml-2 block text-sm text-black-500">
                      Business owner
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="nonProfit"
                      type="radio"
                      name="sector"
                      value="nonProfit"
                      checked={sector === "nonProfit"}
                      onChange={() => setSector("nonProfit")}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border border-gray-400"
                    />
                    <label htmlFor="nonProfit" className="ml-2 block text-sm text-black-500">
                      Non-Profit
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="other"
                      type="radio"
                      name="sector"
                      value="other"
                      checked={sector === "other"}
                      onChange={() => setSector("other")}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border border-gray-400"
                    />
                    <label htmlFor="other" className="ml-2 block text-sm text-black-500">
                      Other
                    </label>
                  </div>

                </div>
              </div>

              {/* Contact support */}
              <div>
                <p className="text-md">
                    <b>Questions? Contact support at</b>
                    <br></br>
                    <a href="#" className="text-blue-500">Rose@dreamlineai.org</a>
                </p>
              </div>


              {/* Buttons */}
              <div className="pt-6">
                {/* Submit Button */}
                <button
                  type="submit"
                  className="mb-4 w-full rounded-full bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Submit
                </button>

                {/* Cancel Button */}
                <button
                  type="button"
                  onClick={handleCancel}
                  className="mt-4 w-full rounded-full bg-white px-4 py-3 border border-blue-500 font-semibold text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Cancel
                </button>
              </div>

            </form>
          </div>
        )}

        {pageState === "loading" && (
          <div className="flex flex-1 flex-col items-center justify-center p-4">
            <div className="w-full max-w-md rounded-lg bg-white shadow-md p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 relative">
                  <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
                  <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 animate-spin"></div>
                </div>
              </div>
              <h2 className="text-xl font-bold mb-2">
                Almost There! Finalizing Your Profile
              </h2>
              <p className="text-gray-600">
                Setting up your profile, almost done!
              </p>
            </div>
          </div>
        )}

        {pageState === "success" && (
          <div className="flex flex-1 flex-col items-center justify-center p-4">
            <div className="w-full max-w-md rounded-lg bg-white shadow-md p-8 text-center">
              <h2 className="text-xl font-bold mb-6">
                Your profile is set!
              </h2>
              
              <div className="flex justify-center space-x-4">
                {/* <Link
                  href="/contractor/profile-view"
                  className="px-6 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  View
                </Link> */}
                <Link
                  href="/incentives/profile-setup/incentive-provider-role"
                  className="px-6 py-2 bg-blue-600 text-white font-medium rounded-full border border-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Next
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
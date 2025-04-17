// app/profile/page.tsx (App Router)
"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";

export default function ProfilePage() {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [customGender, setCustomGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState({
    streetAddress: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: ""
  });
  const [specialties, setSpecialties] = useState({
    windows: false,
    heatingCooling: false,
    waterEfficiency: false,
    lightingAppliances: false,
    solarEnergy: false,
    electricVehicle: false,
    notSure: false
  });
  const [projects, setProjects] = useState([
    { name: "", date: "" },
    { name: "", date: "" }
  ]);
  const [materials, setMaterials] = useState([
    { name: "" },
    { name: "" },
    { name: "" }
  ]);
  const [pageState, setPageState] = useState("form"); // form, loading, success

  const router = useRouter();

  const handleAddressChange = (e: any) => {
    const { name, value } = e.target;
    setAddress(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSpecialtiesChange = (e: any) => {
    const { name, checked } = e.target;
    setSpecialties(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleProjectChange = (index: any, field: any, value: any) => {
    const updatedProjects = [...projects];
    updatedProjects[index] = {
      ...updatedProjects[index],
      [field]: value
    };
    setProjects(updatedProjects);
  };

  const handleMaterialChange = (index: any, value: any) => {
    const updatedMaterials = [...materials];
    updatedMaterials[index] = { name: value };
    setMaterials(updatedMaterials);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log({
      dateOfBirth,
      gender: gender === "custom" ? customGender : gender,
      email,
      phone,
      website,
      address,
      specialties,
      projects,
      materials
    });
    setPageState("loading");
    
    // Show loading state for 2 seconds then success state
    setTimeout(() => {
      setPageState("success");
    }, 2000);
  };

  return (
    <div className="flex max-w-md min-h-screen flex-col bg-gray-50">
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
            <div className="flex items-center mb-4">
              <Link href="/signup" className="mr-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <h1 className="text-xl font-bold">Complete your profile</h1>
            </div>
            <p className="text-sm text-gray-600 mb-6">Tell us a little bit about yourself.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Date of Birth */}
              <div className="mb-4">
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-1">
                  What's your date of birth?
                </label>
                <input
                  id="dateOfBirth"
                  type="text"
                  placeholder="mm/dd/yyyy"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  className="w-full rounded border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              {/* Contact Information */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="(123) 456-7890"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                  Website (Optional)
                </label>
                <input
                  id="website"
                  type="url"
                  placeholder="https://www.example.com"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="w-full rounded border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              {/* Gender */}
              <div className="mb-4">
                <p className="block text-sm font-medium text-gray-700 mb-1">
                  What's your gender?
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
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <label htmlFor="male" className="ml-2 block text-sm text-gray-700">
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
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <label htmlFor="female" className="ml-2 block text-sm text-gray-700">
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
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <label htmlFor="nonBinary" className="ml-2 block text-sm text-gray-700">
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
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <label htmlFor="custom" className="ml-2 block text-sm text-gray-700">
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
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <label htmlFor="preferNotToSay" className="ml-2 block text-sm text-gray-700">
                      Prefer not to say
                    </label>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="mb-4 pt-4 border-t border-gray-200">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  What's your address?
                </label>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="streetAddress" className="block text-sm text-gray-700 mb-1">
                      Address
                    </label>
                    <input
                      id="streetAddress"
                      type="text"
                      name="streetAddress"
                      placeholder="Street address"
                      value={address.streetAddress}
                      onChange={handleAddressChange}
                      className="w-full rounded border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="addressLine2" className="block text-sm text-gray-700 mb-1">
                      Address 2 (Optional)
                    </label>
                    <input
                      id="addressLine2"
                      type="text"
                      name="addressLine2"
                      placeholder="Apartment, Suite, Unit"
                      value={address.addressLine2}
                      onChange={handleAddressChange}
                      className="w-full rounded border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      id="city"
                      type="text"
                      name="city"
                      value={address.city}
                      onChange={handleAddressChange}
                      className="w-full rounded border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="state" className="block text-sm text-gray-700 mb-1">
                        State
                      </label>
                      <input
                        id="state"
                        type="text"
                        name="state"
                        placeholder="State"
                        value={address.state}
                        onChange={handleAddressChange}
                        className="w-full rounded border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="zipCode" className="block text-sm text-gray-700 mb-1">
                        Zip Code
                      </label>
                      <input
                        id="zipCode"
                        type="text"
                        name="zipCode"
                        value={address.zipCode}
                        onChange={handleAddressChange}
                        className="w-full rounded border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Specialties */}
              <div className="mb-4 pt-4 border-t border-gray-200">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  What is your specialties?
                </label>
                <p className="text-xs text-gray-500 mb-2">
                  Click all that apply, don't worry you can change your answers later.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      id="windows"
                      type="checkbox"
                      name="windows"
                      checked={specialties.windows}
                      onChange={handleSpecialtiesChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="windows" className="ml-2 block text-sm text-gray-700">
                      Windows & Insulation
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="heatingCooling"
                      type="checkbox"
                      name="heatingCooling"
                      checked={specialties.heatingCooling}
                      onChange={handleSpecialtiesChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="heatingCooling" className="ml-2 block text-sm text-gray-700">
                      Heating & Cooling
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="waterEfficiency"
                      type="checkbox"
                      name="waterEfficiency"
                      checked={specialties.waterEfficiency}
                      onChange={handleSpecialtiesChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="waterEfficiency" className="ml-2 block text-sm text-gray-700">
                      Water Efficiency
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="lightingAppliances"
                      type="checkbox"
                      name="lightingAppliances"
                      checked={specialties.lightingAppliances}
                      onChange={handleSpecialtiesChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="lightingAppliances" className="ml-2 block text-sm text-gray-700">
                      Lighting & Appliances
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="solarEnergy"
                      type="checkbox"
                      name="solarEnergy"
                      checked={specialties.solarEnergy}
                      onChange={handleSpecialtiesChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="solarEnergy" className="ml-2 block text-sm text-gray-700">
                      Solar Energy
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="electricVehicle"
                      type="checkbox"
                      name="electricVehicle"
                      checked={specialties.electricVehicle}
                      onChange={handleSpecialtiesChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="electricVehicle" className="ml-2 block text-sm text-gray-700">
                      Electric Vehicle Charging
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="notSure"
                      type="checkbox"
                      name="notSure"
                      checked={specialties.notSure}
                      onChange={handleSpecialtiesChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="notSure" className="ml-2 block text-sm text-gray-700">
                      Not sure
                    </label>
                  </div>
                </div>
              </div>

              {/* Past Projects */}
              <div className="mb-4 pt-4 border-t border-gray-200">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  List past completed project
                </label>
                <p className="text-xs text-gray-500 mb-2">
                  Click all that apply, don't worry you can change your answers later.
                </p>
                <div className="space-y-4">
                  {projects.map((project, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="mr-2 h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center text-xs">
                          {index + 1}
                        </div>
                        <input
                          type="text"
                          placeholder="Project name"
                          value={project.name}
                          onChange={(e) => handleProjectChange(index, 'name', e.target.value)}
                          className="w-32 rounded border-gray-300 px-2 py-1 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="Date"
                        value={project.date}
                        onChange={(e) => handleProjectChange(index, 'date', e.target.value)}
                        className="ml-2 w-24 rounded border-gray-300 px-2 py-1 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Materials */}
              <div className="mb-4 pt-4 border-t border-gray-200">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  What material do you used?
                </label>
                <div className="space-y-4">
                  {materials.map((material, index) => (
                    <div key={index} className="flex items-center">
                      <div className="mr-2 h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center text-xs">
                        {index + 1}
                      </div>
                      <input
                        type="text"
                        placeholder="Click to list out the material used"
                        value={material.name}
                        onChange={(e) => handleMaterialChange(index, e.target.value)}
                        className="w-full rounded border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full rounded-full bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Submit
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
                Please wait we are setting up your profile
              </h2>
              <p className="text-gray-600">
                This will take a moment
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
                <Link
                  href="/contractor/profile-view"
                  className="px-6 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  View
                </Link>
                <Link
                  href="/dashboard"
                  className="px-6 py-2 bg-white text-blue-600 font-medium rounded-full border border-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
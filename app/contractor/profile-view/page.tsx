"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";

export default function ProfileViewPage() {
  const router = useRouter();
  type SectionKey = 'contact' | 'website' | 'specialties' | 'about' | 'projects' | 'materials' | 'incentives';
  
  // Profile data state
  const [profile, setProfile] = useState({
    companyName: "Ellis & Co. Contractors",
    rating: 3,
    phone: "(305) 859-6793",
    email: "info@ellis.co.com",
    website: "www.Ellis&Co.com",
    specialties: ["Windows", "Lighting", "Appliances"],
    about: "Ellis & Co. Contractors specializes in top-notch window installations, innovative lighting solutions, and premium appliances. We combine craftsmanship with personalized service to enhance your home's style and functionality.",
    completedProjects: [
      { name: "Triple-Pane Windows", year: "2024" },
      { name: "Smart Appliance Install", year: "2024" },
      { name: "EcoLight Retrofit", year: "2023" }
    ],
    materials: [
      "Double or triple-pane glass",
      "Thermal window frames",
      "Window insulation film",
      "LED bulbs and fixtures",
      "Smart dimmers and timers",
      "Motion sensors",
      "Energy Star-rated appliances",
      "Smart thermostats"
    ],
    incentives: [
      { name: "Performance based bonus.", selected: true },
      { name: "Long term partnership.", selected: false },
      { name: "Milestone payment.", selected: false },
      { name: "Training development opportunity.", selected: false },
      { name: "Extended contract renewal.", selected: false }
    ]
  });

  // Edit mode states
  const [editModes, setEditModes] = useState({
    contact: false,
    website: false,
    specialties: false,
    about: false,
    projects: false,
    materials: false,
    incentives: false
  });

  // Form state for edits
  const [formState, setFormState] = useState({
    phone: profile.phone,
    email: profile.email,
    website: profile.website,
    specialties: [...profile.specialties],
    about: profile.about,
    projects: [...profile.completedProjects],
    materials: [...profile.materials],
    incentives: [...profile.incentives]
  });

  // New item fields
  const [newSpecialty, setNewSpecialty] = useState("");
  const [newProject, setNewProject] = useState({ name: "", year: "" });
  const [newMaterial, setNewMaterial] = useState("");

  // Update form state when profile changes
  useEffect(() => {
    setFormState({
      phone: profile.phone,
      email: profile.email,
      website: profile.website,
      specialties: [...profile.specialties],
      about: profile.about,
      projects: [...profile.completedProjects],
      materials: [...profile.materials],
      incentives: [...profile.incentives]
    });
  }, [profile]);

  // Toggle edit mode for a section
  const toggleEditMode = (section: SectionKey) => {
    setEditModes(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  
    if (!editModes[section]) {
      setFormState(prev => ({
        ...prev,
        ...(section === 'contact' && {
          phone: profile.phone,
          email: profile.email,
        }),
        ...(section === 'website' && {
          website: profile.website,
        }),
        ...(section === 'specialties' && {
          specialties: [...profile.specialties],
        }),
        ...(section === 'about' && {
          about: profile.about,
        }),
        ...(section === 'projects' && {
          projects: [...profile.completedProjects],
        }),
        ...(section === 'materials' && {
          materials: [...profile.materials],
        }),
        ...(section === 'incentives' && {
          incentives: [...profile.incentives],
        }),
      }));
    }
  };
  

  // Handle form input changes
  const handleInputChange = (section: SectionKey, value: any) => {
    setFormState(prev => ({
      ...prev,
      [section]: value
    }));
  };

  // Add new specialty
  const addSpecialty = () => {
    if (newSpecialty.trim()) {
      setFormState(prev => ({
        ...prev,
        specialties: [...prev.specialties, newSpecialty.trim()]
      }));
      setNewSpecialty("");
    }
  };

  // Remove specialty
  const removeSpecialty = (index: any) => {
    setFormState(prev => ({
      ...prev,
      specialties: prev.specialties.filter((_, i) => i !== index)
    }));
  };

  // Add new project
  const addProject = () => {
    if (newProject.name.trim() && newProject.year.trim()) {
      setFormState(prev => ({
        ...prev,
        projects: [...prev.projects, { ...newProject }]
      }));
      setNewProject({ name: "", year: "" });
    }
  };

  // Remove project
  const removeProject = (index: any) => {
    setFormState(prev => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index)
    }));
  };

  // Add new material
  const addMaterial = () => {
    if (newMaterial.trim()) {
      setFormState(prev => ({
        ...prev,
        materials: [...prev.materials, newMaterial.trim()]
      }));
      setNewMaterial("");
    }
  };

  // Remove material
  const removeMaterial = (index: any) => {
    setFormState(prev => ({
      ...prev,
      materials: prev.materials.filter((_, i) => i !== index)
    }));
  };

  // Handle incentive selection
  const handleIncentiveChange = (index: any) => {
    setFormState(prev => ({
      ...prev,
      incentives: prev.incentives.map((item, i) => ({
        ...item,
        selected: i === index
      }))
    }));
  };

  // Save changes for a section
  const saveChanges = (section: SectionKey) => {
    setProfile(prev => {
      if (section === 'contact') {
        return {
          ...prev,
          phone: formState.phone,
          email: formState.email
        };
      } else if (section === 'projects') {
        return {
          ...prev,
          completedProjects: formState.projects
        };
      } else {
        return {
          ...prev,
          [section]: formState[section]
        };
      }
    });
    
    setEditModes(prev => ({
      ...prev,
      [section]: false
    }));
  };

  // Cancel edits
  const cancelEdits = (section: SectionKey) => {
    setEditModes(prev => ({
      ...prev,
      [section]: false
    }));
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
        <div className="w-full p-4">
          {/* Page header */}
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center">
              <Link href="/contractor/complete-profile" className="mr-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <h1 className="text-xl font-bold">Profile</h1>
            </div>
            <button aria-label="Edit profile">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-4 text-center">Your Profile/Edit profile</p>

          {/* Profile Card */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
            <div className="flex items-start">
              <div className="relative h-20 w-20 mr-4">
                <Image 
                  src="/images/contractor/profile-picture.png"
                  alt="Profile"
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                />
                <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div>
                <h2 className="text-lg font-semibold">{profile.companyName}</h2>
                <div className="flex items-center mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg 
                      key={star} 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill={star <= profile.rating ? "#FFD700" : "none"} 
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-1"
                    >
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ))}
                </div>

                {/* Contact section */}
                <div className="mt-2">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">Contact</h3>
                    <button 
                      onClick={() => toggleEditMode('contact')}
                      aria-label={editModes.contact ? "Cancel editing contact" : "Edit contact"}
                    >
                      {editModes.contact ? 
                        <span className="text-sm text-blue-500">Cancel</span> :
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      }
                    </button>
                  </div>
                  
                  {editModes.contact ? (
                    <div className="mt-2 space-y-2">
                      <div>
                        <label className="block text-xs text-gray-600">Phone</label>
                        <input 
                          type="tel" 
                          value={formState.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="w-full text-sm border rounded px-2 py-1"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-600">Email</label>
                        <input 
                          type="email" 
                          value={formState.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="w-full text-sm border rounded px-2 py-1"
                        />
                      </div>
                      <button 
                        onClick={() => saveChanges('contact')}
                        className="bg-blue-600 text-white text-sm px-3 py-1 rounded"
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <>
                      <p className="text-sm">Phone: {profile.phone}</p>
                      <p className="text-sm">Email: {profile.email}</p>
                    </>
                  )}
                </div>

                {/* Website section */}
                <div className="mt-2">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">Website Link</h3>
                    <button 
                      onClick={() => toggleEditMode('website')}
                      aria-label={editModes.website ? "Cancel editing website" : "Edit website"}
                    >
                      {editModes.website ? 
                        <span className="text-sm text-blue-500">Cancel</span> :
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      }
                    </button>
                  </div>
                  
                  {editModes.website ? (
                    <div className="mt-2">
                      <input 
                        type="url" 
                        value={formState.website}
                        onChange={(e) => handleInputChange('website', e.target.value)}
                        className="w-full text-sm border rounded px-2 py-1"
                        placeholder="www.example.com"
                      />
                      <button 
                        onClick={() => saveChanges('website')}
                        className="bg-blue-600 text-white text-sm px-3 py-1 rounded mt-2"
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <a href={`https://${profile.website}`} className="text-sm text-blue-500">
                      {profile.website}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Specialties */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold">Specialties:</h3>
              <button 
                onClick={() => toggleEditMode('specialties')}
                aria-label={editModes.specialties ? "Cancel editing specialties" : "Edit specialties"}
              >
                {editModes.specialties ? 
                  <span className="text-sm text-blue-500">Cancel</span> :
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                }
              </button>
            </div>
            
            {editModes.specialties ? (
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {formState.specialties.map((specialty, index) => (
                    <div key={index} className="rounded-full border border-gray-300 px-3 py-1 text-sm flex items-center">
                      {specialty}
                      <button 
                        onClick={() => removeSpecialty(index)}
                        className="ml-2 text-red-500"
                        aria-label={`Remove ${specialty}`}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex">
                  <input 
                    type="text" 
                    value={newSpecialty}
                    onChange={(e) => setNewSpecialty(e.target.value)}
                    placeholder="Add specialty"
                    className="flex-1 text-sm border rounded-l px-2 py-1"
                  />
                  <button 
                    onClick={addSpecialty}
                    className="bg-blue-600 text-white px-2 rounded-r"
                  >
                    Add
                  </button>
                </div>
                <button 
                  onClick={() => saveChanges('specialties')}
                  className="bg-blue-600 text-white text-sm px-3 py-1 rounded"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {profile.specialties.map((specialty, index) => (
                  <div key={index} className="rounded-full border border-gray-300 px-4 py-1 text-sm">
                    {specialty}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* About */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
            <div className="flex justify-between mb-2">
              <h3 className="font-semibold">About</h3>
              <button 
                onClick={() => toggleEditMode('about')}
                aria-label={editModes.about ? "Cancel editing about" : "Edit about"}
              >
                {editModes.about ? 
                  <span className="text-sm text-blue-500">Cancel</span> :
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                }
              </button>
            </div>
            
            {editModes.about ? (
              <div className="mt-2">
                <textarea 
                  value={formState.about}
                  onChange={(e) => handleInputChange('about', e.target.value)}
                  rows={4}
                  className="w-full text-sm border rounded px-2 py-1"
                />
                <button 
                  onClick={() => saveChanges('about')}
                  className="bg-blue-600 text-white text-sm px-3 py-1 rounded mt-2"
                >
                  Save
                </button>
              </div>
            ) : (
              <p className="text-sm">{profile.about}</p>
            )}
          </div>

          {/* Completed Projects */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
            <div className="flex justify-between mb-2">
              <h3 className="font-semibold">Completed projects:</h3>
              <button 
                onClick={() => toggleEditMode('projects')}
                aria-label={editModes.projects ? "Cancel editing projects" : "Edit projects"}
              >
                {editModes.projects ? 
                  <span className="text-sm text-blue-500">Cancel</span> :
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                }
              </button>
            </div>
            
            {editModes.projects ? (
              <div className="space-y-3">
                {formState.projects.map((project, index) => (
                  <div key={index} className="flex items-center justify-between border-b pb-2">
                    <div className="flex items-center">
                      <div className="h-8 w-8 bg-gray-200 rounded-full mr-3 flex items-center justify-center text-xs">
                        {index + 1}
                      </div>
                      <span className="text-sm">{project.name}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm mr-2">{project.year}</span>
                      <button 
                        onClick={() => removeProject(index)}
                        className="text-red-500"
                        aria-label={`Remove ${project.name}`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
                
                <div className="space-y-2 border-t pt-2">
                  <div>
                    <label className="block text-xs text-gray-600">Project Name</label>
                    <input 
                      type="text" 
                      value={newProject.name}
                      onChange={(e) => setNewProject({...newProject, name: e.target.value})}
                      className="w-full text-sm border rounded px-2 py-1"
                      placeholder="e.g. Kitchen Renovation"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600">Year</label>
                    <input 
                      type="text" 
                      value={newProject.year}
                      onChange={(e) => setNewProject({...newProject, year: e.target.value})}
                      className="w-full text-sm border rounded px-2 py-1"
                      placeholder="e.g. 2024"
                    />
                  </div>
                  <button 
                    onClick={addProject}
                    className="bg-blue-600 text-white text-sm px-3 py-1 rounded"
                  >
                    Add Project
                  </button>
                </div>
                
                <button 
                  onClick={() => saveChanges('projects')}
                  className="bg-blue-600 text-white text-sm px-3 py-1 rounded"
                >
                  Save All
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {profile.completedProjects.map((project, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-8 w-8 bg-gray-200 rounded-full mr-3 flex items-center justify-center text-xs">
                        {index + 1}
                      </div>
                      <span className="text-sm">{project.name}</span>
                    </div>
                    <span className="text-sm">{project.year}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Materials Used */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
            <div className="flex justify-between mb-2">
              <h3 className="font-semibold">Materials used:</h3>
              <button 
                onClick={() => toggleEditMode('materials')}
                aria-label={editModes.materials ? "Cancel editing materials" : "Edit materials"}
              >
                {editModes.materials ? 
                  <span className="text-sm text-blue-500">Cancel</span> :
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                }
              </button>
            </div>
            
            {editModes.materials ? (
              <div className="space-y-3">
                <ul className="list-disc list-inside text-sm space-y-1">
                  {formState.materials.map((material, index) => (
                    <li key={index} className="flex items-center justify-between group">
                      <span>{material}</span>
                      <button 
                        onClick={() => removeMaterial(index)}
                        className="text-red-500"
                        aria-label={`Remove ${material}`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </li>
                  ))}
                </ul>
                
                <div className="flex">
                  <input 
                    type="text" 
                    value={newMaterial}
                    onChange={(e) => setNewMaterial(e.target.value)}
                    placeholder="Add material"
                    className="flex-1 text-sm border rounded-l px-2 py-1"
                  />
                  <button 
                    onClick={addMaterial}
                    className="bg-blue-600 text-white px-2 rounded-r"
                  >
                    Add
                  </button>
                </div>
                
                <button 
                  onClick={() => saveChanges('materials')}
                  className="bg-blue-600 text-white text-sm px-3 py-1 rounded"
                >
                  Save
                </button>
              </div>
            ) : (
              <ul className="list-disc list-inside text-sm space-y-1">
                {profile.materials.map((material, index) => (
                  <li key={index}>{material}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Incentives */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
            <div className="flex justify-between mb-2">
              <h3 className="font-semibold">Incentives</h3>
              <div className="flex items-center text-xs text-gray-500">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                  <path d="M12 17V17.01M12 3C7.03 3 3 7.03 3 12H21C21 7.03 16.97 3 12 3ZM5 20L19 20C20.1 20 21 19.1 21 18V16H3V18C3 19.1 3.9 20 5 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Locked
              </div>
            </div>
            <div className="flex items-center mb-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 12S5 4 12 4s11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-xs ml-2">Only you can see this</span>
            </div>
            
            {editModes.incentives ? (
              <div className="space-y-3">
                {formState.incentives.map((incentive, index) => (
                  <div key={index} className="flex items-center">
                    <button
                      className={`h-5 w-5 rounded-full border-2 ${incentive.selected ? 'bg-blue-500 border-blue-500' : 'border-gray-300'} mr-2 flex items-center justify-center`}
                      onClick={() => handleIncentiveChange(index)}
                      aria-label={`Select ${incentive.name}`}
                    >
                      {incentive.selected && (
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </button>
                    <span className="text-sm">{incentive.name}</span>
                  </div>
                ))}
                <button 
                  onClick={() => saveChanges('incentives')}
                  className="bg-blue-600 text-white text-sm px-3 py-1 rounded mt-2"
                >
                  Save
                </button>
              </div>
            ) : (
              <ul className="list-disc list-inside text-sm space-y-1">
                {profile.incentives.map((incentive, index) => (
                  <li key={index} className={incentive.selected ? "font-semibold text-blue-600" : ""}>
                    {incentive.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="pt-8 px-8 pb-8">
              <button
                className="mt-4 w-full rounded-2xl bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 cursor-pointer focus:outline-none"
                onClick={() => router.push('/contractor/schedule-impact-analysis')}
              >
                Schedule Impact analysis
              </button>
            </div>
        </div>
        
      </main>
    </div>
  );
}
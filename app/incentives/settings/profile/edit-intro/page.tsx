'use client';
import Link from 'next/link';

export default function EditIntroPage(){
  return (
    <>
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="h-12 flex items-center justify-between px-4">
          <Link href="/dashboard/settings/profile" className="p-2 -ml-2">{ArrowLeft()}</Link>
          <div className="font-semibold">Edit Intro</div>
          <button className="p-2">{Hamburger()}</button>
        </div>
      </header>

      <div className="px-4 pb-10">
        <div className="text-[13px] text-gray-500 mt-3 mb-2">Basic Info</div>

        <Field label="First name" />
        <Field label="Surname" />
        <Field label="Email" type="email" />
        <Field label="Company address" />
        <Field label="Company Name" />

        <button className="mt-4 w-full h-11 rounded-md bg-blue-600 text-white font-medium">Saved</button>
      </div>
    </>
  );
}

function Field({label, type='text'}:{label:string; type?:string}){
  return (
    <div className="mb-3">
      <div className="text-[12px] text-gray-500 mb-1">{label}</div>
      <input type={type} className="w-full h-11 border border-gray-300 rounded-md px-3 text-[14px]" placeholder="Write here" />
    </div>
  );
}
function ArrowLeft(){ return <svg width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"/></svg>; }
function Hamburger(){ return <svg width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"/></svg>; }

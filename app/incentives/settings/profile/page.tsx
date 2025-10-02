'use client';
import { useState } from 'react';
import Link from 'next/link';

function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="h-12 flex items-center justify-between px-4">
        <Link href="/dashboard/settings" className="p-2 -ml-2">{ArrowLeft()}</Link>
        <div className="font-semibold">Profile</div>
        <button className="p-2">{Hamburger()}</button>
      </div>
    </header>
  );
}

export default function ProfilePage() {
  const [bioOpen, setBioOpen] = useState(false);
  const [savedOpen, setSavedOpen] = useState(false);
  const [bio, setBio] = useState('');

  return (
    <>
      <Header />
      <div className="px-4 pb-16">
        {/* top identity card */}
        <div className="flex items-start gap-3 py-4">
          <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
            {/* avatar placeholder */}
            <div className="w-full h-full grid place-items-center text-gray-500 text-sm">👤</div>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div className="font-medium">Jane Cooper</div>
              <button className="text-blue-600 text-sm">Edit</button>
            </div>
            <div className="text-gray-600 text-[13px]">Ellie Incentive Providers</div>
            <div className="text-gray-500 text-[12px]">willia.jennings@example.com</div>
            <div className="text-gray-500 text-[12px]">4567 Washington Ave, Manchester, Kentucky 39495</div>
            <div className="mt-1 flex items-center gap-1">{Stars(4)}</div>
          </div>
        </div>

        {/* Bio */}
        <div className="border-y border-gray-100 py-3">
          <div className="flex items-center justify-between px-1 mb-2">
            <div className="text-[13px] text-gray-500">Bio</div>
            <button className="text-blue-600 text-sm" onClick={()=>setBioOpen(true)}>Edit</button>
          </div>
          <div className="rounded-lg border border-gray-200 p-3">
            <p className="text-[14px] text-gray-700 min-h-[80px]">{bio || 'Write here...'}</p>
            <div className="text-[11px] text-red-400 mt-2">Minimum of 100 words</div>
          </div>
        </div>

        {/* Incentive Offered section */}
        <div className="mt-3">
          <div className="flex items-center justify-between mb-2">
            <div className="text-[13px] text-gray-500">Incentive Offered</div>
            <Link href="/dashboard/settings/profile/edit-intro" className="text-blue-600 text-sm">Edit</Link>
          </div>

          <Label>Type of Incentive</Label>
          <Select>
            <option>Type of incentive</option>
            <option>Discount</option><option>Cashback</option>
          </Select>

          <Label>Eligibility Criteria</Label>
          <Select>
            <option>Eligibility Criteria</option>
            <option>New customers</option>
          </Select>

          <Label>Duration</Label>
          <Select>
            <option>Project duration</option>
            <option>30 days</option>
            <option>90 days</option>
          </Select>
        </div>
      </div>

      {/* Edit Bio modal */}
      {bioOpen && (
        <Modal onClose={()=>setBioOpen(false)} title="Edit">
          <textarea
            className="w-full border border-gray-300 rounded-md p-3 min-h-[140px] text-[14px]"
            placeholder="Write here.."
            value={bio}
            onChange={(e)=>setBio(e.target.value)}
          />
          <div className="text-[11px] text-red-400 mt-1">Minimum of 100 words</div>
          <button
            className="mt-4 w-full h-11 rounded-md bg-blue-600 text-white font-medium"
            onClick={()=>{ setBioOpen(false); setSavedOpen(true); }}
          >
            Saved
          </button>
        </Modal>
      )}

      {/* Saved success modal */}
      {savedOpen && (
        <Modal onClose={()=>setSavedOpen(false)}>
          <div className="mx-auto w-28 h-28 rounded-full bg-blue-50 grid place-items-center mb-3">🎈</div>
          <div className="text-center font-semibold">Bio Saved Successfully</div>
          <div className="text-center text-gray-500 text-sm mt-1">This will show on your profile page.</div>
          <button className="mt-4 w-full h-11 rounded-md bg-blue-600 text-white font-medium" onClick={()=>setSavedOpen(false)}>Close</button>
        </Modal>
      )}
    </>
  );
}

/* Reusable UI */
function Label({children}:{children:React.ReactNode}){ return <div className="text-[12px] text-gray-500 mt-3 mb-1">{children}</div>; }
function Select({children}:{children:React.ReactNode}){ return <select className="w-full h-11 border border-gray-300 rounded-md px-3 text-[14px]">{children}</select>; }

function Modal({ children, onClose, title }:{ children:React.ReactNode; onClose:()=>void; title?:string }) {
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute left-1/2 -translate-x-1/2 top-24 w-[340px] bg-white rounded-xl shadow-xl p-4">
        {title && <div className="flex items-center justify-between mb-2">
          <div className="font-medium">{title}</div>
          <button onClick={onClose} aria-label="Close">{CloseIcon()}</button>
        </div>}
        {children}
      </div>
    </div>
  );
}

/* icons & helpers */
function Stars(n:number){
  return Array.from({length:5}).map((_,i)=>(<svg key={i} width="16" height="16" viewBox="0 0 24 24" className={`${i<n?'text-yellow-400':'text-gray-300'}`}><path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>));
}
function ArrowLeft(){ return <svg width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"/></svg>; }
function Hamburger(){ return <svg width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"/></svg>; }
function CloseIcon(){ return <svg width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M18.3 5.71L12 12l6.3 6.29-1.41 1.42L10.59 13.4 4.29 19.7 2.88 18.29 9.17 12 2.88 5.71 4.29 4.3l6.3 6.29 6.29-6.29z"/></svg>; }

'use client';
import Link from 'next/link';

export default function Preferences(){
  return (
    <>
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="h-12 flex items-center justify-between px-4">
          <Link href="/dashboard/settings" className="p-2 -ml-2">{ArrowLeft()}</Link>
          <div className="font-semibold">Preferences</div>
          <button className="p-2">{Hamburger()}</button>
        </div>
      </header>
      <div className="p-4 text-sm text-gray-600">Add your preferences form here…</div>
    </>
  );
}
function ArrowLeft(){ return <svg width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"/></svg>; }
function Hamburger(){ return <svg width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"/></svg>; }

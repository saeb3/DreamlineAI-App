'use client';
import Link from 'next/link';
import { useState } from 'react';

function Row({
  href, icon, label, right, muted
}: { href?: string; icon: React.ReactNode; label: string; right?: React.ReactNode; muted?: boolean }) {
  const content = (
    <div className="flex items-center justify-between px-4 py-4">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center">{icon}</div>
        <span className={`text-[15px] ${muted ? 'text-gray-500' : 'text-gray-900'}`}>{label}</span>
      </div>
      {right ?? <ChevronRight />}
    </div>
  );
  return href ? (
    <Link href={href} className="block hover:bg-gray-50">{content}</Link>
  ) : (
    <div className="hover:bg-gray-50">{content}</div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="px-4">
      <div className="text-[13px] text-gray-500 mt-3 mb-2">{title}</div>
      <div className="bg-gray-100 rounded-xl overflow-hidden divide-y divide-gray-200">
        {children}
      </div>
    </div>
  );
}

function HeaderSimple({ title }: { title: string }) {
  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="h-12 flex items-center justify-between px-4">
        <button aria-label="Back" className="p-2 -ml-2">{ArrowLeft()}</button>
        <div className="font-semibold">{title}</div>
        <button className="p-2">{Hamburger()}</button>
      </div>
    </header>
  );
}

export default function SettingsHome() {
  const [notif, setNotif] = useState(false);
  return (
    <>
      <HeaderSimple title="Settings" />
      <div className="pb-14">
        <Section title="Profile">
          <Row href="/dashboard/settings/profile" icon={UserIcon()} label="Profile" />
          <Row href="/dashboard/settings/preferences" icon={TuneIcon()} label="Preference" />
          <Row
            icon={BellIcon()}
            label="Notification"
            right={
              <label className="inline-flex cursor-pointer items-center">
                <input type="checkbox" className="sr-only" checked={notif} onChange={()=>setNotif(v=>!v)} />
                <span className={`w-11 h-6 rounded-full transition-colors ${notif ? 'bg-blue-600' : 'bg-gray-300'} relative`}>
                  <span className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-transform ${notif ? 'translate-x-5' : ''}`} />
                </span>
              </label>
            }
          />
          <Row href="/dashboard/settings/teams" icon={TeamIcon()} label="Manage teams" />
        </Section>

        <div className="h-3" />

        <Section title="Account">
          <Row icon={GearIcon()} label="Account settings" />
          <Row icon={ShieldIcon()} label="Privacy settings" />
          <Row icon={ReportIcon()} label="Safety & Reporting" />
          <Row icon={SparkIcon()} label="Rose DreamlineAI" />
          <Row icon={LogoutIcon()} label="Log out" muted />
        </Section>
      </div>
    </>
  );
}

/* --- tiny inline icons (no external deps) --- */
function ChevronRight(){ return <svg width="20" height="20" viewBox="0 0 24 24" className="text-gray-400"><path fill="currentColor" d="M9 18l6-6-6-6"/></svg>; }
function ArrowLeft(){ return <svg width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"/></svg>; }
function Hamburger(){ return <svg width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"/></svg>; }
function UserIcon(){ return <svg width="18" height="18" viewBox="0 0 24 24" className="text-blue-600"><path fill="currentColor" d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-5 0-9 2.5-9 5v1h18v-1c0-2.5-4-5-9-5z"/></svg>; }
function TuneIcon(){ return <svg width="18" height="18" viewBox="0 0 24 24" className="text-blue-600"><path fill="currentColor" d="M3 6h6v2H3V6zm0 10h10v2H3v-2zM21 10H11V8h10v2zm0 8H9v-2h12v2z"/></svg>; }
function BellIcon(){ return <svg width="18" height="18" viewBox="0 0 24 24" className="text-blue-600"><path fill="currentColor" d="M12 22a2 2 0 002-2H10a2 2 0 002 2zm6-6V11a6 6 0 10-12 0v5L4 18v2h16v-2l-2-2z"/></svg>; }
function TeamIcon(){ return <svg width="18" height="18" viewBox="0 0 24 24" className="text-blue-600"><path fill="currentColor" d="M16 11a4 4 0 10-8 0 4 4 0 008 0zm-8 6a6 6 0 0112 0v1H8v-1zM6 10a2 2 0 110-4 2 2 0 010 4zm-4 8a4 4 0 017.33-2.67A7.97 7.97 0 006 18v1H2v-1z"/></svg>; }
function GearIcon(){ return <svg width="18" height="18" viewBox="0 0 24 24" className="text-blue-600"><path fill="currentColor" d="M19.14 12.94a7.07 7.07 0 000-1.88l2.03-1.58-2-3.46-2.39.96a7.05 7.05 0 00-1.63-.95l-.36-2.54h-4l-.36 2.54a7.05 7.05 0 00-1.63.95l-2.39-.96-2 3.46 2.03 1.58a7.07 7.07 0 000 1.88L2.8 14.52l2 3.46 2.39-.96c.5.39 1.05.7 1.63.95l.36 2.54h4l.36-2.54c.58-.25 1.13-.56 1.63-.95l2.39.96 2-3.46-2.03-1.58zM12 15.5A3.5 3.5 0 1115.5 12 3.5 3.5 0 0112 15.5z"/></svg>; }
function ShieldIcon(){ return <svg width="18" height="18" viewBox="0 0 24 24" className="text-blue-600"><path fill="currentColor" d="M12 2l7 4v6c0 5-3.5 9.74-7 10-3.5-.26-7-5-7-10V6l7-4z"/></svg>; }
function ReportIcon(){ return <svg width="18" height="18" viewBox="0 0 24 24" className="text-blue-600"><path fill="currentColor" d="M3 3h18v2H3zm3 4h12v12H6zm2 2v8h8V9z"/></svg>; }
function SparkIcon(){ return <svg width="18" height="18" viewBox="0 0 24 24" className="text-blue-600"><path fill="currentColor" d="M11 2l1.5 6H19l-5 3.5L15.5 18 11 14.5 6.5 18 8 11.5 3 8h6.5z"/></svg>; }
function LogoutIcon(){ return <svg width="18" height="18" viewBox="0 0 24 24" className="text-blue-600"><path fill="currentColor" d="M10 17v-2h4v-6h-4V7h6v10h-6zm-6-9h4V6H4a2 2 0 00-2 2v8a2 2 0 002 2h4v-2H4V8z"/></svg>; }

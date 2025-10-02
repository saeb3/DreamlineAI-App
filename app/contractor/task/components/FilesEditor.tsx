"use client";

import React, { useRef, useState } from "react";
import { ArrowLeft, UploadCloud, File as FileIcon, Share2, Copy, Trash2, X } from "lucide-react";
import type { Task } from "./TaskSection";

type UploadStatus = "queued" | "uploading" | "done" | "error" | "canceled";

type UploadItem = {
  id: string;
  file: File;
  name: string;
  size: number;
  progress: number;      // 0..100
  status: UploadStatus;
  xhr?: XMLHttpRequest;  // for cancel
};

type UploadEntry = {
  name: string;
  size: number;
  type: string;
  lastModified: number;
};

const ACCEPT = [
  ".pdf", ".doc", ".docx",
  ".dwg", ".dxf",
  ".png", ".jpg", ".jpeg",
  ".zip"
].join(",");

interface FilesEditorProps {
  task: Task;
  onBack: () => void;
  showHeader?: boolean; // parent can render its own bar; default false
}

export default function FilesEditor({ task, onBack, showHeader = false }: FilesEditorProps) {

    type UploadStatus = "queued" | "uploading" | "done" | "error" | "canceled";

    type UploadItem = {
    id: string;
    file: File;
    name: string;
    size: number;
    progress: number;      // 0..100
    status: UploadStatus;
    xhr?: XMLHttpRequest;  // for cancel
    };

    const [uploading, setUploading] = useState<UploadItem[]>([]);
    const [uploads, setUploads] = useState<UploadEntry[]>([]); // your “Recent Upload”
    const inputRef = useRef<HTMLInputElement | null>(null);

    const onBrowseClick = () => inputRef.current?.click();

    const onFilesSelected: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const files = Array.from(e.target.files ?? []);
        if (!files.length) return;

        // enqueue + start
        files.forEach(startUpload);

        // allow same file again
        e.currentTarget.value = "";
    };

    const toMB = (bytes: number) => (bytes / (1024 * 1024)).toFixed(1);
    const fmtSize = (bytes: number) => (bytes < 1024 ? `${bytes} B` : bytes < 1024 * 1024 ? `${(bytes/1024).toFixed(1)} KB` : `${toMB(bytes)} MB`);
    const fmtDate = (ts: number) =>
    new Date(ts).toLocaleDateString(undefined, { day: "2-digit", month: "long", year: "numeric" });

    function addRecent(file: File) {
        setUploads(prev => [
            {
            name: file.name,
            size: file.size,
            type: file.type,
            lastModified: file.lastModified,
            },
            ...prev,
        ]);
    }

    function startUpload(file: File) {
        const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
        const item: UploadItem = {
            id,
            file,
            name: file.name,
            size: file.size,
            progress: 0,
            status: "queued",
    };
    setUploading(prev => [item, ...prev]);

    // Build form data
    const form = new FormData();
    form.append("file", file);

    // XHR for progress events
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/upload");

    xhr.upload.onprogress = (evt) => {
        if (!evt.lengthComputable) return;
        const pct = Math.round((evt.loaded / evt.total) * 100);
        setUploading(prev =>
        prev.map(u => (u.id === id ? { ...u, progress: pct, status: "uploading" } : u))
        );
    };

    xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4) return;
        if (xhr.status >= 200 && xhr.status < 300) {
        // success
        setUploading(prev =>
            prev.map(u => (u.id === id ? { ...u, progress: 100, status: "done", xhr: undefined } : u))
        );
        addRecent(file);
        } else if (xhr.status === 0) {
        // aborted
        setUploading(prev =>
            prev.map(u => (u.id === id ? { ...u, status: "canceled", xhr: undefined } : u))
        );
        } else {
        // error
        setUploading(prev =>
            prev.map(u => (u.id === id ? { ...u, status: "error", xhr: undefined } : u))
        );
        }
    };

    xhr.onerror = () => {
        setUploading(prev =>
        prev.map(u => (u.id === id ? { ...u, status: "error", xhr: undefined } : u))
        );
    };

    // attach for cancel
    setUploading(prev => prev.map(u => (u.id === id ? { ...u, xhr } : u)));
    xhr.send(form);
    }

    function cancelUpload(id: string) {
        setUploading(prev => {
            const target = prev.find(u => u.id === id);
            if (target?.xhr) target.xhr.abort();
            return prev.map(u => (u.id === id ? { ...u, status: "canceled", xhr: undefined } : u));
        });
    }

  return (
    <div className="flex flex-col min-h-screen max-w-md bg-[#F5F5F5]">
      {/* Optional internal header (usually OFF; Dashboard renders the bar) */}
      {showHeader && (
        <header className="flex items-center justify-between px-4 py-3">
          <button onClick={onBack} className="p-2 -ml-2 rounded hover:bg-gray-100" aria-label="Back">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-[20px] font-semibold">Your Files</h1>
          {/*<div className="w-7" />*/}
        </header>
      )}

      <main className="px-4 py-4 space-y-4">
        {/* Instructions */}
        <section className="bg-white p-4">
          <h2 className="font-semibold mb-5">Instructions:</h2>
          <div className="grid grid-cols-[80px_1fr] gap-x-4 gap-y-2 text-sm">
             <div className="text-black font-bold mb-3">Documents:</div>
             <div>Files supported PDFs, Word</div>

             <div className="text-black font-bold mb-3">Blueprints:</div>
             <div>DWG files, CAD drawings, Architectural plans.</div>

             <div className="text-black font-bold mb-3">Images:</div>
             <div>JPEG, PNG</div>

             <div className="text-black font-bold">Other files:</div>
             <div>Zip Archives</div>
         </div>
        </section>

        {/* Upload dropzone (visual only) */}
        <section className="rounded-xl border-2 border-dashed border-blue-300 bg-blue-50 p-6 text-center mt-8 mb-8">
          <div className="mx-auto w-10 h-10 flex items-center justify-center rounded-full bg-white">
            <UploadCloud className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-sm text-gray-700">Upload your files here</p>
          <button
           type="button"
           onClick={onBrowseClick}
           className="mt-2 text-blue-600 font-medium hover:underline"
          >
           Browse
         </button>
         <input
           ref={inputRef}
           type="file"
           accept={ACCEPT}
           multiple
           onChange={onFilesSelected}
           className="hidden"
         />
        </section>

        {/* Uploading progress (live) */}
        {uploading.some(u => u.status === "uploading" || u.status === "queued") && (
        <section className="rounded-xl bg-white p-4 space-y-3">
            <div className="text-sm text-gray-700">
            Uploading {uploading.filter(u => u.status === "uploading" || u.status === "queued").length} file(s)
            </div>

            {uploading
            .filter(u => u.status === "uploading" || u.status === "queued")
            .map(u => (
                <div key={u.id} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded" />
                <div className="flex-1">
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span className="truncate">{u.name}</span>
                    <span>{fmtSize(u.size)}</span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-200">
                    <div
                        className="h-2 rounded-full bg-blue-600 transition-[width] duration-200"
                        style={{ width: `${u.progress}%` }}
                    />
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                        {u.status === "queued" ? "Queued…" : `Uploading ${u.progress}%`}
                    </div>
                </div>
                <button
                    className="p-2 rounded hover:bg-gray-100"
                    aria-label="Cancel"
                    onClick={() => cancelUpload(u.id)}
                >
                    <X className="w-4 h-4 text-gray-600" />
                </button>
                </div>
            ))}
        </section>
        )}


        {/* Recent Upload */}
        {uploads.length > 0 && (
        <section className="space-y-2">
            <h3 className="text-sm font-semibold text-black mb-3">Recent Upload</h3>

            {uploads.map((file, idx) => (
            <div
                key={`${file.name}-${file.lastModified}-${idx}`}
                className="rounded-lg bg-white p-3 mb-4 flex items-center gap-3"
            >
                <div className="w-9 h-9 rounded bg-gray-100 flex items-center justify-center">
                    <FileIcon className="w-4 h-4 text-gray-600" />
                </div>
                <div className="flex-1">
                    <div className="text-sm font-semibold truncate">
                        {file.name}
                    </div>
                    <div className="text-xs text-gray-500">
                        {fmtDate(file.lastModified)} • {fmtSize(file.size)}
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <button className="p-2 rounded hover:bg-gray-100" aria-label="Share">
                        <Share2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded hover:bg-gray-100" aria-label="Copy link">
                        <Copy className="w-4 h-4" />
                    </button>
                    <button
                        className="p-2 rounded hover:bg-gray-100"
                        aria-label="Delete"
                        onClick={() => setUploads((u) => u.filter((_, i) => i !== idx))}
                    >
                        <Trash2 className="w-4 h-4" />
                    </button>
                </div>
            </div>
            ))}
        </section>
        )}

      </main>
    </div>
  );
}

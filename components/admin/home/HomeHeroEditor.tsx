"use client";

import React from "react";
import { Type, Link as LinkIcon, Video, UploadCloud, Film } from "lucide-react";
import { MAX_VIDEO_SIZE } from "@/lib/constants";

export default function HomeHeroEditor({
  pageData,
  handleChange,
  videoPreview,
  handleVideoChange,
}: {
  pageData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  videoPreview: string | null;
  handleVideoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* LEFT COLUMN: Text & Links */}
      <div className="lg:col-span-7 space-y-8">
        <section className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
          <div className="bg-slate-50/50 border-b border-slate-100 px-6 py-5 flex items-center gap-3">
            <div className="p-2 bg-blue-50 text-[#213e76] rounded-xl">
              <Type size={20} />
            </div>
            <h2 className="text-lg font-bold text-slate-800">Typography & Messaging</h2>
          </div>
          
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Primary Title <span className="text-red-500">*</span></label>
                <input type="text" name="titleBlack" value={pageData.titleBlack} onChange={handleChange} className="w-full px-4 py-3 text-slate-900 bg-slate-50 border border-slate-200 rounded-xl outline-none" placeholder="e.g. Why" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Highlighted Title <span className="text-red-500">*</span></label>
                <input type="text" name="titleBlue" value={pageData.titleBlue} onChange={handleChange} className="w-full px-4 py-3 text-slate-900 bg-slate-50 border border-slate-200 rounded-xl outline-none" placeholder="e.g. AvPlat" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Body Description <span className="text-red-500">*</span></label>
              <textarea rows={5} name="description" value={pageData.description} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none resize-y text-slate-700" placeholder="Enter main paragraph..." />
            </div>
          </div>
        </section>

        {/* APP LINKS CARD */}
        <section className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
          <div className="bg-slate-50/50 border-b border-slate-100 px-6 py-5 flex items-center gap-3">
            <div className="p-2 bg-blue-50 text-[#213e76] rounded-xl">
              <LinkIcon size={20} />
            </div>
            <h2 className="text-lg font-bold text-slate-800">Download Buttons</h2>
          </div>
          <div className="p-6 space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Apple App Store URL</label>
              <input type="url" name="appStoreUrl" value={pageData.appStoreUrl || ""} onChange={handleChange} className="w-full px-4 py-3 text-slate-900 bg-slate-50 border border-slate-200 rounded-xl outline-none" placeholder="https://apps.apple.com/..." />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Google Play Store URL</label>
              <input type="url" name="playStoreUrl" value={pageData.playStoreUrl || ""} onChange={handleChange} className="w-full px-4 py-3 text-slate-900 bg-slate-50 border border-slate-200 rounded-xl outline-none" placeholder="https://play.google.com/..." />
            </div>
          </div>
        </section>
      </div>

      {/* RIGHT COLUMN: Video Upload */}
      <div className="lg:col-span-5">
        <section className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden sticky top-32">
          <div className="bg-slate-50/50 border-b border-slate-100 px-6 py-5 flex items-center justify-between">
             <div className="flex items-center gap-3">
               <div className="p-2 bg-blue-50 text-[#213e76] rounded-xl"><Film size={20} /></div>
               <h2 className="text-lg font-bold text-slate-800">Hero Media Asset</h2>
             </div>
          </div>
          <div className="p-6">
            <div className="relative group w-full aspect-[9/16] max-h-[500px] bg-slate-50 rounded-2xl border-2 border-dashed border-slate-300 overflow-hidden flex flex-col items-center justify-center transition-all hover:bg-slate-100">
              {videoPreview ? (
                <>
                  <video src={videoPreview} className="w-full h-full object-cover" autoPlay loop muted />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                    <label className="cursor-pointer bg-white text-slate-900 px-6 py-3 rounded-full text-sm font-bold shadow-xl hover:scale-105 transition-transform flex items-center gap-2">
                      <UploadCloud size={18} /> Replace Video
                      <input type="file" className="sr-only" accept="video/mp4,video/webm" onChange={handleVideoChange} />
                    </label>
                  </div>
                </>
              ) : (
                <label className="cursor-pointer flex flex-col items-center justify-center w-full h-full text-slate-400 hover:text-[#213e76] transition-colors p-6 text-center">
                  <div className="p-5 bg-white rounded-full shadow-sm mb-4 border border-slate-100 group-hover:scale-110 transition-transform"><Video size={32} /></div>
                  <p className="text-base font-bold text-slate-700 mb-1">Upload Hero Video</p>
                  <p className="text-xs text-slate-500">Up to {MAX_VIDEO_SIZE / 1024 / 1024}MB</p>
                  <input type="file" className="sr-only" accept="video/mp4,video/webm" onChange={handleVideoChange} />
                </label>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
"use client";

import React from "react";
import { Type, UploadCloud, Image as ImageIcon } from "lucide-react";

interface HeroData {
  pageTitle: string;
  badgeText: string;
  heroTitle: string;
  heroDescription: string;
  heroImage: string | null;
}

export default function HeroEditor({
  data,
  onChange,
  onImageChange,
  imagePreview
}: {
  data: HeroData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  imagePreview: string | null;
}) {
  return (
    <section className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
      <div className="bg-slate-50/50 border-b border-slate-100 px-6 py-5 flex items-center gap-3">
        <div className="p-2 bg-blue-50 text-[#213e76] rounded-xl">
          <Type size={20} />
        </div>
        <h2 className="text-lg font-bold text-slate-800">Hero Configuration</h2>
      </div>

      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase">Page Name (Browser Tab)</label>
            <input type="text" name="pageTitle" value={data.pageTitle} onChange={onChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 outline-none" placeholder="e.g. Charter" />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase">Badge Text</label>
            <input type="text" name="badgeText" value={data.badgeText || ""} onChange={onChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 outline-none" placeholder="e.g. Operator Platform" />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-500 uppercase">Hero Main Heading</label>
          <input type="text" name="heroTitle" value={data.heroTitle} onChange={onChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 outline-none font-semibold" placeholder="Enter hero title..." />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-500 uppercase">Hero Description</label>
          <textarea rows={4} name="heroDescription" value={data.heroDescription} onChange={onChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 outline-none resize-none" placeholder="Enter hero description..." />
        </div>

        {/* Hero Image Upload */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-500 uppercase">Hero Banner Image</label>
          <div className="relative h-48 w-full rounded-2xl border-2 border-dashed border-slate-200 overflow-hidden group">
            {imagePreview ? (
              <img src={imagePreview} className="w-full h-full object-cover" alt="Preview" />
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-slate-400">
                <ImageIcon size={32} className="mb-2" />
                <span className="text-xs">No image selected</span>
              </div>
            )}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <label className="cursor-pointer bg-white text-slate-900 px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2">
                <UploadCloud size={14} /> Change Image
                <input type="file" className="sr-only" accept="image/*" onChange={onImageChange} />
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import React, { useState, useEffect } from "react";
import useSWR from "swr";
import { toast } from "react-hot-toast";
import { 
  Save, Loader2, Type, Link as LinkIcon, 
  Video, UploadCloud, Film 
} from "lucide-react";
import { MAX_VIDEO_SIZE } from "@/lib/constants";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function AdminHomePage() {
  const [isSaving, setIsSaving] = useState(false);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  
  const [pageData, setPageData] = useState({
    titleBlack: "",
    titleBlue: "",
    description: "",
    appStoreUrl: "",
    playStoreUrl: "",
  });

  const { data, isLoading, mutate } = useSWR("/api/home", fetcher, { 
    revalidateOnFocus: false 
  });

  useEffect(() => {
    if (data?.success && data?.data) {
      const content = data.data;
      setPageData({
        titleBlack: content.titleBlack || "",
        titleBlue: content.titleBlue || "",
        description: content.description || "",
        appStoreUrl: content.appStoreUrl || "",
        playStoreUrl: content.playStoreUrl || "",
      });
      if (content.videoUrl) {
        setVideoPreview(content.videoUrl);
      }
    }
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPageData((prev) => ({ ...prev, [name]: value }));
  };

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > MAX_VIDEO_SIZE) {
        toast.error(`Video is too large. Max size is ${MAX_VIDEO_SIZE / 1024 / 1024}MB.`);
        e.target.value = '';
        return;
      }
      if (!file.type.startsWith("video/")) {
        toast.error("Please upload a valid video file.");
        e.target.value = '';
        return;
      }
      setVideoFile(file);
      setVideoPreview(URL.createObjectURL(file));
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!pageData.titleBlack || !pageData.titleBlue || !pageData.description) {
      toast.error("Please fill in all required text fields.");
      return;
    }

    setIsSaving(true);
    try {
      const formData = new FormData();
      formData.append("titleBlack", pageData.titleBlack);
      formData.append("titleBlue", pageData.titleBlue);
      formData.append("description", pageData.description);
      formData.append("appStoreUrl", pageData.appStoreUrl);
      formData.append("playStoreUrl", pageData.playStoreUrl);

      if (videoFile) {
        formData.append("video", videoFile);
      }

      const res = await fetch("/api/admin/home", {
        method: "POST",
        body: formData, 
      });
      
      const result = await res.json();
      
      if (result.success) {
        toast.success("Home page content updated!");
        setVideoFile(null); 
        mutate(); 
      } else {
        toast.error(result.message || "Failed to save settings.");
      }
      
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during save.");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <div className="flex flex-col items-center gap-3 text-[#213e76]">
          <Loader2 className="animate-spin" size={36} />
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8 pb-24">
      {/* STICKY HEADER */}
      <div className="sticky top-0 z-30 bg-slate-50/80 backdrop-blur-xl pb-4 pt-6 border-b border-slate-200/60 flex items-center justify-between -mx-6 px-6 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Home Page Configuration</h1>
          <p className="text-slate-500 text-sm mt-1">Manage the hero content, mobile video, and app store links.</p>
        </div>
        <button 
          onClick={handleSave} 
          disabled={isSaving} 
          className="flex items-center gap-2 bg-[#213e76] hover:bg-black text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-[0_4px_14px_rgba(33,62,118,0.25)] disabled:opacity-60 disabled:hover:bg-[#213e76] disabled:cursor-not-allowed"
        >
          {isSaving ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
          {isSaving ? "Saving..." : "Save Changes"}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: Text & Links (Takes up 7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* TEXT CONTENT CARD */}
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
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Primary Title <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="titleBlack"
                    value={pageData.titleBlack} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 text-slate-900 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#213e76]/20 focus:border-[#213e76] outline-none transition-all" 
                    placeholder="e.g. Why"
                  />
                  <p className="text-[11px] text-slate-400 mt-1.5">This renders as the default black text.</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Highlighted Title <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="titleBlue"
                    value={pageData.titleBlue} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 text-slate-900 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#213e76]/20 focus:border-[#213e76] outline-none transition-all" 
                    placeholder="e.g. AvPlat"
                  />
                  <p className="text-[11px] text-slate-400 mt-1.5">This renders in the brand blue color.</p>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Body Description <span className="text-red-500">*</span>
                </label>
                <textarea 
                  rows={5} 
                  name="description"
                  value={pageData.description} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#213e76]/20 focus:border-[#213e76] outline-none transition-all resize-y leading-relaxed text-slate-700" 
                  placeholder="Enter the main paragraph text that explains the value proposition..."
                />
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
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Apple App Store URL
                </label>
                <input 
                  type="url" 
                  name="appStoreUrl"
                  value={pageData.appStoreUrl} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 text-slate-900 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#213e76]/20 focus:border-[#213e76] outline-none transition-all" 
                  placeholder="https://apps.apple.com/..."
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Google Play Store URL
                </label>
                <input 
                  type="url" 
                  name="playStoreUrl"
                  value={pageData.playStoreUrl} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 text-slate-900 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#213e76]/20 focus:border-[#213e76] outline-none transition-all" 
                  placeholder="https://play.google.com/..."
                />
              </div>
            </div>
          </section>

        </div>

        {/* RIGHT COLUMN: Video Upload (Takes up 5 cols) */}
        <div className="lg:col-span-5">
          <section className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden sticky top-32">
            <div className="bg-slate-50/50 border-b border-slate-100 px-6 py-5 flex items-center justify-between">
               <div className="flex items-center gap-3">
                 <div className="p-2 bg-blue-50 text-[#213e76] rounded-xl">
                   <Film size={20} />
                 </div>
                 <h2 className="text-lg font-bold text-slate-800">Media Asset</h2>
               </div>
            </div>

            <div className="p-6">
              <div className="relative group w-full aspect-[9/16] max-h-[500px] bg-slate-50 rounded-2xl border-2 border-dashed border-slate-300 overflow-hidden flex flex-col items-center justify-center transition-all hover:bg-slate-100 hover:border-[#213e76]/40">
                
                {videoPreview ? (
                  <>
                    <video 
                      src={videoPreview} 
                      className="w-full h-full object-cover" 
                      autoPlay 
                      loop 
                      muted 
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center backdrop-blur-sm">
                      <label className="cursor-pointer bg-white text-slate-900 px-6 py-3 rounded-full text-sm font-bold shadow-xl hover:scale-105 transition-transform flex items-center gap-2">
                        <UploadCloud size={18} />
                        Replace Video
                        <input 
                          type="file" 
                          className="sr-only" 
                          accept="video/mp4,video/webm,video/ogg"
                          onChange={handleVideoChange}
                        />
                      </label>
                      <p className="text-white/80 text-xs mt-4 font-medium tracking-wide">Max upload size: {MAX_VIDEO_SIZE / 1024 / 1024}MB</p>
                    </div>
                  </>
                ) : (
                  <label className="cursor-pointer flex flex-col items-center justify-center w-full h-full text-slate-400 hover:text-[#213e76] transition-colors p-6 text-center">
                    <div className="p-5 bg-white rounded-full shadow-sm mb-4 border border-slate-100 group-hover:scale-110 transition-transform">
                      <Video size={32} />
                    </div>
                    <p className="text-base font-bold text-slate-700 mb-1">Upload a Video</p>
                    <p className="text-xs text-slate-500">MP4 or WebM up to {MAX_VIDEO_SIZE / 1024 / 1024}MB</p>
                    <input 
                      type="file" 
                      className="sr-only" 
                      accept="video/*"
                      onChange={handleVideoChange}
                    />
                  </label>
                )}
              </div>
              
              {videoFile && (
                <div className="mt-5 bg-amber-50 rounded-xl p-4 border border-amber-200 flex items-start gap-3">
                  <div className="w-2 h-2 mt-1.5 rounded-full bg-amber-500 shrink-0 animate-pulse" />
                  <p className="text-xs text-amber-800 leading-relaxed font-medium">
                    New video selected. It will be uploaded to your storage server when you click &quot;Save Changes&quot;. This may take a few moments.
                  </p>
                </div>
              )}
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}
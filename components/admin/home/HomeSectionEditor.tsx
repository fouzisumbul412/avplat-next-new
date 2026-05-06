"use client";

import React, { useState } from "react";
import { Plus, Trash2, UploadCloud, ImageIcon, List } from "lucide-react";

export interface SectionItem {
  id?: string;
  title: string;
  description: string;
  link?: string;
  image?: string;
  imageFile?: File | null;
  imagePreview?: string;
}

interface EditorProps {
  title: string;
  icon: React.ReactNode;
  items: SectionItem[];
  setItems: React.Dispatch<React.SetStateAction<SectionItem[]>>;
  labels: { title: string; desc: string; link?: string };
  viewMode: "accordion" | "carousel" | "list";
}

export default function HomeSectionEditor({
  title, icon, items, setItems, labels, viewMode
}: EditorProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  const addItem = () => {
    const newItem = { title: "", description: "", link: "" };
    setItems([...items, newItem]);
    setActiveIdx(items.length);
  };

  const removeItem = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const newItems = items.filter((_, i) => i !== idx);
    setItems(newItems);
    if (activeIdx >= idx && activeIdx > 0) setActiveIdx(activeIdx - 1);
  };

  const updateItem = (idx: number, data: Partial<SectionItem>) => {
    const newItems = [...items];
    newItems[idx] = { ...newItems[idx], ...data };
    setItems(newItems);
  };

  const currentItem = items[activeIdx];
  const isRewired = viewMode === "list";

  return (
    <section className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden flex flex-col md:flex-row min-h-[520px]">
      
      {/* SIDEBAR SELECTOR */}
      <div className="w-full md:w-80 border-r border-slate-100 bg-slate-50/50 flex flex-col">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2 font-bold text-[#213e76] uppercase text-xs tracking-widest">
            {icon} <span>{title}</span>
          </div>
          <button onClick={addItem} className="p-1.5 bg-[#213e76] text-white rounded-lg hover:bg-black transition-all">
            <Plus size={16} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto max-h-[500px] no-scrollbar py-2">
          {items.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`mx-3 mb-1 p-4 rounded-2xl cursor-pointer transition-all flex items-center justify-between group ${
                activeIdx === idx 
                ? "bg-[#213e76] text-white shadow-md shadow-blue-900/10" 
                : "hover:bg-white text-slate-500 hover:text-[#213e76] border border-transparent hover:border-slate-100"
              }`}
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <span className={`text-[10px] font-black ${activeIdx === idx ? "text-white/40" : "text-slate-300"}`}>
                  {(idx + 1).toString().padStart(2, '0')}
                </span>
                <span className="text-xs font-bold truncate pr-2">
                  {item.title || "Untitled Item"}
                </span>
              </div>
              <button onClick={(e) => removeItem(idx, e)} className={`p-1 transition-all ${activeIdx === idx ? "text-white/60 hover:text-white" : "opacity-0 group-hover:opacity-100 text-slate-300 hover:text-red-500"}`}>
                <Trash2 size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* EDITOR CONTENT */}
      <div className="flex-1 p-8 bg-white relative">
        {currentItem ? (
          <div className="max-w-3xl space-y-8">
            <div className="flex items-center justify-between border-b border-slate-50 pb-6">
              <div>
                <h4 className="text-xl font-bold text-slate-900">Configure Item {activeIdx + 1}</h4>
                <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest font-bold">{isRewired ? "Flight Ops Workflow" : "Section Content"}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8">
              
              {/* PRIMARY TEXT FIELDS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{labels.title}</label>
                  <input 
                    type="text" 
                    value={currentItem.title} 
                    onChange={(e) => updateItem(activeIdx, { title: e.target.value })} 
                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-[#213e76]/5 focus:border-[#213e76] transition-all font-bold text-slate-900" 
                    placeholder="Enter bold text..."
                  />
                </div>

                {/* If Rewired, use single line input for description instead of textarea */}
                {isRewired ? (
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{labels.desc}</label>
                    <input 
                      type="text" 
                      value={currentItem.description} 
                      onChange={(e) => updateItem(activeIdx, { description: e.target.value })} 
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-[#213e76]/5 focus:border-[#213e76] transition-all font-medium text-slate-600" 
                      placeholder="Enter gray text..."
                    />
                  </div>
                ) : (
                  labels.link && (
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{labels.link}</label>
                      <input 
                        type="text" 
                        value={currentItem.link || ""} 
                        onChange={(e) => updateItem(activeIdx, { link: e.target.value })} 
                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-[#213e76]/5 focus:border-[#213e76] transition-all text-slate-900" 
                      />
                    </div>
                  )
                )}
              </div>

              {/* DESCRIPTION TEXTAREA (Hidden for Rewired) */}
              {!isRewired && (
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{labels.desc}</label>
                  <textarea 
                    rows={5} 
                    value={currentItem.description} 
                    onChange={(e) => updateItem(activeIdx, { description: e.target.value })} 
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-3xl outline-none focus:ring-4 focus:ring-[#213e76]/5 focus:border-[#213e76] transition-all leading-relaxed text-slate-700 font-medium" 
                    placeholder="Enter detailed content..."
                  />
                </div>
              )}

              {/* MEDIA SECTION (Hidden for Rewired) */}
              {!isRewired && (
                <div className="space-y-3 pt-4">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <ImageIcon size={12}/> Visual Asset
                  </label>
                  <div className="relative group w-full h-56 bg-slate-50 rounded-[2.5rem] border-2 border-dashed border-slate-200 overflow-hidden flex items-center justify-center transition-colors hover:bg-slate-100/50">
                    {currentItem.imagePreview || currentItem.image ? (
                      <img src={currentItem.imagePreview || currentItem.image} className="w-full h-full object-cover" alt="Preview" />
                    ) : (
                      <div className="flex flex-col items-center text-slate-300">
                        <UploadCloud size={32} strokeWidth={1.5} />
                        <span className="text-[10px] font-bold mt-2 uppercase tracking-tighter">No Media Selected</span>
                      </div>
                    )}
                    <label className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer backdrop-blur-[2px]">
                      <div className="bg-white text-slate-900 px-6 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 shadow-xl">
                        <UploadCloud size={14} /> Upload Image
                      </div>
                      <input type="file" className="sr-only" accept="image/*" onChange={(e) => {
                         const file = e.target.files?.[0];
                         if (file) updateItem(activeIdx, { imageFile: file, imagePreview: URL.createObjectURL(file) });
                      }} />
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-slate-300 space-y-4">
             <List size={48} strokeWidth={1} className="opacity-20" />
             <p className="text-xs font-bold uppercase tracking-widest">Select an item from the sidebar</p>
          </div>
        )}
      </div>
    </section>
  );
}
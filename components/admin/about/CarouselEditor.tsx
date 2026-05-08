"use client";

import React, { useState, useEffect } from "react";
import { 
  Images, Plus, Trash2, Image as ImageIcon, 
  ChevronLeft, ChevronRight, GripHorizontal, ArrowLeft, ArrowRight
} from "lucide-react";
import toast from "react-hot-toast"; 
import { MAX_FILE_SIZE } from "@/lib/constants";

interface Props {
  section: any;
  sIndex: number;
  config?: { sectionFields: string[], itemFields: string[] };
  updateSection: (index: number, field: string, value: any) => void;
}

export default function CarouselEditor({ section, sIndex, config, updateSection }: Props) {
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);
  const [draggedIdx, setDraggedIdx] = useState<number | null>(null);

  const sFields = config?.sectionFields || ['subtitle', 'title', 'description'];
  const iFields = config?.itemFields || ['title', 'subtitle', 'image', 'description'];

  useEffect(() => {
    if (section.items.length === 0) setActiveSlideIdx(0);
    else if (activeSlideIdx >= section.items.length) setActiveSlideIdx(section.items.length - 1);
  }, [section.items.length, activeSlideIdx]);

  const updateItem = (iIndex: number, field: string, value: any) => {
    const newItems = [...section.items];
    newItems[iIndex] = { ...newItems[iIndex], [field]: value };
    updateSection(sIndex, "items", newItems);
  };

  const addSlide = () => {
    const newIndex = section.items.length;
    updateSection(sIndex, "items", [
      ...section.items, 
      { title: "New Slide", subtitle: "", description: "", image: "", order: newIndex }
    ]);
    setActiveSlideIdx(newIndex);
  };

  const removeSlide = (iIndex: number) => {
    const newItems = section.items.filter((_: any, i: number) => i !== iIndex);
    newItems.forEach((item: any, i: number) => item.order = i);
    updateSection(sIndex, "items", newItems);
    if (activeSlideIdx >= newItems.length) {
      setActiveSlideIdx(Math.max(0, newItems.length - 1));
    }
  };

  const moveSlide = (idx: number, direction: 'left' | 'right') => {
    const newItems = [...section.items];
    const targetIdx = direction === 'left' ? idx - 1 : idx + 1;

    if (targetIdx < 0 || targetIdx >= newItems.length) return;

    // Swap the items
    const temp = newItems[idx];
    newItems[idx] = newItems[targetIdx];
    newItems[targetIdx] = temp;

    // Update order property
    newItems.forEach((item, i) => item.order = i);

    updateSection(sIndex, "items", newItems);
    setActiveSlideIdx(targetIdx);
  };

  const handleDragStart = (e: React.DragEvent, idx: number) => {
    setDraggedIdx(idx);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, targetIdx: number) => {
    e.preventDefault();
    if (draggedIdx === null || draggedIdx === targetIdx) return;

    const newItems = [...section.items];
    const [draggedItem] = newItems.splice(draggedIdx, 1);
    newItems.splice(targetIdx, 0, draggedItem);

    // Update order property
    newItems.forEach((item, i) => item.order = i);

    updateSection(sIndex, "items", newItems);
    setActiveSlideIdx(targetIdx);
    setDraggedIdx(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, iIndex: number) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        toast.error(`File is too large. Max size is ${MAX_FILE_SIZE / 1024 / 1024}MB.`);
        e.target.value = '';
        return;
      }
      updateItem(iIndex, "newImageFile", file);
    }
  };

  const currentSlide = section.items[activeSlideIdx];

  return (
    <section className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-8">
      {/* SECTION HEADER */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-6">
        <div className="flex items-center gap-3 text-[#1868A5]">
          <div className="p-2.5 bg-blue-50 rounded-xl">
            <Images size={24} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Carousel Slider</h2>
            <p className="text-sm text-slate-500 font-medium">{section.title || "Untitled Carousel"}</p>
          </div>
        </div>
      </div>

      {/* SECTION GLOBAL FIELDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
        {sFields.includes('subtitle') && (
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-slate-700 ml-1">Section Subtitle</label>
            <input 
              type="text" value={section.subtitle || ""} 
              onChange={(e) => updateSection(sIndex, "subtitle", e.target.value)} 
              className="w-full px-4 py-3 bg-white text-slate-900 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#1868A5] outline-none transition-all shadow-sm" 
              placeholder="e.g. Meet Our Team"
            />
          </div>
        )}
        {sFields.includes('title') && (
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-slate-700 ml-1">Section Heading</label>
            <input 
              type="text" value={section.title || ""} 
              onChange={(e) => updateSection(sIndex, "title", e.target.value)} 
              className="w-full px-4 py-3 bg-white text-slate-900 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#1868A5] outline-none transition-all shadow-sm" 
              placeholder="e.g. Expertise Behind Every Flight"
            />
          </div>
        )}
      </div>

      {/* HORIZONTAL CAROUSEL NAVIGATOR */}
      <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 space-y-6">
        
        <div className="flex items-center justify-between">
          <label className="text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
            <GripHorizontal size={16} className="text-[#1868A5]" /> Slide Management <span className="text-[10px] text-slate-400 normal-case font-normal ml-2">(Drag to reorder)</span>
          </label>
          <button 
            type="button" onClick={addSlide} 
            className="flex items-center gap-1.5 text-sm bg-[#1868A5] text-white px-4 py-2 rounded-lg font-bold hover:bg-[#145a8d] transition-all shadow-sm"
          >
            <Plus size={16} /> Add Slide
          </button>
        </div>

        {section.items.length > 0 ? (
          <div className="flex items-center gap-2 overflow-x-auto pb-2 custom-scrollbar">
            {section.items.map((item: any, idx: number) => (
              <button
                key={idx}
                draggable
                onDragStart={(e) => handleDragStart(e, idx)}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, idx)}
                onClick={() => setActiveSlideIdx(idx)}
                className={`flex-shrink-0 relative group flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-300 ${
                  activeSlideIdx === idx 
                    ? 'bg-white border-[#1868A5] shadow-md ring-2 ring-[#1868A5]/20' 
                    : 'bg-white border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 text-slate-500'
                } ${draggedIdx === idx ? 'opacity-40 border-dashed' : ''}`}
              >
                {/* Drag Handle Icon inside button */}
                <GripHorizontal size={14} className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity absolute -left-1.5 top-1/2 -translate-y-1/2 cursor-grab" />

                {/* Mini Image Preview */}
                <div className="h-8 w-8 rounded-full bg-slate-100 border border-slate-200 overflow-hidden shrink-0 flex items-center justify-center">
                  {item.newImageFile || item.image ? (
                    <img src={item.newImageFile ? URL.createObjectURL(item.newImageFile) : item.image} className="w-full h-full object-cover" alt="thumb" />
                  ) : (
                    <ImageIcon size={14} className="text-slate-300" />
                  )}
                </div>
                
                <div className="text-left max-w-[120px]">
                  <p className={`text-xs font-bold truncate ${activeSlideIdx === idx ? 'text-[#1868A5]' : 'text-slate-700'}`}>
                    {item.title || `Slide ${idx + 1}`}
                  </p>
                  <p className="text-[10px] text-slate-400 truncate">{item.subtitle || 'No subtitle'}</p>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-10 bg-white rounded-xl border border-dashed border-slate-300">
            <Images size={32} className="text-slate-300 mb-2" />
            <p className="text-sm font-semibold text-slate-500">No slides added yet</p>
          </div>
        )}

        {/* ACTIVE SLIDE EDITOR CANVAS */}
        {currentSlide && (
          <div className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm animate-in fade-in zoom-in-95 duration-200 relative">
            
            {/* Slide Editor Header with Prev/Next controls */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
              <div className="flex items-center gap-4">
                <span className="bg-blue-50 text-[#1868A5] px-3 py-1 rounded-lg text-sm font-black tracking-widest">
                  SLIDE {activeSlideIdx + 1}
                </span>
                
                {/* View Prev/Next */}
                <div className="flex items-center gap-1 border-r border-slate-200 pr-4">
                  <span className="text-[10px] uppercase font-bold text-slate-400 mr-1">View:</span>
                  <button 
                    onClick={() => setActiveSlideIdx(Math.max(0, activeSlideIdx - 1))}
                    disabled={activeSlideIdx === 0}
                    className="p-1.5 rounded-md hover:bg-slate-100 text-slate-500 disabled:opacity-30 disabled:hover:bg-transparent"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={() => setActiveSlideIdx(Math.min(section.items.length - 1, activeSlideIdx + 1))}
                    disabled={activeSlideIdx === section.items.length - 1}
                    className="p-1.5 rounded-md hover:bg-slate-100 text-slate-500 disabled:opacity-30 disabled:hover:bg-transparent"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              {/* Action Buttons (Reorder & Delete) */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 p-1 rounded-lg">
                  <button 
                    onClick={() => moveSlide(activeSlideIdx, 'left')}
                    disabled={activeSlideIdx === 0}
                    className="p-1.5 rounded text-slate-500 hover:bg-white hover:shadow-sm hover:text-[#1868A5] disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:shadow-none transition-all"
                    title="Move Slide Left"
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <button 
                    onClick={() => moveSlide(activeSlideIdx, 'right')}
                    disabled={activeSlideIdx === section.items.length - 1}
                    className="p-1.5 rounded text-slate-500 hover:bg-white hover:shadow-sm hover:text-[#1868A5] disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:shadow-none transition-all"
                    title="Move Slide Right"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>

                <button 
                  onClick={() => removeSlide(activeSlideIdx)} 
                  className="flex items-center gap-1.5 text-xs font-bold text-red-500 hover:text-red-700 hover:bg-red-50 px-3 py-2 rounded-lg transition-all"
                >
                  <Trash2 size={16} /> Delete
                </button>
              </div>
            </div>

            {/* Editing Fields for Current Slide */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left Column: Image */}
              {iFields.includes('image') && (
                <div className="space-y-2 lg:col-span-1">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Slide Image</label>
                  <div className="relative group/img h-64 w-full bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 overflow-hidden flex flex-col items-center justify-center transition-all hover:bg-blue-50/30 hover:border-blue-200">
                    {currentSlide.newImageFile || currentSlide.image ? (
                      <>
                        <img 
                          src={currentSlide.newImageFile ? URL.createObjectURL(currentSlide.newImageFile) : currentSlide.image} 
                          className="w-full h-full object-cover" 
                          alt="preview"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                          <label className="cursor-pointer bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold shadow-lg hover:scale-105 transition-all">
                            Change Image
                            <input type="file" className="sr-only" accept="image/*" onChange={(e) => handleFileChange(e, activeSlideIdx)} />
                          </label>
                        </div>
                      </>
                    ) : (
                      <label className="cursor-pointer flex flex-col items-center gap-2">
                        <div className="p-4 bg-white rounded-full shadow-sm text-slate-400">
                          <ImageIcon size={28} />
                        </div>
                        <p className="text-sm font-bold text-slate-500">Upload Image</p>
                        <input type="file" className="sr-only" accept="image/*" onChange={(e) => handleFileChange(e, activeSlideIdx)} />
                      </label>
                    )}
                  </div>
                </div>
              )}

              {/* Right Column: Text Inputs */}
              <div className={`space-y-5 ${iFields.includes('image') ? 'lg:col-span-2' : 'lg:col-span-3'}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {iFields.includes('title') && (
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Main Title / Name</label>
                      <input 
                        type="text" placeholder="e.g. John Doe" 
                        value={currentSlide.title || ""} 
                        onChange={(e) => updateItem(activeSlideIdx, "title", e.target.value)} 
                        className="w-full px-4 py-3 bg-slate-50 text-slate-900 border border-slate-200 rounded-xl text-sm font-bold focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all outline-none" 
                      />
                    </div>
                  )}
                  {iFields.includes('subtitle') && (
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Subtitle / Role</label>
                      <input 
                        type="text" placeholder="e.g. Chief Pilot" 
                        value={currentSlide.subtitle || ""} 
                        onChange={(e) => updateItem(activeSlideIdx, "subtitle", e.target.value)} 
                        className="w-full px-4 py-3 bg-slate-50 text-slate-900 border border-slate-200 rounded-xl text-sm font-medium focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all outline-none" 
                      />
                    </div>
                  )}
                </div>

                {iFields.includes('description') && (
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Slide Description</label>
                    <textarea 
                      rows={5} placeholder="Enter description for this slide..." 
                      value={currentSlide.description || ""} 
                      onChange={(e) => updateItem(activeSlideIdx, "description", e.target.value)} 
                      className="w-full px-4 py-3 bg-slate-50 text-slate-900 border border-slate-200 rounded-xl text-sm leading-relaxed focus:bg-white transition-all outline-none resize-y" 
                    />
                  </div>
                )}
              </div>

            </div>
          </div>
        )}
      </div>
    </section>
  );
}
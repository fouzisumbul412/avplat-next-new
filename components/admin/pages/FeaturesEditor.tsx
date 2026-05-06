"use client";

import React from "react";
import { 
  Layout, Plus, Trash2, Play, ListChecks, 
  Palette, Info, Type, Settings2, X 
} from "lucide-react";

interface FeatureItem {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  videoId: string;
  icon: string;
  accent: "blue" | "slate";
  layout: "leftText" | "rightText" | "centerSplit";
}

export default function FeaturesEditor({
  features,
  setFeatures
}: {
  features: FeatureItem[];
  setFeatures: React.Dispatch<React.SetStateAction<FeatureItem[]>>;
}) {
  const addFeature = () => setFeatures([...features, { 
    eyebrow: "", title: "", description: "", points: [""], 
    videoId: "", icon: "Plane", accent: "blue", layout: "leftText" 
  }]);

  const removeFeature = (idx: number) => setFeatures(features.filter((_, i) => i !== idx));
  
  const updateFeature = (idx: number, data: Partial<FeatureItem>) => {
    const newFeatures = [...features];
    newFeatures[idx] = { ...newFeatures[idx], ...data };
    setFeatures(newFeatures);
  };

  const addPoint = (fIdx: number) => {
    const newPoints = [...features[fIdx].points, ""];
    updateFeature(fIdx, { points: newPoints });
  };

  const updatePoint = (fIdx: number, pIdx: number, val: string) => {
    const newPoints = [...features[fIdx].points];
    newPoints[pIdx] = val;
    updateFeature(fIdx, { points: newPoints });
  };

  const removePoint = (fIdx: number, pIdx: number) => {
    const newPoints = features[fIdx].points.filter((_, i) => i !== pIdx);
    updateFeature(fIdx, { points: newPoints });
  };

  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Feature Sections</h2>
          <p className="text-xs text-slate-500 mt-1">Configure the alternating feature blocks for this page.</p>
        </div>
        <button onClick={addFeature} className="bg-[#213e76] hover:bg-black text-white px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 transition-all shadow-sm">
          <Plus size={16} /> Add New Section
        </button>
      </div>

      {features.map((f, idx) => (
        <section key={idx} className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden relative group transition-all hover:border-[#213e76]/30">
          
          {/* Section Header */}
          <div className="bg-slate-50/80 px-8 py-4 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#213e76] text-white text-xs font-bold">
                {idx + 1}
              </span>
              <h3 className="font-bold text-slate-800 text-sm">Feature Block: {f.title || "Untitled Section"}</h3>
            </div>
            <button onClick={() => removeFeature(idx)} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all">
              <Trash2 size={20} />
            </button>
          </div>

          <div className="p-8 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              {/* CONTENT SETTINGS (8 Cols) */}
              <div className="lg:col-span-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5"><Info size={12}/> Eyebrow</label>
                    <input type="text" value={f.eyebrow} onChange={(e) => updateFeature(idx, { eyebrow: e.target.value })} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium outline-none focus:ring-2 focus:ring-[#213e76]/10" placeholder="e.g. Plan Faster" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5"><Play size={12}/> YouTube Video URL</label>
                    <input type="text" value={f.videoId} onChange={(e) => updateFeature(idx, { videoId: e.target.value })} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium outline-none focus:ring-2 focus:ring-[#213e76]/10" placeholder="e.g. https://www.youtube.com" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5"><Type size={12}/> Section Title</label>
                  <input type="text" value={f.title} onChange={(e) => updateFeature(idx, { title: e.target.value })} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-bold outline-none focus:ring-2 focus:ring-[#213e76]/10" placeholder="Enter title..." />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Description</label>
                  <textarea rows={3} value={f.description} onChange={(e) => updateFeature(idx, { description: e.target.value })} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 leading-relaxed outline-none focus:ring-2 focus:ring-[#213e76]/10" placeholder="Describe this feature..." />
                </div>
              </div>

              {/* VISUAL SETTINGS (4 Cols) */}
              <div className="lg:col-span-4 space-y-6">
                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 space-y-5">
                   <div className="flex items-center gap-2 text-[#213e76] mb-2 font-bold text-xs uppercase tracking-widest">
                     <Settings2 size={14} /> Styling Options
                   </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase">Layout Style</label>
                    <select value={f.layout} onChange={(e) => updateFeature(idx, { layout: e.target.value as any })} className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 outline-none">
                      <option value="leftText">Text Left / Video Right</option>
                      <option value="rightText">Video Left / Text Right</option>
                      <option value="centerSplit">Asymmetrical Split</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase">Accent Color</label>
                    <select value={f.accent} onChange={(e) => updateFeature(idx, { accent: e.target.value as any })} className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 outline-none">
                      <option value="blue">🔵 AvPlat Navy Blue</option>
                      <option value="slate">🔘 Slate Gray</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase">Lucide Icon Name</label>
                    <input type="text" value={f.icon} onChange={(e) => updateFeature(idx, { icon: e.target.value })} className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-900 outline-none" placeholder="e.g. PlaneTakeoff" />
                  </div>
                </div>
              </div>
            </div>

            {/* BULLET POINTS SECTION */}
            <div className="pt-6 border-t border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
                  <ListChecks size={18} className="text-[#213e76]" />
                  Bullet Points
                </div>
                <button onClick={() => addPoint(idx)} className="text-[11px] font-bold text-[#213e76] flex items-center gap-1 hover:underline">
                  <Plus size={14} /> Add Bullet
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {f.points.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2 group/point">
                    <div className="flex-1 flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 transition-all focus-within:border-[#213e76]/40 focus-within:bg-white">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#213e76] shrink-0" />
                      <input 
                        type="text" 
                        value={point} 
                        onChange={(e) => updatePoint(idx, pIdx, e.target.value)} 
                        className="w-full bg-transparent text-sm text-slate-700 font-medium outline-none" 
                        placeholder="Type point..." 
                      />
                    </div>
                    <button onClick={() => removePoint(idx, pIdx)} className="p-2 text-slate-300 hover:text-red-500 opacity-0 group-hover/point:opacity-100 transition-all">
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
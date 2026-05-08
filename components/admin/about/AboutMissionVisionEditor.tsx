import { Target } from "lucide-react";
import { SectionCard } from "./SectionCard";

export function AboutMissionVisionEditor({ pageData, handleChange }: any) {
  return (
    <SectionCard title="Mission & Vision" icon={<Target size={20} />}>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Mission Title</label>
            <input type="text" name="missionTitle" value={pageData.missionTitle} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 text-slate-900 border border-slate-200 rounded-xl font-bold outline-none" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Mission Text</label>
            <textarea name="missionText" rows={4} value={pageData.missionText} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 text-slate-900 border border-slate-200 rounded-xl font-medium text-slate-600 outline-none" />
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Vision Title</label>
            <input type="text" name="visionTitle" value={pageData.visionTitle} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 text-slate-900 border border-slate-200 rounded-xl font-bold outline-none" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Vision Text</label>
            <textarea name="visionText" rows={4} value={pageData.visionText} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 text-slate-900 border border-slate-200 rounded-xl font-medium text-slate-600 outline-none" />
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
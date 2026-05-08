import { FileText } from "lucide-react";
import { SectionCard } from "./SectionCard";

export function AboutMainStoryEditor({ pageData, handleChange }: any) {
  return (
    <SectionCard title="Main Story Content" icon={<FileText size={20} />}>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Eyebrow (Small Tag)</label>
          <input type="text" name="mainEyebrow" value={pageData.mainEyebrow} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 text-slate-900 border border-slate-200 rounded-xl font-bold outline-none focus:border-[#213e76]" />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Main Title</label>
          <input type="text" name="mainTitle" value={pageData.mainTitle} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 text-slate-900 border border-slate-200 rounded-xl font-bold outline-none focus:border-[#213e76]" />
        </div>
      </div>
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Body Text (Press Enter for new paragraphs)</label>
          <textarea name="mainText" rows={6} value={pageData.mainText} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 text-slate-900 border border-slate-200 rounded-xl font-medium text-slate-600 outline-none focus:border-[#213e76] leading-relaxed" />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Highlight Box Text</label>
          <input type="text" name="mainHighlight" value={pageData.mainHighlight} onChange={handleChange} className="w-full px-4 py-3 bg-blue-50 text-slate-900 border border-blue-200 text-[#213e76] rounded-xl font-semibold outline-none focus:border-[#213e76]" />
        </div>
      </div>
    </SectionCard>
  );
}
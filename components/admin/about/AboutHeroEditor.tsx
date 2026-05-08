import { ImageIcon } from "lucide-react";
import { SectionCard } from "./SectionCard";

export function AboutHeroEditor({ pageData, handleChange, heroImagePreview, handleImageChange }: any) {
  return (
    <SectionCard title="Hero Section" icon={<ImageIcon size={20} />}>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Page Title</label>
          <input type="text" name="heroTitle" value={pageData.heroTitle} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 text-slate-900 border border-slate-200 rounded-xl font-bold outline-none focus:border-[#213e76]" />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Hero Image Cover</label>
          <div className="relative group w-full h-32 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200 overflow-hidden flex items-center justify-center">
            {heroImagePreview ? (
              <img src={heroImagePreview} className="w-full h-full object-cover" alt="Hero" />
            ) : (
              <div className="text-slate-300 flex flex-col items-center"><ImageIcon size={24} /><span className="text-[10px] mt-1 font-bold">UPLOAD IMAGE</span></div>
            )}
            <label className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
              <div className="bg-white text-slate-900 px-4 py-2 rounded-full text-xs font-bold">Change Image</div>
              <input type="file" className="sr-only" accept="image/*" onChange={handleImageChange} />
            </label>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
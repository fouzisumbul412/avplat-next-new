import { Plus, Trash2, Users } from "lucide-react";
import { SectionCard } from "./SectionCard";

export function AboutPillarsEditor({ pageData, handleChange, pillars, setPillars }: any) {
  return (
    <SectionCard title="Who We Serve (Pillars)" icon={<Users size={20} />}>
      <div className="grid md:grid-cols-2 gap-6 mb-8 border-b border-slate-100 pb-8">
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Section Eyebrow</label>
          <input type="text" name="serveEyebrow" value={pageData.serveEyebrow} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 text-slate-900 border border-slate-200 rounded-xl font-bold outline-none" />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Section Title</label>
          <input type="text" name="serveTitle" value={pageData.serveTitle} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 text-slate-900 border border-slate-200 rounded-xl font-bold outline-none" />
        </div>
        <div className="space-y-2 md:col-span-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Section Description</label>
          <textarea name="serveText" rows={2} value={pageData.serveText} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 text-slate-900 border border-slate-200 rounded-xl font-medium text-slate-600 outline-none" />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pillar Cards</label>
          <button onClick={() => setPillars([...pillars, { title: "New Pillar", description: "", icon: "Check" }])} className="text-xs font-bold text-[#213e76] flex items-center gap-1"><Plus size={14}/> Add Pillar</button>
        </div>
        <div className="space-y-4">
          {pillars.map((pillar: any, idx: number) => (
            <div key={idx} className="p-5 bg-slate-50 border border-slate-200 rounded-2xl flex items-start gap-4">
              <div className="flex-1 grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase">Card Title</label>
                  <input type="text" value={pillar.title} onChange={(e) => {
                    const newPillars = [...pillars]; newPillars[idx].title = e.target.value; setPillars(newPillars);
                  }} className="w-full px-3 py-2 bg-white text-slate-900 border border-slate-200 rounded-lg text-sm font-bold outline-none" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase">Lucide Icon Name</label>
                  <input type="text" value={pillar.icon} onChange={(e) => {
                    const newPillars = [...pillars]; newPillars[idx].icon = e.target.value; setPillars(newPillars);
                  }} className="w-full px-3 py-2 bg-white text-slate-900 border border-slate-200 rounded-lg text-sm font-medium outline-none" />
                </div>
                <div className="space-y-1 md:col-span-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase">Description</label>
                  <textarea rows={2} value={pillar.description} onChange={(e) => {
                    const newPillars = [...pillars]; newPillars[idx].description = e.target.value; setPillars(newPillars);
                  }} className="w-full px-3 py-2 bg-white text-slate-900 border border-slate-200 rounded-lg text-sm font-medium outline-none" />
                </div>
              </div>
              <button onClick={() => setPillars(pillars.filter((_: string, i: number) => i !== idx))} className="text-slate-400 hover:text-red-500 mt-6"><Trash2 size={18}/></button>
            </div>
          ))}
          {pillars.length === 0 && <p className="text-center text-sm text-slate-400 py-4">No pillars added yet.</p>}
        </div>
      </div>
    </SectionCard>
  );
}
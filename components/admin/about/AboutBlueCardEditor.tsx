import { Globe2, Plus, Trash2 } from "lucide-react";
import { SectionCard } from "./SectionCard";

export function AboutBlueCardEditor({ pageData, handleChange, blueCardValues, setBlueCardValues }: any) {
  return (
    <SectionCard title="Ecosystem Highlight (Blue Card)" icon={<Globe2 size={20} />}>
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Card Title</label>
          <input type="text" name="blueCardTitle" value={pageData.blueCardTitle} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 text-slate-900 border border-slate-200 rounded-xl font-bold outline-none focus:border-[#213e76]" />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Card Description</label>
          <textarea name="blueCardText" rows={3} value={pageData.blueCardText} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 text-slate-900 border border-slate-200 rounded-xl font-medium text-slate-600 outline-none focus:border-[#213e76]" />
        </div>
        
        <div className="space-y-3 pt-4 border-t border-slate-100">
          <div className="flex items-center justify-between">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Value Checkmarks</label>
            <button onClick={() => setBlueCardValues([...blueCardValues, "New Value"])} className="text-xs font-bold text-[#213e76] flex items-center gap-1"><Plus size={14}/> Add Item</button>
          </div>
          {blueCardValues.map((val: string, idx: number) => (
            <div key={idx} className="flex items-center gap-3">
              <input type="text" value={val} onChange={(e) => {
                const newVals = [...blueCardValues]; newVals[idx] = e.target.value; setBlueCardValues(newVals);
              }} className="flex-1 px-4 py-2.5 bg-slate-50 text-slate-900 border border-slate-200 rounded-lg text-sm font-medium outline-none focus:border-[#213e76]" />
              <button onClick={() => setBlueCardValues(blueCardValues.filter((_, i) => i !== idx))} className="text-slate-400 hover:text-red-500 p-2"><Trash2 size={18}/></button>
            </div>
          ))}
        </div>
      </div>
    </SectionCard>
  );
}
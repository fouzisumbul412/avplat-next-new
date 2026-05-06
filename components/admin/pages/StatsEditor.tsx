"use client";

import React from "react";
import { BarChart3, Plus, Trash2 } from "lucide-react";

interface StatItem {
  id?: string;
  label: string;
  value: string;
}

export default function StatsEditor({
  stats,
  setStats
}: {
  stats: StatItem[];
  setStats: React.Dispatch<React.SetStateAction<StatItem[]>>;
}) {
  const addStat = () => setStats([...stats, { label: "", value: "" }]);
  const removeStat = (index: number) => setStats(stats.filter((_, i) => i !== index));
  const updateStat = (index: number, field: keyof StatItem, val: string) => {
    const newStats = [...stats];
    newStats[index] = { ...newStats[index], [field]: val };
    setStats(newStats);
  };

  return (
    <section className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
      <div className="bg-slate-50/50 border-b border-slate-100 px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-50 text-[#213e76] rounded-xl">
            <BarChart3 size={20} />
          </div>
          <h2 className="text-lg font-bold text-slate-800">Quick Stats</h2>
        </div>
        <button onClick={addStat} className="text-xs font-bold flex items-center gap-1.5 text-[#213e76] hover:underline">
          <Plus size={14} /> Add Stat
        </button>
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 relative group">
            <button onClick={() => removeStat(idx)} className="absolute -top-2 -right-2 bg-white border border-red-100 text-red-500 p-1.5 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
              <Trash2 size={12} />
            </button>
            <input type="text" value={stat.label} onChange={(e) => updateStat(idx, "label", e.target.value)} placeholder="Label (e.g. 30 Seconds)" className="w-full bg-transparent text-[10px] font-bold text-[#213e76] uppercase tracking-wider outline-none mb-1" />
            <input type="text" value={stat.value} onChange={(e) => updateStat(idx, "value", e.target.value)} placeholder="Value..." className="w-full bg-transparent text-sm text-slate-600 outline-none" />
          </div>
        ))}
      </div>
    </section>
  );
}
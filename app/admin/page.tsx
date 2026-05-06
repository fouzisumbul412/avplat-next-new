"use client";

import React from "react";
import useSWR from "swr";
import { 
  Plane, MessageSquare, FileText, Layout, 
  Loader2, CheckCircle2, AlertCircle, TrendingUp 
} from "lucide-react";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function AdminDashboard() {
  const { data: response, isLoading } = useSWR("/api/admin/dashboard", fetcher);

  const stats = response?.data?.counts || { charters: 0, quotes: 0, pages: 0, homeItems: 0 };
  const sync = response?.data?.sync || { chartersSynced: 0, quotesSynced: 0 };
  const chartData = response?.data?.chartData || [];

  const totalLeads = stats.charters + stats.quotes;
  const totalSynced = sync.chartersSynced + sync.quotesSynced;
  const syncPercentage = totalLeads > 0 ? Math.round((totalSynced / totalLeads) * 100) : 0;

  if (isLoading) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <Loader2 className="animate-spin text-[#213e76]" size={40} />
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Analytics Overview</h1>
          <p className="text-slate-500 font-medium">Real-time performance of the AvPlat ecosystem.</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full border border-green-100">
          <CheckCircle2 size={16} />
          <span className="text-xs font-bold uppercase tracking-wider">Systems Operational</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard icon={<Plane />} label="Charter Leads" value={stats.charters} color="blue" />
        <StatCard icon={<MessageSquare />} label="Service Quotes" value={stats.quotes} color="amber" />
        <StatCard icon={<Layout />} label="Dynamic Pages" value={stats.pages} color="purple" />
        <StatCard icon={<FileText />} label="Home Sections" value={stats.homeItems} color="slate" />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Lead Generation Chart */}
        <div className="lg:col-span-2 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <TrendingUp size={20} className="text-[#213e76]" />
              Monthly Lead Growth
            </h2>
            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{new Date().getFullYear()} Report</span>
          </div>
          
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Legend verticalAlign="top" align="right" iconType="circle" wrapperStyle={{ paddingBottom: '20px' }} />
                <Bar dataKey="Charters" fill="#213e76" radius={[6, 6, 0, 0]} barSize={12} />
                <Bar dataKey="Quotes" fill="#fbbf24" radius={[6, 6, 0, 0]} barSize={12} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Zoho Sync Panel */}
        <div className="bg-[#213e76] rounded-[2.5rem] p-8 text-white flex flex-col justify-between shadow-xl shadow-blue-900/20">
          <div>
            <h2 className="text-xl font-bold mb-2">Zoho CRM Sync</h2>
            <p className="text-blue-200/70 text-sm">Automated synchronization status across all leads.</p>
          </div>

          <div className="py-10 flex flex-col items-center">
             <div className="relative h-32 w-32 flex items-center justify-center">
                <svg className="h-full w-full transform -rotate-90">
                  <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-blue-800" />
                  <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" 
                    strokeDasharray={364.4} 
                    strokeDashoffset={364.4 - (364.4 * syncPercentage) / 100} 
                    strokeLinecap="round"
                    className="text-amber-400 transition-all duration-1000" />
                </svg>
                <span className="absolute text-3xl font-black">{syncPercentage}%</span>
             </div>
             <p className="mt-4 text-xs font-bold uppercase tracking-widest text-blue-200">Total Sync Accuracy</p>
          </div>

          <div className="space-y-4">
             <SyncRow label="Charters" current={sync.chartersSynced} total={stats.charters} />
             <SyncRow label="Quotes" current={sync.quotesSynced} total={stats.quotes} />
          </div>

          <div className="mt-8 pt-6 border-t border-blue-800 flex items-center gap-3">
             <AlertCircle size={14} className="text-amber-400" />
             <p className="text-[10px] text-blue-300 leading-tight">Unsynced leads require manual review in the Requests table.</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, color }: { icon: any, label: string, value: number, color: string }) {
  const colors: any = {
    blue: "bg-blue-50 text-blue-600 border-blue-100",
    amber: "bg-amber-50 text-amber-600 border-amber-100",
    purple: "bg-purple-50 text-purple-600 border-purple-100",
    slate: "bg-slate-50 text-slate-600 border-slate-100",
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 flex items-center gap-5 shadow-sm transition-transform hover:scale-[1.02]">
      <div className={`h-14 w-14 rounded-2xl flex items-center justify-center shrink-0 border ${colors[color]}`}>
        {React.cloneElement(icon, { size: 28 })}
      </div>
      <div>
        <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{label}</p>
        <p className="text-3xl font-black text-slate-900">{value.toLocaleString()}</p>
      </div>
    </div>
  );
}

function SyncRow({ label, current, total }: { label: string, current: number, total: number }) {
  const percent = total > 0 ? (current / total) * 100 : 0;
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider">
        <span>{label}</span>
        <span className="text-blue-300">{current} / {total}</span>
      </div>
      <div className="w-full bg-blue-900 rounded-full h-1.5 overflow-hidden">
        <div className="bg-amber-400 h-full transition-all duration-1000" style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
}
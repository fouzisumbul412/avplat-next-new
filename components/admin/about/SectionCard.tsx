export function SectionCard({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
      <div className="bg-slate-50/50 border-b border-slate-100 px-6 py-5 flex items-center gap-3">
        <div className="p-2 bg-blue-50 text-[#213e76] rounded-xl">{icon}</div>
        <h2 className="text-lg font-bold text-slate-800">{title}</h2>
      </div>
      <div className="p-8">{children}</div>
    </section>
  );
}
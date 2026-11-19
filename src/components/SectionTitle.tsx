export function SectionTitle({ eyebrow, title, description, light = false }: { eyebrow?: string; title: string; description?: string; light?: boolean }) {
  return <div className="max-w-2xl"><p className={`mb-4 text-xs font-black uppercase tracking-[0.2em] ${light ? 'text-yellow' : 'text-blue'}`}>{eyebrow}</p><h2 className={`font-display text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl ${light ? 'text-white' : 'text-navy'}`}>{title}</h2>{description && <p className={`mt-5 max-w-xl text-base leading-7 ${light ? 'text-blue-100/80' : 'text-slate-600'}`}>{description}</p>}</div>;
}

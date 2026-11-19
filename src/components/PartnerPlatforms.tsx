const partners = [
  { name: '1XBET', logo: '/assets/Logo_1XBET_bleu_eclatant.png' },
  { name: '1WIN', logo: '/assets/Logo_1win_bleu_et_noir_modernes.png' },
  { name: '888STARZ', logo: '/assets/Logo_8×8STARZ_rouge_et_blanc.png' },
  { name: 'BETWINNER', logo: '/assets/Logo_BETWINNER_jaune_et_blanc.png' },
];

export function PartnerPlatforms() {
  return (
    <section className="border-y border-slate-200 bg-[#f4f6fc] py-7">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 lg:flex-row lg:items-center lg:px-8">
        <div className="flex items-center gap-3 lg:w-56">
          <span className="h-2 w-2 rounded-full bg-red" />
          <p className="text-xs font-black uppercase tracking-[0.15em] text-navy">Plateformes<br />partenaires</p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-4">
          {partners.map((partner) => (
            <div key={partner.name} className="flex h-14 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 shadow-sm transition hover:-translate-y-0.5 hover:border-blue">
              <img src={partner.logo} alt={partner.name} className="max-h-10 w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

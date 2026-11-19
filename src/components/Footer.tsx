import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return <footer className="bg-navy text-white">
    <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 lg:grid-cols-[1.3fr_0.8fr_1fr_1fr] lg:px-8">
      <div>
        <img src="/assets/Logo_WS.png" alt="WAD SERVICE" className="mb-5 h-16 w-auto rounded-lg bg-white object-contain" />
        <p className="max-w-xs text-sm leading-7 text-blue-100/75">Votre partenaire de confiance pour l’accompagnement des opérations sur les plateformes sportives partenaires.</p>
      </div>
      <div><p className="mb-5 text-xs font-black uppercase tracking-[0.18em] text-yellow">Liens utiles</p><div className="flex flex-col gap-3 text-sm text-blue-100/80"><Link className="transition hover:text-yellow" to="/">Accueil</Link><Link className="transition hover:text-yellow" to="/services">Nos services</Link><Link className="transition hover:text-yellow" to="/fonctionnement">Comment ça marche</Link><Link className="transition hover:text-yellow" to="/contact">Contact</Link></div></div>
      <div><p className="mb-5 text-xs font-black uppercase tracking-[0.18em] text-yellow">Nous joindre</p><div className="space-y-4 text-sm text-blue-100/80"><a className="flex items-center gap-3 transition hover:text-yellow" href="https://wa.me/22644755454"><MessageCircle size={18} className="text-yellow" />+226 44 75 54 54</a><a className="flex items-center gap-3 transition hover:text-yellow" href="tel:+22674404535"><Phone size={18} className="text-yellow" />+226 74 40 45 35</a><p className="flex items-start gap-3"><MapPin size={18} className="mt-0.5 text-yellow" />Ouahigouya, Secteurs 1 et 2</p></div></div>
      <div><p className="mb-5 text-xs font-black uppercase tracking-[0.18em] text-yellow">Partenaires</p><div className="flex flex-wrap gap-2">{['1XBET', 'MELBET', '1WIN', '888STARZ', 'BETWINNER'].map((partner) => <span key={partner} className="rounded-lg border border-white/15 px-3 py-2 text-xs font-black text-white/80">{partner}</span>)}</div><a href="mailto:contact@wadservice.com" className="mt-5 flex items-center gap-2 text-sm text-blue-100/70 hover:text-yellow"><Mail size={16} /> Écrire à l’équipe <ArrowUpRight size={14} /></a></div>
    </div>
    <div className="border-t border-white/10"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-xs text-blue-100/60 md:flex-row md:items-center md:justify-between lg:px-8"><p>© {new Date().getFullYear()} WAD SERVICE. Tous droits réservés.</p><p className="max-w-xl leading-5">Les paris sportifs comportent des risques financiers. Réservé aux personnes majeures de 18 ans et plus. Jouez de manière responsable.</p></div></div>
  </footer>;
}

import { Menu, MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const navigation = [
  { label: 'Accueil', to: '/' },
  { label: 'Nos services', to: '/services' },
  { label: 'Comment ça marche', to: '/fonctionnement' },
  { label: 'Contact', to: '/contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-[#06175d] text-white shadow-lg shadow-navy/10 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/assets/Logo_WS.png" alt="WAD SERVICE" className="h-[58px] w-auto rounded-b-xl bg-white object-contain px-2 py-1 shadow-lg" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigation principale">
          {navigation.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => `relative py-6 text-sm font-semibold transition-colors ${isActive ? 'text-yellow' : 'text-white/80 hover:text-white'}`}>
              {({ isActive }) => <><span>{item.label}</span>{isActive && <span className="absolute inset-x-0 bottom-0 h-1 rounded-t-full bg-yellow" />}</>}
            </NavLink>
          ))}
        </nav>

        <Link to="/contact" className="hidden items-center gap-2 rounded-full bg-yellow px-5 py-3 text-sm font-extrabold text-navy shadow-[0_8px_24px_rgba(255,214,0,0.18)] transition hover:-translate-y-0.5 hover:bg-yellow-300 sm:flex">
          <MessageCircle size={17} strokeWidth={2.5} /> Nous contacter
        </Link>
        <button className="rounded-lg p-2 text-white lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}>
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>
      {open && <nav className="border-t border-white/10 bg-navy px-5 py-4 lg:hidden" aria-label="Navigation mobile">
        <div className="mx-auto flex max-w-7xl flex-col gap-1">
          {navigation.map((item) => <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className={({ isActive }) => `rounded-xl px-4 py-3 text-sm font-bold ${isActive ? 'bg-blue text-yellow' : 'text-white/80 hover:bg-white/10'}`}>{item.label}</NavLink>)}
          <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-yellow px-4 py-3 text-sm font-extrabold text-navy"><MessageCircle size={17} /> Nous contacter</Link>
        </div>
      </nav>}
    </header>
  );
}

import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  return <a href="https://wa.me/22644755454" target="_blank" rel="noreferrer" aria-label="Contacter WAD SERVICE sur WhatsApp" className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.35)] transition hover:scale-105 hover:bg-[#20bd5a]"><MessageCircle size={27} /></a>;
}

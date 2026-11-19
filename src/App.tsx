import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Contact } from '@/pages/Contact';
import { Home } from '@/pages/Home';
import { HowItWorks } from '@/pages/HowItWorks';
import { Services } from '@/pages/Services';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen overflow-x-hidden bg-white text-ink">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/fonctionnement" element={<HowItWorks />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;

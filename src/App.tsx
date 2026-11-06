import React from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { CustomCakeBuilder } from './components/CustomCakeBuilder.tsx';
import { SignatureCakes } from './components/SignatureCakes.tsx';
import { AICakeArtisan } from './components/AICakeArtisan.tsx';
import { ReviewsSection } from './components/ReviewsSection.tsx';
import { DeliveryAndLocation } from './components/DeliveryAndLocation.tsx';
import { Footer } from './components/Footer.tsx';
import { AdBanner } from './components/AdBanner.tsx';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { BAKERY_INFO } from './data/bakeryData.ts';

export default function App() {
  const scrollToBuilder = () => {
    const el = document.getElementById('custom-builder');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#241315]">
      {/* Navigation Top Bar */}
      <Navbar onOpenBuilder={scrollToBuilder} />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 1. Hero Showcase */}
        <Hero onStartCustomizing={scrollToBuilder} />

        {/* Ad Placement 1: Leaderboard Banner (728x90 on Desktop, 468x60 on Mobile) */}
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-center">
          <div className="hidden md:block">
            <AdBanner format="728x90" />
          </div>
          <div className="block md:hidden">
            <AdBanner format="468x60" />
          </div>
        </div>

        {/* 2. Interactive Custom Cake Configurator & Price Calculator */}
        <CustomCakeBuilder />

        {/* Ad Placement 2: 468x60 Banner */}
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-center">
          <AdBanner format="468x60" />
        </div>

        {/* 3. Signature Creations Catalog */}
        <SignatureCakes onSelectForCustomizer={scrollToBuilder} />

        {/* 4. Gemini AI Cake Artisan & Concept Generator with Skyscraper 160x600 support */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col xl:flex-row items-center xl:items-start justify-center gap-6 my-4">
          <div className="flex-1 w-full">
            <AICakeArtisan />
          </div>
          <div className="hidden 2xl:flex shrink-0 sticky top-24 self-start">
            <AdBanner format="160x600" />
          </div>
        </div>

        {/* 5. 5.0 Google Rating & Customer Reviews */}
        <ReviewsSection />

        {/* 6. Doorstep Delivery & Hridaypur Kitchen Location */}
        <DeliveryAndLocation />

        {/* Ad Placement 4: Bottom 728x90 / 468x60 Banner above Footer */}
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-center border-t border-[#E8DFD8]">
          <div className="hidden md:block">
            <AdBanner format="728x90" />
          </div>
          <div className="block md:hidden">
            <AdBanner format="468x60" />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Compact Mobile / Desktop Contact Affordance */}
      <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2">
        <a
          href={`tel:${BAKERY_INFO.phoneClean}`}
          className="p-3 bg-[#241315] hover:bg-[#3D141C] text-white rounded-full shadow-lg transition-transform hover:scale-105 flex items-center justify-center md:hidden"
          title="Call Bakery: 093305 63954"
          aria-label="Call Cakey Bakey"
        >
          <Phone className="w-5 h-5" />
        </a>

        <a
          href={BAKERY_INFO.whatsappUrl("Hi Cakey Bakey! I would like to order a custom cake.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 bg-[#2E6B4A] hover:bg-[#235338] text-white text-xs sm:text-sm font-semibold rounded-full shadow-lg transition-transform hover:scale-105"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="hidden sm:inline">WhatsApp Baker</span>
        </a>
      </div>
    </div>
  );
}

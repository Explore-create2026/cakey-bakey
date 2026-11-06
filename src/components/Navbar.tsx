import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Clock, MapPin } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryData.ts';

interface NavbarProps {
  onOpenBuilder: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBuilder }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Quiet Service Notice */}
      <div className="bg-[#241315] text-[#FAF7F2] text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs text-[#E3D4C9]">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#E6A15C]" />
              <span>Hridaypur, Kolkata 700127</span>
            </span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#E6A15C]" />
              <span>Open Daily: 7:00 AM – 10:00 PM</span>
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px] sm:text-xs">
            <span className="text-[#E6A15C] font-semibold">⭐ 5.0 Google Rated (51 Reviews)</span>
            <span aria-hidden="true">·</span>
            <a 
              href={`tel:${BAKERY_INFO.phoneClean}`} 
              className="text-[#FAF7F2] hover:text-[#E6A15C] transition-colors font-medium flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              <span>093305 63954</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar adhering to Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DFD8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
          
          {/* Zone 1: Single text element Brand wordmark */}
          <a href="#" className="flex items-baseline gap-2 whitespace-nowrap shrink-0 group">
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#241315] group-hover:text-[#631828] transition-colors">
              Cakey Bakey
            </span>
            <span className="text-xs uppercase tracking-widest text-[#8A6A5E] font-medium font-sans">
              Custom Cakes
            </span>
          </a>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#593E3B]">
            <a href="#custom-builder" className="hover:text-[#241315] transition-colors whitespace-nowrap shrink-0">
              Custom Builder
            </a>
            <a href="#signature-cakes" className="hover:text-[#241315] transition-colors whitespace-nowrap shrink-0">
              Signature Menu
            </a>
            <a href="#ai-stylist" className="hover:text-[#241315] transition-colors whitespace-nowrap shrink-0">
              Artisan AI Stylist
            </a>
            <a href="#reviews" className="hover:text-[#241315] transition-colors whitespace-nowrap shrink-0">
              Reviews
            </a>
            <a href="#delivery-info" className="hover:text-[#241315] transition-colors whitespace-nowrap shrink-0">
              Delivery & Location
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={BAKERY_INFO.whatsappUrl("Hi Cakey Bakey! I would like to inquire about a custom cake order.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#2E6B4A] hover:bg-[#235338] rounded-lg transition-colors shadow-sm whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Order</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#241315] hover:bg-[#F0E8E1] rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#E8DFD8] bg-[#FAF7F2] px-4 pt-3 pb-5 space-y-3">
            <a
              href="#custom-builder"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#241315] hover:text-[#631828]"
            >
              Custom Cake Builder
            </a>
            <a
              href="#signature-cakes"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#241315] hover:text-[#631828]"
            >
              Signature Menu & Flavors
            </a>
            <a
              href="#ai-stylist"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#241315] hover:text-[#631828]"
            >
              Artisan AI Concept Stylist
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#241315] hover:text-[#631828]"
            >
              Customer Reviews (5.0 ★)
            </a>
            <a
              href="#delivery-info"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#241315] hover:text-[#631828]"
            >
              Delivery Zones & Hridaypur Shop
            </a>
            <div className="pt-2 border-t border-[#E8DFD8] flex gap-2">
              <a
                href={`tel:${BAKERY_INFO.phoneClean}`}
                className="flex-1 py-2.5 text-center text-sm font-medium border border-[#241315] text-[#241315] rounded-lg"
              >
                Call: 093305 63954
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBuilder();
                }}
                className="flex-1 py-2.5 text-center text-sm font-semibold bg-[#241315] text-white rounded-lg"
              >
                Start Cake Design
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

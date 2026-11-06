import React from 'react';
import { Star, MessageCircle, ArrowRight, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryData.ts';

interface HeroProps {
  onStartCustomizing: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartCustomizing }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F2] to-[#F5EEE6] pt-8 pb-16 lg:py-20 border-b border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Unboxed Metadata Header (No pills, clean typographic separators) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide uppercase text-[#8A5A4A]">
              <span>Hridaypur, Kolkata</span>
              <span aria-hidden="true" className="text-[#C4AFA5]">·</span>
              <span className="flex items-center gap-1 text-[#9E5124]">
                <Star className="w-3.5 h-3.5 fill-[#D97706] text-[#D97706]" />
                <span className="font-bold">5.0 Google Rating</span>
                <span className="font-normal text-[#8A5A4A]">(51 Reviews)</span>
              </span>
              <span aria-hidden="true" className="text-[#C4AFA5]">·</span>
              <span>₹200–₹400 / Person</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#241315] font-bold tracking-tight leading-[1.15] text-balance">
              Handcrafted Custom Cakes Baked Fresh with Pure Love
            </h1>

            {/* Narrative Prose */}
            <p className="text-base sm:text-lg text-[#5E4742] leading-relaxed max-w-2xl font-normal">
              From fairytale birthday designs and Korean bento mini cakes to grand multi-tiered wedding centerpieces. 
              Each creation is freshly baked in Hridaypur with 100% natural butter, premium Belgian cocoa, and 
              customized to your dream celebration.
            </p>

            {/* Primary Action Zone */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onStartCustomizing}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#241315] hover:bg-[#421A20] rounded-lg transition-all shadow-md hover:shadow-lg whitespace-nowrap"
              >
                <span>Design Custom Cake & Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={BAKERY_INFO.whatsappUrl("Hi Cakey Bakey! I would like to consult with the baker for a custom cake order.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#1F5135] bg-[#E3F2E9] hover:bg-[#D2EBDC] border border-[#B6DEC5] rounded-lg transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-[#1F5135]" />
                <span>Chat on WhatsApp ({BAKERY_INFO.phone})</span>
              </a>
            </div>

            {/* Quiet Quality Pillars */}
            <div className="pt-4 border-t border-[#E8DFD8]/80 grid grid-cols-3 gap-4 text-xs text-[#5E4742]">
              <div className="flex items-start gap-2">
                <Heart className="w-4 h-4 text-[#9E3E4B] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#241315]">100% Fresh Bake</p>
                  <p className="text-[11px] text-[#7A615B]">Baked only after order</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#2E6B4A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#241315]">Eggless Options</p>
                  <p className="text-[11px] text-[#7A615B]">Pure veg guaranteed</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#241315]">Bespoke Styling</p>
                  <p className="text-[11px] text-[#7A615B]">Any theme or photo</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#DFD3C7] bg-[#EFE6DC]">
              <img
                src="/src/assets/images/hero_cake_display_1793988633365.jpg"
                alt="Artisanal custom celebration two-tier cake on marble pedestal by Cakey Bakey Hridaypur"
                className="w-full h-[380px] sm:h-[460px] lg:h-[500px] object-cover object-center transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              
              {/* Subtle scrim & photo caption overlay */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                <p className="text-xs font-semibold tracking-wide uppercase text-[#FCD34D]">
                  Signature Masterpiece
                </p>
                <p className="text-sm font-medium text-white/95 leading-snug">
                  Artisanal Hand-Piped Celebration Cake · Fresh Cream & Buttercream Rosettes
                </p>
                <p className="text-[11px] text-white/70 mt-0.5">
                  Handcrafted at Dr Sarada Prasad Ghosh St, Hridaypur
                </p>
              </div>
            </div>

            {/* Quick delivery notice badge floating */}
            <div className="absolute -bottom-4 -left-3 sm:-left-4 bg-[#FAF7F2] border border-[#D5C4B5] rounded-lg p-3 shadow-lg max-w-[210px] hidden sm:block">
              <p className="text-[11px] font-semibold text-[#241315]">Doorstep Delivery</p>
              <p className="text-[10px] text-[#69544E] leading-tight">
                Hridaypur, Barasat, Madhyamgram & greater Kolkata
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

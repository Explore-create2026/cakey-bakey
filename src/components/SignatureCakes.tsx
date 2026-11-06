import React, { useState } from 'react';
import { SIGNATURE_CAKES, CakeItem, BAKERY_INFO } from '../data/bakeryData.ts';
import { MessageCircle, Star, Sparkles, X, Check } from 'lucide-react';

interface SignatureCakesProps {
  onSelectForCustomizer?: (cake: CakeItem) => void;
}

export const SignatureCakes: React.FC<SignatureCakesProps> = ({ onSelectForCustomizer }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [modalCake, setModalCake] = useState<CakeItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Creations' },
    { id: 'birthday', label: 'Birthday Favorites' },
    { id: 'chocolate', label: 'Chocolate Decadence' },
    { id: 'bento', label: 'Bento Mini Cakes' },
    { id: 'wedding', label: 'Weddings & Tiers' },
    { id: 'fusion', label: 'Bengali Fusion Specials' }
  ];

  const filteredCakes = activeCategory === 'all'
    ? SIGNATURE_CAKES
    : SIGNATURE_CAKES.filter(c => c.category === activeCategory);

  const handleOrderWhatsApp = (cake: CakeItem) => {
    const msg = `Hi Cakey Bakey! I would like to order your signature cake: "${cake.name}". Could you please share today's slot and delivery details for Hridaypur/Kolkata?`;
    window.open(BAKERY_INFO.whatsappUrl(msg), '_blank');
  };

  return (
    <section id="signature-cakes" className="py-16 sm:py-20 bg-[#FAF5F0] border-y border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-[#8A5A4A] mb-2">
              <span>Signature Collection</span>
              <span aria-hidden="true">·</span>
              <span>Baked Fresh Daily</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#241315] font-bold tracking-tight">
              Handcrafted Celebration Showcase
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#5E4742] max-w-xl">
              Each cake is custom-decorated by our pastry artisans using real dairy cream, 
              Belgian chocolate, and pure vanilla extract.
            </p>
          </div>

          {/* Interactive Category Segmented Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#ECE3DA] rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-white text-[#241315] shadow-xs font-semibold'
                    : 'text-[#69544E] hover:text-[#241315]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCakes.map((cake) => (
            <div
              key={cake.id}
              className="bg-white rounded-xl border border-[#E5DAD0] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group"
            >
              {/* Image Container with 4:3 Aspect Ratio */}
              <div className="relative aspect-4/3 bg-[#F0E8E1] overflow-hidden cursor-pointer" onClick={() => setModalCake(cake)}>
                <img
                  src={cake.image}
                  alt={cake.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Subtle scrim & Bestseller tag */}
                {cake.bestsellerTag && (
                  <div className="absolute top-3 left-3 bg-[#241315]/90 text-white text-[11px] font-medium tracking-wide px-2.5 py-1 rounded-sm backdrop-blur-xs">
                    {cake.bestsellerTag}
                  </div>
                )}

                {cake.egglessAvailable && (
                  <div className="absolute top-3 right-3 bg-white/95 text-[#1F5135] text-[10px] font-semibold px-2 py-0.5 rounded-sm border border-[#C5DEC8] shadow-xs">
                    100% Eggless Option
                  </div>
                )}
              </div>

              {/* Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category Kicker */}
                  <p className="text-[11px] font-semibold tracking-wider uppercase text-[#8A5A4A] mb-1">
                    {cake.categoryLabel}
                  </p>

                  {/* Title */}
                  <h3 
                    className="font-serif text-lg font-bold text-[#241315] leading-snug hover:text-[#631828] cursor-pointer transition-colors"
                    onClick={() => setModalCake(cake)}
                  >
                    {cake.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs text-[#69544E] line-clamp-2 leading-relaxed">
                    {cake.description}
                  </p>

                  {/* Flavor Notes (Unboxed typographic items) */}
                  <div className="mt-3 flex flex-wrap items-center gap-1.5 text-[11px] text-[#7A615B]">
                    {cake.flavorNotes.map((note, idx) => (
                      <React.Fragment key={note}>
                        <span>{note}</span>
                        {idx < cake.flavorNotes.length - 1 && (
                          <span aria-hidden="true" className="text-[#C4AFA5]">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Bottom Pricing & Order Action */}
                <div className="mt-5 pt-4 border-t border-[#F0E8E1] flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] text-[#8A6A5E] block leading-none">Starting from</span>
                    <span className="text-base font-bold text-[#241315] tabular-nums">
                      ₹{cake.pricePerHalfKg}
                    </span>
                    <span className="text-[11px] text-[#7A615B] ml-1">/ 0.5 kg</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setModalCake(cake)}
                      className="px-3 py-1.5 text-xs font-medium text-[#422C28] bg-[#FAF5F0] hover:bg-[#EFE7DE] border border-[#D5C4B5] rounded-md transition-colors"
                    >
                      Details
                    </button>
                    <button
                      type="button"
                      onClick={() => handleOrderWhatsApp(cake)}
                      className="px-3 py-1.5 text-xs font-semibold text-white bg-[#2E6B4A] hover:bg-[#235338] rounded-md transition-colors flex items-center gap-1.5 shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Order</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Cake Details Modal */}
      {modalCake && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#D5C4B5] animate-in fade-in zoom-in-95 duration-200">
            <div className="relative aspect-16/9 bg-[#F0E8E1]">
              <img
                src={modalCake.image}
                alt={modalCake.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                type="button"
                onClick={() => setModalCake(null)}
                className="absolute top-3 right-3 p-1.5 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#8A5A4A]">
                  {modalCake.categoryLabel}
                </span>
                <h3 className="font-serif text-xl font-bold text-[#241315] mt-0.5">
                  {modalCake.name}
                </h3>
              </div>

              <p className="text-xs text-[#5E4742] leading-relaxed">
                {modalCake.description}
              </p>

              <div className="bg-[#FAF5F0] p-3 rounded-lg border border-[#E8DFD8] space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#7A615B]">Pricing:</span>
                  <span className="font-bold text-[#241315] tabular-nums">
                    ₹{modalCake.pricePerHalfKg} (0.5 kg) / ₹{modalCake.pricePerKg} (1.0 kg)
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7A615B]">Servings:</span>
                  <span className="text-[#241315]">{modalCake.servingsInfo}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7A615B]">Dietary:</span>
                  <span className="text-[#2E6B4A] font-medium">100% Eggless pure veg option available</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7A615B]">Lead Time:</span>
                  <span className="text-[#241315]">Freshly baked (same day available for Hridaypur)</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setModalCake(null);
                    if (onSelectForCustomizer) {
                      onSelectForCustomizer(modalCake);
                    }
                  }}
                  className="flex-1 py-2.5 text-xs font-semibold text-[#241315] bg-[#FAF5F0] hover:bg-[#EFE7DE] border border-[#D5C4B5] rounded-lg transition-colors text-center"
                >
                  Customize Weight & Toppers
                </button>

                <button
                  type="button"
                  onClick={() => {
                    handleOrderWhatsApp(modalCake);
                    setModalCake(null);
                  }}
                  className="flex-1 py-2.5 text-xs font-semibold text-white bg-[#2E6B4A] hover:bg-[#235338] rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Baker</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

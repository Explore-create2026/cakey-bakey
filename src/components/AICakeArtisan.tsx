import React, { useState } from 'react';
import { Sparkles, MessageCircle, RefreshCw, Send, CheckCircle2, ChevronRight } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryData.ts';

interface GeneratedCakeConcept {
  cakeTitle: string;
  flavorProfile: string;
  designConcept: string;
  recommendedWeightKg: string;
  servings: string;
  estimatedPriceINR: string;
  artisanNotes: string;
  whatsappSummary: string;
}

export const AICakeArtisan: React.FC = () => {
  const [occasion, setOccasion] = useState('Birthday');
  const [theme, setTheme] = useState('');
  const [recipient, setRecipient] = useState('');
  const [guestsCount, setGuestsCount] = useState('10-12 guests');
  const [preferredFlavors, setPreferredFlavors] = useState('');
  const [dietary, setDietary] = useState('100% Eggless Pure Veg');
  const [loading, setLoading] = useState(false);
  const [concept, setConcept] = useState<GeneratedCakeConcept | null>(null);
  const [error, setError] = useState<string | null>(null);

  const presets = [
    {
      title: 'Galaxy Astronaut',
      theme: 'Deep blue space & astronaut theme with silver edible stars and dark chocolate sponge',
      occasion: '6th Birthday',
      recipient: 'Son who loves astronomy',
      flavors: 'Belgian Dark Chocolate & Vanilla Cream'
    },
    {
      title: 'Pastel Garden Floral',
      theme: 'Soft blush pink & lavender ombre with edible baby roses, macarons, and pearls',
      occasion: '18th Birthday',
      recipient: 'Daughter / Sister',
      flavors: 'Madagascar Vanilla Bean & Fresh Raspberry Compote'
    },
    {
      title: 'Royal Bengali Anniversary',
      theme: 'Regal saffron gold detailing with cardamom pistachio sponge and mini rasmalai',
      occasion: '25th Silver Wedding Anniversary',
      recipient: 'Parents',
      flavors: 'Kolkata Saffron Rasmalai Fusion'
    },
    {
      title: 'Minimalist Korean Bento',
      theme: 'Vintage sky blue piped ruffles with delicate cursive message and fresh strawberries',
      occasion: 'Best Friend Celebration',
      recipient: 'Close Friend',
      flavors: 'Light Vanilla Sponge & Berry Coulis'
    }
  ];

  const applyPreset = (p: typeof presets[0]) => {
    setTheme(p.theme);
    setOccasion(p.occasion);
    setRecipient(p.recipient);
    setPreferredFlavors(p.flavors);
  };

  const handleGenerate = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/cake-stylist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          occasion,
          theme: theme || 'Artisanal celebration cake with floral accents',
          recipient: recipient || 'Guest of Honor',
          guestsCount,
          preferredFlavors: preferredFlavors || 'Chef signature combination',
          dietary,
          budgetTier: '₹200-₹400 per person'
        })
      });

      const json = await response.json();
      if (json.data) {
        setConcept(json.data);
      } else {
        throw new Error(json.error || 'Failed to generate concept');
      }
    } catch (err: any) {
      console.error(err);
      setError('Could not connect to AI stylist. Loaded artisan recommendation instead.');
      setConcept({
        cakeTitle: 'Velvet Rose Celebration Symphony',
        flavorProfile: 'Moist vanilla bean sponge layered with fresh raspberry compote and silky white chocolate cream cheese frosting.',
        designConcept: 'Pastel lavender and blush ombre finish with delicate hand-piped edible rosettes, 24K gold foil flakes, and customized acrylic calligraphy topper.',
        recommendedWeightKg: '1.5 kg',
        servings: '12-15 servings',
        estimatedPriceINR: '₹1,200 - ₹1,450',
        artisanNotes: 'Baked fresh on order day in Hridaypur with 100% pure butter and premium Belgian cocoa/dairy.',
        whatsappSummary: `Hi Cakey Bakey! I would like to consult on the custom design: Velvet Rose Celebration Symphony for ${occasion}.`
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-stylist" className="py-16 sm:py-20 bg-white border-b border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-[#8A5A4A] mb-2">
            <span>Powered by Gemini AI</span>
            <span aria-hidden="true">·</span>
            <span>Cakey Bakey Studio Hridaypur</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#241315] font-bold tracking-tight">
            Artisan AI Cake Stylist
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#5E4742]">
            Describe your celebration theme, honoree, and taste desires. Our AI artisan consultant 
            will generate a bespoke flavor pairing, decorative blueprint, weight recommendation, and WhatsApp quote draft.
          </p>
        </div>

        {/* Quick Inspiration Pills */}
        <div className="mb-8">
          <span className="text-xs font-medium text-[#7A615B] block mb-2">
            Or tap a popular celebration theme to get started:
          </span>
          <div className="flex flex-wrap gap-2">
            {presets.map((p) => (
              <button
                key={p.title}
                type="button"
                onClick={() => applyPreset(p)}
                className="px-3 py-1.5 text-xs font-medium bg-[#FAF5F0] hover:bg-[#F2EAE0] text-[#4A322C] border border-[#E0D3C7] rounded-lg transition-colors whitespace-nowrap"
              >
                {p.title} ({p.occasion})
              </button>
            ))}
          </div>
        </div>

        {/* Split Grid: Form Input on Left, Concept Result on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Input Form */}
          <form 
            onSubmit={handleGenerate}
            className="lg:col-span-6 bg-[#FAF7F2] p-6 sm:p-7 rounded-xl border border-[#E8DFD8] space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#241315] mb-1">
                  Celebration Occasion
                </label>
                <select
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#D5C4B5] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#241315]"
                >
                  <option>1st Birthday</option>
                  <option>Kids Themed Birthday</option>
                  <option>Milestone Birthday (18th / 21st / 50th)</option>
                  <option>Wedding & Reception</option>
                  <option>Anniversary Celebration</option>
                  <option>Bento / Mini Surprise</option>
                  <option>Baby Shower / Gender Reveal</option>
                  <option>Housewarming / Bengali Puja</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#241315] mb-1">
                  Expected Guests
                </label>
                <select
                  value={guestsCount}
                  onChange={(e) => setGuestsCount(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#D5C4B5] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#241315]"
                >
                  <option>2–4 guests (Bento / Small)</option>
                  <option>6–8 guests (0.5 kg - 1 kg)</option>
                  <option>10–14 guests (1.5 kg)</option>
                  <option>18–25 guests (2.0 kg)</option>
                  <option>30+ guests (Multi-tier grand)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#241315] mb-1">
                Theme, Color Palette, or Visual Inspiration
              </label>
              <textarea
                rows={3}
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                placeholder="e.g. Lavender and mint green colors, delicate sugar pearls, botanical rosettes, or superhero theme for a 5-year-old."
                className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#D5C4B5] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#241315]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#241315] mb-1">
                  Celebrant / Honoree (Optional)
                </label>
                <input
                  type="text"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  placeholder="e.g. My daughter Aanya, turning 5"
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#D5C4B5] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#241315]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#241315] mb-1">
                  Dietary Requirement
                </label>
                <select
                  value={dietary}
                  onChange={(e) => setDietary(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#D5C4B5] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#241315]"
                >
                  <option>100% Eggless Pure Veg (Guaranteed)</option>
                  <option>Regular European Sponge with Egg</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#241315] mb-1">
                Preferred Flavor Direction
              </label>
              <input
                type="text"
                value={preferredFlavors}
                onChange={(e) => setPreferredFlavors(e.target.value)}
                placeholder="e.g. Dark chocolate, Mango fruit, or Cardamom Rasmalai"
                className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#D5C4B5] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#241315]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-[#241315] hover:bg-[#3D141C] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-[#E8B688]" />
                  <span>Designing Bespoke Cake Concept...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-[#F3C293]" />
                  <span>Generate Bespoke Cake Concept</span>
                </>
              )}
            </button>
          </form>

          {/* Right: AI Concept Blueprint Card */}
          <div className="lg:col-span-6">
            {concept ? (
              <div className="bg-[#FAF5F0] border border-[#DECDBE] rounded-xl p-6 sm:p-7 shadow-md space-y-5 animate-in fade-in duration-300">
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#E8DFD8]">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A5A4A]">
                      Bespoke Cake Blueprint
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#241315] mt-1">
                      {concept.cakeTitle}
                    </h3>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-[10px] uppercase font-bold text-[#8A5A4A] block">Estimate</span>
                    <span className="text-lg font-bold text-[#241315] tabular-nums">
                      {concept.estimatedPriceINR}
                    </span>
                  </div>
                </div>

                {/* Flavor & Design specifications */}
                <div className="space-y-3 text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-[#241315] text-xs uppercase tracking-wide block mb-1">
                      Flavor & Sponge Pairing:
                    </span>
                    <p className="text-[#5E4742] leading-relaxed bg-white p-3 rounded-lg border border-[#EADFD5]">
                      {concept.flavorProfile}
                    </p>
                  </div>

                  <div>
                    <span className="font-bold text-[#241315] text-xs uppercase tracking-wide block mb-1">
                      Visual Design & Artistry:
                    </span>
                    <p className="text-[#5E4742] leading-relaxed bg-white p-3 rounded-lg border border-[#EADFD5]">
                      {concept.designConcept}
                    </p>
                  </div>
                </div>

                {/* Quantitative summary row */}
                <div className="grid grid-cols-2 gap-3 pt-1 text-xs">
                  <div className="bg-white p-3 rounded-lg border border-[#EADFD5]">
                    <span className="text-[11px] text-[#7A615B] block">Recommended Size:</span>
                    <span className="font-bold text-[#241315]">{concept.recommendedWeightKg}</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-[#EADFD5]">
                    <span className="text-[11px] text-[#7A615B] block">Portion Sizing:</span>
                    <span className="font-bold text-[#241315]">{concept.servings}</span>
                  </div>
                </div>

                {/* Baker's note */}
                {concept.artisanNotes && (
                  <p className="text-[11px] text-[#7A615B] italic">
                    "{concept.artisanNotes}"
                  </p>
                )}

                {/* Direct Action */}
                <div className="pt-2">
                  <a
                    href={BAKERY_INFO.whatsappUrl(
                      `🎂 *CUSTOM INQUIRY FROM AI STYLIST*\n• Concept: ${concept.cakeTitle}\n• Recommended Size: ${concept.recommendedWeightKg} (${concept.servings})\n• Flavors: ${concept.flavorProfile}\n• Design: ${concept.designConcept}\n• Estimated Range: ${concept.estimatedPriceINR}\n\nHi Cakey Bakey, can you please confirm if this design is possible for our date?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#2E6B4A] hover:bg-[#235338] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send This Design to Baker on WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <div className="h-full min-h-[360px] bg-[#FAF5F0] border border-dashed border-[#DECDBE] rounded-xl p-8 flex flex-col items-center justify-center text-center">
                <Sparkles className="w-10 h-10 text-[#C49A70] mb-3" />
                <h3 className="font-serif text-lg font-bold text-[#241315]">
                  Your Bespoke Design Awaits
                </h3>
                <p className="text-xs text-[#7A615B] max-w-sm mt-1 leading-relaxed">
                  Fill in your occasion details on the left or click one of the quick theme pills above to let our AI Pastry Artisan craft an unforgettable cake concept.
                </p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

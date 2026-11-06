import React, { useState } from 'react';
import { MapPin, Phone, Clock, Truck, ShieldCheck, Check, Navigation, AlertCircle } from 'lucide-react';
import { BAKERY_INFO, DELIVERY_ZONES } from '../data/bakeryData.ts';

export const DeliveryAndLocation: React.FC = () => {
  const [searchPin, setSearchPin] = useState('');
  const [searchedZone, setSearchedZone] = useState<typeof DELIVERY_ZONES[0] | null>(null);
  const [searched, setSearched] = useState(false);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = searchPin.trim();
    const found = DELIVERY_ZONES.find(z => z.pincode === clean);
    setSearchedZone(found || null);
    setSearched(true);
  };

  return (
    <section id="delivery-info" className="py-16 sm:py-20 bg-white border-t border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-[#8A5A4A] mb-2">
            <span>Fresh Kitchen & Delivery Radius</span>
            <span aria-hidden="true">·</span>
            <span>North 24 Parganas & Kolkata</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#241315] font-bold tracking-tight">
            Doorstep Delivery & Store Pickup
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#5E4742]">
            We safely pack and hand-deliver our delicate custom cakes in temperature-controlled carriers, 
            or you can pick up fresh directly from our Hridaypur kitchen.
          </p>
        </div>

        {/* 2-Column Split: Location Info on Left, Delivery Checker on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Bakery Address & Visiting Hours */}
          <div className="lg:col-span-6 bg-[#FAF7F2] p-6 sm:p-8 rounded-xl border border-[#E8DFD8] space-y-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A5A4A] block mb-1">
                Kitchen Atelier & Pickup Point
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#241315]">
                Cakey Bakey Studio
              </h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#5E4742]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#9E3E4B] shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-[#241315]">Dr Sarada Prasad Ghosh St, Hridaypur</p>
                  <p className="text-xs text-[#7A615B] mt-0.5">Kolkata, West Bengal 700127</p>
                  <p className="text-[11px] text-[#8A6A5E] mt-0.5">
                    Landmark: 3 mins from Hridaypur Railway Station & Barasat Connector
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#D97706] shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-[#241315]">Baking & Pickup Hours</p>
                  <p className="text-xs text-[#7A615B] mt-0.5">7:00 AM – 10:00 PM (All 7 Days)</p>
                  <p className="text-[11px] text-[#8A6A5E] mt-0.5">
                    Same-day custom bento & signature orders accepted until 6:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#2E6B4A] shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-[#241315]">Direct Kitchen Contact</p>
                  <p className="text-xs text-[#7A615B] mt-0.5">
                    Call / WhatsApp: <a href={`tel:${BAKERY_INFO.phoneClean}`} className="font-bold text-[#241315] hover:underline">093305 63954</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={BAKERY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#241315] hover:bg-[#421A20] text-white text-xs font-semibold rounded-lg transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </a>

              <a
                href={BAKERY_INFO.whatsappUrl("Hi Cakey Bakey! I would like to schedule a self-pickup from your Hridaypur store.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white hover:bg-[#F2EAE0] text-[#241315] border border-[#D5C4B5] text-xs font-semibold rounded-lg transition-colors"
              >
                <span>Schedule Self Pickup</span>
              </a>
            </div>
          </div>

          {/* Right Column: Pincode / Locality Delivery Fee Lookup */}
          <div className="lg:col-span-6 bg-[#FAF7F2] p-6 sm:p-8 rounded-xl border border-[#E8DFD8] space-y-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A5A4A] block mb-1">
                Instant Delivery Verification
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#241315]">
                Check Your Locality or Pincode
              </h3>
              <p className="text-xs text-[#7A615B] mt-1">
                Enter your 6-digit postal code to check delivery time and fee.
              </p>
            </div>

            <form onSubmit={handleCheck} className="flex gap-2">
              <input
                type="text"
                value={searchPin}
                onChange={(e) => setSearchPin(e.target.value)}
                placeholder="e.g. 700127, 700124, 700129"
                maxLength={6}
                className="flex-1 px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#D5C4B5] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#241315]"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#241315] hover:bg-[#3D141C] text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap"
              >
                Check
              </button>
            </form>

            {/* Result Box */}
            {searched && (
              <div className="animate-in fade-in duration-200">
                {searchedZone ? (
                  <div className="p-4 bg-white rounded-lg border border-[#B6DEC5] space-y-2">
                    <div className="flex items-center gap-2 text-[#1F5135]">
                      <Check className="w-4 h-4 text-[#2E6B4A]" />
                      <span className="text-xs font-bold">Delivery Available to {searchedZone.name}</span>
                    </div>
                    <div className="text-xs text-[#5E4742] space-y-1 pt-1">
                      <p>
                        <strong>Standard Delivery Fee:</strong>{' '}
                        {searchedZone.fee === 0 ? (
                          <span className="text-[#2E6B4A] font-bold">Free Delivery</span>
                        ) : (
                          `₹${searchedZone.fee} (${searchedZone.freeNotice})`
                        )}
                      </p>
                      <p><strong>Estimated Lead Time:</strong> {searchedZone.time}</p>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 bg-white rounded-lg border border-[#E5DAD0] space-y-1.5 text-xs text-[#5E4742]">
                    <div className="flex items-center gap-2 text-[#9E3E4B]">
                      <AlertCircle className="w-4 h-4" />
                      <span className="font-bold">Custom Delivery Available on Request</span>
                    </div>
                    <p className="text-[11px] text-[#7A615B]">
                      We deliver all across greater Kolkata and North 24 Parganas via specialized parcel transport. 
                      Please contact our baker directly on WhatsApp to arrange delivery for PIN {searchPin}.
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Popular Coverage List */}
            <div className="pt-2 border-t border-[#E8DFD8]">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A5A4A] block mb-2">
                Standard Coverage Areas:
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs text-[#5E4742]">
                {DELIVERY_ZONES.slice(0, 6).map((z) => (
                  <div key={z.pincode} className="flex items-center justify-between p-2 bg-white rounded-md border border-[#EFE5DC]">
                    <span className="font-medium truncate pr-1">{z.name}</span>
                    <span className="text-[11px] font-semibold text-[#8A5A4A] shrink-0 tabular-nums">
                      {z.fee === 0 ? 'Free' : `₹${z.fee}`}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

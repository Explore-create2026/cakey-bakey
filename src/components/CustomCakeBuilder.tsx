import React, { useState, useId } from 'react';
import { 
  CAKE_SIZES, 
  CAKE_FLAVORS, 
  DESIGN_STYLES, 
  ADDONS, 
  DELIVERY_ZONES, 
  BAKERY_INFO 
} from '../data/bakeryData.ts';
import { 
  Check, 
  MessageCircle, 
  Copy, 
  Sparkles, 
  Calendar, 
  MapPin, 
  ChevronRight, 
  Info 
} from 'lucide-react';

export const CustomCakeBuilder: React.FC = () => {
  const occasionId = useId();
  const cakeNameId = useId();
  const deliveryDateId = useId();
  const deliveryTimeId = useId();
  const pincodeId = useId();
  const addressId = useId();
  const notesId = useId();

  // Selection states
  const [occasion, setOccasion] = useState<string>('Birthday');
  const [selectedSize, setSelectedSize] = useState<string>('1.0kg');
  const [selectedFlavor, setSelectedFlavor] = useState<string>('belgian-truffle');
  const [isEggless, setIsEggless] = useState<boolean>(true);
  const [selectedStyle, setSelectedStyle] = useState<string>('fresh-cream');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['acrylic-topper']);
  const [cakeMessage, setCakeMessage] = useState<string>('Happy Birthday!');
  const [deliveryDate, setDeliveryDate] = useState<string>('');
  const [deliveryTimeSlot, setDeliveryTimeSlot] = useState<string>('Evening (5 PM - 8 PM)');
  const [selectedPincode, setSelectedPincode] = useState<string>('700127');
  const [deliveryAddress, setDeliveryAddress] = useState<string>('');
  const [bakerNotes, setBakerNotes] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  // Derived calculations
  const sizeObj = CAKE_SIZES.find(s => s.id === selectedSize) || CAKE_SIZES[2];
  const flavorObj = CAKE_FLAVORS.find(f => f.id === selectedFlavor) || CAKE_FLAVORS[0];
  const styleObj = DESIGN_STYLES.find(st => st.id === selectedStyle) || DESIGN_STYLES[0];
  const zoneObj = DELIVERY_ZONES.find(z => z.pincode === selectedPincode) || DELIVERY_ZONES[0];

  const addonsTotal = selectedAddons.reduce((acc, addonId) => {
    const item = ADDONS.find(a => a.id === addonId);
    return acc + (item ? item.price : 0);
  }, 0);

  // Base price + flavor modifier + style fee + eggless fee (complimentary or nominal ₹0/₹50)
  const egglessFee = isEggless ? 0 : 0; // Cakey Bakey offers eggless at fresh bakery standard
  const subtotal = sizeObj.basePrice + flavorObj.addOn + styleObj.price + addonsTotal + egglessFee;
  const deliveryFee = zoneObj.fee > 0 && subtotal >= 1000 ? 0 : zoneObj.fee;
  const grandTotal = subtotal + deliveryFee;

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter(a => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  // WhatsApp formatted order string
  const formatOrderMessage = () => {
    const addonNames = selectedAddons
      .map(id => ADDONS.find(a => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    return `🎂 *NEW CUSTOM CAKE INQUIRY - CAKEY BAKEY*
---------------------------------------
• *Occasion:* ${occasion}
• *Weight/Size:* ${sizeObj.label} (${sizeObj.serves})
• *Flavor:* ${flavorObj.name}
• *Dietary:* ${isEggless ? '100% Pure Veg (Eggless)' : 'Regular with Egg'}
• *Design Style:* ${styleObj.name}
• *Add-ons:* ${addonNames || 'None'}
• *Message on Cake:* "${cakeMessage || 'None'}"
• *Delivery Date:* ${deliveryDate || 'To be confirmed'}
• *Preferred Slot:* ${deliveryTimeSlot}
• *Location:* ${zoneObj.name} (PIN: ${zoneObj.pincode})
${deliveryAddress ? `• *Address:* ${deliveryAddress}` : ''}
${bakerNotes ? `• *Special Requests:* ${bakerNotes}` : ''}
---------------------------------------
*Estimated Total:* ₹${grandTotal} (Subject to final customization)
Please let me know availability and payment confirmation!`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(formatOrderMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const occasions = [
    'Birthday',
    'Anniversary',
    'Wedding',
    'Baby Shower',
    'Bento / Mini Cake',
    'Kids Themed',
    'Farewell / Graduation',
    'Festival / Puja'
  ];

  return (
    <section id="custom-builder" className="py-16 sm:py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-[#8A5A4A] mb-2">
            <span>Bespoke Pastry Kitchen</span>
            <span aria-hidden="true">·</span>
            <span>Hridaypur, Kolkata</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#241315] font-bold tracking-tight">
            Design Your Custom Cake & Get an Instant Estimate
          </h2>
          <p className="mt-2 text-base text-[#5E4742]">
            Select your favorite sponge, bespoke styling, dietary preferences, and custom toppers. 
            Once you are happy with the estimate, tap to send directly to our baker on WhatsApp.
          </p>
        </div>

        {/* 2-Column Split: Configurator on Left (7 cols), Live Price Summary & Order on Right (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Interactive Form Controls */}
          <div className="lg:col-span-7 space-y-8 bg-white p-6 sm:p-8 rounded-xl border border-[#E8DFD8] shadow-sm">
            
            {/* 1. Occasion Selector */}
            <div>
              <label htmlFor={occasionId} className="block text-sm font-semibold text-[#241315] mb-3">
                1. Select Occasion
              </label>
              <div id={occasionId} className="flex flex-wrap gap-2">
                {occasions.map((occ) => (
                  <button
                    key={occ}
                    type="button"
                    onClick={() => setOccasion(occ)}
                    className={`px-3.5 py-1.5 text-xs font-medium rounded-lg border transition-all whitespace-nowrap ${
                      occasion === occ
                        ? 'bg-[#241315] text-white border-[#241315] shadow-xs'
                        : 'bg-[#FAF7F2] text-[#5E4742] border-[#E2D6CB] hover:bg-[#F2EAE1]'
                    }`}
                  >
                    {occ}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Weight & Servings */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-[#241315]">
                  2. Cake Size & Servings
                </label>
                <span className="text-xs text-[#8A6A5E] font-medium">
                  Currently: {sizeObj.serves}
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {CAKE_SIZES.map((size) => {
                  const isSelected = selectedSize === size.id;
                  return (
                    <button
                      key={size.id}
                      type="button"
                      onClick={() => setSelectedSize(size.id)}
                      className={`text-left p-3 rounded-lg border transition-all ${
                        isSelected
                          ? 'border-[#241315] bg-[#F7F2EC] ring-1 ring-[#241315]'
                          : 'border-[#E8DFD8] hover:border-[#D5C4B5] bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#241315]">{size.label}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#241315]" />}
                      </div>
                      <p className="text-[11px] text-[#7A615B] mt-1">{size.serves}</p>
                      <p className="text-xs font-semibold text-[#9E3E4B] mt-1.5 tabular-nums">
                        From ₹{size.basePrice}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Base Sponge & Flavor */}
            <div>
              <label className="block text-sm font-semibold text-[#241315] mb-3">
                3. Gourmet Flavor & Filling
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {CAKE_FLAVORS.map((flavor) => {
                  const isSelected = selectedFlavor === flavor.id;
                  return (
                    <button
                      key={flavor.id}
                      type="button"
                      onClick={() => setSelectedFlavor(flavor.id)}
                      className={`text-left p-3 rounded-lg border transition-all flex items-center justify-between ${
                        isSelected
                          ? 'border-[#241315] bg-[#F7F2EC] ring-1 ring-[#241315]'
                          : 'border-[#E8DFD8] hover:border-[#D5C4B5] bg-white'
                      }`}
                    >
                      <div className="pr-2">
                        <p className="text-xs font-bold text-[#241315] leading-snug">{flavor.name}</p>
                        <p className="text-[11px] text-[#7A615B] mt-0.5">{flavor.tag}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-xs font-medium text-[#7A615B] tabular-nums">
                          {flavor.addOn > 0 ? `+₹${flavor.addOn}` : 'Standard'}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Dietary: Eggless vs Regular */}
            <div>
              <label className="block text-sm font-semibold text-[#241315] mb-2.5">
                4. Dietary Preference
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setIsEggless(true)}
                  className={`p-3 rounded-lg border text-left flex items-start gap-3 transition-all ${
                    isEggless
                      ? 'border-[#2E6B4A] bg-[#F2F8F4] ring-1 ring-[#2E6B4A]'
                      : 'border-[#E8DFD8] bg-white hover:border-[#D5C4B5]'
                  }`}
                >
                  <div className="w-4 h-4 rounded-full border border-[#2E6B4A] flex items-center justify-center mt-0.5 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#2E6B4A]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#1F5135]">100% Eggless (Pure Veg)</span>
                    <p className="text-[11px] text-[#4F735E] mt-0.5">
                      Fluffy sponge baked in separate hygiene-certified veg cookware.
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setIsEggless(false)}
                  className={`p-3 rounded-lg border text-left flex items-start gap-3 transition-all ${
                    !isEggless
                      ? 'border-[#241315] bg-[#F7F2EC] ring-1 ring-[#241315]'
                      : 'border-[#E8DFD8] bg-white hover:border-[#D5C4B5]'
                  }`}
                >
                  <div className="w-4 h-4 rounded-full border border-[#8A6A5E] flex items-center justify-center mt-0.5 shrink-0">
                    {!isEggless && <div className="w-2 h-2 rounded-full bg-[#241315]" />}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#241315]">Regular (With Egg)</span>
                    <p className="text-[11px] text-[#7A615B] mt-0.5">
                      Traditional European sponge preparation with farm-fresh eggs.
                    </p>
                  </div>
                </button>
              </div>
            </div>

            {/* 5. Artistic Finish & Styling */}
            <div>
              <label className="block text-sm font-semibold text-[#241315] mb-3">
                5. Decor Style & Finish
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {DESIGN_STYLES.map((style) => {
                  const isSelected = selectedStyle === style.id;
                  return (
                    <button
                      key={style.id}
                      type="button"
                      onClick={() => setSelectedStyle(style.id)}
                      className={`text-left p-3 rounded-lg border transition-all ${
                        isSelected
                          ? 'border-[#241315] bg-[#F7F2EC] ring-1 ring-[#241315]'
                          : 'border-[#E8DFD8] hover:border-[#D5C4B5] bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#241315]">{style.name}</span>
                        <span className="text-xs font-semibold text-[#8A5A4A] tabular-nums">
                          {style.price > 0 ? `+₹${style.price}` : 'Included'}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#7A615B] mt-1 leading-snug">{style.description}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 6. Luxury Toppers & Add-ons */}
            <div>
              <label className="block text-sm font-semibold text-[#241315] mb-2.5">
                6. Custom Toppers & Enhancements
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className={`text-left p-2.5 rounded-lg border flex items-center justify-between transition-colors ${
                        isChecked
                          ? 'border-[#241315] bg-[#FAF5F0]'
                          : 'border-[#E8DFD8] bg-white hover:border-[#D5C4B5]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                          isChecked ? 'bg-[#241315] border-[#241315]' : 'border-[#C4AFA5]'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <span className="text-xs font-medium text-[#241315]">{addon.name}</span>
                      </div>
                      <span className="text-xs font-semibold text-[#8A5A4A] tabular-nums">
                        +₹{addon.price}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 7. Message on Cake */}
            <div>
              <label htmlFor={cakeNameId} className="block text-sm font-semibold text-[#241315] mb-1.5">
                7. Message on Cake / Card
              </label>
              <input
                id={cakeNameId}
                type="text"
                value={cakeMessage}
                onChange={(e) => setCakeMessage(e.target.value)}
                placeholder="e.g. Happy 25th Birthday Priya!"
                maxLength={60}
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D5C4B5] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#241315] text-[#241315]"
              />
              <p className="text-[11px] text-[#8A6A5E] mt-1">
                Hand-piped in delicate calligraphy by our pastry artisan.
              </p>
            </div>

            {/* 8. Delivery Details & Date */}
            <div className="pt-2 border-t border-[#E8DFD8] space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor={deliveryDateId} className="block text-xs font-semibold text-[#241315] mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#8A6A5E]" />
                    <span>Needed By (Date)</span>
                  </label>
                  <input
                    id={deliveryDateId}
                    type="date"
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#D5C4B5] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#241315]"
                  />
                </div>

                <div>
                  <label htmlFor={deliveryTimeId} className="block text-xs font-semibold text-[#241315] mb-1.5">
                    Preferred Time Slot
                  </label>
                  <select
                    id={deliveryTimeId}
                    value={deliveryTimeSlot}
                    onChange={(e) => setDeliveryTimeSlot(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#D5C4B5] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#241315]"
                  >
                    <option>Morning (9 AM - 12 PM)</option>
                    <option>Afternoon (1 PM - 4 PM)</option>
                    <option>Evening (5 PM - 8 PM)</option>
                    <option>Night / Midnight Slot (9 PM - 10 PM)</option>
                    <option>Self Store Pickup (Dr S.P. Ghosh St, Hridaypur)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor={pincodeId} className="block text-xs font-semibold text-[#241315] mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#8A6A5E]" />
                  <span>Delivery Locality / PIN</span>
                </label>
                <select
                  id={pincodeId}
                  value={selectedPincode}
                  onChange={(e) => setSelectedPincode(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#D5C4B5] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#241315]"
                >
                  {DELIVERY_ZONES.map((zone) => (
                    <option key={zone.pincode} value={zone.pincode}>
                      {zone.name} — PIN {zone.pincode} ({zone.fee === 0 ? 'Free Delivery' : `₹${zone.fee} delivery fee`})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor={addressId} className="block text-xs font-semibold text-[#241315] mb-1">
                  Full Delivery Address (Optional at this stage)
                </label>
                <input
                  id={addressId}
                  type="text"
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  placeholder="Apartment, Road, Landmark in Hridaypur / Barasat / Kolkata"
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#D5C4B5] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#241315]"
                />
              </div>

              <div>
                <label htmlFor={notesId} className="block text-xs font-semibold text-[#241315] mb-1">
                  Special Design Requests or Reference Photo Notes
                </label>
                <textarea
                  id={notesId}
                  rows={2}
                  value={bakerNotes}
                  onChange={(e) => setBakerNotes(e.target.value)}
                  placeholder="e.g. Please use pastel lilac color scheme, lower sweetness, or mention if you have a photo reference."
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#D5C4B5] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#241315]"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Live Price Quote & WhatsApp Ordering Card */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-white rounded-xl border border-[#D8C7B8] p-6 shadow-md space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#E8DFD8]">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A5A4A]">
                    Live Quote Summary
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#241315]">
                    {occasion} Custom Cake
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#7A615B]">Instant Estimate</span>
                  <p className="text-2xl font-bold text-[#241315] tabular-nums">
                    ₹{grandTotal}
                  </p>
                </div>
              </div>

              {/* Itemized Breakdown */}
              <div className="space-y-2.5 text-xs text-[#5E4742]">
                <div className="flex items-center justify-between">
                  <span>Base Sponge ({sizeObj.label})</span>
                  <span className="font-semibold text-[#241315] tabular-nums">₹{sizeObj.basePrice}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Flavor: {flavorObj.name}</span>
                  <span className="font-semibold text-[#241315] tabular-nums">
                    {flavorObj.addOn > 0 ? `+₹${flavorObj.addOn}` : 'Included'}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Style: {styleObj.name}</span>
                  <span className="font-semibold text-[#241315] tabular-nums">
                    {styleObj.price > 0 ? `+₹${styleObj.price}` : 'Included'}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Dietary: {isEggless ? '100% Eggless' : 'Regular with Egg'}</span>
                  <span className="font-semibold text-[#2E6B4A]">Complimentary</span>
                </div>

                {selectedAddons.length > 0 && (
                  <div className="flex items-center justify-between">
                    <span>Toppers ({selectedAddons.length} selected)</span>
                    <span className="font-semibold text-[#241315] tabular-nums">+₹{addonsTotal}</span>
                  </div>
                )}

                <div className="flex items-center justify-between pt-2 border-t border-[#F0E8E1]">
                  <span>Delivery ({zoneObj.name})</span>
                  <span className="font-semibold text-[#241315] tabular-nums">
                    {deliveryFee === 0 ? (
                      <span className="text-[#2E6B4A]">Free</span>
                    ) : (
                      `₹${deliveryFee}`
                    )}
                  </span>
                </div>
              </div>

              {/* Inscription preview badge */}
              {cakeMessage && (
                <div className="p-3 bg-[#FAF7F2] border border-[#E8DFD8] rounded-lg text-xs">
                  <span className="text-[10px] uppercase font-bold text-[#8A6A5E] tracking-wider block">
                    Inscription on Cake
                  </span>
                  <p className="font-serif italic text-sm text-[#241315] mt-0.5">
                    "{cakeMessage}"
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href={BAKERY_INFO.whatsappUrl(formatOrderMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#2E6B4A] hover:bg-[#24573C] text-white text-sm font-semibold rounded-lg shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Order to WhatsApp ({BAKERY_INFO.phone})</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#FAF7F2] hover:bg-[#F0E8E1] text-[#241315] border border-[#D5C4B5] text-xs font-medium rounded-lg transition-colors"
                >
                  <Copy className="w-3.5 h-3.5 text-[#8A6A5E]" />
                  <span>{copied ? 'Summary Copied to Clipboard!' : 'Copy Order Summary'}</span>
                </button>
              </div>

              {/* Baker Trust Note */}
              <div className="flex items-start gap-2 pt-2 text-[11px] text-[#7A615B] border-t border-[#F0E8E1]">
                <Info className="w-3.5 h-3.5 text-[#8A5A4A] shrink-0 mt-0.5" />
                <p>
                  No immediate online payment needed. Our baker will confirm time slot, photo reference, and address on WhatsApp before baking fresh.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

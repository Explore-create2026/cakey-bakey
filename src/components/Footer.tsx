import React from 'react';
import { Phone, MessageCircle, MapPin, Heart } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryData.ts';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#241315] text-[#FAF7F2] pt-14 pb-12 border-t border-[#3D1A22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#3D1A22]">
          
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Cakey Bakey
              </span>
              <span className="text-xs uppercase tracking-widest text-[#E8B688] font-medium">
                Custom Cakes
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#D1BEB6] max-w-md leading-relaxed">
              Hridaypur’s highest-rated bespoke bakery (5.0 Google Rating). Handcrafting custom designer cakes, 
              birthday showstoppers, Korean bento boxes, and wedding tiers with pure dairy butter and Belgian chocolate.
            </p>
            <div className="pt-1 flex items-center gap-3 text-xs text-[#E8B688]">
              <span>⭐ 5.0 Google Rated</span>
              <span aria-hidden="true">·</span>
              <span>51 Local Reviews</span>
              <span aria-hidden="true">·</span>
              <span>FSSAI Compliant Kitchen</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#E8B688]">
              Bakery Menu
            </p>
            <ul className="space-y-2 text-xs text-[#D1BEB6]">
              <li>
                <a href="#custom-builder" className="hover:text-white transition-colors">
                  Custom Cake Builder
                </a>
              </li>
              <li>
                <a href="#signature-cakes" className="hover:text-white transition-colors">
                  Belgian Chocolate Truffle
                </a>
              </li>
              <li>
                <a href="#signature-cakes" className="hover:text-white transition-colors">
                  Korean Bento Cakes
                </a>
              </li>
              <li>
                <a href="#signature-cakes" className="hover:text-white transition-colors">
                  Rasmalai Saffron Fusion
                </a>
              </li>
              <li>
                <a href="#ai-stylist" className="hover:text-white transition-colors">
                  Artisan AI Cake Stylist
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Kitchen & Contact */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#E8B688]">
              Visit & Contact
            </p>
            <div className="space-y-2 text-xs text-[#D1BEB6]">
              <p className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#E8B688] shrink-0 mt-0.5" />
                <span>Dr Sarada Prasad Ghosh St, Hridaypur, Kolkata 700127</span>
              </p>
              <p className="text-[11px] text-[#A69087]">
                Hours: 7:00 AM – 10:00 PM (Mon – Sun)
              </p>
              <div className="pt-2 flex flex-col gap-1.5">
                <a 
                  href={`tel:${BAKERY_INFO.phoneClean}`}
                  className="inline-flex items-center gap-1.5 text-white hover:text-[#E8B688] font-semibold"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>093305 63954</span>
                </a>
                <a
                  href={BAKERY_INFO.whatsappUrl("Hi Cakey Bakey! I would like to order a custom cake.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#88D4A8] hover:text-[#B0ECC9]"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Quiet Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E8780]">
          <p>© {new Date().getFullYear()} Cakey Bakey | Custom cakes. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-[#9E8780]">
            <span>Hridaypur, Kolkata, West Bengal</span>
            <span aria-hidden="true">·</span>
            <span>Handmade with Love & Fresh Butter</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

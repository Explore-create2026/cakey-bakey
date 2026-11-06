import React from 'react';
import { Star, CheckCircle, ExternalLink } from 'lucide-react';
import { REVIEWS_DATA, BAKERY_INFO } from '../data/bakeryData.ts';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Claim-to-Proof Adjacency */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-[#8A5A4A] mb-2">
              <span>Verified Customer Feedback</span>
              <span aria-hidden="true">·</span>
              <span>Hridaypur & North 24 Parganas</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#241315] font-bold tracking-tight">
              Loved by 50+ Local Celebrations
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#5E4742] max-w-xl">
              Authentic reviews from families, couples, and party hosts across Hridaypur, Barasat, 
              and Kolkata who trust Cakey Bakey for their milestone moments.
            </p>
          </div>

          {/* 5.0 Google Scorecard Strip */}
          <div className="bg-white border border-[#E8DFD8] rounded-xl p-4 sm:p-5 flex items-center gap-5 shadow-xs shrink-0">
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif text-3xl font-bold text-[#241315] tabular-nums">5.0</span>
                <span className="text-xs text-[#7A615B]">/ 5.0</span>
              </div>
              <div className="flex items-center gap-1 text-[#D97706] mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D97706]" />
                ))}
              </div>
            </div>

            <div className="border-l border-[#E8DFD8] pl-5 text-xs text-[#5E4742]">
              <p className="font-semibold text-[#241315]">51 Google Reviews</p>
              <p className="text-[11px] text-[#7A615B]">100% 5-Star Ratings</p>
              <a
                href={BAKERY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-[#9E3E4B] hover:underline font-medium mt-0.5"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Testimonials Grid (Cards maintain uniform padding & unboxed metadata) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-xl border border-[#E8DFD8] p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Star rating & relative timestamp */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-0.5 text-[#D97706]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D97706]" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#8A6A5E]">{rev.date}</span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#422C28] leading-relaxed font-normal">
                  "{rev.comment}"
                </p>
              </div>

              {/* Attribution Footer */}
              <div className="mt-5 pt-4 border-t border-[#F0E8E1] flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-[#241315]">{rev.name}</span>
                    <span title="Verified Google Review" className="inline-flex">
                      <CheckCircle className="w-3 h-3 text-[#2E6B4A]" />
                    </span>
                  </div>
                  <span className="text-[11px] text-[#7A615B] block">{rev.locality}</span>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-[#8A5A4A] font-medium block">Ordered</span>
                  <span className="text-[11px] text-[#241315] font-semibold">{rev.cakeType}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

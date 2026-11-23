import React from "react";
import { Check } from "lucide-react";
import { PRICING_TIERS, PricingTier } from "../data/catalogData";

interface PricingTiersSectionProps {
  onSelectTier: (tier: PricingTier) => void;
}

export const PricingTiersSection: React.FC<PricingTiersSectionProps> = ({
  onSelectTier,
}) => {
  return (
    <section
      id="pricing"
      className="scroll-mt-28 border-y border-[#B58938]/20 bg-[#F2EAE0] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[3px] uppercase text-[#8B3A42]">
            Gifting Tiers &amp; Bulk Rates
          </p>
          <h2 className="mt-2.5 brand-font text-3xl font-medium text-[#2A1812] sm:text-4xl">
            Curated Boxes for{" "}
            <span className="italic text-[#8B3A42]">Personal &amp; Bulk</span>{" "}
            Celebrations
          </h2>
          <p className="mt-3 text-base leading-[1.75] text-[#644E46] font-light">
            Transparent retail and bulk MOQ tiers designed for gifting clarity.
            Choose a tier to customize flavors, engraved names, and ribbon
            styling.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-7 lg:grid-cols-3">
          {PRICING_TIERS.map((tier) => (
            <article
              key={tier.id}
              className={`flex flex-col rounded-3xl border bg-[#FFFFFF] p-7 transition-all duration-300 hover:-translate-y-1 ${
                tier.featured
                  ? "border-[#B58938] shadow-[0_18px_40px_rgba(42,24,18,0.09)]"
                  : "border-[#B58938]/25 shadow-[0_12px_35px_rgba(42,24,18,0.06)] hover:border-[#B58938]"
              }`}
            >
              <div className="flex items-center justify-between gap-2 text-xs font-semibold tracking-wider uppercase text-[#8B3A42]">
                <span>
                  {tier.featured ? "Most Popular Assortment" : "Curated Box"}
                </span>
                <span className="rounded-full bg-[#F2EAE0] px-3 py-1 text-[11px] tabular-nums text-[#644E46]">
                  {tier.bulkMoq}
                </span>
              </div>

              <div className="lg:min-h-[108px]">
                <h3 className="mt-3.5 brand-font text-2xl font-medium leading-snug text-[#2A1812]">
                  {tier.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#644E46] font-light">
                  {tier.subtitle}
                </p>
              </div>

              {/* Retail vs Bulk Price Breakdown */}
              <div className="mt-5 grid grid-cols-2 gap-3 rounded-2xl border border-[#B58938]/20 bg-[#FAF6F0] p-4">
                <div>
                  <span className="block text-[11px] font-semibold tracking-wider uppercase text-[#644E46]">
                    Retail Box
                  </span>
                  <span className="mt-1 block brand-font text-lg xl:text-xl font-medium tabular-nums whitespace-nowrap text-[#2A1812]">
                    {tier.retailPrice}
                  </span>
                </div>
                <div className="border-l border-[#B58938]/25 pl-3">
                  <span className="block text-[11px] font-semibold tracking-wider uppercase text-[#8B3A42]">
                    Bulk Rate
                  </span>
                  <span className="mt-1 block brand-font text-lg xl:text-xl font-medium tabular-nums whitespace-nowrap text-[#2A1812]">
                    {tier.bulkPrice}
                  </span>
                  <span className="mt-0.5 block text-xs font-normal tabular-nums text-[#644E46]">
                    {tier.bulkMoq}
                  </span>
                </div>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {tier.includes.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-[#644E46] font-light"
                  >
                    <Check
                      className="mt-1 h-4 w-4 shrink-0 text-[#B58938]"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => onSelectTier(tier)}
                className={`mt-8 min-h-[46px] w-full px-5 py-3 ${
                  tier.featured ? "btn-gold" : "btn-berry"
                }`}
              >
                Customize This Tier
              </button>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm font-normal text-[#644E46]">
          Custom orders &amp; hampers priced based on customization and quantity.
        </p>
      </div>
    </section>
  );
};

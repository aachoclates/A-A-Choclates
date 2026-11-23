import React from "react";
import { useNavigate } from "react-router-dom";
import { BulkGiftingSection } from "../components/BulkGiftingSection";
import { PricingTiersSection } from "../components/PricingTiersSection";
import { PricingTier } from "../data/catalogData";

export const GiftingBulkPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSelectTier = (tier: PricingTier) => {
    navigate("/order", {
      state: {
        prefill: {
          selectedCategory: tier.quoteSelectValue,
          productName: tier.suggestedProductName,
          nonce: Date.now(),
        },
      },
    });
  };

  const handleStartBulkQuote = (segmentName?: string) => {
    navigate("/order", {
      state: {
        prefill: {
          orderType: "Bulk & Corporate" as const,
          selectedCategory: "Signature Celebration Box (8–12 pcs)",
          productName: segmentName ?? "Wedding / Corporate Bulk Hamper",
          quantity: 15,
          nonce: Date.now(),
        },
      },
    });
  };

  return (
    <div className="bg-[#FAF6F0]">
      <div className="border-b border-[#B58938]/20 bg-[#FAF6F0] py-12 sm:py-16">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[3px] uppercase text-[#8B3A42]">
            Retail &amp; Volume Gifting
          </p>
          <h1 className="mt-2.5 brand-font text-4xl font-medium text-[#2A1812] sm:text-5xl">
            Gifting Tiers &amp;{" "}
            <span className="italic text-[#8B3A42]">Bulk Celebrations</span>
          </h1>
          <p className="mt-3 max-w-2xl text-base font-light leading-[1.75] text-[#644E46]">
            Transparent gifting boxes from intimate 4-piece tokens to Grand Luxe
            custom hampers—plus negotiable bulk rates for weddings, corporate
            events, and Madhya Pradesh boutique retail partners.
          </p>
        </div>
      </div>

      <PricingTiersSection onSelectTier={handleSelectTier} />
      <BulkGiftingSection onStartBulkQuote={handleStartBulkQuote} />
    </div>
  );
};

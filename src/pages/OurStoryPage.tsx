import React from "react";
import { Award, Heart, Leaf, Sparkles } from "lucide-react";
import { CraftAndLocation } from "../components/CraftAndLocation";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { siteConfig } from "../config/siteConfig";

export const OurStoryPage: React.FC = () => {
  return (
    <div className="bg-[#FAF6F0]">
      <div className="border-b border-[#B58938]/20 bg-[#F2EAE0] py-12 sm:py-16">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[3px] uppercase text-[#8B3A42]">
            {siteConfig.tagline} · Founded by {siteConfig.founderName}
          </p>
          <h1 className="mt-2.5 brand-font text-4xl font-medium text-[#2A1812] sm:text-5xl">
            Our Artisanal Story &amp;{" "}
            <span className="italic text-[#8B3A42]">Patron Reviews</span>
          </h1>
          <p className="mt-3 max-w-2xl text-base font-light leading-[1.75] text-[#644E46]">
            Born in Bhopal and founded by {siteConfig.founderName}, A&amp;A
            Choclates brings together homemade integrity, 100% clean natural
            ingredients, and thoughtful gifting craftsmanship.
          </p>
        </div>
      </div>

      <CraftAndLocation />

      {/* Craftsmanship Standards Strip */}
      <section className="border-t border-[#B58938]/20 bg-[#FAF6F0] py-14 sm:py-16">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-[#B58938]/22 bg-[#FFFFFF] p-6">
              <Leaf className="h-5 w-5 text-[#8B3A42]" aria-hidden="true" />
              <h3 className="mt-3 brand-font text-lg font-medium text-[#2A1812]">
                100% Natural &amp; Clean
              </h3>
              <p className="mt-1.5 text-sm font-light text-[#644E46]">
                Pure cocoa butter, premium dry fruits, and zero artificial
                preservatives or shortcuts.
              </p>
            </div>
            <div className="rounded-3xl border border-[#B58938]/22 bg-[#FFFFFF] p-6">
              <Heart className="h-5 w-5 text-[#8B3A42]" aria-hidden="true" />
              <h3 className="mt-3 brand-font text-lg font-medium text-[#2A1812]">
                Homemade Small Batches
              </h3>
              <p className="mt-1.5 text-sm font-light text-[#644E46]">
                Hand-poured to order in Bhopal for peak freshness, glossy
                temper, and rich cocoa aroma.
              </p>
            </div>
            <div className="rounded-3xl border border-[#B58938]/22 bg-[#FFFFFF] p-6">
              <Sparkles className="h-5 w-5 text-[#8B3A42]" aria-hidden="true" />
              <h3 className="mt-3 brand-font text-lg font-medium text-[#2A1812]">
                Zero Refined Sugar Line
              </h3>
              <p className="mt-1.5 text-sm font-light text-[#644E46]">
                Royal Stuffed Dates, 8g Protein Choco Laddus, and Atta-Jaggery
                bakes crafted for mindful nutrition.
              </p>
            </div>
            <div className="rounded-3xl border border-[#B58938]/22 bg-[#FFFFFF] p-6">
              <Award className="h-5 w-5 text-[#8B3A42]" aria-hidden="true" />
              <h3 className="mt-3 brand-font text-lg font-medium text-[#2A1812]">
                Signature Presentation
              </h3>
              <p className="mt-1.5 text-sm font-light text-[#644E46]">
                Custom name engravings, edible gold pearls, and ribbon hampers
                tailored to your occasion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
    </div>
  );
};

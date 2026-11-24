import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Gift, Heart, Leaf, Sparkles } from "lucide-react";
import { CatalogGrid } from "../components/CatalogGrid";
import { GoogleReviewsSection } from "../components/GoogleReviewsSection";
import { HeroSection } from "../components/HeroSection";
import { PricingTiersSection } from "../components/PricingTiersSection";
import { InstagramIcon } from "../components/SocialIcons";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { TrustStrip } from "../components/TrustStrip";
import { siteConfig } from "../config/siteConfig";
import { PricingTier } from "../data/catalogData";

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleCollectionPreviewClick = () => {
    navigate("/collections");
  };

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

  return (
    <>
      <HeroSection />
      <TrustStrip />

      {/* Anchor target for the hero "Explore Collection" CTA */}
      <div id="collection" className="scroll-mt-28" />

      {/* Featured 6 Signature Categories (clicking links to /collections) */}
      <CatalogGrid
        onSelectProduct={handleCollectionPreviewClick}
        ctaLabel="View in Collections"
      />

      {/* Gifting & Bulk Tiers Summary linking to /gifting-bulk */}
      <PricingTiersSection onSelectTier={handleSelectTier} />
      <div className="bg-[#F2EAE0] pb-14 text-center">
        <Link to="/gifting-bulk" className="btn-berry px-8 py-3.5">
          <span>Explore Gifting &amp; Bulk Tiers</span>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      {/* Craftsmanship Highlights Preview */}
      <section className="bg-[#FAF6F0] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold tracking-[3px] uppercase text-[#8B3A42]">
                Founded by {siteConfig.founderName}
              </p>
              <h2 className="mt-2.5 brand-font text-3xl font-medium text-[#2A1812] sm:text-4xl">
                The Art of{" "}
                <span className="italic text-[#8B3A42]">Pure Cocoa</span> &amp;
                Clean Craft
              </h2>
              <p className="mt-4 text-base leading-[1.75] text-[#644E46] font-light">
                At A&amp;A Choclates in Bhopal, every batch is hand-tempered to
                order by {siteConfig.founderName} using pure cocoa butter,
                slow-roasted nuts, and wholesome natural ingredients without
                artificial preservatives.
              </p>
              <div className="mt-7">
                <Link to="/our-story" className="btn-gold px-7 py-3.5">
                  <span>Read Our Bhopal Story</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-6">
              <div className="rounded-3xl border border-[#B58938]/22 bg-[#FFFFFF] p-6 shadow-[0_12px_35px_rgba(42,24,18,0.05)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F2EAE0] text-[#8B3A42]">
                  <Leaf className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 brand-font text-lg font-medium text-[#2A1812]">
                  100% Natural
                </h3>
                <p className="mt-1.5 text-sm font-light text-[#644E46]">
                  Pure cocoa butter, whole roasted nuts, and clean sweeteners.
                </p>
              </div>

              <div className="rounded-3xl border border-[#B58938]/22 bg-[#FFFFFF] p-6 shadow-[0_12px_35px_rgba(42,24,18,0.05)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F2EAE0] text-[#8B3A42]">
                  <Heart className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 brand-font text-lg font-medium text-[#2A1812]">
                  Small Batches
                </h3>
                <p className="mt-1.5 text-sm font-light text-[#644E46]">
                  Hand-poured fresh to order for crisp snap and aroma.
                </p>
              </div>

              <div className="rounded-3xl border border-[#B58938]/22 bg-[#FFFFFF] p-6 shadow-[0_12px_35px_rgba(42,24,18,0.05)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F2EAE0] text-[#8B3A42]">
                  <Gift className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 brand-font text-lg font-medium text-[#2A1812]">
                  Bespoke Gifting
                </h3>
                <p className="mt-1.5 text-sm font-light text-[#644E46]">
                  Custom engraved names, floral garnishes &amp; luxury hampers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GoogleReviewsSection />

      <TestimonialsSection />

      {/* Direct Order CTA Band */}
      <section className="bg-[#FAF6F0] py-16 sm:py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-[#B58938]/30 bg-[#2A1812] p-8 text-[#FAF6F0] shadow-[0_18px_45px_rgba(42,24,18,0.14)] sm:p-12 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[3px] uppercase text-[#B58938]">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                <span>Direct Studio Ordering</span>
              </p>
              <h2 className="mt-3 brand-font text-3xl font-medium text-[#FAF6F0] sm:text-4xl">
                Order Your{" "}
                <span className="italic text-[#DFC896]">
                  Custom Treats &amp; Hampers
                </span>{" "}
                Today
              </h2>
              <p className="mt-3 text-base font-light leading-[1.75] text-[#FAF6F0]/80">
                Build your custom box or wedding &amp; corporate bulk quote in
                under a minute and send it straight to our Bhopal atelier on
                WhatsApp.
              </p>
            </div>

            <div className="flex flex-col gap-3.5 sm:flex-row lg:shrink-0">
              <Link to="/order" className="btn-gold px-7 py-3.5 whitespace-nowrap">
                <span>Open Quote Builder</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={siteConfig.INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-berry px-7 py-3.5 whitespace-nowrap"
              >
                <InstagramIcon className="h-4 w-4" />
                <span>Order via Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

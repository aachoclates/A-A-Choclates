import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, Sprout } from "lucide-react";
import {
  HERO_SLIDER_IMAGES,
  HERO_TYPEWRITER_PHRASES,
} from "../data/catalogData";
import { siteConfig } from "../config/siteConfig";
import { ArtisanalImage } from "./ArtisanalImage";

export const HeroSection: React.FC = () => {
  // Typewriter state
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(
    HERO_TYPEWRITER_PHRASES[0].length
  );
  const [isDeleting, setIsDeleting] = useState(false);

  // 5-Image Showcase Slider state
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const currentPhrase = HERO_TYPEWRITER_PHRASES[phraseIndex];
    let timeoutId: number;

    if (!isDeleting && charIndex < currentPhrase.length) {
      timeoutId = window.setTimeout(() => setCharIndex((c) => c + 1), 65);
    } else if (!isDeleting && charIndex === currentPhrase.length) {
      timeoutId = window.setTimeout(() => setIsDeleting(true), 2100);
    } else if (isDeleting && charIndex > 0) {
      timeoutId = window.setTimeout(() => setCharIndex((c) => c - 1), 36);
    } else {
      setIsDeleting(false);
      setPhraseIndex((p) => (p + 1) % HERO_TYPEWRITER_PHRASES.length);
    }

    return () => window.clearTimeout(timeoutId);
  }, [charIndex, isDeleting, phraseIndex]);

  useEffect(() => {
    if (isPaused) return;
    const intervalId = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDER_IMAGES.length);
    }, 4200);
    return () => window.clearInterval(intervalId);
  }, [isPaused]);

  const currentTypedText = HERO_TYPEWRITER_PHRASES[phraseIndex].slice(
    0,
    charIndex
  );
  const currentSlide = HERO_SLIDER_IMAGES[activeSlide];

  return (
    <section className="bg-[#FAF6F0] pb-14 pt-6 sm:pb-20 sm:pt-10 lg:pb-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Editorial Column */}
          <div className="flex flex-col items-start lg:col-span-7">
            {/* Exact CRAFT WITH CARE pill badge with Sprout icon */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#8B3A42]/20 bg-[#8B3A42]/8 px-5 py-2 text-xs font-semibold tracking-[2.5px] uppercase text-[#8B3A42]">
              <Sprout className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{siteConfig.tagline}</span>
            </div>

            <h1 className="mt-6 brand-font text-4xl font-medium leading-[1.16] text-[#2A1812] sm:text-5xl lg:text-[3.5rem]">
              Handcrafted Confections &amp;{" "}
              <span
                aria-live="polite"
                className="mt-1 block min-h-[1.25em] italic font-normal text-[#8B3A42]"
              >
                {currentTypedText}
                <span
                  aria-hidden="true"
                  className="ml-0.5 inline-block h-[0.9em] w-[2px] align-middle bg-[#B58938] animate-pulse"
                />
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-[1.75] text-[#644E46] sm:text-lg font-light">
              Founded by{" "}
              <strong className="font-medium text-[#2A1812]">
                {siteConfig.founderName}
              </strong>{" "}
              in Bhopal, A&amp;A Choclates crafts customized name chocolates,
              floral and dry-fruit discs, Kunafa bakes, royal stuffed dates, 8g
              protein choco laddus, and curated luxury gift hampers—handcrafted in
              small batches with pure cocoa butter and 100% natural ingredients.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                to="/order"
                className="btn-gold min-h-[48px] px-8 py-3.5 whitespace-nowrap"
              >
                <span>Order / Bulk Quote</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <Link
                to="/collections"
                className="btn-berry min-h-[48px] px-8 py-3.5 whitespace-nowrap"
              >
                <span>Explore Collections</span>
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#B58938]/20 pt-5 text-xs font-normal tracking-wide text-[#644E46]">
              <span>Bhopal Studio Pickup &amp; Delivery</span>
              <span aria-hidden="true" className="text-[#B58938]">
                ·
              </span>
              <span>Wedding &amp; Corporate Bulk (MOQ 10–15+)</span>
              <span aria-hidden="true" className="text-[#B58938]">
                ·
              </span>
              <span>Zero Preservatives</span>
            </div>
          </div>

          {/* Right Interactive 5-Image Rounded Showcase Slider */}
          <div
            className="lg:col-span-5"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative overflow-hidden rounded-3xl border border-[#B58938]/25 bg-[#FFFFFF] p-3.5 shadow-[0_14px_40px_rgba(42,24,18,0.08)]">
              <div className="relative overflow-hidden rounded-2xl">
                <ArtisanalImage
                  key={currentSlide.id}
                  src={currentSlide.src}
                  alt={currentSlide.title}
                  title={currentSlide.title}
                  filename={currentSlide.filename}
                  aspectClassName="aspect-[4/4.3]"
                  roundedClassName="rounded-2xl"
                />

                {/* Manual Prev / Next Arrow Controls */}
                <button
                  type="button"
                  onClick={() =>
                    setActiveSlide(
                      (prev) =>
                        (prev - 1 + HERO_SLIDER_IMAGES.length) %
                        HERO_SLIDER_IMAGES.length
                    )
                  }
                  aria-label="Previous showcase slide"
                  className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#B58938]/30 bg-[#FAF6F0]/90 text-[#2A1812] shadow-md backdrop-blur-sm transition-colors hover:bg-[#B58938] hover:text-white cursor-pointer"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setActiveSlide(
                      (prev) => (prev + 1) % HERO_SLIDER_IMAGES.length
                    )
                  }
                  aria-label="Next showcase slide"
                  className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#B58938]/30 bg-[#FAF6F0]/90 text-[#2A1812] shadow-md backdrop-blur-sm transition-colors hover:bg-[#B58938] hover:text-white cursor-pointer"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              {/* Clean Caption & Indicator Pills below image */}
              <div className="mt-3.5 flex items-center justify-between gap-3 px-2 pb-1">
                <div className="min-w-0">
                  <p className="truncate brand-font text-base font-medium text-[#2A1812]">
                    {currentSlide.title}
                  </p>
                  <p className="truncate text-xs text-[#644E46]">
                    {currentSlide.caption}
                  </p>
                </div>

                <div
                  role="tablist"
                  aria-label="Showcase slides"
                  className="flex shrink-0 items-center gap-1.5"
                >
                  {HERO_SLIDER_IMAGES.map((slide, index) => {
                    const isActive = index === activeSlide;
                    return (
                      <button
                        key={slide.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        aria-label={`Show slide ${index + 1}: ${slide.title}`}
                        onClick={() => setActiveSlide(index)}
                        className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                          isActive
                            ? "w-6 bg-[#B58938]"
                            : "w-2.5 bg-[#B58938]/30 hover:bg-[#B58938]/60"
                        }`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight, Sprout } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { BrandLogo } from "./BrandLogo";

interface HeroCta {
  label: string;
  href: string;
}

interface HeroSlide {
  id: string;
  label: string;
  image: string;
  alt: string;
  badge: string;
  headline: string;
  subtext: string;
  primaryCta: HeroCta;
  secondaryCta: HeroCta;
}

const AUTOPLAY_MS = 5500;
const SWIPE_THRESHOLD = 50;

const WHATSAPP_URL = `https://wa.me/${siteConfig.WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi A&A Choclates! I'd like to place an order."
)}`;

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "flagship",
    label: "Brand Flagship",
    image: "/images/hero-hamper.jpg",
    alt: "A&A Choclates luxury signature chocolate hamper",
    badge: "CRAFT WITH CARE • BHOPAL ATELIER",
    headline: "Handcrafted Confections & Healthy Dry-Fruit Treats",
    subtext:
      "Small-batch customized name chocolates, floral mendiant discs, Kunafa bakes & luxury wedding hampers made with 100% natural ingredients.",
    primaryCta: { label: "Explore Collection", href: "#collection" },
    secondaryCta: { label: "Order on WhatsApp", href: WHATSAPP_URL },
  },
  {
    id: "name-bar",
    label: "Name Chocolates",
    image: "/images/prod-1-name-bar.jpg",
    alt: "Customized name chocolate bar with edible gold pearls and roasted nuts",
    badge: "CUSTOM NAME BARS • MADE TO ORDER",
    headline: "Unke Naam Ki Chocolate, Jo Seedha Dil Jeet Le.",
    subtext:
      "Birthday ho, anniversary ya shaadi ka invite—edible gold pearls aur roasted nuts ke saath apna custom message chocolate par likhwayein.",
    primaryCta: { label: "Customize Your Bar", href: "/order" },
    secondaryCta: { label: "Bulk Quote", href: "/order" },
  },
  {
    id: "floral-discs",
    label: "Floral Discs",
    image: "/images/prod-2-floral-discs.jpg",
    alt: "Floral mendiant discs topped with slow-roasted nuts and rose petals",
    badge: "FLORAL MENDIANTS • ZERO PRESERVATIVES",
    headline: "Har Bite Mein Shahi Crunch, Har Disc Ek Art Piece.",
    subtext:
      "Slow-roasted badam, kaju, pumpkin seeds aur asli gulab ki pattiyon se saje pure cocoa discs—gifting ke liye ekdum perfect.",
    primaryCta: { label: "Order Gift Box", href: "/order" },
    secondaryCta: { label: "See All Flavours", href: "/collections" },
  },
  {
    id: "kunafa-cakes",
    label: "Kunafa & Cakes",
    image: "/images/prod-3-cakes-kunafa.jpg",
    alt: "Freshly baked Kunafa and walnut dry cakes",
    badge: "FRESH OVEN • KUNAFA & WALNUT CAKES",
    headline: "Garma-Garam Kunafa Crunch Aur Walnut Cake Ka Asli Mazaa.",
    subtext:
      "Crispy golden Kunafa bakes aur pure walnut-jaggery dry cakes—chai ki shaam ho ya celebration, ek slice kabhi kaafi nahi.",
    primaryCta: { label: "Order Fresh Bake", href: "/order" },
    secondaryCta: { label: "View Menu", href: "/collections" },
  },
  {
    id: "protein-laddus",
    label: "Protein Laddus",
    image: "/images/prod-6-dates-laddus.jpg",
    alt: "8g protein choco laddus, rose-stuffed dates and dry-fruit energy sticks",
    badge: "GUILT-FREE INDULGENCE • 8G PROTEIN",
    headline: "Meetha Bhi, Healthy Bhi—Bina Ek Chammach Cheeni Ke.",
    subtext:
      "8g protein choco laddus, rose-stuffed dates aur dry-fruit energy sticks—fitness aur cravings dono ka ekdum solid jugaad.",
    primaryCta: { label: "Order Healthy Box", href: "/order" },
    secondaryCta: { label: "Bulk Inquiry", href: "/gifting-bulk" },
  },
];

const renderCta = (
  cta: HeroCta,
  variant: "primary" | "secondary"
) => {
  const base =
    "inline-flex min-h-[48px] items-center justify-center gap-2 whitespace-nowrap px-7 py-3 text-xs font-medium uppercase tracking-[2px] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58938] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2A1812]";

  if (variant === "primary") {
    return {
      className: `${base} btn-gold`,
      content: (
        <>
          <span>{cta.label}</span>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </>
      ),
    };
  }

  return {
    className: `${base} rounded-full border border-[#FAF6F0]/50 text-[#FAF6F0] hover:border-[#B58938] hover:bg-[#B58938]/15`,
    content: <span>{cta.label}</span>,
  };
};

export const HeroSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const goToSlide = useCallback((index: number) => {
    setActiveSlide(
      (index + HERO_SLIDES.length) % HERO_SLIDES.length
    );
  }, []);

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveSlide(
      (prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length
    );
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const intervalId = window.setInterval(nextSlide, AUTOPLAY_MS);
    return () => window.clearInterval(intervalId);
  }, [isPaused, nextSlide]);

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
      if (deltaX < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
  };

  const currentSlide = HERO_SLIDES[activeSlide];

  const renderCtaLink = (
    cta: HeroCta,
    variant: "primary" | "secondary"
  ) => {
    const { className, content } = renderCta(cta, variant);

    if (cta.href.startsWith("#")) {
      return (
        <a key={cta.label} href={cta.href} className={className}>
          {content}
        </a>
      );
    }

    if (cta.href.startsWith("http")) {
      return (
        <a
          key={cta.label}
          href={cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {content}
        </a>
      );
    }

    return (
      <Link key={cta.label} to={cta.href} className={className}>
        {content}
      </Link>
    );
  };

  return (
    <section
      aria-label="A&A Choclates signature collections"
      className="relative -mt-24 w-full overflow-hidden bg-[#2A1812] sm:-mt-28 min-h-[100svh]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Full-resolution crossfading photography */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide.id}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          <motion.img
            src={currentSlide.image}
            alt={currentSlide.alt}
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 7, ease: "easeOut" }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Directional readability scrim */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#2A1812]/90 via-[#2A1812]/65 to-[#2A1812]/25"
      />

      {/* Foreground content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1280px] flex-col px-4 pb-16 pt-28 sm:px-6 md:pt-32 lg:px-8">
        <div className="grid flex-1 grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="max-w-3xl"
              >
              <div className="inline-flex items-center gap-2 rounded-full border border-[#B58938]/50 bg-[#2A1812]/40 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2.5px] text-[#B58938] backdrop-blur-sm">
                <Sprout className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span>{currentSlide.badge}</span>
              </div>

              <h1 className="mt-6 brand-font text-4xl font-medium leading-[1.14] text-[#FAF6F0] sm:text-5xl lg:text-[3.5rem]">
                {currentSlide.headline}
              </h1>

              <p className="mt-5 max-w-2xl text-base font-light leading-[1.75] text-[#FAF6F0]/90 sm:text-lg">
                {currentSlide.subtext}
              </p>

              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:items-center">
                {renderCtaLink(currentSlide.primaryCta, "primary")}
                {renderCtaLink(currentSlide.secondaryCta, "secondary")}
              </div>
            </motion.div>
            </AnimatePresence>
          </div>

          {/* Right editorial brand medallion */}
          <div className="pointer-events-none hidden lg:col-span-5 lg:flex items-center justify-center lg:pr-14">
            <motion.div
              aria-hidden="true"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-64 w-64 items-center justify-center rounded-full border border-[#DFC896]/40 bg-[#FAF6F0]/10 p-5 shadow-2xl backdrop-blur-md xl:h-80 xl:w-80"
            >
              <BrandLogo className="h-full w-full" />
            </motion.div>
          </div>
        </div>

        {/* Bottom progress indicators */}
        <div
          role="tablist"
          aria-label="Hero slides"
          className="mt-10 flex items-stretch gap-2 sm:gap-4"
        >
          {HERO_SLIDES.map((slide, index) => {
            const isActive = index === activeSlide;
            return (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Go to slide ${index + 1}: ${slide.label}`}
                onClick={() => goToSlide(index)}
                className={`group flex flex-1 cursor-pointer flex-col gap-1.5 border-t-2 pt-2.5 text-left transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58938] ${
                  isActive
                    ? "border-[#B58938]"
                    : "border-[#FAF6F0]/25 hover:border-[#FAF6F0]/60"
                }`}
              >
                <span
                  className={`text-[11px] font-semibold tabular-nums tracking-[2px] transition-colors ${
                    isActive
                      ? "text-[#B58938]"
                      : "text-[#FAF6F0]/55 group-hover:text-[#FAF6F0]/80"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={`truncate text-[11px] transition-colors sm:text-xs ${
                    isActive
                      ? "text-[#FAF6F0]"
                      : "text-[#FAF6F0]/55 group-hover:text-[#FAF6F0]/80"
                  }`}
                >
                  {slide.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Minimal chevron controls */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#FAF6F0]/40 bg-[#2A1812]/40 text-[#FAF6F0] backdrop-blur-sm transition-colors hover:border-[#B58938] hover:bg-[#B58938] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58938] md:flex lg:left-5"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#FAF6F0]/40 bg-[#2A1812]/40 text-[#FAF6F0] backdrop-blur-sm transition-colors hover:border-[#B58938] hover:bg-[#B58938] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58938] md:flex lg:right-5"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>
    </section>
  );
};
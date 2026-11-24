import React from "react";
import { Link } from "react-router-dom";
import {
  Gift,
  HeartHandshake,
  Mail,
  MapPin,
  PenTool,
  Phone,
  Sparkles,
  Truck,
} from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { BrandLogo } from "./BrandLogo";
import {
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
} from "./SocialIcons";

const EXPLORE_LINKS = [
  { label: "Signature Collections", to: "/collections", icon: Sparkles },
  { label: "Gifting & Bulk Tiers", to: "/gifting-bulk", icon: Gift },
  { label: "Custom Orders", to: "/order", icon: PenTool },
  { label: "Our Story", to: "/our-story", icon: HeartHandshake },
];

export const Footer: React.FC = () => {
  const whatsappBaseUrl = `https://wa.me/${siteConfig.WHATSAPP_NUMBER}`;
  const whatsappGreetingUrl = `${whatsappBaseUrl}?text=${encodeURIComponent(
    "Hello A&A Choclates, I would like to inquire about an order."
  )}`;

  return (
    <footer className="border-t border-[#B58938]/25 bg-[#2A1812] text-[#FAF6F0]">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Top Atelier Band */}
        <div className="flex flex-col gap-8 border-b border-[#DFC896]/15 py-14 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <div className="flex items-center gap-4">
              <Link
                to="/"
                aria-label="A&A Choclates home"
                className="shrink-0 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58938]"
              >
                <BrandLogo className="h-16 w-16" />
              </Link>
              <div>
                <Link
                  to="/"
                  className="brand-font text-2xl font-medium tracking-wider text-[#FAF6F0]"
                >
                  {siteConfig.brandName}
                </Link>
                <p className="mt-1 text-[11px] font-semibold tracking-[3px] uppercase text-[#B58938]">
                  {siteConfig.tagline}
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm font-light leading-[1.8] text-[#FAF6F0]/70">
              Small-batch artisanal chocolates &amp; bespoke hampers handcrafted
              in Bhopal.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
            <Link
              to="/order"
              className="btn-gold min-h-[48px] px-7 py-3.5"
            >
              <span>Order / Bulk Quote</span>
            </Link>
            <a
              href={whatsappGreetingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-[#B58938] px-7 py-3 text-xs font-medium uppercase tracking-[2px] text-[#B58938] transition-colors duration-300 hover:bg-[#B58938] hover:text-[#2A1812] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58938]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>WhatsApp Order</span>
            </a>
          </div>
        </div>

        {/* Middle Architectural Grid */}
        <div className="grid grid-cols-1 gap-10 py-14 md:grid-cols-3 md:gap-0">
          {/* Col 1: Collections & Gifting */}
          <div className="md:pr-10">
            <h3 className="brand-font text-sm font-semibold uppercase tracking-[2.5px] text-[#DFC896]">
              Collections &amp; Gifting
            </h3>
            <ul className="mt-5 space-y-3.5">
              {EXPLORE_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="group inline-flex items-center gap-2.5 text-sm font-light text-[#FAF6F0]/75 transition-colors duration-300 hover:text-[#B58938]"
                    >
                      <Icon
                        className="h-4 w-4 shrink-0 text-[#B58938]"
                        aria-hidden="true"
                      />
                      <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#B58938] after:transition-all after:duration-300 group-hover:after:w-full">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Col 2: Atelier & Fulfillment */}
          <div className="md:border-l md:border-[#DFC896]/15 md:px-10">
            <h3 className="brand-font text-sm font-semibold uppercase tracking-[2.5px] text-[#DFC896]">
              Atelier &amp; Fulfillment
            </h3>
            <ul className="mt-5 space-y-4 text-sm font-light text-[#FAF6F0]/75">
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#B58938]"
                  aria-hidden="true"
                />
                <span className="leading-[1.8]">{siteConfig.ADDRESS}</span>
              </li>
              <li className="flex items-start gap-3">
                <Truck
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#B58938]"
                  aria-hidden="true"
                />
                <span className="leading-[1.8] text-[#FAF6F0]/60">
                  Bhopal Self-Pickup &amp; Local Delivery • Bulk Orders Across
                  Madhya Pradesh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  className="h-4 w-4 shrink-0 text-[#B58938]"
                  aria-hidden="true"
                />
                <a
                  href={`tel:+${siteConfig.WHATSAPP_NUMBER}`}
                  className="tabular-nums text-[#FAF6F0]/85 transition-colors hover:text-[#B58938]"
                >
                  {siteConfig.DISPLAY_PHONE}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail
                  className="h-4 w-4 shrink-0 text-[#B58938]"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${siteConfig.EMAIL}`}
                  className="text-[#FAF6F0]/85 transition-colors hover:text-[#B58938]"
                >
                  {siteConfig.EMAIL}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Connect */}
          <div className="md:border-l md:border-[#DFC896]/15 md:pl-10">
            <h3 className="brand-font text-sm font-semibold uppercase tracking-[2.5px] text-[#DFC896]">
              Connect
            </h3>
            <div className="mt-5 flex items-center gap-4">
              <a
                href={siteConfig.INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full text-white shadow-md transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58938]"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #F58529 0%, #DD2A7B 45%, #8134AF 75%, #515BD4 100%)",
                }}
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-md transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58938]"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href={whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58938]"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-[#DFC896]/15 py-7 text-xs text-[#FAF6F0]/55 sm:flex-row">
          <p>
            &copy; 2026 {siteConfig.brandName} • Founded by {siteConfig.founderName}
          </p>
          <a
            href={siteConfig.developerGithubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FAF6F0]/70 transition-colors hover:text-[#B58938]"
          >
            Crafted by {siteConfig.developerName}
          </a>
        </div>
      </div>
    </footer>
  );
};
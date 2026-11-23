import React from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  ClipboardList,
  Compass,
  Gift,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquareQuote,
  Phone,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { BrandLogo } from "./BrandLogo";
import { InstagramIcon, WhatsAppIcon } from "./SocialIcons";

export const Footer: React.FC = () => {
  const whatsappGreetingUrl = `https://wa.me/${siteConfig.WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello A&A Choclates, I would like to inquire about an order."
  )}`;

  return (
    <footer className="border-t border-[#B58938]/25 bg-[#2A1812] py-16 text-[#FAF6F0]/80">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Column 1: Brand, Logo & Socials */}
          <div className="md:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3.5">
              <BrandLogo className="h-11 w-11" />
              <div>
                <h2 className="brand-font text-xl font-medium tracking-wider text-[#FAF6F0]">
                  {siteConfig.brandName}
                </h2>
                <p className="text-[11px] font-semibold tracking-[2.5px] uppercase text-[#B58938]">
                  {siteConfig.tagline}
                </p>
              </div>
            </Link>

            <p className="mt-4 text-sm font-light leading-[1.75] text-[#FAF6F0]/75">
              {siteConfig.tagline} — Founded by {siteConfig.founderName} in
              Bhopal, MP. Small-batch homemade chocolates, customized name bars,
              Kunafa bakes, and healthy dry-fruit confections.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <a
                href={siteConfig.INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="A&A Choclates on Instagram (@aachoclates.me)"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#FAF6F0]/20 bg-[#FAF6F0]/8 text-[#B58938] transition-all hover:border-[#B58938] hover:bg-[#B58938] hover:text-[#2A1812]"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={whatsappGreetingUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with A&A Choclates on WhatsApp"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#FAF6F0]/20 bg-[#FAF6F0]/8 text-[#B58938] transition-all hover:border-[#B58938] hover:bg-[#B58938] hover:text-[#2A1812]"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Explore Studio with Lucide Compass heading & link icons */}
          <div className="md:col-span-4">
            <h3 className="flex items-center gap-2.5 brand-font text-lg font-medium text-[#FAF6F0]">
              <Compass className="h-4 w-4 text-[#B58938]" aria-hidden="true" />
              <span>Explore Studio</span>
            </h3>
            <div className="mt-2 h-[2px] w-8 bg-[#B58938]" />

            <ul className="mt-5 space-y-3 text-sm font-light text-[#FAF6F0]/80">
              <li>
                <Link
                  to="/collections"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-[#B58938]"
                >
                  <Sparkles className="h-4 w-4 text-[#B58938]" aria-hidden="true" />
                  <span>Signature Collections</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/gifting-bulk"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-[#B58938]"
                >
                  <Gift className="h-4 w-4 text-[#B58938]" aria-hidden="true" />
                  <span>Gifting &amp; Bulk Tiers</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/gifting-bulk#corporate-bulk"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-[#B58938]"
                >
                  <Building2 className="h-4 w-4 text-[#B58938]" aria-hidden="true" />
                  <span>Wedding &amp; Corporate Bulk</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/order"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-[#B58938]"
                >
                  <ClipboardList className="h-4 w-4 text-[#B58938]" aria-hidden="true" />
                  <span>Order &amp; Quote Builder</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/our-story#reviews"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-[#B58938]"
                >
                  <MessageSquareQuote
                    className="h-4 w-4 text-[#B58938]"
                    aria-hidden="true"
                  />
                  <span>Patron Reviews / Happy Clients</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Atelier Contact with Lucide MapPin heading */}
          <div className="md:col-span-4">
            <h3 className="flex items-center gap-2.5 brand-font text-lg font-medium text-[#FAF6F0]">
              <MapPin className="h-4 w-4 text-[#B58938]" aria-hidden="true" />
              <span>Atelier Contact</span>
            </h3>
            <div className="mt-2 h-[2px] w-8 bg-[#B58938]" />

            <p className="mt-5 text-sm font-light leading-[1.75] text-[#FAF6F0]/80">
              {siteConfig.ADDRESS}
            </p>

            <div className="mt-4 space-y-2.5 text-sm font-light text-[#FAF6F0]/85">
              <p className="flex items-center gap-2.5 tabular-nums">
                <Phone className="h-4 w-4 shrink-0 text-[#B58938]" aria-hidden="true" />
                <a
                  href={`tel:+${siteConfig.WHATSAPP_NUMBER}`}
                  className="transition-colors hover:text-[#B58938]"
                >
                  {siteConfig.DISPLAY_PHONE}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-[#B58938]" aria-hidden="true" />
                <a
                  href={`mailto:${siteConfig.EMAIL}`}
                  className="transition-colors hover:text-[#B58938]"
                >
                  {siteConfig.EMAIL}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright + Built by Aashif Khan Credit Badge */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#FAF6F0]/12 pt-7 text-xs text-[#FAF6F0]/70 sm:flex-row">
          <p>
            &copy; 2026 {siteConfig.brandName}. Founded by {siteConfig.founderName}.
            All Rights Reserved.
          </p>

          <div className="inline-flex items-center gap-3 rounded-full border border-[#B58938]/30 bg-[#FAF6F0]/6 px-4 py-1.5 text-xs text-[#FAF6F0]/85">
            <span>
              Built by{" "}
              <strong className="font-medium text-[#FAF6F0]">
                {siteConfig.developerName}
              </strong>
            </span>
            <span aria-hidden="true" className="text-[#B58938]">
              ·
            </span>
            <a
              href={siteConfig.developerGithubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Aashif Khan on GitHub"
              className="inline-flex items-center justify-center text-[#B58938] transition-colors hover:text-[#FAF6F0]"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={siteConfig.developerLinkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Aashif Khan on LinkedIn"
              className="inline-flex items-center justify-center text-[#B58938] transition-colors hover:text-[#FAF6F0]"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

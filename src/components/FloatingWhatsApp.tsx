import React from "react";
import { siteConfig } from "../config/siteConfig";
import { WhatsAppIcon } from "./SocialIcons";

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${siteConfig.WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello A&A Choclates! I would like to inquire about your artisanal chocolates and gift hampers."
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with A&A Choclates on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#DFC896] bg-[#25D366] text-[#0F2A1A] shadow-[0_8px_24px_rgba(42,24,18,0.22)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A1812]"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  );
};

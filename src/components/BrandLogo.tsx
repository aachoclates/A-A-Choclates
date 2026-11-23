import React, { useState } from "react";
import { siteConfig } from "../config/siteConfig";

interface BrandLogoProps {
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = "h-11 w-11",
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        aria-hidden="true"
        className={`flex shrink-0 items-center justify-center rounded-full border border-[#B58938] bg-[#2A1812] text-xs font-semibold tracking-wider text-[#FAF6F0] brand-font ${className}`}
      >
        A&amp;A
      </div>
    );
  }

  return (
    <img
      src={siteConfig.LOGO_PATH}
      alt="A&A Choclates Logo"
      onError={() => setHasError(true)}
      className={`shrink-0 rounded-full border border-[#B58938] object-cover bg-[#FAF6F0] ${className}`}
    />
  );
};

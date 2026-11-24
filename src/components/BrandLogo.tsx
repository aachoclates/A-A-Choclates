import React, { useState } from "react";

interface BrandLogoProps {
  className?: string;
  src?: string;
  width?: number;
  height?: number;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = "h-11 w-11",
  src = "/assets/01_Logo/logo-sm.webp",
  width = 67,
  height = 67,
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
      src={src}
      alt="A&A Choclates Logo"
      width={width}
      height={height}
      loading="eager"
      decoding="async"
      onError={() => setHasError(true)}
      className={`shrink-0 rounded-full border border-[#B58938] object-cover bg-[#FAF6F0] ${className}`}
    />
  );
};
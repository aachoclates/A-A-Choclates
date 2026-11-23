import React, { useState } from "react";
import { Camera } from "lucide-react";

interface ArtisanalImageProps {
  src: string;
  alt: string;
  title: string;
  filename: string;
  className?: string;
  aspectClassName?: string;
  roundedClassName?: string;
}

export const ArtisanalImage: React.FC<ArtisanalImageProps> = ({
  src,
  alt,
  title,
  filename,
  className = "",
  aspectClassName = "aspect-[4/3]",
  roundedClassName = "rounded-2xl",
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-[#F2EAE0] border border-[#B58938]/25 ${aspectClassName} ${roundedClassName} ${className}`}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={() => setHasError(true)}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      ) : (
        <div
          role="img"
          aria-label={`${title} — awaiting photography (${filename})`}
          className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#FAF6F0] via-[#F2EAE0] to-[#EADBC8] p-5 text-center"
        >
          <div className="flex h-full w-full flex-col items-center justify-center rounded-xl border border-[#B58938]/30 bg-[#FAF6F0]/75 px-4 py-5">
            <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-full border border-[#B58938]/35 bg-[#F2EAE0] text-[#B58938]">
              <Camera className="h-4 w-4" aria-hidden="true" />
            </div>
            <p className="brand-font text-base font-medium leading-snug text-[#2A1812]">
              {title}
            </p>
            <p className="mt-1 text-xs font-normal tracking-wide text-[#644E46]">
              A&amp;A Choclates · Craft with Care
            </p>
            <code className="mt-2.5 rounded-full border border-[#B58938]/30 bg-[#F2EAE0] px-3 py-1 text-[11px] font-medium text-[#8B3A42]">
              /assets/02_Images/{filename}
            </code>
          </div>
        </div>
      )}
    </div>
  );
};

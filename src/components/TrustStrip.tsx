import React from "react";
import { Award, Heart, Leaf, MapPin } from "lucide-react";
import { TRUST_PILLARS, TrustPillar } from "../data/catalogData";

const renderIcon = (name: TrustPillar["iconName"]) => {
  const iconClass = "h-5 w-5 text-[#8B3A42]";
  switch (name) {
    case "heart":
      return <Heart className={iconClass} aria-hidden="true" />;
    case "leaf":
      return <Leaf className={iconClass} aria-hidden="true" />;
    case "award":
      return <Award className={iconClass} aria-hidden="true" />;
    case "mapPin":
      return <MapPin className={iconClass} aria-hidden="true" />;
  }
};

export const TrustStrip: React.FC = () => {
  return (
    <section
      aria-label="Quality and craft guarantees"
      className="border-y border-[#B58938]/20 bg-[#F2EAE0] py-10 sm:py-12"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {TRUST_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="flex items-start gap-4 rounded-2xl border border-[#B58938]/20 bg-[#FFFFFF] p-5 shadow-[0_8px_24px_rgba(42,24,18,0.04)]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#B58938]/30 bg-[#FAF6F0]">
                {renderIcon(pillar.iconName)}
              </div>
              <div>
                <h2 className="brand-font text-base font-medium text-[#2A1812]">
                  {pillar.title}
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-[#644E46] font-light">
                  {pillar.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { useNavigate } from "react-router-dom";
import { CatalogGrid } from "../components/CatalogGrid";
import { StudioMediaGallery } from "../components/StudioMediaGallery";
import { CatalogItem } from "../data/catalogData";

export const CollectionsPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSelectProduct = (item: CatalogItem) => {
    navigate("/order", {
      state: {
        prefill: {
          selectedCategory: item.quoteSelectValue,
          productName: item.suggestedProductName,
          nonce: Date.now(),
        },
      },
    });
  };

  return (
    <div className="bg-[#FAF6F0]">
      <div className="border-b border-[#B58938]/20 bg-[#F2EAE0] py-12 sm:py-16">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[3px] uppercase text-[#8B3A42]">
            A&amp;A Choclates · Bhopal Atelier
          </p>
          <h1 className="mt-2.5 brand-font text-4xl font-medium text-[#2A1812] sm:text-5xl">
            Signature Collections &amp;{" "}
            <span className="italic text-[#8B3A42]">Studio Gallery</span>
          </h1>
          <p className="mt-3 max-w-2xl text-base font-light leading-[1.75] text-[#644E46]">
            Browse all six signature artisanal categories in priority order,
            plus our complete high-resolution gallery of 22 handcrafted photos
            and 12 studio showcase reels.
          </p>
        </div>
      </div>

      <CatalogGrid
        onSelectProduct={handleSelectProduct}
        ctaLabel="Select in Quote Builder"
      />

      <StudioMediaGallery />
    </div>
  );
};

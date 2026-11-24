import React from "react";
import { ArrowUpRight } from "lucide-react";
import { CATALOG_ITEMS, CatalogItem } from "../data/catalogData";
import { ArtisanalImage } from "./ArtisanalImage";

interface CatalogGridProps {
  onSelectProduct: (item: CatalogItem) => void;
  ctaLabel?: string;
}

export const CatalogGrid: React.FC<CatalogGridProps> = ({
  onSelectProduct,
  ctaLabel = "Select in Quote Builder",
}) => {
  return (
    <section
      id="catalog"
      className="scroll-mt-28 bg-[#FAF6F0] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[3px] uppercase text-[#8B3A42]">
            Artisanal Offerings
          </p>
          <h2 className="mt-2.5 brand-font text-3xl font-medium text-[#2A1812] sm:text-4xl">
            Signature <span className="italic text-[#8B3A42]">Confectionery</span>
          </h2>
          <p className="mt-3 text-base leading-[1.75] text-[#644E46] font-light">
            Explore our six curated categories crafted in small batches—from
            customized name bars and floral dry-fruit discs to Kunafa bakes and
            zero-sugar protein laddus.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {CATALOG_ITEMS.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-[#B58938]/22 bg-[#FFFFFF] shadow-[0_12px_35px_rgba(42,24,18,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#B58938] hover:shadow-[0_20px_45px_rgba(42,24,18,0.12)]"
            >
              <ArtisanalImage
                src={item.imagePath}
                alt={item.imageAlt}
                title={item.title}
                filename={item.imageFilename}
                aspectClassName="aspect-[4/3]"
                roundedClassName="rounded-none"
                className="border-0 border-b border-[#B58938]/15"
              />

              <div className="flex flex-1 flex-col p-7">
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-[2px] uppercase text-[#8B3A42]">
                  <span className="tabular-nums">0{item.order}</span>
                  <span aria-hidden="true" className="text-[#7D5B1C]">
                    ·
                  </span>
                  <span>{item.shortCategory}</span>
                  {item.priceHighlight && (
                    <>
                      <span aria-hidden="true" className="text-[#7D5B1C]">
                        ·
                      </span>
                      <span className="tabular-nums text-[#7D5B1C]">
                        {item.priceHighlight}
                      </span>
                    </>
                  )}
                </div>

                <h3 className="mt-2.5 brand-font text-xl font-medium leading-snug text-[#2A1812]">
                  {item.title}
                </h3>

                <p className="mt-2.5 flex-1 text-sm leading-[1.75] text-[#644E46] font-light">
                  {item.description}
                </p>

                <div className="mt-6 border-t border-[#B58938]/20 pt-5">
                  <button
                    type="button"
                    onClick={() => onSelectProduct(item)}
                    className="btn-gold min-h-[44px] w-full justify-between px-5 py-2.5 text-[11px]"
                  >
                    <span>{ctaLabel}</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { ArrowRight, Building2, Gift, Sparkles } from "lucide-react";
import { BULK_SEGMENTS } from "../data/catalogData";

interface BulkGiftingSectionProps {
  onStartBulkQuote: (segmentName?: string) => void;
}

const getSegmentIcon = (id: string) => {
  switch (id) {
    case "weddings":
      return <Sparkles className="h-5 w-5 text-[#B58938]" aria-hidden="true" />;
    case "corporate":
      return <Building2 className="h-5 w-5 text-[#B58938]" aria-hidden="true" />;
    default:
      return <Gift className="h-5 w-5 text-[#B58938]" aria-hidden="true" />;
  }
};

export const BulkGiftingSection: React.FC<BulkGiftingSectionProps> = ({
  onStartBulkQuote,
}) => {
  return (
    <section
      id="corporate-bulk"
      className="scroll-mt-28 bg-[#2A1812] py-16 text-[#FAF6F0] sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[3px] uppercase text-[#B58938]">
              Wedding &amp; Corporate Bulk
            </p>
            <h2 className="mt-2.5 brand-font text-3xl font-medium text-[#FAF6F0] sm:text-4xl">
              Weddings, Corporate Milestones &amp;{" "}
              <span className="italic text-[#DFC896]">
                Boutique Retail Partners
              </span>
            </h2>
            <p className="mt-3 text-base leading-[1.75] text-[#FAF6F0]/80 font-light">
              MOQ 15+ units or 10+ curated boxes with negotiable volume rates.
              Serving studio pickup and local delivery in Bhopal alongside
              temperature-safe bulk orders across Madhya Pradesh.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onStartBulkQuote("Wedding / Corporate Bulk Order")}
            className="btn-gold min-h-[48px] shrink-0 px-7 py-3.5 whitespace-nowrap"
          >
            <span>Request Bulk Quote</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-3">
          {BULK_SEGMENTS.map((segment) => (
            <div
              key={segment.id}
              className="flex flex-col rounded-3xl border border-[#B58938]/25 bg-[#362018] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#B58938]"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#B58938]/40 bg-[#2A1812]">
                  {getSegmentIcon(segment.id)}
                </div>
                <span className="rounded-full bg-[#2A1812]/80 px-3.5 py-1 text-[11px] font-semibold tracking-wider uppercase text-[#DFC896] tabular-nums">
                  {segment.moqNote}
                </span>
              </div>

              <h3 className="mt-5 brand-font text-xl font-medium text-[#FAF6F0]">
                {segment.title}
              </h3>

              <p className="mt-1.5 text-xs font-medium tracking-wide text-[#DFC896]/90">
                {segment.occasions}
              </p>

              <p className="mt-3 flex-1 text-sm leading-[1.75] text-[#FAF6F0]/75 font-light">
                {segment.description}
              </p>

              <button
                type="button"
                onClick={() => onStartBulkQuote(segment.title)}
                className="mt-6 inline-flex min-h-[42px] items-center gap-2 self-start rounded-full border border-[#B58938]/40 px-4 py-2 text-xs font-medium tracking-wider uppercase text-[#DFC896] transition-colors hover:bg-[#B58938] hover:text-[#2A1812] cursor-pointer"
              >
                <span>Pre-fill {segment.title}</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

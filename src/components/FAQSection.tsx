import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "../data/catalogData";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-28 border-y border-[#B58938]/20 bg-[#F2EAE0] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[3px] uppercase text-[#8B3A42]">
            Good to Know
          </p>
          <h2
            id="faq-heading"
            className="mt-2.5 brand-font text-3xl font-medium text-[#2A1812] sm:text-4xl"
          >
            Frequently Asked{" "}
            <span className="italic text-[#8B3A42]">Questions</span>
          </h2>
          <p className="mt-3 text-base leading-[1.75] text-[#644E46] font-light">
            Everything you need to know about ordering, pickup, delivery, and
            custom gifting from our Bhopal atelier.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-[#B58938]/22 bg-[#FFFFFF] px-6 shadow-[0_12px_35px_rgba(42,24,18,0.06)] sm:px-8">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <div
                key={item.question}
                className="border-b border-[#B58938]/15 last:border-b-0"
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between gap-4 rounded-lg py-5 text-left transition-colors hover:text-[#8B3A42] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58938]"
                  >
                    <span className="brand-font text-lg font-medium leading-snug text-[#2A1812]">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#B58938] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 pr-9 text-base font-light leading-[1.8] text-[#644E46]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary CTA */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
          <Link to="/order" className="btn-gold px-7 py-3.5">
            <span>Start Your Custom Order</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <p className="text-sm font-light text-[#644E46]">
            Still have a question? Message us on WhatsApp at +91 76975 68715.
          </p>
        </div>
      </div>
    </section>
  );
};
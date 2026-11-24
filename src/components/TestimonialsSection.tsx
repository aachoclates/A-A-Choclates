import React from "react";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "../data/catalogData";

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="reviews"
      className="scroll-mt-28 border-y border-[#B58938]/20 bg-[#F2EAE0] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[3px] uppercase text-[#8B3A42]">
            Patron Testimonials
          </p>
          <h2 className="mt-2.5 brand-font text-3xl font-medium text-[#2A1812] sm:text-4xl">
            Words from Our{" "}
            <span className="italic text-[#8B3A42]">Happy Patrons</span>
          </h2>
          <p className="mt-3 text-base leading-[1.75] text-[#644E46] font-light">
            Discover what chocolate connoisseurs and families say about our
            small-batch confections and bespoke celebration hampers in Bhopal.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((review) => (
            <article
              key={review.id}
              className="flex flex-col justify-between rounded-3xl border border-[#B58938]/22 bg-[#FFFFFF] p-7 shadow-[0_12px_35px_rgba(42,24,18,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#B58938]"
            >
              <div>
                <div
                  className="flex items-center gap-1 text-[#B58938]"
                  role="img"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-4 w-4 fill-[#B58938] text-[#B58938]"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <blockquote className="mt-4 brand-font text-[15px] italic leading-[1.7] text-[#2A1812]">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
              </div>

              <div className="mt-6 border-t border-[#B58938]/20 pt-4">
                <p className="text-sm font-medium text-[#2A1812]">
                  {review.author}
                </p>
                <p className="mt-0.5 text-xs font-medium text-[#8B3A42]">
                  {review.occasion}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
